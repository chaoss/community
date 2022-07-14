---
description: General contributing Workflow
---

# Contributing Workflow

## 🤔 Contribution Approach

We love pull requests from everyone! We follow the standard Git workflow of **`fork`** 👉 **`change`** 👉 **`pull request`** 👉 **`merge`** 👉 **`update fork`** 👉**`change`** ... \(**repeat forever**\). If you are new to open source, we recommend GitHub's excellent guide on "[How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)". In addition, please feel free to reach out to any of the maintainers or other community members if you are struggling; we are here to help you learn!

Before getting started, please make sure you've read the **README** of the respective project repository to get a primer on our project.

## 💡 Opening an Issue

If you're experiencing an issue with any project or have a question you'd like help answering, please feel free to open an issue in the respective repository of the project. To help us prevent duplicates, we kindly ask that you briefly search for your problem or question in our issues before opening a new one.

Please note that if you open a bug report and your issue does not follow our template, we cannot help you until you have provided us all the relevant information in that format. Respectfully, we do not have the time to try and recreate an error given with minimal or no context, so by providing this information you are helping us help you! You will see this template when you open an issue; click on "Bug Report" and it will be populated with descriptions of what to put in each section. Replace the descriptions with your comments to the best of your ability, and please include screenshots and error logs if applicable.

## 💻 Contributing to Source Code

### Forking

You are required to fork the repository on your Github. Follow the [**guidelines by GitHub**](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) in order to understand the steps to fork any repository

### Cloning

You should clone your fork. This step is needed only once. Using [**augur**](https://github.com/chaoss/augur) as an example below;

```text
$ git clone github.com:your-username/augur.git
$ cd augur/
```

### Making Commits

This is the step where you make desired changes to the codebase inside the respective repository.

Writing a well-crafted Git commit message is the best way to communicate context about a change to fellow developers. Seven rules of a great Git commit message are mentioned in [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/).

### Sending Pull Request

After you have made the desired changes into your fork version of the repository, you are required to send the pull request with the description explaining your changes. [**Checkout Github guide to creating the Pull Request**](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)\*\*\*\*

At this point, you're waiting on us. We like to at least comment on pull requests within three business days \(and, typically, one business day\). Once one of our maintainers has had a chance to review your PR, we will either mark it as "needs review" and provide specific feedback on your changes, or we will go ahead and complete the pull request.

We require all commits to be signed off with a [Developer Certificate of Origin](https://developercertificate.org/) in accordance with the [CHAOSS charter](https://chaoss.community/about/charter/#user-content-8-intellectual-property-policy). This can be easily done by using the `-s` flag when using `git commit`. For example: `git commit -s -m "Update README.md"`. This can be automated by using a browser plugin like [DCO GitHub UI](https://github.com/scottrigby/dco-gh-ui).

**NOTE**: Any pull requests containing commits that are not signed off will not be eligible for merge until the commits have been signed off.
