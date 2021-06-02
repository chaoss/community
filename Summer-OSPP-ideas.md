# Ideas for Summer 2021 of Open Source Promotion Plan projects

Interested in working with CHAOSS? Below are some project ideas. We describe how to apply to work with CHAOSS and how we select students on a different page: [Summer-OSPP-interest.md](./Summer-OSPP-interest.md)

---

## Idea: Automate Metrics Translation and Process Improvement

Project ID: 210190536 | [Project Link on the Website](https://summer.iscas.ac.cn/#/org/prodetail/210190536?lang=en)

**Project Description:**

CHAOSS currently has a repository hosting for localized metrics: https://github.com/chaoss/translations. These metrics are translated by a fee-based translating service. 

We are maintaining a list of terms for Chinese translations to make it more coherent: https://github.com/chaoss/translations/issues/9 

CHAOSS is releasing new metrics, we wish the translating work be a CI workflow. Ideally, we can call some third-party translation API and build an automated translation and archive process based on GitHub. 

**Knowledge/Skills Involved:** Python, TypeScript, Lua are suggested to know, but can be learned during the process

**Difficulty Level:** High

**Language:** Chinese/English

**Mentors information:**
- Xiaoya Xia <2031361857@qq.com>
- Frank Zhao <frank_zsy@hypertrons.io>

**Aims of the project:**
- You can use GitHub actions to develop the workflow, or develop bots by yourself. A more suggested way is integrating [Hypertrons](https://www.hypertrons.io/#/) as the automation bot.
- The workflow includes translating and archiving them to the [main repository](https://github.com/chaoss/translations) each time new metrics are released under each working group's repository.

**References:**
- https://www.hypertrons.io/#/


## Idea: Developing new community reports components

Project ID: 210190647 | [Project Link on the Website](https://summer.iscas.ac.cn/#/org/prodetail/210190647?lang=en)

**Project Description:**

The template of CHAOSS community report v1: https://github.com/chaoss/community-reports. Right now, it has 4 components. They were powered by Augur and GrimoireLab. The idea is about Implementing more CHAOSS metrics visualization components based on GitHub open source data. 

[Opendigger](https://github.com/X-lab2017/open-digger) is an analysis project that aims to dig into the open source world based on data. The project can provide GitHub coordination log data from 2015 - now, which can be used to realize meaningful CHAOSS metrics that are related to GitHub. You can get some more inspirations from GitHub insight report 2020: http://oss.x-lab.info/github-insight-report-2020-en.pdf

**Knowledge/Skills Involved:** The project requires data analysis skills, and the ability to use visualization tools like ECharts, Ant-V, etc.

**Difficulty Level:** Medium

**Language:** Chinese/English

**Mentors information:** 
- Frank Zhao <frank_zsy@hypertrons.io>

**Aims of the project:**
- Design visualization components that clearly show community status based on CHAOSS metrics
- Develop components and make sure it matches with the overall report style
- Integrate components to the community report

**References:**
- http://oss.x-lab.info/github-insight-report-2020-en.pdf
- https://github.com/X-lab2017/open-digger 
- https://github.com/chaoss/community-reports
- https://chaoss.community/community-reports/ 


## Idea: Expanding and restyling the GrimoireLab tutorial

Project ID: 210190824 | [Project Link on the Website](https://summer.iscas.ac.cn/#/org/prodetail/210190824?lang=en)

[Micro-tasks and place for questions](https://github.com/chaoss/grimoirelab/issues/433)

**Project Description:**

[GrimoireLab](https://chaoss.github.io/grimoirelab) is a powerful open-source platform that provides support for monitoring and in-depth analysis of software projects. It produces a rich set of metrics with data extracted from more than 30 tools related to contributing to Open Source development such as version control systems, issue trackers and forums. These metrics are shown and exploited on Web dynamic dashboards, which can be easily inspected by decision-makers to help them understand the evolution and health of their projects.

The main entry point to learn about GrimoireLab is the [tutorial](https://chaoss.github.io/grimoirelab-tutorial), which provides a walkthrough of the platform and its components. Recently, the community has requested to revamp and expand its content to include additional information such as dashboard customization and management.

**Knowledge/Skills Involved:** Python, Jekyll, and Docker are suggested technology to know, but can be learned during the program.

**Difficulty Level:** Medium

**Language:** English

**Mentors:** Georg Link, Jose Manrique López de la Fuente, Venu Vardhan Reddy Tekula

**Aims of the project:**
- Refactor the content of the tutorial with the [TOC](https://github.com/chaoss/grimoirelab-tutorial/issues/104) proposed in the issue
- Revamp the content of the tutorial. Some content can be taken from [chaoss/grimoirelab](https://github.com/chaoss/grimoirelab#getting-started), [chaoss/grimoirelab-sirmordred](https://github.com/chaoss/grimoirelab-sirmordred#sirmordred-), [Bitergia/c/FAQ](https://gitlab.com/Bitergia/c/FAQ), [jsmanrique/grimoirelab-user-guide](https://github.com/jsmanrique/grimoirelab-user-guide)
- Restyle the tutorial with a new template
- Replace the current images with new ones. Some images can be taken from [jsmanrique/grimoirelab-user-guide](https://github.com/jsmanrique/grimoirelab-user-guide)
- Align the new content with the getting started guides available in the different GrimoireLab components
