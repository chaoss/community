# Ideas for Google Summer of Code projects

### Idea #x:

[ Micro-tasks and place for questions ](#)

Description

The aims of the project are as follows:
  * ...


The aims may require [specific tasks].

     Difficulty: ____
     Requirements: ____
     Recommended: ____
     Mentors: ____


### Idea #1: Support of Standard CHAOSS Formats for Description of Projects

[ Micro-tasks and place for questions ](https://github.com/chaoss/grimoirelab/issues/71)

Currently, GrimoireLab uses its own format for describing a project, including the data sources (repositories to retrieve information from), the internal organization of the project (e.g., in subprojects), and specifics about how the data is to be presented. For this information, some standard formats already exist, that can be directly used, or used with some modifications. Among them, DOAP is one of the most interesting ones, but there are many others.

This idea is about identifying formats used by projects to describe themselves and adding support to GrimoireLab. This includes not only static formats, but also APIs.

The aims of the project are as follows:

  *   Supporting DOAP, by either converting it to the current GrimoireLab format, or more likely, directly supporting it in Mordred or some related tools.
  *   Testing the implementation with large projects supporting DOAP, such as Apache Server.
  *   Exploring other formats used to express information related to projects (repositories, people, affiliations). This may include specific formats used by some large projects (such as Eclipse or OpenStack), affiliation and unique identities formats (such as the gitdm format).
  *   Exploring other APIs used to express information related to projects, such as those provided by software development forges (e.g., GitLab, BitBucket), or tools supporting software development.

 The aims may require modifications to Mordred and other related tools to make them modular and simplify the implementation of support for future formats or APIs.

  *   _Difficulty:_ easy/medium
  *   _Requirements:_ Python programming. Willingness to understand GrimoireLab internals.
  *   _Recommended:_ Experience with Python HTTP and XML libraries would be convenient, but can be learned during the project.
  *   _Mentors:_ Jesus M. Gonzalez-Barahona, Valerio Cosentino

 Idea #2: Reporting of CHAOSS Metrics

 [ Micro-tasks and place for questions ]

 Currently, GrimoireLab includes a tool for reporting: Manuscripts. This tool reads data from a GrimoireLab ElasticSearch database, and produces with it a PDF report with relevant metrics for a set of analyzed projects. Internally, Manuscripts uses some Python code to produce charts and CSV tables, which are integrated into a LaTeX document to produce the final PDF. Other approaches, such as producing Jupyter notebooks, will be explored too.

 This idea is about adding support to Manuscripts to produce reports based on the work of the CHAOSS Community. Since Manuscripts is still a moving target, this will be also a chance to participate in the general development of the tool itself, to convert it into a generic reporting system for GrimoireLab data.

 The aims of the project are as follows:

     Writing Python code to query GrimoireLab Elastisearch databases and obtain from it the metrics relevant for the report. Possible technologies to achieve this aim include Python Pandas.
     Writing Python code to produce suitable representation for those metrics, such as tables and charts.
     Adapting current tools to produce reports directly from data sources, by managing the GrimoireLab toolchain. Possible solutions include adding the code to Mordred, the tool orchestrating GrimoireLab tools.

 Other aims, such as producing Jupyter notebooks as a final result or an intermediate step are completely within scope.

     Difficulty: easy/medium
     Requirements: Python programming. Interest in software analytics. Willingness to understand GrimoireLab internals.
     Recommended: Experience with Python interfaces to databases would be convenient, but can be learned during the project. Experience with Latex and/or Python Jupyter Notebooks would help.
     Mentors: Jesus M. Gonzalez-Barahona, Matt Germonprez, Jordi Cabot

 Idea #3: Prototype New CHAOSS Metrics

 [ Micro-tasks and place for questions ]

 Create a library that can be used by CHAOSS Community Software projects like GHData to express open source software project level similarities. There are two components: A set of algorithms for integrating similarity measures on an array of project data and implementation of visualizations using our existing framework and possibly adding to the framework.

 The aims of the project are as follows:

     Build new metrics in a Python/Flask/MetricsJS for the open source project GHData. This will create familiarity with different metrics as currently defined by the CHAOSS project, as well as introduce user interaction design goals of:
         Enabling comparisons between GitHub, Mozilla, and other open source project repositories and projects as a default design mechanism.
         Considering the different ways of building software to do temporal comparisons.
     Build machine learning algorithms that identify candidate “toxic interactions” in open source mailing lists and IRC channels, with the aim of making open source a more welcoming environment for diverse populations.
     Design and evaluate exploratory mechanisms for presenting project data, metrics, and analysis using a complex, hierarchical, and networked set of data structures. For example, there are two main ways a “commit” is defined in open source software: a) The explicit, individual “commit” record and b) “unique commits”. For each of these metrics, which can be reasonably calculated from source repositories, there are interests in CHOASS project stakeholders in understanding them:
         By project
         Project organization
         Foundation
         Dependencies (including integration with libraries.io and other data sets)
         Individual
         Corporate organization
         Roles in a project (including people evolving from the periphery to the core).

 Each of these are significant opportunities for a Google Summer of Code participant to engage and learn and become part of a project.

     Difficulty: easy/medium
     Requirements: Python programming. Networking Basics, JavaScript Basics
     Recommended: Experience with Python HTTP and XML libraries would be convenient, but can be learned during the project.
     Mentors: Sean Goggins, Jesus M. Gonzalez-Barahona, Josianne Marsan
