# How to Contribute

## What is this document?

This document outlines a generic process of contributing and applies to all CHAOSS repositories. Each repository may have unique guidelines specific to the project.

## Where can I contribute?

Anyone can contribute to CHAOSS on any of our communication channels. See <https://chaoss.community/participate/>.

## Which channel should I use?

### Conversations and high-level contributions (email, call, f2f)

Strategic directions, clarifications of scope, and ideas in an early stage are best discussed on the mailing list, calls, and face-to-face meetings.

### Bug report and feature request contributions (issue)

Bug reports and specific feature requests are best discussed in an issue on the repository they pertain to.

### Code or document change contributions (pull request)

Changes to source code files or documents are best contributed and discussed in pull requests. Please look at the CONTRIBUTING.md files for repository specifics.

In this process, make sure your [GitHub account][ssh] is setup [fork][fork] then locally [clone][clone] the repo:

    git clone git@github.com:<your-username>/<repository>.git

Create a [feature branch][fb] in your local repository:

    git checkout -b <branch>

Make your change and commit the change:

    git add <changed file>
    git commit -m "<description of change>"

Push to your fork on GitHub:

    git push origin <branch>

Then, [submit a pull request][pr] on GitHub to the CHAOSS repository.

[ssh]: https://help.github.com/articles/connecting-to-github-with-ssh/
[fork]: https://help.github.com/articles/fork-a-repo/
[fb]: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
[pr]: https://github.com/thoughtbot/factory_girl_rails/compare/
[clone]: https://help.github.com/articles/cloning-a-repository/

At this point you are waiting on us. We will comment on your pull requests
within three business days (and, typically, one business day).

The CHAOSS maintainers will report on open issues and pull requests on the calls and via the mail list to elicit feedback from the community.

## What about releases?
CHAOSS tags commits on the master branch as [releases][rl] (snapshots). Each project has its own release cadence. Between releases, the master branch is under development.

[rl]: https://help.github.com/articles/about-releases/
