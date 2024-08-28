const fs = require('fs');
const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
  try {
    const token = process.env.GITHUB_TOKEN;
    const octokit = github.getOctokit(token);

    const { context } = github;
    const { issue } = context.payload;

    if (issue.labels.some(label => label.name === 'contribution')) {
      const username = issue.user.login;

      // Log the issue body for debugging
      const issueBody = issue.body || "";
      console.log('Full Issue Body:', issueBody);

      // Default values
      let projectArea = "N/A";
      let dateCompleted = "N/A";
      let typeOfContribution = "N/A";

      // Improved parsing logic with more robust regex
      const projectAreaMatch = issueBody.match(/Specify Area of Project \(1 - 5 words\):?\n+\s*(.*)/);
      const dateCompletedMatch = issueBody.match(/Date of Completion:?\n+\s*(.*)/);
      const typeOfContributionMatch = issueBody.match(/Specify the type of contribution \(e\.g\., Documentation, Community Building, etc\.\):?\n+\s*(.*)/);

      if (projectAreaMatch) {
        projectArea = projectAreaMatch[1].trim();
        console.log('Project Area:', projectArea);
      } else {
        console.log('Project Area not found.');
      }

      if (dateCompletedMatch) {
        dateCompleted = dateCompletedMatch[1].trim();
        console.log('Date Completed:', dateCompleted);
      } else {
        console.log('Date Completed not found.');
      }

      if (typeOfContributionMatch) {
        typeOfContribution = typeOfContributionMatch[1].trim();
        console.log('Type of Contribution:', typeOfContribution);
      } else {
        console.log('Type of Contribution not found.');
      }

      // Assume the task description comes from the issue title
      const taskCompleted = issue.title.replace('[Project]:', '').trim();

      // Create a new row for the markdown table
      const newRow = `| @${username} | ${taskCompleted} | ${projectArea} | ${dateCompleted} | ${typeOfContribution} |\n`;

      const filePath = 'community-contributions.md';
      const fileContents = fs.readFileSync(filePath, 'utf-8');

      console.log('Original File Contents:');
      console.log(fileContents);

      // Append the new row to the existing content
      const updatedContents = fileContents + newRow;

      fs.writeFileSync(filePath, updatedContents);

      console.log('New Row to Add:');
      console.log(newRow);

      console.log('Updated File Contents:');
      console.log(updatedContents);

      console.log(`New contribution added to ${filePath}`);
    } else {
      console.log('No "contribution" label found, skipping update.');
    }
  } catch (error) {
    core.setFailed(error.message);
  }
})();
