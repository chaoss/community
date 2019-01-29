# Ideas for Google Summer of Code projects

## Idea 5: Build CHAOSS Risk and Growth Maturity and Decline Metrics in Augur

### Description

[Augur](http://www.augurlabs.io) is a fully functional prototyping web stack for CHAOSS metrics that leverages cutting edge web technologies including VUE, NodeJS and Python. It provides structured data mined from git repositories using a plugin architecture that incorporate other open source metrics projects like [Facade](http://facade-oss.org/) and [FOSSology](https://www.fossology.org/). Drawing from feedback from the CHAOSS community, Rapid metrics prototyping, human centered design and representing trends over time are central values in Augur's development. Augur has 4 core capabilities: 
1. Open source project comparsisons using either Z-Score or raw data. In the case of two projects of comparable size, scope and scale, percentage comparisons can be useful. In many cases, comparing z-scores of project trends yields a visualization with a more valuable view of how the project’s evolved relative to each other over time.
2. Comparison of the open source project with itself. How are we doing over time?
3. Making the open source project’s ecosystem visible. What are the trends in downloads? What projects are dependent on this one? Upon which projects does this project depend?
4. Supporting Comparisons across open source projects.

We plan to implement Risk metrics and other metrics within the Growth maturituy and decline [CHAOSS metrics and use cases](https://github.com/chaoss/wg-gmd) using Augur, focusing on what we have unearthed as the open source community manager use case. The aims of the project are to: 
1. Construct core open source software metrics defined by CHAOSS and
2. Assemble filtered, comparative collections of those metrics in ways that community managers want to consume. 

The aims of the project are as follows:

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


### Idea #x:

[ Micro-tasks and place for questions ](#)

Description

The aims of the project are as follows:
  * ...


The aims may require [specific tasks].

  * _Difficulty:_ ____
  * _Requirements:_ ____
  * _Recommended:_ ____
  * _Mentors:_ ____
