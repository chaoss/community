# 2026 Election Diary

This is a log of how the 2026 CHAOSS Governing Board election was run, written for future election officers. It captures decisions, issues, and what we learned along the way.

**Election Officers**: Elizabeth Barron, Emma Irwin, Ali Ok

## Feb 19 - Kickoff

First meeting with all three officers. Key decisions and open questions:

- **Platform**: Elekto, reading config from the `chaoss/community` GitHub repo.
- **Seats**: 6 seats to be filled (confirmed with the GB).
- **Voter eligibility**: Per [mechanics-GB.md](../mechanics-GB.md). Open question on whether people can vote without a GitHub account - decided no, since Elekto requires GitHub OAuth. Exception process available for case-by-case handling.
- **Voter list**: Asked Red Hat OSPO (via Cali Dolfi) to pull the voter list using their Bitergia license. Also needed a list of known contributors and cross-referencing with other sources.
- **Candidate verification**: At least 2 out of 3 officers must approve each candidate PR before merging.
- **Inspiration**: Used [Knative community elections](https://github.com/knative/community/tree/main/elections) as a template for file structure and process.

Work was split among officers: community outreach and board communication, comms plan and FAQ, and Elekto setup and technical work.

## Feb 26 - Elekto Setup and Timeline

- GitHub OAuth app for Elekto created using the CHAOSS individual GitHub account.
- GitHub webhook for Elekto configured on the repo.
- Drafted initial timeline. Dependencies identified: voter list, repo setup, Elekto operational, documentation.
- Started creating election documentation, taking heavy inspiration from Knative.

## Mar 5 - Testing and Comms Plan

- Ran through Elekto: tested exception requests, nominations, voting, and concluding an election.
- Started drafting the comms plan (audiences: potential candidates and voters; channels: Slack, LinkedIn, blog, mailing list).
- Created the FAQ document and email templates folder with the nomination encouragement template.
- Shared the timeline with the Board.
- Sent a generic heads-up message to the community.
- Began pulling voter data from GitHub.

## Mar 12 - Voter Guide Started

- Realized we needed a detailed voter guide with screenshots (Elekto's UI is not immediately intuitive).
- Also needed a candidate guide explaining how to create the markdown nomination file.
- Added clarifications to the FAQ: passphrase is optional, "no opinion" option, rank #1 = first choice, link to Condorcet method on Wikipedia.
- Started setting up the Google Group for shared inbox and the `#election-help` Slack channel.

## Mar 26 - Voter Data Challenges

- Received initial voter data - only ~61 people from the data pull. Much lower than expected.
- Self-attestation via `community-contributions.md` became critical for reaching a reasonable voter count.
- Discussed how to validate the voter list - no clear automated approach, relied on cross-referencing known community members.
- Tested publishing results on Elekto.
- Timeline was slightly behind but nothing was blocked.

## Apr 2 - Board Check-In

- Reached out to the Board to confirm the election was happening (not being postponed).
- Also asked if the Board wanted to extend the period for being considered "active" given the small voter list.
- Waited for the green light from the Board before creating the official election PR.

## Apr 9 - Documents Coming Together

- Opened PRs for voter guide, election configuration, candidate guide, and nomination template.
- Compared FAQ with voter guide to avoid duplication.
- Set up the Google Group mailing list and calendar entry for Open Office.
- Prepared materials for the Open Office session.
- Posted about the election on LinkedIn.

## Apr 30 - Date Adjustment

- Realized the 2-day gap between nomination close (May 11) and voting open (May 13) was too tight.
- Discussed changing voting-open to May 18 for more buffer.
- June 10 close date still gives 3+ weeks of voting, which is enough.
- (Note: In the end, we kept May 13 as the voting open date. Future officers should consider a longer gap.)
- Discussed a "get to know the candidates" activity - a shared question about CHAOSS's future that all candidates answer. Good idea but didn't fully implement.
- Discussed sending a "you're eligible to vote" email to all voters. Didn't implement but worth considering for next time.
- Planned a test election run in Elekto.

## May 14 - Voting Open, Voter List Issues

- Voting opened on May 13.
- Several people reported they weren't on the voter list. Added them manually to `voters.yaml`.
- Posted in `#general` that elections are open and to let us know if anyone is missing from the list.
- Multiple rounds of voter list updates needed throughout the voting period.

## Nomination Issues We Hit

- Several candidates edited `nomination-template.md` directly instead of copying it. Had to restore the template and rename their files each time.
- One candidate's affiliation needed fixing after merge.
- Endorsements sometimes came slowly - had to ping candidates to remind their endorsers.
- Some candidates needed help with the PR process.

## Results

- Voting closed June 10.
- Results announced June 15.
- 8 candidates ran for 6 seats.
- 6 winners elected. See [results.md](results.md).
- Notified candidates privately before public announcement.
- Coordinated blog post on chaoss.community.

