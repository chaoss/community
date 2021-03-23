# Ideas for Google Season of Docs projects

Interested in working with CHAOSS? 

Below are some project ideas. We describe how to apply to work with CHAOSS and how we select students on a different page: [GSoD-interest.md](./GSoD-interest.md).

---

## Create documentation for SortingHat and Perceval

GrimoireLab is a CHAOSS toolset for software development analytics. It includes a coordinated set of tools to retrieve data from systems used to support software development (repositories), store it in databases, enrich it by computing relevant metrics and making it easy to run analytics and visualizations on it.

[SortingHat](https://github.com/chaoss/grimoirelab-sortinghat/tree/muggle) and [Perceval](https://github.com/chaoss/grimoirelab-perceval) are the two most stable and stand-alone tools in the GrimoireLab toolset. Perceval can be used to to fetch data from data source repositories and SortingHat is used to manage identities. The documentation to these projects is very limited and not beginner-friendly. Recently, the community has decided to work on improving the documentation.

Knowledge/Skills Involved: Python, Jekyll, and Docker are suggested technology to know, but can be learned during the program.

Aims of the project: 
 - Understand the internals of GrimoireLab toolset, mainly Sorting Hat and Perceval.
 - Update the documentation of Perceval.
 - Create documentation for the new version of Sorting Hat.

License: GNU General Public License (GPL), version 3 or later (same of the tools)

## Create Documentation for Website

The CHAOSS website is a WordPress site. The structure and templates for the site are managed directly in WordPress by the web-content group maintainers. Content for the website is colloboratively developed in website and working group GitHub repositories. The content is pulled directly into the WordPress site using a WordPress/GitHub connector application. Webpages are broken down into GitHub content areas and GitHub markdown files are used to populate those content areas. The webcontent group would like to improve existing contribution documentation and create new documents where needed.

Aims of the project:
 - How to contribute doc
 - Style guide
 - Website structure wire-frame document
 - Update website metrics release and translation activities in website repo and governance 

License: MIT License

## Create, Advance, and Clarify Documentation for Augur

[Augur](https://github.com/augur) is a CHAOSS toolset for ontologically consistent data science and analytics, with fully traceable data provenance from the report, back through the analysis, persistence, and data source. It is in some sense, a single piece of software.  In another sense, [Augur has 18 “workers” individually focused workers](https://www.augurlabs.io/).

Our [worker](https://github.com/chaoss/augur/tree/master/workers) goals include: 
1. high speed data capture and persistence, each of which has configurable parameters related to its role. 
2. Information retrieval, artificial intelligence, and data mining (including, topic modeling, clustering, natural language processing, sentiment analysis, and other algorithms)
3. Notification: Augur’s user interface design does contain a “dashboard”, but our focus is on notification through push mechanisms. 
4. User Identification reconciliation. While each worker that gathers data first checks platform APIs and our own database to see if a user already exists, we also have one worker focused on verifying the map we create. We also store affiliation data, and provide a view of contribution level outside of each project’s contributors.

Knowledge/Skills Involved: Python, but we have enough worked examples, and a growing community that there is ample opportunity for the developer to learn on the job. It's also important to more clearly explain Augur’s advanced, distributed architecture, which allows each worker to run on a different computer, or virtual computer.  [The Housekeeper, Broker, and Configuration Manager facilitate this process](https://github.com/chaoss/augur/tree/master/augur). 

**Aims of the project:**

Augur is now focused on developing tools that support increased Diversity, Equity, and Inclusion in Open Source Software. Our documentation work on this project will provide the writer a chance to put their own stamp, related to this theme, throughout existing, and future documentation for Augur. Some steps along the way probably include: 
 - Interview key contributors and maintainers to clarify existing documentation at https://oss-augur.readthedocs.io/en/master/ 
 - Use Restructured Text to update, enhance, expand, and organize existing documentation. 
 - If time permits, develop “job aid” documentation for users with particular roles (Sean Goggins can help you learn what a job Aid is; he taught the course for graduate students at the University of Missouri when he was a Ph.D Student). Possible roles include: 
   - First time developer.
   - Community Manager/OSPO Manager (likely a Docker focused installation)
   - Maintainer
   - Contributor
   - New Contributor

License: MIT
