# Ideas for Google Summer of Code projects

Interested in working with CHAOSS? Below are some project ideas. We describe how to apply to work with CHAOSS and how we select students on a different page: https://github.com/chaoss/governance/blob/master/GSoC-interest.md


## Idea: Advancing Risk Prediction With Machine Learning in Augur

Micro-tasks and place for questions [will add link later]

Currently Augur uses computational linguistics, dependency mapping, license scanning, topic modeling, social network analysis, and algorithms that target temporal changes in CHAOSS metrics. The aim of this project is to leverage and advance existing algorithms to make predictions and identify projects in large ecosystems that are at risk earlier. Our theory, for example, is that community decline or the increase in hostile communications is preceded by a decline in empathy, and changes in engagement level. This project will test those theories by directing Augur’s already rich set of AI tools to bear on this specific problem.  The goal of this project is to proactively identify at-risk open source communities: 

Pool the existing, six computational models for classifying repositories in open source ecosystems to provide a rich, and complete view of project categories and clusters within a define open source software ecosystem
From the categories identified, projects most at risk will be identified using analysis of each of the six models, and trained with data from projects that are known to have contributed to projects earlier. 

The aims will require working in a programming language to automate the task, use API to generate the graphs, and use some Graphic editor to prepare the pdf.

* _Difficulty:_ Medium
* _Requirements:_ Python programming, Graphic editor. 
* _Recommended:_ Experience with API, Email, GitHub, and Graphic editor program.
* _Mentors:_ Sean Goggins, Andrew Brain, Vinod Ahuja


## Idea: Build an expert system to provide recommendations to users in a user interface

Micro-tasks and place for questions [will add link later]

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


## Idea: Creating Automated Community Health Report using Augur and Cauldron software

Micro-tasks and place for questions [will add link later]

CHAOSS Community Report analyzes an open source project and prepares the report on some of the project's health metrics. This program was created to help open source projects assess the health of their project by looking at a few CHAOSS metrics and engaging with CHAOSS community to learn more about ways to measure the health of their project. The Community Reports are generated with the help of Augur and Cauldron software. 

Currently, the process of generating the report is manual.  In the current process, a requester submits the request on the CHAOSS website. Once the request is submitted, an automated email is sent to concerned stakeholders, who then prepare the graph from GrimoireLab and Augur software system and share it with other stakeholders. After the graphs are ready, a pdf file is prepared, and then sent to the requester. 

The goal of this project is to automate the entire system.  The aim of this project is as follows:
* Learning about automating a manual report generation process.
* Understanding the use of API.
* Formating the graphs either by modifying the API or using some graphic software
* Automating the pdf generation process
* Automating the email sending process.

The aims will require working in a programming language to automate the task, use API to generate the graphs, and use some Graphic editor to prepare the pdf.

* _Difficulty:_ Medium
* _Requirements:_ Python programming, Graphic editor. 
* _Recommended:_ Experience with API, Email, GitHub, and Graphic editor program.
* _Mentors:_ Vinod Ahuja, Kevin Lumbard, Matt Germonprez, Sean Goggins




## Idea: Extend data model and user interface to capture better information about contributors

Micro-tasks and place for questions [will add link later]

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

[Augur Contributor Worker](https://github.com/chaoss/augur) is the tool that reconciles identities in Augur, using information from Git Platforms, Git Logs, and voluntary mailing lists. The contributor worker is a tool that automatically scans all repository data collected by augur to resolve distinct individuals to all of the often 10 or more aliases they can be identified across different systems. 

The aims of the project are as follows:
  - Define a data model to store an organization's internal structure.
  - Implement methods to manage this information.
  - Integrate this information on the UI
  - (Extra stretch goal) Store organization aliases (e.g `Google` and `Google, LLC`). Also, 

* _Difficulty:_ Hard
* _Requirements:_ Interest in software analytics. Python programming. JavaScript programming. SQL knowledge. Willingness to understand GrimoireLab internals.
* _Recommended:_ Experience with Python, JavaScript, UI development, GraphQL, Django, and Vue.js would be convenient but can be learned during the project.
* _Mentors:_ Santi Duenas, Eva Millán, Miguel Ángel Fernández


## Idea: Implement user roles/permissions and OpenID

Micro-tasks and place for questions [will add link later]

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
 
Micro-tasks and place for questions [will add link later]
 
CHAOSS metrics are released twice a year. The metrics are currently displayed on the website - sorted by the working group that defined them: [https://chaoss.community/metrics/](https://chaoss.community/metrics/)

As more metrics are defined, the need for alternative display and categorization options is necessary to reduce the burden on the user to visualize the CHAOSS metrics in meaningful ways. Work on this project would require the student to work with the community to come up with different display and categorization options for CHAOSS metrics. For example, the CHAOSS project currently has initiatives around D&I Badging and Community Health reports. The metrics associated with these initiatives are one way that CHAOSS metrics may be categorized and displayed. 
 
The aims of the project are as follows:
* Research and ideate different metric display options and categorizations
* Build prototype navigation menus that allow the website visitors to explore different categories of metrics.
* Build prototype metrics web pages to display different metric categories.
 
The aims will require working with front end web development technologies and WordPress to build prototype navigation and metrics page displays.
 
* _Difficulty:_ Low
* _Requirements:_ Interest in front-end web development
* _Recommended:_ Experience with HTML, CSS, JavaScript, and GitHub Markdown
* _Mentors:_ Kevin Lumbard,  Matt Germonprez
 
 
## Idea: Automate Metrics Release Process
 
Micro-tasks and place for questions [will add link later]

CHAOSS metrics are released twice a year. The metrics are currently displayed on the website - sorted by the working group that captured and defined them: [https://chaoss.community/metrics/](https://chaoss.community/metrics/)

The official CHAOSS Metrics Release is captured in pdf form at the time of the release by printing each metric page as a PDF and combining them manually. The website pulls in the metrics from Markdown files in the working group GitHub repositories. It would be great if the PDF could be automatically generated from the Markdown files without having to manually PDF print the website pages.
 
The aims of the project are as follows:
* Automate the creation of the metrics release PDF from Github Markdown files
* Automate the creation of the translated metrics release PDF (Chinese and Spanish) from Github Markdown files
 
The aims will require working in a programming language to automate the task. We are open to suggestions about how to achieve this because we do not have any pre-existing automation in place.
 
* _Difficulty:_ Medium
* _Requirements:_ GitHub, git, Markdown, PDF, automation experience
* _Recommended:_ Prior experience with automatic PDF document generation
* _Mentors:_ Kevin Lumbard,  Matt Germonprez, Georg Link
