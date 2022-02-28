# Ideas for Google Summer of Code projects

Interested in working with CHAOSS? Below are some project ideas. We describe how to apply to work with CHAOSS and how we select students on a different page: https://github.com/chaoss/governance/blob/master/GSoC-interest.md

**[CHAOSS FOLK: Please see our 2021 Document for Examples](./GSoC-Ideas-2021.md)**

----

## Idea: Improve the CHAOSS DEI Event Badging Review Bot

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
* _Mentors:_ Needed (prev. Matt Cantu Snell)


## Idea: Machine Learning based Community Health and Communication

[Micro-tasks and place for questions](https://github.com/chaoss/augur/issues/1637)

Currently Augur uses computational linguistics, dependency mapping, license scanning, topic modeling, social network analysis, and algorithms that target temporal changes in CHAOSS metrics. The aim of this project is to advance the accessibility of these insights through the development of python based API endpoints that deliver visualizations of machine learning outputs, similar to the style found in https://github.com/chaoss/augur/augur/routes/pull_request_reports and https://github.com/chaoss/augur/augur/routes/contributor_reports  

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


## Idea: Build Knowledgebase Application on CHAOSS Website

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
* _Mentors:_ Kevin Lumbard,  Matt Germonprez, and Elizabeth Barron



## Each Subsequent Idea gets a new heading like this

[Micro-tasks and place for questions]`(  )` **In the parentheses, provide a link to an issue open for answering questions**

```
One paragraph description. Perhaps two. (coding ticks provided only for emphasis. Remove before submitting PR.)
```

The aims of the project are as follows:
  - X
  - Y
  - Q

```
Describe the programming Skills necessary, and those a potential student should be willing to learn. (coding ticks provided only for emphasis. Remove before submitting PR.)
```

* _Difficulty:_ Low, Medium, High (or other classification of your choosing)
* _Requirements:_ These can be technical or analytical.
* _Recommended:_ Aimed at "things you have done before, at least in class."
* _Mentors:_ Last year 2 mentors were required per project. Waiting for GSoC site to open for this year.
