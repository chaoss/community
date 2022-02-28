# Ideas for Google Summer of Code projects

Interested in working with CHAOSS? Below are some project ideas. We describe how to apply to work with CHAOSS and how we select students on a different page: https://github.com/chaoss/governance/blob/master/GSoC-interest.md

**[CHAOSS FOLK: Please see our 2021 Document for Examples](./GSoC-Ideas-2021.md)**

----

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

[Micro-tasks and place for questions](https://github.com/chaoss/grimoirelab/issues/414)

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
