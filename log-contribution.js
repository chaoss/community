const fs = require('fs');

(async () => {
  try {
    const token = process.env.GITHUB_TOKEN;

    // Read the event payload directly from the runner environment
    const eventPayload = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf-8'));
    const issue = eventPayload.issue;
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
    const issueUrl = issue.html_url;

    if (issue.labels.some(label => label.name === 'contribution')) {
      const username = issue.user.login;

      // Log the issue body for debugging
      const issueBody = issue.body || "";
      console.log('Full Issue Body:', issueBody);

      // Default values
      let projectArea = "N/A";
      let dateCompleted = "N/A";
      let typeOfContribution = "N/A";

      // Split the issue body by lines, and filter out empty lines
      const lines = issueBody.split('\n').map(line => line.trim()).filter(line => line.length > 0);

      console.log('Processed lines:', lines);

      // Improved parsing logic
      lines.forEach((line, index) => {
        if (line.includes('Specify Area of Project')) {
          projectArea = lines[index + 1] ? lines[index + 1].trim() : "N/A";
          console.log('Extracted Project Area:', projectArea);
        }
        if (line.includes('Date of Completion')) {
          dateCompleted = lines[index + 1] ? lines[index + 1].trim() : "N/A";
          console.log('Extracted Date Completed:', dateCompleted);
        }
        if (line.includes('Specify the type of contribution')) {
          typeOfContribution = lines[index + 1] ? lines[index + 1].trim() : "N/A";
          console.log('Extracted Type of Contribution:', typeOfContribution);
        }
      });

      // Assume the task description comes from the issue title
      const taskCompleted = issue.title.replace('[Project]:', '').trim();

      // Create a hyperlink for the date pointing to the issue
      const dateLink = `[${dateCompleted}](${issueUrl})`;

      // Create a new row for the markdown table
      const newRow = `| @${username} | ${taskCompleted} | ${projectArea} | ${dateLink} | ${typeOfContribution} |\n`;

      const filePath = 'community-contributions.md';
      const fileContents = fs.readFileSync(filePath, 'utf-8');

      console.log('Original File Contents:');
      console.log(fileContents);

      // Ensure there is no extra space at the end of the table
      let updatedContents = fileContents.trim() + '\n';

      // Append the new row to the existing content
      updatedContents += newRow;

      fs.writeFileSync(filePath, updatedContents);

      console.log('New Row to Add:');
      console.log(newRow);

      console.log('Updated File Contents:');
      console.log(updatedContents);

      console.log(`New contribution added to ${filePath}`);

      // Attempt to close the issue after successfully adding the entry
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/issues/${issue.number}`,
          {
            method: 'PATCH',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/vnd.github+json',
              'X-GitHub-Api-Version': '2022-11-28',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ state: 'closed' })
          }
        );
        if (response.ok) {
          console.log(`Issue #${issue.number} closed successfully.`);
        } else {
          console.error(`Failed to close issue #${issue.number}: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Failed to close issue #${issue.number}.`, error);
      }
    } else {
      console.log('No "contribution" label found, skipping update.');
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
})();
