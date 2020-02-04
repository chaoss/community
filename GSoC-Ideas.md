# Ideas for Google Summer of Code projects

## Idea: Machine Learning for Anomaly Detection in Open Source Communities

[ Micro-tasks and place for questions ](https://github.com/chaoss/augur/issues/545)

Augur is an open source platform that systematically integrates data from several open source repositories, issue trackers, mailing lists, and other communication systems that open source projects rely on to create a highly structured (relational and graph databases), consistent, and validated collection of open source health and sustainability data. Hundreds of highly specialized data requests are implemented in Augur's API, data and visualizations are pushed to Augur users, and the results of one user request benefits the whole community. 

The volume of activity across all dimensions of open source makes the identification of significant changes both labor intensive and impractical. By connecting Augur's "insight worker" to its "push notification" architecture, and related pages that allow exploration of identified anomalies, open source companies, community managers, and contributors will be in a better position to identify community or technology issues quickly.  

The aims of the project are as follows:
* Understand the core augur engine, database, dashboard, and push notifier.
* Understand the types of anomalies that are both detectable from trace data, and provide useful signals.
* Design an approach that enables user friendly, easy tuning of notification volume, urgency, and utility that is personalized for each user. 
* Implementing the software with data from the approximately 100,000 open source software repositories currently analyzed using Augur


_Difficulty:_ Medium
* _Requirements:_ Python programming. Interest in machine learning. Willingness to understand Augur's internals.
* _Recommended:_ Experience with Flask, Scikitlearn, and Pytorch are 'nice to have', but also could be learned in the execution of the project.
* _Mentors:_ Sean Goggins, Matt Germonprez

## Idea: Implementation of GitLab Data Collection Workers 
[ Micro-tasks and place for questions ](https://github.com/chaoss/augur/issues/545)

Augur is an open source platform that systematically integrates data from several open source repositories, issue trackers, mailing lists, and other communication systems that open source projects rely on to create a highly structured (relational and graph databases), consistent, and validated collection of open source health and sustainability data. Hundreds of highly specialized data requests are implemented in Augur's API, data and visualizations are pushed to Augur users, and the results of one user request benefits the whole community. 

One of Augur's greatest strengths is its highly structured and unified ecosystem data model. This data drives all of the metrics and visualizations that are provided, and is of vital importance to the people maintaining open source projects. Of course, that data has to be gathered somehow, which is where the data collection workers come in. Each worker is responsible for gathering, transforming, and storing data related to a particular project from a particular data source. Building a GitLab data collection worker will enable Augur to collect data about commits, issues, contributors, and PRs from a large number of open source projects that live on GitLab.

The aims of the project are as follows:
* Understand the core augur engine, database, and data collection process.
* Understand GitLab's internal data model in order to extract the necessary data.
* Understand best practices for collecting data reliably at scale. 
* Implementing the software with data from the approximately 100,000 open source software repositories currently analyzed using Augur

_Difficulty:_ Medium
* _Requirements:_ Some Python programming experience, an interest in data science, willingness to understand Augur's internals
* _Recommended:_ Experience with Flask, requests, and PostgreSQL are 'nice to have', but also could be learned in the execution of the project
* _Mentors:_ Sean Goggins, Matt Germonprez


## Idea: Enhancing ELK functionalities

[ Micro-tasks and place for questions ](https://github.com/chaoss/grimoirelab/issues/285)

GrimoireLab allows to produce analytics with data extracted from more than 30 tools related with contributing to Open Source development such as version control systems, issue trackers and forums. A common execution of GrimoireLab consists in collecting data from a given repository, processing and enriching the data obtained and finally visualizing it on dynamic Web dashboards. At the core of this process there is ELK, which is in charge of integrating the data finally shown on the dashboards.

The evolution of GrimoireLab requires now to reshape some of the functionalities provided by ELK to improve its maintainability. This project idea is about refactoring and redesigning the core of ELK.

The aims of the project are as follows:
* Understanding the GrimoireLab components (Perceval, ELK, Mordred) and the corresponding tool-chain.
* Replacing low-level libraries (e.g., requests) with popular ones used to interact with ElasticSearch.
* Enabling the correct working of ELK for different version of ElasticSearch (>=6.1) and Open Distro for ElasticSearch (>= 0.9.0).
* Reorganizing part of the ELK logic into coherent packages.
* Improving the processing of Perceval data.

The aims will require working with Python, ELK and the ElasticSearch database.

* _Difficulty:_ Medium
* _Requirements:_ Python programming. Interest in software analytics. Willingness to understand GrimoireLab internals.
* _Recommended:_ Experience with ElasticSearch and Pandas would be convenient, but can be learned during the project.
* _Mentors:_ @sduenas, @valeriocos, @zhquan


## Idea: Enabling the reuse of CHAOSS metrics using Kibana-based dashboards

[ Micro-tasks and place for questions ](https://github.com/chaoss/grimoirelab/issues/286)

GrimoireLab is a powerful toolset for software development analytics. It is able to collect, process and visualize data from a large plethora of tools and platforms used in software development. The data obtained is stored in ElasticSearch and shown via web-based dashboards built on top of Kibana. Predefined dashboards are provided by GrimoireLab, however each user can easily create their own ones to address specific needs, such as the implementation of CHAOSS metrics. 

In the current stage, GrimoireLab doesn't provide an approach to share custom dashboards, thus limiting the end-user capabilities. This project idea is about implementing such an approach.

The aims of the project are as follows:
* Understanding the GrimoireLab components (Perceval, ELK, Mordred, Sigils and Kidash) and the corresponding tool-chain.
* Understanding the Kibana API to be able to download and upload visualizations and dashboards.
* Implementing an approach to simplify the management of visualizations and dashboards.
* Refactoring ELK and Mordred to remove the the logic currently used to manage the dashboards. 

Other aims, such as enhancing Kidash or other components to support the implementation of the approach are completely within scope.

* _Difficulty:_ Medium
* _Requirements:_ Python programming. Interest in software analytics. Willingness to understand GrimoireLab internals.
* _Recommended:_ Experience with ElasticSearch and Kibana would be convenient, but can be learned during the project.
* _Mentors:_ @alpgarcia, @sduenas, @valeriocos

## Idea: Support for Quality Models based on CHAOSS metrics

[ Micro-tasks and place for questions ](https://github.com/chaoss/grimoirelab/issues/287)

GrimoireLab is a powerful open source platform that provides support for monitoring and in-depth analysis of software projects. It produces a rich set of dashboards, which can be easily inspected by decision makers to help them understanding the evolution and health of their projects. Despite the large set of dashboards available in GrimoireLab, comparing projects between each others is not straightforward since it requires navigating and drilling down the data in different dashboards.

Prosoul is a web application that empowers decision makers with the means to create and manage their own quality models, which are useful means to evaluate and compare software projects. This project idea is about supporting the definition of Quality Models using GrimoireLab data and Prosoul.

The aims of the project are as follows:
* Understanding the GrimoireLab components (Perceval, ELK, Mordred) and the corresponding tool-chain.
* Understanding the overall approach of Prosoul.
* Designing an approach to shape GrimoireLab data in a format that can be easily consumed by Prosoul.
* Implementing the approach with GrimoireLab data obtained from git, github, mailing lists repositories to obtain simple quality models.
* Improving the Prosoul UI to simplify the management of quality models.

The aims will require working with Python, Django and ElasticSearch.

* _Difficulty:_ Medium
* _Requirements:_ Python programming. Interest in software analytics. Willingness to understand GrimoireLab internals.
* _Recommended:_ Experience with ElasticSearch and Django would be convenient, but can be learned during the project.
* _Mentors:_ @dlumbrer, @sduenas, @valeriocos
