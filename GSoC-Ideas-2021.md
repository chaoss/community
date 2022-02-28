# Ideas for Google Summer of Code projects

Interested in working with CHAOSS? Below are some project ideas. We describe how to apply to work with CHAOSS and how we select students on a different page: https://github.com/chaoss/governance/blob/master/GSoC-interest.md

----

## Idea: Advancing Risk Prediction With Machine Learning in Augur

[Micro-tasks and place for questions]( https://github.com/chaoss/augur/issues/1179 )

Currently Augur uses computational linguistics, dependency mapping, license scanning, topic modeling, social network analysis, and algorithms that target temporal changes in CHAOSS metrics. The aim of this project is to leverage and advance existing algorithms to make predictions and identify projects in large ecosystems that are at risk earlier. Our theory, for example, is that community decline or the increase in hostile communications is preceded by a decline in empathy, and changes in engagement level. This project will test those theories by directing Augur’s already rich set of AI tools to bear on this specific problem.  The goal of this project is to proactively identify at-risk open source communities:

Pool the existing, six computational models for classifying repositories in open source ecosystems to provide a rich, and complete view of project categories and clusters within a define open source software ecosystem
From the categories identified, projects most at risk will be identified using analysis of each of the six models, and trained with data from projects that are known to have contributed to projects earlier.

The aims of the project are as follows:
  - Identify projects with similar styles and characteristics automatically.
  - Recommend projects based on individual developer styles and skills.
  - Increase awareness of open source project ecosystems, and their component projects.

The aims will require working in a programming language to automate the task, use API to generate the graphs, and use some Graphic editor to prepare the pdf.

* _Difficulty:_ Medium
* _Requirements:_ Python programming experience, or a strong interest.
* _Recommended:_ Experience with accessing API's, writing SQL, and a strong interest in Machine Learning.
* _Mentors:_ Sean Goggins, Andrew Brain, Vinod Ahuja


## Idea: Build an expert system to provide recommendations to users in a user interface

[Micro-tasks and place for questions](https://github.com/chaoss/grimoirelab/issues/414)

The new version of SortingHat includes a basic recommender system. It guesses about what identities could be the same, or what identities work for which companies. This information might not be useful for the end user and it isn't available on the UI, thought. This project idea is about improving the recommender system to an expert system that provides useful recommendations to users.

[SortingHat](https://github.com/chaoss/grimoirelab-sortinghat) is the tool that
we use to manage identities data in [GrimoireLab](https://chaoss.github.io/grimoirelab].
As individuals in a project can have different identities - several usernames or email
addresses - this tool allows to create unified profiles of them. Then, the platform
will use this information to generate accurate results of the activity of these
participants.

SortingHat started as a command line tool but after some years, we saw its potential
and we decided to create a new version, this time as a service. This new version
provides a new GraphQL API to operate with the server and a UI web-based app, that
replaces Hatstall, the old UI for SortingHat.

Although the development of it is on its later stage and it will be ready soon for the
stable version of the platform, there are many good ideas that we will like to
incorporate. Some of them were selected for GSoC 2021.

The aims of the project are as follows:
  - Identify useful recommendations for the end-user.
  - Implement new recommendations.
  - Integrate recommendations on the UI.

The aims will require generating code in **Python** for **Django** and the **GraphQL API**, and for the web app (generated with **Vue.js** and **Vuetify**).

* _Difficulty:_ Hard
* _Requirements:_ Interest in software analytics. Python programming. JavaScript programming. SQL knowledge. Willingness to understand GrimoireLab internals.
* _Recommended:_ Experience with Python, JavaScript, UI development, GraphQL, Django, and Vue.js would be convenient but can be learned during the project.
* _Mentors:_ Santi Duenas, Eva Millán, Miguel Ángel Fernández

## Idea: Automatically identify Contributor Aliases (emails, platform user accounts) to Increase Parsimony of Statistics and Metrics With Privacy Enhancement

[Micro-tasks and place for questions]( https://github.com/chaoss/augur/issues/1180 )

This project will generalize, and make available through a PyPy distributable Python package the core functionality currently within the Augur contributor worker, and envisioned as the next phase of the Augur contributor worker. A worker is a data collection, machine learning, notification, or mapping daemon that can be managed by Augur for comprehensive data analysis, or installed independently.

[Augur Contributor Worker](https://github.com/chaoss/augur) is the tool that reconciles identities in Augur, using information from Git Platforms, Git Logs, and voluntary mailing lists. The contributor worker is a tool that automatically scans all repository data collected by augur to resolve distinct individuals to all of the often 10 or more aliases they can be identified across different systems.

The aims of the project are as follows:
  - Construct an API Accessible Graph Database for identifying and mapping contributors who use multiple email addresses within a platform, and identifiers across platforms.
  - Implement methods to manage this information.
  - Integrate this information into clearer, more parsimonious CHAOSS metrics.
  - Automate the management of contributor changes over time
  - Enable analysis at the project level that obscures or anonymizes individual developer identity


* _Difficulty:_ Medium
* _Requirements:_ Interest in software analytics. Python programming. JavaScript programming. SQL knowledge.
* _Recommended:_ Experience with Python
* _Mentors:_ Sean Goggins, Andrew Brain, John McGinnis


## Idea: Develop a Shared Data Resource Focused on Dependencies, Risk and Vulnerabilities in Open Source Software

[Micro-tasks and place for questions]( https://github.com/chaoss/augur/issues/1181 )

The aim of this work is to understand the code based dependencies embedded within a piece of open source software. This metric explicitly excludes infrastructure focused dependencies like databases, and operating systems, which are defined in the “upstream infrastructure dependencies” metric.

**Objectives**
 - This software project is aimed at understanding the language level, non-infrastructure packages, and other software which are required to run a piece of software in build, test, and runtime environments.
 - What libraries or versions does my project explicitly depend on?
 - What libraries or versions does my project implicitly depend on?
 - Consolidate dependency information from the range of projects focused in this area.
 - Provide a shared, open source software package for consolidating a subset of available resources (we don't expect one student to finish this entire project in a summer)
 - Integrate this information on the CHAOSS Website

**Implementation**
The expectation is that this would be implemented by using existing tools that examine package manager data for the languages in use (e.g., package.json for JavaScript npm, pyproject.toml / requirements.txt for Python, Gemfile / Gemfile.lock for Ruby). Ergo, dependencies will be analyzed using the project’s dependency file.
This will be analyzed using dependency file in the project.

Note: C/C++ generally **do not** use system package managers. Things get more complex with multiple languages, insofar as several language specific dependency files will need to be scanned.

Micro-tasks and place for questions https://github.com/chaoss/augur/issues/1181

[Augur ](https://github.com/chaoss/augur) would be the tool that this is ultimately implemented in, although only as an accessed, shared data resources including informaiton form other tools, including:

**Resource	Link**
 - Scorecard	https://github.com/ossf/scorecard
 - Dependency Check	https://owasp.org/www-project-dependency-check/
 - Proactive Error Detection in Software	https://github.com/google/oss-fuzz
 - High Severity Vulnerability Detection	https://github.com/google/tsunami-security-scanner
 - Kubernetes focused supply chain security	https://github.com/grafeas/kritis
 - Verification from source to binary	https://reproducible-builds.org/
 - Dependency Check (Relies on Common Platform Enumeration (CPE)	https://owasp.org/www-project-dependency-check/
 - Securing Critical Projects OSSF Working Group	https://docs.google.com/document/d/1MIXxadtWsaROpFcJnBtYnQPoyzTCIDhd0IGV8PIV0mQ/edit
 - Preventing Supply Chain Attacks	https://www.linuxfoundation.org/en/blog/preventing-supply-chain-attacks-like-solarwinds/
 - Security Threats OSSF Working Group
 - Best Practices OSSF Working Group
 - National Vulnerabilities Database	https://nvd.nist.gov/vuln/full-listing/2021/1
 - 	https://nvd.nist.gov/vuln/data-feeds#JSON_FEED
 - Libyears	https://github.com/nasirhjafri/libyear  &  https://github.com/sesh/piprot
 - Census II	https://drive.google.com/file/d/1zyAdbftGhSUiddh1she3X_MDlKXDSIu5/view?usp=sharing
 - 2021 State of Open Source Vulnerabilities	https://drive.google.com/file/d/1BwJD3eqynwSms5b9WxzzHrzp-YRXMbLv/view?usp=sharing


* _Difficulty:_ Medium
* _Requirements:_ Interest in software analytics. Python programming. JavaScript programming. SQL knowledge.
* _Recommended:_ Experience with Python
* _Mentors:_ Sean Goggins, CHAOSS Risk Working Group, Vinod Ahuja


## Idea: Extend data model and user interface to capture better information about contributors

[Micro-tasks and place for questions](https://github.com/chaoss/grimoirelab/issues/415)

The information stored about Organizations is very basic. For each organization only
its name and domains (e.g `example.com`) are stored. Organizations might have
hierarchical structures composed by several groups, areas, and departments, where
employees work for. We would like to be able to track all these information

[SortingHat](https://github.com/chaoss/grimoirelab-sortinghat) is the tool that
we use to manage identities data in [GrimoireLab](https://chaoss.github.io/grimoirelab].
As individuals in a project can have different identities - several usernames or email
addresses - this tool allows to create unified profiles of them. Then, the platform
will use this information to generate accurate results of the activity of these
participants.

SortingHat started as a command line tool but after some years, we saw its potential
and we decided to create a new version, this time as a service. This new version
provides a new GraphQL API to operate with the server and a UI web-based app, that
replaces Hatstall, the old UI for SortingHat.

Although the development of it is on its later stage and it will be ready soon for the
stable version of the platform, there are many good ideas that we will like to
incorporate. Some of them were selected for GSoC 2021.

The aims of the project are as follows:
  - Define a data model to store an organization's internal structure.
  - Implement methods to manage this information.
  - Integrate this information on the UI
  - (Extra stretch goal) Store organization aliases (e.g `Google` and `Google, LLC`).

* _Difficulty:_ Hard
* _Requirements:_ Interest in software analytics. Python programming. JavaScript programming. SQL knowledge. Willingness to understand GrimoireLab internals.
* _Recommended:_ Experience with Python, JavaScript, UI development, GraphQL, Django, and Vue.js would be convenient but can be learned during the project.
* _Mentors:_ Santi Duenas, Eva Millán, Miguel Ángel Fernández


## Idea: Implement user roles/permissions and OpenID

[Micro-tasks and place for questions](https://github.com/chaoss/grimoirelab/issues/416)

Right now, SortingHat only supports one type of user: the admin user. We would like to
have different roles, so basic users don't have all the rights to do evil things when
using the service. Additionally, we want to integrate [OpenID](https://openid.net/)as
a secure protocol for users to sign-in.

[SortingHat](https://github.com/chaoss/grimoirelab-sortinghat) is the tool that
we use to manage identities data in [GrimoireLab](https://chaoss.github.io/grimoirelab].
As individuals in a project can have different identities - several usernames or email
addresses - this tool allows to create unified profiles of them. Then, the platform
will use this information to generate accurate results of the activity of these
participants.

SortingHat started as a command line tool but after some years, we saw its potential
and we decided to create a new version, this time as a service. This new version
provides a new GraphQL API to operate with the server and a UI web-based app, that
replaces Hatstall, the old UI for SortingHat.

Although the development of it is on its later stage and it will be ready soon for the
stable version of the platform, there are many good ideas that we will like to
incorporate. Some of them were selected for GSoC 2021.

The aims will require working with:

  - Identify and define roles for SortingHat.
  - Implement permissions for the different kinds of roles.
  - Add support for OpenID.
  - (Extra stretch goal)  Roles and user management using the UI.

* _Difficulty:_ Medium
* _Requirements:_ Interest in software analytics. Python programming. JavaScript programming. SQL knowledge. Willingness to understand GrimoireLab internals.
* _Recommended:_ Experience with Python, JavaScript, UI development, GraphQL, Django, and Vue.js would be convenient but can be learned during the project.
* _Mentors:_ Santi Duenas, Eva Millán,  Miguel Ángel Fernández


## Idea: Build Prototype Metric Display Options on CHAOSS Website

[Micro-tasks and place for questions]( https://github.com/chaoss/website/issues/536 )

CHAOSS metrics are released twice a year. The metrics are currently displayed on the website - sorted by the working group that defined them: [https://chaoss.community/metrics/](https://chaoss.community/metrics/)

As more metrics are defined, the need for alternative display and categorization options is necessary to reduce the burden on the user to visualize the CHAOSS metrics in meaningful ways. See open issue 466 (https://github.com/chaoss/website/issues/466). Work on this project would require the student to work with the community to come up with different display and categorization options for CHAOSS metrics. For example, the CHAOSS project currently has initiatives around D&I Badging and Community Health reports. The metrics associated with these initiatives are one way that CHAOSS metrics may be categorized and displayed.

The aims of the project are as follows:
* Research and ideate different metric display options and categorizations
* Build prototype navigation menus that allow the website visitors to explore different categories of metrics.
* Build prototype metrics web pages to display different metric categories.
* Suggest a workflow to publish metrics from the working groups in this new website design.

The aims will require working with front end web development technologies and WordPress to build prototype navigation and metrics page displays.

* _Difficulty:_ Low
* _Requirements:_ Interest in front-end web development
* _Recommended:_ Experience with HTML, CSS, JavaScript, and GitHub Markdown
* _Mentors:_ Kevin Lumbard,  Matt Germonprez, and Jaskirat Singh


## Idea: Automate Metrics Release and Process Improvement

[Micro-tasks and place for questions]( https://github.com/chaoss/website/issues/537 )

CHAOSS metrics are released twice a year. The metrics are currently displayed on the website - sorted by the working group that captured and defined them: [https://chaoss.community/metrics/](https://chaoss.community/metrics/)

The official CHAOSS Metrics Release is captured in pdf form at the time of the release by printing each metric page as a PDF and combining them manually. The workflow is described in our handbook. The website pulls in the metrics from Markdown files in the working group GitHub repositories. It would be great if the PDF could be automatically generated from the Markdown files without having to manually PDF print the website pages.

The aims of the project are as follows:  
* Analyze the metrics release process and propose process improvements.  
* Automate the creation of the metrics release PDF from Github Markdown files (Separate PDFs for English and translations).  

The aims will require working in a programming language to automate the task. We are open to suggestions about how to achieve this because we do not have any pre-existing automation in place.

* _Difficulty:_ Medium
* _Requirements:_ GitHub, git, Markdown, PDF, automation experience
* _Recommended:_ Prior experience with automatic PDF document generation
* _Mentors:_ Kevin Lumbard,  Matt Germonprez, Georg Link


