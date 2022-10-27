---
description: Development contribution
---
# Development

## 💾 Tech Stack

* **GrimoireLab**: Python, Vue.js, JavaScript/TypeScript, MySQL, Django, GraphQL.
* **Augur**: Python, Flask Vue.js, JavaScript/TypeScript, Jupyter.

## ✏ Technical Requirements

You'll need to have some basic programming experience with the technologies and tools we use.

### Tools

#### Git & GitHub
  Clone, commit and open a PR using Git and GitHub. Check out the following tutorials:
  * [Introduction to git](https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61/)
  * [Introduction to GitHub](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)
  * [Popular git commands and how to use them](https://rogerdudler.github.io/git-guide/)
  * [Git commands in-depth](https://medium.com/@george.seif94/a-full-tutorial-on-how-to-use-github-88466bac7d42)
  * [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
  * [Markdown Tutorial](https://www.markdowntutorial.com/)
  * [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)

### Languages and Frameworks

#### Python
  * [Python's official tutorial](https://docs.python.org/3/tutorial/index.html)
  * [Python's official style guide](https://www.python.org/dev/peps/pep-0008/)
  * [Python's best practices](https://gist.github.com/sloria/7001839)
  * [The Zen of Python](https://www.python.org/dev/peps/pep-0020/)

#### Flask
  * [Quickstart — Flask Documentation (2.0.x)](https://flask.palletsprojects.com/en/2.0.x/quickstart/)
  * [Flask - Full Stack Python](https://www.fullstackpython.com/flask.html)

#### Django
  * [Getting started with Django | Django](https://www.djangoproject.com/start/)
  * [Django Girls Tutorial](https://tutorial.djangogirls.org/en/)
  * [Django - Full Stack Python](https://www.fullstackpython.com/django.html)

#### Vue.js
  * [Introduction — Vue.js](https://vuejs.org/v2/guide/)

## 🏗 Project Structure

The CHAOSS community's projects have been divided in the following ways:

### GrimoireLab

* [**chaoss / grimoirelab**](https://github.com/chaoss/grimoirelab): The main repository for the GrimoireLab project, contains the information and details of all the tools.
* [**chaoss/grimoirelab-tutorial**](https://github.com/chaoss/grimoirelab-tutorial): Tutorial and guides for GrimoireLab.

* Data retrieval related components:
  * [**chaoss / grimoirelab-perceval**](https://github.com/chaoss/grimoirelab-perceval): Retrieval of data from data sources.
  * [**chaoss / grimoirelab-graal**](https://github.com/chaoss/grimoirelab-graal): Source data analysis with external tools.
  * [**chaoss / grimoirelab-kingarthur**](https://github.com/chaoss/grimoirelab-kingarthur): Batch processing for massive retrieval.
* Data enrichment related components:
  * [**chaoss / grimoirelab-elk**](https://github.com/chaoss/grimoirelab-elk): Storage and enrichment of data.
  * [**chaoss / grimoirelab-cereslib**](https://github.com/chaoss/grimoirelab-cereslib): Generic data processor.
  * [**chaoss / grimoirelab-sortinghat**](https://github.com/chaoss/grimoirelab-sortinghat): Identity management.
* Data consumption related components:
  * [**chaoss / grimoirelab-kibiter**](https://github.com/chaoss/grimoirelab-kibiter): Dashboard, downstream version of Kibana.
  * [**chaoss / grimoirelab-sigils**](https://github.com/chaoss/grimoirelab-sigils): Visualizations and dashboards.
  * [**chaoss / grimoirelab-kidash**](https://github.com/chaoss/grimoirelab-kidash): Visualizations and dashboards manager.
  * [**chaoss / grimoirelab-manuscripts**](https://github.com/chaoss/grimoirelab-manuscripts): Reporting.
* Platform management, orchestration, and common utils:
  * [**chaoss / grimoirelab-mordred**](https://github.com/chaoss/grimoirelab-mordred): Orchestration.
  * [**chaoss / grimoirelab-toolkit**](https://github.com/chaoss/grimoirelab-toolkit): Common utilities.
  * [**chaoss / grimoirelab-bestiary**](https://github.com/chaoss/grimoirelab-bestiary): Web-based user interface to manage repositories and projects for Mordred.

### Augur
  * [**chaoss / augur**](https://github.com/chaoss/augur): Augur is a tool for collecting and measuring structured data about [free](https://www.fsf.org/about/) and [open source](https://opensource.org/docs/osd) \(FOSS\) communities.
  * [**chaoss / augur-spdx**](https://github.com/chaoss/augur-spdx): Augur's Open Source License coverage tool. Provides license identification by file, identification of non-OSI compliant licenses, and percentage of a project with license declarations.
  * [**chaoss / augur-auggie**](https://github.com/chaoss/augur-auggie): Auggie implementation utilizing Amazon Lex to classify messages.
  * [**chaoss / augur-community-reports**](https://github.com/chaoss/augur-community-reports): A set of Jupyter Lab Notebooks and Other Implementations of Community Reports in Standard Form.

### Cregit
  * [**cregit / cregit**](https://github.com/cregit/cregit): Cregit is a framework of tools that facilitates the analysis and visualization of the evolution of source code stored in git repositories.


# Contributing Workflow

## 🤔 Contribution Approach

We love pull requests from everyone! We follow the standard Git workflow of **`fork`** 👉 **`change`** 👉 **`pull request`** 👉 **`merge`** 👉 **`update fork`** 👉 **`change`** ... **repeat forever**. If you are new to open source, we recommend GitHub's excellent guide on "[How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)". In addition, please feel free to reach out to any of the maintainers or other community members if you are struggling; we are here to help you learn!

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

After you have made the desired changes into your fork version of the repository, you are required to send the pull request with the description explaining your changes. [**Checkout Github guide to creating the Pull Request**](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

At this point, you're waiting on us. We like to at least comment on pull requests within three business days **and, typically, one business day**. Once one of our maintainers has had a chance to review your PR, we will either mark it as "needs review" and provide specific feedback on your changes, or we will go ahead and complete the pull request.

We require all commits to be signed off with a [Developer Certificate of Origin](https://developercertificate.org/) in accordance with the [CHAOSS charter](https://chaoss.community/about/charter/#user-content-8-intellectual-property-policy). This can be easily done by using the `-s` flag when using `git commit`. For example: `git commit -s -m "Update README.md"`. This can be automated by using a browser plugin like [DCO GitHub UI](https://github.com/scottrigby/dco-gh-ui).

**NOTE**: Any pull requests containing commits that are not signed off will not be eligible for merge until the commits have been signed off.
