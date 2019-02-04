# Ideas for Google Summer of Code projects

## Idea 1: Visualizing  CHAOSS Metrics in Kibana Dashboards

[ Micro-tasks and place for questions ](#)

[GrimoireLab](https://chaoss.github.io/grimoirelab/) provides a framework for retrieving information from several data sources and store that information in a set of ElasticSearch indexes. From those indexes it is relatively easy start building Kibana Dashboards. Behind the scenes, data is stored in, at least, two stages. The first one consist of retrieving data from the original source and storing them in ElasticSearch in RAW format, i.e., a format close to the original source format, without applying any transformation. In a second stage RAW data is enriched to generate new data more suitable for computing metrics, with Kibana in mind.

This project idea is about implementing some [CHAOSS metrics and use cases](https://github.com/chaoss/wg-gmd) by means of Kibana dashboards, on top of the data provided by GrimoireLab. These dashboards are based on ElasticSearch indexes. Some metrics could require using enriched indexes generated with GrimoireLab, while others could also require generating new enriched indexes more focused on a particular goal. This opens the door to participate in the active development of GrimoireLab-ELK project to add new enrichers. (GrimoireLab-Sigils)[https://github.com/chaoss/grimoirelab-sigils] project contains Kibana dashboards built on top of GrimoireLab data and currently includes a collection of panels related to CHAOSS metrics, so all dashboards built on top of GrimoireLab data could be also conributed in GrimoireLab-Sigils.

The aims of the project are as follows:

  * Acquiring knowledge on GrimoireLab toolchain to generate enriched data from different data sources.
  * Creating Kibana dashboards to obtain visual representations of different kind of metrics based on GrimoireLab data. Painless scripting language may be needed for particular tasks.
  * Writing Python code to query GrimoireLab ElasticSearch databases and obtain from it new enriched data relevant for computing metrics defined by CHAOSS community. Possible technologies to achieve this aim include Python Pandas.

The aims will require working with ElasticSearch and Kibana, Python programming (could be needed to prepare the data for ElasticSearch indexes and Kibana visualizations), interaction with other people in the working group to learn about subtle details of the metrics, and producing documentation.

  * _Difficulty:_ Medium
  * _Requirements:_ Python programming. Interest in software analytics. Willingness to understand GrimoireLab internals and CHAOSS metrics.
  * _Recommended:_ Experience with Python interfaces to databases would be convenient, but can be learned during the project. Experience in data analytics with Pandas, ElasticSearch, Kibana and Python Jupyter Notebooks will be a plus.
  * _Mentors:_ Alberto Pérez García-Plaza and Miguel Ángel Fernández.

## Idea 2: Implementing CHAOSS metrics with Perceval

[Micro-tasks and place for questions](https://github.com/chaoss/wg-gmd/issues/81)

The [GMD Working group](https://github.com/chaoss/wg-gmd) is proposing some metrics
that are computed with information obtained from software development repositories.
One of the goals of the working group is to provide reference implementations of
those metrics, based on the output produced by [Perceval](https://github.com/chaoss/grimoirelab-perceval).
As an example, still work in progress, check the Python notebook with the
[reference implementation for commits](https://github.com/chaoss/wg-gmd/blob/master/implementations/Code_Commits.ipynb).

The aims of this idea are as follows:

* Producing Python (Jupyter) notebooks with proposals for reference implementations
for these metrics. The proposals will follow the usual acceptance mechanism of the working group
(based on GitHub issues and pull requests). In general, all reference implementations will
build on the output produced by Perceval for the relevant data source,
and will explore the peculiarities of the metric and its implementation for that data source.

* Document the notebooks as much as possible, so that any person trying to implement the metric
can understand not only how to implement it, but also the details that should be taken into account.
Documentation should also be suitable for people willing to dig deeper about the details of
the metric, with the aim of understanding it (not necesarily implementing it).

* When needed, propose changes to Perceval, and maybe other components in GrimoireLab,
that allow for the implementation of the metric.

* Participate in the acceptance process of the working group.

The aims will require programming in Python, producing Python notebooks, interaction with other
people in the working group to learn about subtle details of the metrics, and producing
documentation.

  * _Difficulty:_ Medium
  * _Requirements:_ Python programming, experience with Python notebooks, skills for producing documentation.
  * _Recommended:_ Experience in data analytics with Python, if possible involving the use of Pandas, will be a plus. 
  * _Mentors:_ Jesus M. Gonzalez-Barahona and Valerio Cosentino.

## Idea 3: Support of Source Code Related Metrics

[ Micro-tasks and place for questions ](https://github.com/chaoss/grimoirelab/issues/182)

Currently, GrimoireLab allows to produce analytics with data extracted from more than 30 tools related with contributing to Open Source development such as version control systems, issue trackers and forums. Despite the large set of metrics available in GrimoireLab, none of them relies on information extracted from source code, thus limiting the end-users to benefit of a wider spectrum of software development data.

[Graal](https://github.com/Bitergia/graal) is a tool that allows to conduct customizable and incremental analysis of source code by leveraging on existing tools, and produce an output that conforms to the data that can be processed by GrimoireLab. Graal already offers analysis about code complexity, quality, dependencies, security and licensing, however currently it is not integrated with GrimoireLab.

This idea is about adding support to GrimoireLab to produce source code related metrics using Graal.

The aims of the project are as follows:
  * Understanding the GrimoireLab components (Perceval, ELK, Mordred and Sigils) and the corresponding tool-chain.
  * Adapting ELK and Mordred to be able to execute Graal and process the data produced.
  * Producing analytics with Graal data and including them in Sigils.
  * Evaluating the implementation with projects of different sizes.

Other aims, such as enhancing Graal to support more analysis or improve existing ones are completely within scope.

The aims will require extending GrimoireLab functionality to integrate Graal.

  * _Difficulty:_ medium
  * _Requirements:_ Python programming. Interest in software analytics. Willingness to understand GrimoireLab internals.
  * _Recommended:_ Experience with ElasticSearch and Kibana would be convenient, but can be learned during the project.
  * _Mentors:_ Jesus M. Gonzalez-Barahona, Valerio Cosentino
  
## Idea 4: Build CHAOSS Risk and Growth Maturity and Decline Metrics in Augur

[ Micro-tasks and place for questions ](https://github.com/chaoss/wg-gmd/issues/82)

[Augur](http://www.augurlabs.io) is a fully functional prototyping web stack for CHAOSS metrics that leverages cutting edge web technologies including VUE, NodeJS and Python. It provides structured data mined from git repositories using a plugin architecture that incorporate other open source metrics projects like [Facade](http://facade-oss.org/) and [FOSSology](https://www.fossology.org/). 

In this GSoC project we plan to implement Risk metrics and other metrics within the Growth-Maturity-Decline [CHAOSS metrics and use cases](https://github.com/chaoss/wg-gmd) using Augur, focusing on what we have unearthed as the open source community manager use case. The aims of the project are to: 
1. Construct core open source software metrics defined by CHAOSS and
2. Assemble filtered, comparative collections of those metrics in ways that community managers want to consume. 

The technical components of the project include:
  * Acquiring knowledge on Augur toolchain to generate metrics from available data sources.  
  * Creating VUE visualizations and API's to support the enumerated metrics and metric collections. 
  * Writing Python code to query Facade, Augur and other datasets. 

Right now, based on Augur prototypes and follow up discussions so far, we have the following observations that will inform our work both the “Growth Maturity and Decline” working group and in Augur Development. Here are a few things we have learned from prototyping Augur with community managers. These features in Augur are particularly valued:
1. Allowing comparisons with projects within a defined universe of of projects is essential
2. Allow community managers to add and remove repositories that they monitor from their repertories periodically
3. Downloadable graphics
4. Downloadable data (.csv or .json)
5. Availability of a “Metrics API”, limiting the amount of software infrastructure the community manager needs to maintain for themselves. This is more valued by program managers overseeing larger portfolios right now, but we think it has potential to grow as awareness of the relatively light weight of this approach becomes more apparent. By apparent, we really mean “easy to use and understand”; right now it is easy for a programmer, but less so for a community manager without this background or current interest.

With these advantages in mind, making the most of this opportunity to help community managers with useful metrics is going to include the availability of date summarized comparison metrics. These types of metrics have two “filters” or “parameters” fed into them that are more abstractly defined in the Growth, Maturity, and Decline metrics on the CHAOSS project.

1. Given a pool of repositories of interest for a community manager, rank them in ascending or descending order by a metric
2. Over a specified time period or
3. Over a specified periodicity (e.g., month) for a length of time (e.g., year).

For example, one open source program officer we talked with is interested in the following set of date summarized comparison metrics. Given a pool of repositories of interest to the program officer (dozens to hundreds of repositories):
1. What ten repositories have the most commits this year (straight commits, and lines of code)?
2. How many new projects were launched this year?
3. What are the top ten new repositories in terms of commits this year (straight commits, and lines of code)?
4. How many commits and lines of code were contributed by outside contributors this calendar year? Organizationally sponsored contributors?
5. What organizations are the top five external contributors of commits, comments, and merges?
6. What are the total number of repository watchers we have across all of our projects?
7. Which repositories have the most stars? Of the ones new this year? Of all the projects? Which projects have the most new stars this year?

Further elaboration on the community manager use case is available on the CHAOSS website: [Community Manager Metrics Use Case](https://chaoss.community/news/2018/11/16/metrics-with-greater-utility-the-community-manager-use-case/)

  * _Difficulty:_ Medium
  * _Requirements:_ Python programming. Interest in data analytics. Willingness to understand data structures and our web stack internals and CHAOSS metrics.
  * _Recommended:_ Experience : NodeJS Programming. VUE Programming.
  * _Mentors:_ Sean Goggins, Jesus M. Gonzalez-Barahona

