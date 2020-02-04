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

## Idea: (Blockchain) : Open Source Health and Sustainability SSO Implementation with Hyperledger/Indy and OAUTH 
[ Micro-tasks and place for questions ](https://github.com/chaoss/augur/issues/545)

Augur is an open source platform that systematically integrates data from several open source repositories, issue trackers, mailing lists, and other communication systems that open source projects rely on to create a highly structured (relational and graph databases), consistent, and validated collection of open source health and sustainability data. Hundreds of highly specialized data requests are implemented in Augur's API, data and visualizations are pushed to Augur users, and the results of one user request benefits the whole community. 

As the size and scope of projects with rich analytical data grows, the need to protect the privacy and anonymity of individuals working in open source software is a rising concern. Implementation of a block chain technology for single sign on (SSO) for different collections of data is one mechanism for enabling comparisons, analysis and typologies for open source projects, making these growing, rich data sets more useful for developers, community managers, open source program officers, industry leaders and other stakeholders. This project promises close collaboration with individuals in open source journalism, open data efforts, and others with an interest in protecting individual privacy rights. Its also a unique and exciting path to work with blockchain technology on a team focused on its use for SSO. 

The aims of the project are as follows:
* Understand the core augur access and entitlements structure.
* Understand blockchain technology generally.
* Work with leading blockchain developers at the Linux Foundation
* Implement a blockchain SSO at scale, working with a team. 

_Difficulty:_ Medium
* _Requirements:_ Some Python programming experience, an interest in blockchain technology, SSO, a willingness to understand Augur's internals, and a willingness to learn about HyperLedger/Indy
* _Recommended:_ Experience with blockchain technologies, Flask, requests, and PostgreSQL are 'nice to have', but also could be learned in the execution of the project
* _Mentors:_ Sean Goggins, Matt Germonprez



## Idea: TBD
