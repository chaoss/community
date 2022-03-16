# Data Use Awareness Recommendations: Privacy and Ethics

## Introduction
This document serves people who need specific details about privacy and ethics regarding the use of CHAOSS metrics. Whether in law or contracts, privacy and ethics are critically important concerns when determining open source community health and sustainability. The CHAOSS project cannot and does not offer legal advice. However, metrics for better determining open source community health and sustainability potentially have significant impacts on individual privacy and ethics concerns. As such, developers, managers, project maintainers, and executives need to educate themselves. This document serves as a directory of resources. 

## Contributing to this Document
As this document evolves and grows, we invite you to contribute information on (1) privacy and ethics concerns associated with the use of open-source software metrics and (2) any jurisdictions you are familiar with that specify the use of online trace data.  If you would like to make these or other contributions, please open a pull request as specified in our CHAOSS project contributing.md file. 

## Contributors to This Document
-  Lucas Gonze
-  Matt Germonprez
-  Elizabeth Barron
-  Sean Goggins
-  Sophia Vargas

## The CHAOSS Project
The CHAOSS project develops metrics, practices, and software for making open source project health more understandable. By building open source project health metrics, CHAOSS seeks to improve the transparency and actionability of practices and systems related to open source project health so that relevant stakeholders can make more informed decisions about open source project engagement.

## Privacy

### Privacy: Confidential Data and Metrics
As open source communities become critical to the digital infrastructure upon which much of our modern world runs, insights into how open source communities function has gained increased importance. In understanding community function, online trace data (e.g., digital traces of work found in open source projects in such systems as GitHub, GitLab, Slack, IRC) has become the go-to source of information. In addition, surveys are used to gather data that may be assumed by respondents to be private.

While easily accessible, maintaining the privacy of individual contributors is a key concern. While the CHAOSS project produces metrics and tools that can help make trace data and survey responses more visible, it remains the responsibility of users of those metrics and tools to consider their privacy implications when in use. 

### Privacy: Things to Consider 
CHAOSS metrics are written as summaries and aggregations of metrics, though a significant amount of publicly available open source software data contains individually identifying information. Care should be taken to preserve privacy expected by individuals working on open source projects. Retaining individually identifiable data securely when it is used to build metrics is a foremost concern. 

- If you are collecting or aggregating data from multiple sources, it may be appropriate to create and publish your own privacy policy. 
- If you are collecting information directly (i.e. not through a platform with existing privacy policies) disclose your intentions, motivations and retention policies. 
- Assume accountability over the data; this includes assurance of maintenance to promote accuracy, and compliance with existing policies and regulations  

### Privacy: Sensitivity Levels and Proper Handling of Personal Identifiable Information (PII)
Our general recommendation is to establish data classification and sensitivity levels that are appropriate to your project, organization and context: these could be set by community conduct guides, company policies, or local regulations. 

If you’re starting from scratch, consider reviewing NIST’s guide to protecting the confidentiality of PII which provides frameworks for grouping and ranking data types and sensitivity levels.

In addition to classification, data policies should also cover data collection, retention and maintenance practices. These again should be context driven as each community establishes their own governance model and standard practices. For example, the CHAOSS community has developed our own data policy to provide transparency to our extended community around our data handling practices and expectations. 

### Privacy: Published Guidance

#### Australia
- Australian Privacy Principles Guidelines

#### EU
- Federal GDPR

#### EU - Germany
- Bundesdatenschutzgesetz

#### GitHub
- Privacy Statement
- Acceptable Use Policy

#### Linux Foundation
- Telemetry Data Policy

#### UN
- Article 17 of International Covenant on Civil and Political Rights, 1966
- Data Protection and Privacy Legislation Worldwide 

#### United States - California
- OPPA 2003
- CCPA 2018

#### United States - Federal
- U.S. Code § 552a
- (NIST) Guide to Protecting the Confidentiality of Personally Identifiable Information (PII)
- (NIST) What is Personally Identifiable Information (PII)?

## Ethics

### Ethics: Confidential Data and Metrics
As open source participation becomes a more diverse, equitable, and inclusive environment, it is important to remember that our community members are people. We must remember to treat each other with the dignity and respect that we would expect from others, raising the importance of ethical concerns associated with collecting online trace data. 

Data ethics is focused on ‘doing the right things’ with data that has been collected. While an organization or individual may properly follow privacy guidance with respect to how data is collected and stored, it does not necessarily mean that the use of that data was socially acceptable. CHAOSS metrics can certainly be used in ways that properly attend to PII but do not consider negative social impacts that may result from that use. 

### Ethics: Things to Consider
CHAOSS metrics should be used with considerations of the ethical use of the associated metrics data. Such considerations include attention to (1) deanonymizing individuals, (2) proper handling and storage of data, and (3) use of metrics as weapons or to exert undue influence. 

If you are collecting data, consider where you are at different stages of CHAOSS metrics. For example, consider how you (1) choose questions for surveys, (2) find appropriate data sources, (3) adhere to licensing requirements from original data sources, and (3) clearly stating the outcome of the data collection/metrics efforts. 

With respect to data, considerations include published attention to (1) data collection processes, (2) data ownership, handling, and storage policies, (3) data reporting in ways that protect individual identities, and (4) data sharing policies. 
It is also important to provide a process by which people can opt-out of data collection processes, including how to contact data owners to express desired changes in collected data pieces and policies. 

### Ethics: Statement of Ethics
A community should provide an ethics statement reflecting respect for individual privacy. The value statement should make clear the aims in gathering data is to understand the health and sustainability of open source projects, and *not* to measure individual developer productivity (companies will do this on their own, but it's not why we build metrics). A statement of ethics should also include  the following: 
- A statement about securing personally identifiable data in any implementation of  software tools. 
- A statement that acknowledges that individual companies gathering data for project health and sustainability are responsible for use of that data for metrics and measurements that focus on individual developers. 
- A statement about compliance with local government policies, laws, and guidelines.
- A statement recognizing that open source communities are communities of people and that gaming or weaponizing metrics can do harm to people. 

### Ethics: Published Guidance

- [Digital Privacy and Ethics: Privacy Intelligence as a Cornerstone](https://bigid.com/blog/digital-privacy-and-ethics/)
- [Ethics in Privacy and Security](https://www.onetrust.com/blog/ethics-in-privacy-and-security/)
- [Improving Digital Privacy and Security in Software](https://www.trilateralresearch.com/improving-digital-privacy-and-security-in-software/)

