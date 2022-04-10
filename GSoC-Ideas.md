# Ideas for Google Summer of Code projects

Interested in working with CHAOSS? Below are some project ideas. We describe how to apply to work with CHAOSS and how we select students on a different page: https://github.com/chaoss/governance/blob/master/GSoC-interest.md

----

## Idea: Improve the CHAOSS DEI Event Badging Review Bot

**Hours: 175**

[Micro-tasks and place for questions](https://github.com/badging/event-diversity-and-inclusion/issues/134)

  The CHAOSS DEI Badging Initiative has been providing badges to event organizers who implement valid DEI practices into their events. The badge is used as a reward system for events with inclusive and welcoming environments. In each review, the Badging Initiative uses a badging-bot to automate some of the processes that help an applicant earn their event badge.
  The idea of this mentorship is to learn about CHAOSS DEI Badging and its badging bot, then improve the processes and operation of the badging-bot. This may include working on learning the existing code as well as with algorithms and cross-file references in Javascript. The GSoC student may also be expected to deploy the improvements to the bot on GitHub.

The aims of the project are as follows:
  - Clean up and document current badging-bot code and processes
  - Migrate the badging-bot to a new platform
  - Time permitting, integrate a reviewer assignment algorithm

The applicant must be prepared to work with existing code to improve a GitHub app and integrate that app into the repositories for the CHAOSS Badging Initiative

* _Difficulty:_ Medium
* _Requirements:_ Appreciates DEI, Working knowledge of JavaScript, Experience with GitHub Apps
* _Recommended:_ Experience with webhooks, Experience creating documentation
* _Mentors:_ Matt Germonprez


## Idea: Machine Learning based Community Health and Communication

**Hours: 350**

[Micro-tasks and place for questions](https://github.com/chaoss/augur/issues/1637)

Currently Augur uses computational linguistics, dependency mapping, license scanning, topic modeling, social network analysis, and algorithms that target temporal changes in CHAOSS metrics. The aim of this project is to advance the accessibility of these insights through the development of python based API endpoints that deliver visualizations of machine learning outputs, similar to the style found in https://github.com/chaoss/augur/blob/main/augur/routes/pull_request_reports.py and https://github.com/chaoss/augur/blob/main/augur/routes/contributor_reports.py  

This technical project is essential for advancing newcomer welcomingness, diversity, equity, and inclusion in Open Source Software. An example of our vision can be found here: 
[augur-oss+dei-overview.pdf](https://github.com/chaoss/community/files/8247782/augur-oss%2Bdei-overview.pdf)

This work could include optimization and refinement of machine learning workers found under https://github.com/chaoss/augur/workers to generate additional, or reporting optimized data, as well as the extension of Augur's new front end at https://github.com/augurlabs/augur_view, which is based on twitter/bootstrap and flask. 

The aims of the project are as follows:
  - Communicate repository and project health insights through visualization
  - Identify projects that have similar characteristics, and visualize similarity using spacial proximity metaphors
  - Increase awareness of open source project ecosystems, and their component projects.

The aims will require working in a programming language to automate the task, use API to generate the graphs, and use some Graphic editor to prepare the pdf.

* _Difficulty:_ Medium
* _Requirements:_ Python programming experience, or a strong interest.
* _Recommended:_ Experience with accessing API's, writing SQL, and a strong interest in Machine Learning.
* _Mentors:_ Sean Goggins, Andrew Brain

## IDEA: Build Access and Entitlements into a Hosted Version of Augur

**Hours: 350**

[Micro-tasks and place for questions](https://github.com/chaoss/augur/issues/1639)

The new version of Augur is robust for providing metrics, and we seek to make it possible to install a single instance for CHAOSS Community members to leverage for initial experimentation with CHAOSS metrics. Increasingly, people are approaching the CHAOSS project in search of hosted tools where they can quickly get an analysis of some small subset of their repositories. The goal here is to add login functionality, and access and entitlements associated with logins, such that each user can create an account, list the repositories they want data collected for, and then see only the data they are interested in. If data is already collected for another user for some repositories, we would grant them entitlements to see those repositories immediately. If data needs to be collected, the user would be notified of this need, and given a time estimate (usually 1-3 days in cases where over 100 repos are requested.) This would extend the nascent CHAOSS project, https://github.com/augurlabs/augur_view, which will eventually be moved to the CHAOSS GitHub Org when this functionality is added. The framework employed is twitter/bootstrap serving its frontend through FLASK. 

The aims of the project are as follows:
  - Increase CHAOSS project responsiveness to newcomers. 
  - Provide metrics as a service for the CHAOSS community.
  - Integrate recommendations on the UI.

The aims will require generating code in **Python**, **twitter/bootstrap**, and **sql**.

* _Difficulty:_ Medium
* _Requirements:_ Interest in software analytics. Python programming. JavaScript programming. SQL knowledge. Willingness to understand Augur, and Augur_view internals.
* _Recommended:_ Experience with Python, UI development, and twitter/bootstrap would be convenient but can be learned during the project.
* _Mentors:_ Derek Howard, John McGinnes, Sean Goggins


## Idea: Enhance Conversational Topic Modelling Capabilities in CHAOSS Software

**Hours: 350**

[Micro-tasks and place for questions](https://github.com/chaoss/augur/issues/1640)

This project will add GenSIM logic, and other capabilities to the Clustering Worker inside of Augur Software, and be extended into a generalized Open Source Software Conversational Topic Modeling Instrument. 

CHOASS/augur has several workers that store machine learning information derived from computational linguistic analysis of data in the `message` table. The message table includes messages from issue, pull request, pull request review, and email messages. They are related to their origin with bridge tables like `pull_request_message_ref`. The ML/CL workers are all run against all the messages, regardless of origin. 

1. Clustering Worker (clusters created and topics modeled)
2. message analysis worker  (sentiment and novelty analysis)
3. discourse analysis worker (speech act classification (question, answer, approval, etc.)

Clustering Worker Notes: 

Clustering Worker: 2 Models.
 - Models: 
  - Topic modeling, but it needs a better way of estimating number of topics.
   - Tables
    - repo_topic
    - topic_words
  - Computational linguistic clustering
   - Tables
    - repo_cluster_messages
 - Key Needs
    - Add GenSim algorithms to topic modeling section https://github.com/chaoss/augur/issues/1199
  - The topics, and associated topic words need to be persisted after each run. At the moment, the topic words get overwritten for each topic modeling run. 
  - Description/optimization of the parameters used to create the computational linguistic clusters.
  - Periodic deletion of models (heuristic: If 3 months pass, OR there’s a 10% increase in the messages, issues, or PRs in a repo, rebuild the models)
  - Establish some kind of model archiving with appropriate metadata (lower priority)

Discourse Analysis Worker Notes: 

discourse_insights table (select max(data_collection_date) for each msg_id)
 - sequence is reassembled from the timestamp in the message table (look at msg_timestamp)
 - issues_msg_ref, pull_request_message_ref, pull_request_review_msg_ref

Message Analysis Worker
 - message_analysis 
 - message_analysis_summary

<img width="1159" alt="augur-tech" src="https://user-images.githubusercontent.com/379847/124799236-f440dc80-df19-11eb-84ce-302cf274884f.png">

The aims of the project are as follows:
  - Advance topic modeling of open source software conversations captured in GitHub.
  - Integrate this information into clearer, more parsimonious CHAOSS metrics.
  - Automate the management machine learning insights, and topic models over time. 
  - (Stretch Goal) Improve the operation of the overall machine learning insights pipeline in CHAOSS/augur, and generalize these capabilities. 


* _Difficulty:_ Medium
* _Requirements:_ Interest in software analytics. Python programming. Conceptual understanding of machine learning, and an eagerness to learn maching learning, and SQL knowledge.
* _Recommended:_ Experience with Python
* _Mentors:_ Sean Goggins, Andrew Brain, Isaac Milarsky

## IDEA: Implement Conversion Rate Metric in CHAOSS Software

**Hours: 350**

[Micro-tasks and place for questions](https://github.com/chaoss/community/issues/305)
 
### Conversion Rate 

Question: What are the rates at which new contributors become more sustained contributors? 

### Description 

The conversion rate metric is primarily aimed at identifying how new community members become more sustained contributors over time. However, the conversion rate metric can also help understand the changing roles of contributors, how a community is growing or declining, and paths to maintainership within an open source community.  
 
### Objectives (why)  
  - Observe if new members are becoming more involved with an open source project  
  - Observe if new members are taking on leadership roles within an open source project  
  - Observe if outreach efforts are generating new contributors to an open source project  
  - Observe if outreach efforts are impacting roles of existing community members  
  - Observe if community conflict results in changing roles within an open source community  
  - Identify casual, regular, and core contributors  

### Implementation 

This project could be implemented using either the CHAOSS/Augur, or CHAOSS/Grimoirelab (including stack components noted in references) technology stacks. 

The aims of the project are as follows:
  - Implement the Conversion Rate Metric in CHAOSS Software
    - After discussion, consider which CHAOSS Software Stack you wish to work with
    - In collaboration with mentors, define the technology framework, and initial path to a "hello world" version of the metric
    - Iterative development of the metric
  - Assist in the deployment of this metric for a pre-determined collection of repositories in a publicly viewable website linked to the CHAOSS project. 
  - Advance the work of the [chaoss metrics models working group](https://github.com/chaoss/wg-metrics-models). 

* _Difficulty:_ Medium
* _Requirements:_ Knowledge of Python is desired. Some knowledge of Javascript or twitter/bootstrap is also desired. Key requirement is a keenness to dig into this challenge!
* _Recommended:_ Python experience. 
* _Mentors:_ Sean Goggins, Daniel Izquerdo 

#### Filters (optional) 
  - Commits  
  - Issue creation  
  - Issue comments  
  - Change request creation  
  - Change request comments  
  - Merged change requests  
  - Code Reviews  
  - Code Review Comments  
  - Reactions (emoji)  
  - Chat platform messages  
  - Maillist messages  
  - Meetup attendance 

#### Visualizations 
 
![](./images/gsoc-1.png)

Source: https://chaoss.github.io/grimoirelab-sigils/assets/images/screenshots/sigils/overall-community-structure.png  

![](./images/gsoc-2.png) 

Source: https://opensource.com/sites/default/files/uploads/2021-09-15-developer-level-02.png  

#### Tools Providing the Metric  
  - GrimoireLab  
  - Augur  
  - openEuler Infra 

#### Data Collection Strategies 

The following is an example from the [openEuler](https://www.openeuler.org/en/) community:   
  - A group of people who attended an offline event A held by the community, can be identified as Group A. Demographic information of Group A could be fetched from an on-line survey when people register for the event. To identify the conversation rate of these participants:  
  - Some people from Group A started watching and forking the repos, indicating they have shown some interest in this community. We marked them as subgroup D0 (Developer Level 0) as a subset of Group A.  
  - Conversion rate from the total number of people in Group A to the number of people in subgroup D0 is: D0/Group A  
  - Some people from subgroup D0 make more contributions beyond just watching or forking, including creating issues, making comments on an issue, or performed a code review. We marked them as subgroup D1 (Developer Level 1) as a subset of D0.  
  - Conversion rate from the total number of people in Subgroup D0 to the number of people in subgroup D1 is: D1/D0.  
  - Some people from subgroup D1 continue to make more contributions, like code contributions, to the project. This could include creating merge requests and merging new project code. We marked them as subgroup D2 (Developer Level 2) as a subset of D1.  
  - Conversion rate from the total number of people in subgroup D1 to the number of people in subgroup D2 is: D2/D1. 

![](./images/gsoc-3.png)

   Definition:  
  - Developer Level 0 (D0) example: Contributors who have given the project a star, or are watching or have forked the repository  
  - Developer Level 1 (D1): Contributors who have created issues, made comments on an issue, or performed a code review  
  - Developer Level 2 (D2): Contributors who have created a merge request and successfully merged code  
  - Conversion Rate (Group A -> D0): CR (Group A -> D2) = D0/Group A  
  - Conversion Rate (D0 -> D1): CR (D0 -> D1) = D1/D0  
  - Conversion Rate (D1 -> D2): CR (D1 -> D2) = D2/D1 

### References  
  - https://opensource.com/article/21/11/data-open-source-contributors  
  - https://github.com/chaoss/augur
  - https://gitee.com/openeuler/website-v2/blob/master/web-ui/docs/en/blog/zhongjun/2021-09-15-developer-level.md  
  - https://chaoss.github.io/grimoirelab-sigils/common/onion_analysis/  
  - https://mikemcquaid.com/2018/08/14/the-open-source-contributor-funnel-why-people-dont-contribute-to-your-open-source-project/  
### Contributors  
  - Yehui Wang  
  - Clement Li  
  - zhongjun  
  - Xiaoya Xia  
  - Matt Germonprez  
  - Sean Goggins  
  - King Gao  



## IDEA: Open Source Software Health Metrics Visualization Exploration

**Hours: 175**

[Micro-tasks and place for questions](https://github.com/chaoss/augur-community-reports/issues/34)

The CHAOSS Community currently delivers pre-packaged visualizations of open source software health data through Augur APIs (https://github.com/chaoss/augur/blob/main/augur/routes/pull_request_reports.py and https://github.com/chaoss/augur/blob/main/augur/routes/contributor_reports.py), and the https://github.com/chaoss/augur-community-reports repository. This project seeks to expand, refine, and standardize the visualization of different classes of community health metrics data. Specifically, some analyses are temporal, others are anomaly driven, and in some cases contrasts across repositories and communities are required. In each case, the visualization of data is an essential component for metrics, and what we are now referring to as metrics models (https://github.com/chaoss/wg-metrics-models). 


The aims of the project are as follows:
  - Experiment with standard metrics visualizations using direct Augur database connections, or through the Augur API. 
  - Refine metrics, and metrics model visualizations using Jupyter Notebooks are similar technology.
  - Transform visualizations, as they are completed, into Augur API endpoints, following the pull request, and contributor reports examples. 

* _Difficulty:_ Medium
* _Requirements:_ Strong interest in data visualization. 
* _Recommended:_ Experience with Python is desirable, and experience designing, or developing visualizations is desirable. 
* _Mentors:_ Sean Goggins, Andrew Brain, Vinod Ahuja. 

## Idea: Build Knowledgebase Application on CHAOSS Website

**Hours: 350**

Micro-tasks and place for questions: https://github.com/chaoss/website/issues/708

While much of the work of CHAOSS is done in GitHub, the CHAOSS website is often the first place people visit to get information [https://chaoss.community/](https://chaoss.community/). The goal of the website is to create clear paths for new members who want to contribute, metrics users who want information about metrics, and existing members who need information about project operations. As project grows, there is a need for alternative display and categorization options for knowledgebase topics to reduce the burden on website visitors in finding the information that they need. 

Work on this project would require the student to work closely with the mentors and the community to come up with different display and categorization options for CHAOSS Knowledge Base topics. CHAOSS knowledgebase topics that are currently under consideration for this application are released metrics, metrics models, and contributor handbook information. Information about these topics are captured and stored in GitHub repositories by the relevant working groups. The application will need to pull information from github markdown documents to display on the website knowledge base application (we have existing code that does this). 

The aims of the project are as follows:
* Use Wordpress to implement a knowledge application (example knowledgebase plugin up for consideration - https://wordpress.org/plugins/basepress/)
* Research and ideate different display options and categorizations for knowledgebase topics.
* Build web pages to display different knowledgebase topics.

The aims will require working with front-end web development technologies and WordPress to build a knowledgebase application that can display information about knowledgebase topics. 

* _Difficulty:_ Low
* _Requirements:_ Interest in front-end web development
* _Recommended:_ Experience with Wordpress, HTML, CSS, JavaScript, and GitHub Markdown
* _Mentors:_ Kevin Lumbard,  Matt Germonprez, Ritik Malik, and Elizabeth Barron


