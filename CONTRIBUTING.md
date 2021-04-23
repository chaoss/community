# Contributing to CHAOSS
👍🎉 First off, thanks for taking the time to contribute! 🎉👍

## What is this document?

This document outlines a generic process of contributing and applies to all CHAOSS repositories. Each repository may have unique guidelines specific to the project, but this document serves as a primer for what is required when contributing to CHAOSS.   
Use your best judgement, and feel free to propose changes to this document in a pull request

## Who can contribute?

Anyone can contribute to CHAOSS on any of our communication channels. See <https://chaoss.community/participate/> to learn more about how to participate. We are excited to meet first-timers and we are always ready to support you during your contribution journey.

## Which channel should I use?
CHAOSS uses the following channels for contributions:

- Mailing Lists
- Community calls
- Working group calls
- GitHub

## Catch us online

- [CHAOSS on the Web](https://chaoss.community)
- [CHAOSS on GitHub](https://github.com/chaoss)
- [CHAOSS on LFX Crowdfunding](https://crowdfunding.lfx.linuxfoundation.org/projects/a4a43b66-f707-47b4-97cc-484285c274a8)
- [CHAOSS on Open Collective](https://opencollective.com/chaoss) 
- [CHAOSS Podcast](https://podcast.chaoss.community/) 
- [CHAOSS on YouTube](https://youtube.com/c/CHAOSStube) 
- [CHAOSS on Twitter](https://twitter.com/chaossproj)
- [CHAOSS on LinkedIn](https://linkedin.com/company/chaoss/)

### Conversations and high-level contributions (email, call, face to face)

Strategic directions, clarifications of scope, and ideas in an early stage are best discussed on the mailing list, calls, and face-to-face meetings. See <https://chaoss.community/participate/>.

### Bug report and feature request contributions (issue)

Bug reports and specific feature requests are best discussed in an issue on the repository they pertain to. You can do this by creating an issue and explaining what bug you found in the comment section. The conversation moves from there.

### Code or document change contributions (GitHub User Interface)

Changes can be made from within the GitHub user interface. As a non-maintainer, GitHub will create a fork under your name and ask that you create a pull request. The pull request lets the repository maintainers know of your change and provides a space to discuss the change.  

The [CHAOSS Charter](https://github.com/chaoss/governance/blob/master/project-charter.md) requires that contributions
are accompanied by a [Developer Certificate of Origin](http://developercertificate.org) sign-off.  
For ensuring it, a bot checks all incoming commits.  

A DCO sign-off is accomplished by writing into the commit comment field:  

`Signed-off-by: Your Name <YourName@example.org>`   
  
It should be noted that the angled brackets `<` and `>` need to be included with the email.

This can be automated by using a browser plugin like
[DCO GitHub UI](https://github.com/scottrigby/dco-gh-ui).

#### Steps to use the DCO browser plugin
The  [DCO browser plugin](https://github.com/scottrigby/dco-gh-ui) is a handy tool to automatically sign commits created using GitHub. 
To enable this plugin: 

- Go to the plugin page on the [chrome web store](https://chrome.google.com/webstore/detail/dco-github-ui/onhgmjhnaeipfgacbglaphlmllkpoijo).
- Alternatively, you could go to the [firefox addon page](https://addons.mozilla.org/en-US/firefox/addon/scott-rigby/) to add the extension to your browser.
- Once you add the extension, right click on the extension in the toolbar of your browser and select `Options`. 
- A dialog box will open up as shown below. Fill in your GitHub name (not the handle) and email-id. 

- Then, whenever you perform a commit on GitHub, the line `Signed-off-by: Your Name <Youremail>` will automatically appear in the commit description while making changes to a file as shown in the example below. A commit message can be added to the lines above the auto-generated sign-off. 

- Once you perform the commit and send a pull request, the commit will be verified and approved by the DCO bot. 

 This plugin is non-intrusive and works only on GitHub. 

*If you forget to add the sign-off you can also amend a previous commit with the sign-off. For this, you need to clone the repository on your local machine and run `git commit --amend -s`. Because you have pushed your changes to GitHub already you'll need to force push your branch after this with `git push -f`.*

### Code or document change contributions (pull request)

Changes to source code files or documents are best contributed and discussed in pull requests. Please look at the CONTRIBUTING.md files for repository specifics.

In this process, make sure your [GitHub account][ssh] is setup [fork][fork] then locally [clone][clone] the repo:

    git clone git@github.com:<your-username>/<repository>.git

Create a [feature branch][fb] in your local repository:

    git checkout -b <branch>

Make your change and commit the change (NOTE: with `-s` you sign-off on each commit, which is your [Developer Certificate of Origin](https://developercertificate.org/)):

    git add <changed file>
    git commit -s -m "<description of change>"

*If you forget to add the sign-off you can also amend a previous commit with the sign-off by running `git commit --amend -s`. If you have pushed your changes to GitHub already you'll need to force push your branch after this with `git push -f`.*

Push to your fork on GitHub:

    git push origin <branch>

Then, [submit a pull request][pr] on GitHub to the CHAOSS repository.

[ssh]: https://help.github.com/articles/connecting-to-github-with-ssh/
[fork]: https://help.github.com/articles/fork-a-repo/
[fb]: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
[pr]: https://github.com/thoughtbot/factory_girl_rails/compare/
[clone]: https://help.github.com/articles/cloning-a-repository/

### Pull Request Checklist  

- [ ] Check if your code addition will pass both code linting checks and unit tests.  
- [ ] Check if your documentation commits are free from typos.
- [ ] Ensure your commit messages are descriptive. [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/) explains how to write good commit messages.
- [ ] Check the commits and commits messages and ensure they are free from typos. 

At this point, you are waiting on the CHAOSS repository maintainers. They will comment on your pull requests
within three business days (and, typically, one business day).

The CHAOSS repository maintainers will report on open issues and pull requests on the [calls and via the mailing list][participate] to elicit feedback from the community.

[participate]: https://chaoss.community/participate/

## Who is a CHAOSS repository maintainer?

The README.md of the repository contains a list of maintainers. Each CHAOSS repository brings together different people and they document in the repository-specific CONTRIBUTING.md how someone becomes a maintainer on their repository.

## What about releases?

CHAOSS repository maintainers tag commits on the master branch as [releases][rl] (snapshots). Each CHAOSS repository has its own release cadence. Between releases, the master branch is under development.

[rl]: https://help.github.com/articles/about-releases/

## How do we make decisions?

The basic decision-making mechanism for CHAOSS is a lazy consensus that occurs on the relevant mailing list. Each of the software projects or working groups will try to reach a consensus on their decisions, after giving a reasonable opportunity to people contributing to them to express their opinion. When a discussion about a decision happens outside of the mailing list in the periodic calls or other communication channels, a proposal for a decision will be sent to the appropriate mailing list(s). The decision should be finalized on the mailing list using lazy consensus after giving people who were not in the discussion time to review, comment, and participate.

When the issues under discussion are perceived to be of importance to the whole CHAOSS community, the same process will be carried on at the CHAOSS level, using the general periodic calls and other communication means for discussion with the final decision being made on the mailing list using lazy consensus.

If consensus is not reached, the issue may be raised to the [CHAOSS board](https://chaoss.community/about/governing-board/), where consensus and voting may be used to get a final decision on the matter.

In any case, all decisions are subject to the [CHAOSS Charter](project-charter.md).

_Note_: By "lazy consensus" we mean, [as Apache does](http://www.apache.org/foundation/glossary.html#LazyConsensus) a decision-making policy that assumes general consent if no responses are posted within a defined period. For example, "I'm going to commit this by lazy consensus if no-one objects within the next three days." 
