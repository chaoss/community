# Handbook usage

| ⚠️ The Handbook moved to: https://handbook.chaoss.community/ |
|---|


## History of the handbook

The handbook started two years after the CHAOSS project was established. We knew that undocumented processes and implicit knowledge were hindering new members from contributing and caused for unnecessary coordination. The handbook was created to capture the roles, responsibilities, and processes within the CHAOSS project and to make this knowledge available to everyone.


## Advantages

At CHAOSS our handbook is new and keeping it relevant is an important part of everyone's job. It is a vital part of who we are and how we communicate. We established these processes because we saw these benefits:

1. Reading is much faster than listening.
1. Reading is async, you don't have to interrupt someone or wait for them to become available.
1. Recruiting is easier if people can see what we stand for and how we operate.
1. Retention is better if people know what they are getting into before they join.
1. On-boarding is easier if you can find all relevant information spelled out.
1. Teamwork is easier if you can read how other parts of the community work.
1. Discussing changes is easier if you can read what the current process is.
1. Communicating change is easier if you can just point to the diff.
1. Everyone can contribute to it by proposing a change via a pull request.


## Flow structure

1. A (process) problem comes up, frequently in an issue or chat.
1. A proposal is made in a pull request to the handbook.
1. Once merged, the change is announced by linking to the diff in the pull request or commit. Major ones are put in the agenda of the monthly call. Medium ones are posted on the mailing list for visibility, with a one line summary of the change. If there was an issue, close it out with a link to the diff.


## Why handbook first

Documenting in the handbook before taking an action may require more time initially because you have to think about where to make the change, integrate it with the existing content, and then possibly add to or refactor the handbook to have a proper foundation. But, it saves time in the long run, and this communication is essential to our ability to continue scaling and adapting our organization.

This process is not unlike writing tests for your software. Only communicate a (proposed) change via a change to the handbook; don't use a presentation, email, chat message, or another medium to communicate the components of the change. These other forms of communication might be more convenient for the presenter, but they make it harder for the audience to understand the context and the implications for other potentially affected processes.

Having a **"handbook first"** mentality ensures there is no duplication; the handbook is always up to date, and others are better able to contribute.


## Handbook guidelines

Please follow these guidelines and remind others of them.


### How we use the guide every day

1. Most guidelines in this handbook are meant to help, and unless otherwise stated, are meant to help more than being absolute rules. Don't be afraid to do something because you don't know the entire handbook, nobody does. Be gentle when reminding people about these guidelines. For example say, "It is not a problem, but next time please consider the following guideline from the handbook."
1. If you ask a question and someone answers with a link to the handbook, they do this because they want to help by providing more information. They may also be proud that we have the answer documented. It doesn't mean that you should have read the entire handbook, nobody knows the entire handbook.
1. If you need to ask a community member for help, please realize that there is a good chance the majority of the community also doesn't know the answer. Be sure to **document** the answer to radiate this information to the whole community. After the question is answered, discuss where it should be documented and who will do it. You can remind other people of this request by asking "Who will document this?"
1. When you discuss something in chat always try to **link** to a URL where relevant. For example, the documentation you have a question about or the page that answered your question. You can remind other people of this by asking "Can you please link?"
1. Remember, the handbook is not what we hope to do, what we should formally do, or what we did months ago. **It is what we do right now.** Make sure you change the handbook in order to truly change a process. To propose a change to a process, make a pull request to change the handbook. Don't use another channel to propose a handbook change (e.g., email, Google Doc, or weekly call).
1. The handbook is the process. Any sections with names like 'process', 'policies', 'best practices', or 'standard operating procedures' are an indication of a deeper problem. This may indicate a duplication between a prose description of a process and a numbered list description of the same process that should be combined in one description of the process.
1. When communicating something always include a link to the relevant (and up-to-date) part of the **handbook** instead of including the text in the email/chat/etc. You can remind other people of this by asking "Can you please link to the relevant part of the handbook?"


### How to change or define a process

1. To change a guideline or process, **suggest an edit** in the form of a pull request. After it is merged you can talk about it during the weekly call if applicable. You can remind other people of this by asking "Can you please send a pull request for the handbook?"
1. Communicate process changes by linking to the **merged diff** (a commit that shows the changes before and after). If you are communicating a change for the purpose of discussion and feedback, it is ok to link to an **unmerged diff**. Do not change the process first, and then view the documentation as a lower priority task. Planning to do the documentation later inevitably leads to duplicate work communicating the change and it leads to outdated documentation. You can remind other people of this by asking "Can you please update the handbook first?"
1. Like everything else, our processes are always in flux. Everything is always in draft, and the initial version should be in the handbook, too. If you are proposing a change to the handbook, whenever possible, **skip the issue and submit a pull request**. (Proposing a change via a pull request is preferred over an issue description). Mention the people that are affected by the change in the pull request. In many cases, pull requests are easier to collaborate on since you can see the proposed changes.
1. **If something is a limited test** to a group of users, add it to the handbook and note as such. Then remove the note once the test is over and every case should use the new process.
1. If someone inside or outside CHAOSS makes a good suggestion invite them to add it to the handbook. Send the person the url of the relevant page and section and offer to do it for them if they can't. Having them make and send the suggestion will make the change and will reflect their knowledge.
1. When you submit a pull request, make sure that it gets merged quickly. Making single, small changes quickly will ensure your branch doesn't fall far behind master, creating merge conflicts. Aim to make and merge your update on the same day. Mention people in the pull request. If you get a suggestion for a large improvement on top of the existing one consider doing that separately. Create an issue, get the exiting pull request merged, then create a new pull request.
1. If you have to move content have a pull request that moves it and does nothing else. If you want to clean it up, summarize it, or expand on it do that after the moving pull request is merged. This is much easier to review.
1. Try to **add the why of a handbook process**, what is the goal, what is the inspiration for this section. Adding the why makes processes easier to change in the future since you can evaluate if the why changed.


### Style guide and information architecture

1. **Single Source of Truth** Think about the information architecture to eliminate repetition and have a Single Source of Truth (SSoT). Instead of repeating content cross-link it (each text has a hyperlink to the other piece). If you copy content please remove it at the origin place and replace it with a link to the new content. Duplicate content leads to having to update it in multiple changes, which is a lot of work and very easy to forget. If you forget one of the pieces of content is out of date.
1. Make sure to always cross-link items if there are related items (elsewhere in the handbook, in docs, or in issues).
1. The handbook is **organized by function and result** to ensure every item in it has a location and owner to keep it up to date. It's essential that we adhere to this hierarchy and that we not maintain separate structures for training materials, videos, or other documentation.
    * At times, a change of perspective may be desired. In those cases, link to relevant sections of the handbook liberally.
    * Avoid unstructured content based on formats like FAQs, lists of links, resource pages, glossaries, courses, videos, tests, or how-to's. These are very hard to keep up-to-date and are not compatible with organization per function and result.
    * Instead, put the answer, link, definition, course, video, or test in the most relevant place. Use descriptive headers so that people can easily search for content.
    * That said, please mix *formats* where and when appropriate in the handbook, even within a single page. Utilizing multiple formats can be valuable, and different people may prefer certain formats over others.
    * Worry only about the organization **per function and result**, not about how the page will look if you embed varying types and formats of content.
1. **Use headers liberally**. If a page includes more than two headers (especially if it's larger than a single "screen"), add a Table of Contents (ToC).
    * Headers should have normal capitalization: don't use [ALL CAPS](https://en.wikipedia.org/wiki/All_caps) or [TitleCase](http://www.grammar-monster.com/glossary/title_case.htm)).
    * Before a header, leave two blank lines; after a header, leave one blank line; this is [not required in the standard](http://spec.commonmark.org/0.27/#example-46), but it is our convention.
1. **KISS principle** Keep your handbook pages short and succinct. Eliminate fluff and get right to the point with the shortest possible wording.


### Scope of this handbook

* All documentation that also applies to code contributions from the wider community should be in the GitLab CE project (for example in [CONTRIBUTING](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md) or the [code review guidelines](https://docs.gitlab.com/ee/development/code_review.html)), not the Handbook, which is only for team members. Read more in the [Documentation](../documentation/) section of the Handbook.
* The handbook is for things concerning current and future GitLab team members only. If something concerns users of GitLab, it should be documented in the [GitLab documentation](https://docs.gitlab.com/), the [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit), the [CONTRIBUTING file](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md) or the [PROCESS file](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/PROCESS.md).

## Attribution to GitLab's Handbook

The idea of the handbook originated from [GitLab's Handbook](https://about.gitlab.com/handbook/). In the spirit of open source, we have copied some passages from GitLab's Handbook.
