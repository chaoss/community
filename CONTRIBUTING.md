# How to Contribute

## What is this document?

This document outlines a generic process of contributing and applies to all CHAOSS repositories. Each repository may have unique guidelines specific to the project.

## Where can I contribute?

Anyone can contribute to CHAOSS on any of our communication channels. See <https://chaoss.community/participate/>.

## Which channel should I use?

### Conversations and high-level contributions (email, call, f2f)

Strategic directions, clarifications of scope, and ideas in an early stage are best discussed on the mailing list, calls, and face-to-face meetings. See <https://chaoss.community/participate/>.

### Bug report and feature request contributions (issue)

Bug reports and specific feature requests are best discussed in an issue on the repository they pertain to.

### Code or document change contributions (GitHub interface)

Changes can be made from within the GitHub user interface. As a non-maintainer, GitHub will create a fork under your name and ask that you create a pull request. The pull request lets the repository maintainers know of your change and provides a space to discuss the change.

Every commit needs a [Developer Certificate of Origin](https://developercertificate.org/) (DCO).
A DCO sign-off is accomplished by writing `Signed-off-by: Your Name <YourName@example.org>` into the commit comment field. This can be automated by using a browser plugin like [scottrigby/dco-gh-ui](https://github.com/scottrigby/dco-gh-ui)

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

At this point you are waiting on the CHAOSS repository maintainers. They will comment on your pull requests
within three business days (and, typically, one business day).

The CHAOSS repository maintainers will report on open issues and pull requests on the [calls and via the mail list][participate] to elicit feedback from the community.

[participate]: https://chaoss.community/participate/

## Who is a CHAOSS repository maintainer?

The README.md of the repository contains a list of who is maintainer. Each CHAOSS repositry brings together different people and they document in the repository specific CONTRIBUTING.md how somone becomes a maintainer on their repository.

## What about releases?

CHAOSS repository maintainers tag commits on the master branch as [releases][rl] (snapshots). Each CHAOSS repository has its own release cadence. Between releases, the master branch is under development.

[rl]: https://help.github.com/articles/about-releases/

## How do we make decisions?

The basic decision making mechanism for CHAOSS is lazy consensus which occurs on the relevant mailing list. Each of the software projects or working groups will try to reach consensus on their decisions, after giving a reasonable opportunity to people contributing in them to express their opinion. When a discussion about a decision happens outside of the mailing list in the periodic calls or other communication channels, a proposal for a decision will be sent to the appropriate mailing list(s). The decision should be finalized on the mailing list using lazy consensus after giving people who were not in the discussion time to review, comment, and participate.

When the issues under discussion are perceived to be of importance to the whole CHAOSS community, the same process will be carried on at the CHAOSS level, using the general periodic calls and other communication means for discussion with the final decision being made on the mailing list using lazy consensus.

If consensus is not reached, the issue may be raised to the CHAOSS board, where consensus and voting may be used to get a final decision on the matter.

In any case, all decisions are subject to the [CHAOSS Charter](project-charter.md).

_Note_: By "lazy consensus" we mean, [as Apache does](http://www.apache.org/foundation/glossary.html#LazyConsensus) a decision-making policy which assumes general consent if no responses are posted within a defined period. For example, "I'm going to commit this by lazy consensus if no-one objects within the next three days." 
