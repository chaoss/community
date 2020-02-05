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

* _Difficulty:_ Medium
* _Requirements:_ Some Python programming experience, an interest in data science, willingness to understand Augur's internals
* _Recommended:_ Experience with Flask, requests, and PostgreSQL are 'nice to have', but also could be learned in the execution of the project
* _Mentors:_ Sean Goggins, Matt Germonprez


## Idea: Implement the Social Currencyy Metrics System in Grimoire Labs

[ Micro-tasks and place for questions ](https://github.com/chaoss/augur/issues/545)

The Social Currency Metrics System (SCMS) is a qualitative data collection, processing, and measurement system that augments quantitative community management metrics already available in CHAOSS properties. Implementing the SCMS will ultimately help community leaders, power users, and other stakeholders leverage qualitative data for social listening so that they can rely less on the behaviors quantitative data tracks and more on community sentiment. The SCMS empowers community leaders to make decisions based on what community members freely share about their opinions, wants, and needs.

The SCMS shows why trends occur and identifies commonly missed pitfalls in conclusions taken from quantitative data. With an SCMS platform built natively into a CHAOSS Bitergia property, open-source communities can use it to facilitate members’ input in decisions essential to community health.

The purpose of this project is to: 
Build the SCMS in one of CHAOSS project’s systems that collects qualitative data from several channels, displays that information for manipulation and tagging, and outputs it to a metric dashboard such as the SCMS information page found here. 

The aims of this project are to:
* Create an API that collects and returns data collected from a community of the GSoC participants’ choice.
* Gain familiarity with and create a way to grade, tag, and process large amounts of data.  
* Develop creative ways to display complex datasets in the Bitergia Analytics System.
* Investigate ways to process qualitative data at scale using AI or similar technology.
* Encourage the larger development of social listening tools based on qualitative data.

_Difficulty:_ Medium to Hard based on the level of implementation (machine learning).

_Requirements:_ Python programming. Interest in machine learning. API Development some understanding of the social scientific process and qualitative data analysis

_Recommended:_ Other API languages, interest in science of community management and anthropological studies of online worlds, willingness to learn CHAOSS Property Structures

 _Mentors:_  Dylan Marcy (SociallyConstructed.Online), Venia Logan (SociallyConstructed.Online), Valereo (Grimoire Labs), Georg (Advising only)
