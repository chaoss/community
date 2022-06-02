---
description: How to contribute through development
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
