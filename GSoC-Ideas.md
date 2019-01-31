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

### Description

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


## Idea #x:

[ Micro-tasks and place for questions ]()

Description

The aims of the project are as follows:
  * ...

The aims may require [specific tasks].

  * _Difficulty:_ ____
  * _Requirements:_ ____
  * _Recommended:_ ____
  * _Mentors:_ ____
