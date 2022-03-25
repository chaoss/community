# Knowledge Base, Handbook, and Metric Organizing, Updating and Creating - CHAOSS

## About your organization

[CHAOSS](https://chaoss.community/) is an open-source project at the Linux Foundation focused on creating analytics and metrics to help define community health. Work in the CHAOSS Project community is largely organized around software and metrics. Additionally, user groups provide ways to consider how software and practices can support the deployment of CHAOSS metrics. The CHAOSS project was officially announced at the Open Source Summit North America 2017 in Los Angeles. 

## About your project

### Your project’s problem

First of all, there is a lot here, and the CHAOSS community will be actively working with our Google Season of Docs person to help with the work, and make decisions about which items to prioritize, using both our priorities and our GSoD student/intern/contributor's interests. 

Through years of open source software health and sustainability metrics, we have developed over 70 metrics, including defining over a dozen metrics requiring data gathering not obtainable through software repositories; a website; a community handbook; a knoweldge base; and several communication channels. In addition, there is not a mechanism in place through which our software tools, Grimoirelab and Augur, can easily reference the CHAOSS metric definition in their toolset. In addition, our guidance on respect for individual data privacy will need to be woven into many of these documentation sets. 

Our [metrics](https://chaoss.community/metrics) are published twice per year, and would benefit from a review for consistency in language, especially as it pertains to inclusive language. Working with the CHAOSS Community to define a process, standard, or API that tools like Augur and Grimoirelab could easily use for directly linking metrics implementations to metrics definition without substantial manual embedding of links that sometimes change would also be valuable. 

The [CHAOSS website](https://github.com/chaoss/website/) is a WordPress site. The structure and templates for the site are managed directly in WordPress by the web-content group maintainers. Content for the website is collaboratively developed in website-related GitHub repositories. The content is pulled directly into the WordPress site using a WordPress/GitHub connector application. Webpages are broken down into GitHub content areas and GitHub markdown files are used to populate those content areas. The web content group would like to improve existing contribution documentation and create new documents were needed to improve website management.

The [CHAOSS Commmunity Handbook](https://handbook.chaoss.community/community-handbook/) is proving to be an invaluable guide for newcomers, and for maintaining communal memory. It could benefit from a conversion from its current ePub format to more standard formats, either wordpress, Markdown, or Restructured Text that are used in other CHAOSS documentation. 

[Augur](https://github.com/chaoss/augur) is a CHAOSS Software project that focuses on the collection and analysis of open-source software health and sustainability data. Augur’s main focus is to measure the overall health and sustainability of open source projects, as these types of projects are system critical for nearly every software organization or company. We do this by gathering data about a project’s repositories, normalizing that into our data model to provide useful metrics about your project’s health. For example, one of our metrics is Burstiness (How are short timeframes of intense activity, followed by a corresponding return to a typical pattern of activity, observed in a project?), which can paint a picture about a project’s focus as well as gain insight as to the potential stability of a project, and how its typical cycle of updates occurs. There are many more useful metrics, and you can find a full list of them here.

The Augur component of this project would focus on updating Augur's documentation to incorporate more inclusive language and to more accurately reflect the organization of information a newcomer requires to contribute to the project. A current version of Augur's documentation is found here: https://oss-augur.readthedocs.io/en/main/.  Accomplishing these aims would require the intern to approach Augur as a newcomer, identify non-inclusive language, areas of confusion, and potential areas of improvement in clarity.

[GrimoireLab](https://github.com/chaoss/grimoirelab) is a CHAOSS toolset for software development analytics. It includes a coordinated set of tools to retrieve data from systems used to support software development (repositories), store it in databases, enrich it by computing relevant metrics and making it easy to run analytics and visualizations on it. [Sorting Hat](https://github.com/chaoss/grimoirelab-sortinghat) and [Perceval](https://github.com/chaoss/grimoirelab-perceval) are the two most stable and stand-alone tools in the GrimoireLab toolset. The documentation of these projects is very limited and not beginner-friendly. Recently, the community has decided to work on improving the documentation.

We think this project is potentially exciting to an intern interested in open source software health and sustainability because, through the process of updating documentation, there is an opportunity to understand CHAOSS metrics and metrics models more fully, and create direct links between the metrics and metrics Models Augur provides, and their corresponding CHAOSS definitions. In short, this project is an opportunity for deep engagement with the CHAOSS community.

### Your project’s scope

The scope of the project to improve documentation for the CHAOSS website, community handbook, metrics definitions, and our knowledgebase, GrimoireLab, and Augur. We aim to document existing practices and use these efforts to highlight areas for improvement. In all, engagement with GSoD is intended to support and improve the community member experience for all.

We are estimating a period of 6 months to complete this project with three technical writers working on the three individual projects. We have identified community members who are interested to volunteer for managing the project. We have also found three technical writers to work on the projects.

Volunteers:
-   Santiago Dueñas (GrimoireLab)
-   Kevin Lumbard (Website)
-   Sean P. Goggins (Augur)
-   Elizabeth Barron (Community Handbook)

Technical Writers:
-   Kriti Singh (GrimoireLab)
-   Jaskirat Singh (Website)
-   Andrew Brain (Augur)

### Measuring your project’s success
-   Documentation for each project should be created using the technologies preferred by the community.
-   Each technical writer will create a repository that stores the work and tracks the progress of their portion of the project.
-   The documentation should be beginner-friendly.
-   Co-oping up with deliverables and timeline.
-   Attending weekly meetings for sharing progress about the project with the community.
-   Engaging with the community through mailing lists and communication platforms.
-   Developing clear processes by which future community members can contribute to new and existing documentation.

## Project budget

$15,000 USD

Budget item | Amount | Running Total | Notes/justifications
------------|--------|---------------|---------------------
Technical writer develop and implement updated documentation for the website and knowledge base: | 5,000.00 | 5,000.00 | 
Technical writer develop and implement updated documentation for the community handbook: | 5,000.00 | 10,000.00 | 
Technical writer develop and implement updated metrics documentation, including collaboration to make our software tools more easily able to link implemented metrics to their definitions: | 5,000.00 | 15,000.00 | 
TOTAL |  | USD $15,000.00 |

## Project Timeline
1. May - Orientation
2. June - Pilot projects in each specific component of documentation with the dual aims of learning, and scoping our goals. 
3. July - September - Create and update documentation, and collaboratively draft a lightweight style guide to help maintain consistency
4. October - Finalize and Review Progress
5. November - Project Completion 

## Additional information

All aspects of the project will include focus on our continuous improvement in the use of inclusive langague

### Previous experience with technical writers or documentation:

CHAOSS has participated in the Google Season of Docs 2020 program under The Linux Foundation. We had two candidates who have worked and completed their projects. Jaskirat Singh worked on creating a CHAOSS Community-wide Handbook and Xiaoya Xia worked on building documentation for the CHAOSS D&I Badging Project

1.  [https://developers.google.com/season-of-docs/docs/2020/participants/project-linuxfoundation-jaskiratsingh2000](https://developers.google.com/season-of-docs/docs/2020/participants/project-linuxfoundation-jaskiratsingh2000)
2.  [https://developers.google.com/season-of-docs/docs/2020/participants/project-linuxfoundation-xiaoya](https://developers.google.com/season-of-docs/docs/2020/participants/project-linuxfoundation-xiaoya)

### Previous participation in Season of Docs, Google Summer of Code, or others:

CHAOSS has been participating in GSoC and GSoD over the last three years and has successfully mentored more than 15 students. The CHAOSS Project also participated in Outreachy in 2020.

- [https://chaoss.community/chaoss-mentorship/](https://chaoss.community/chaoss-mentorship/)
