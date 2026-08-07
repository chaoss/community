# Election Officer Guide

This guide is for CHAOSS Governing Board election officers. It captures the end-to-end process, practical tips, and lessons learned from running past elections.

For the formal rules, see [mechanics-GB.md](mechanics-GB.md). This document focuses on the *how* rather than the *what*. For a week-by-week account of how the 2026 election was run, see the [2026 Election Diary](2026-GB/diary.md).

## Before You Start

### Getting Appointed

The Governing Board appoints 2-3 election officers. Officers must:
- Not be running for the GB in that election
- Not be current GB members
- At least one officer should have write access to the `chaoss/community` repository (to merge nomination PRs, update voter lists, etc.). Other officers can contribute via PRs.

### Determine the Number of Seats

Check with the Governing Board to determine how many seats need to be filled. Seats are filled on a staggered schedule (e.g., 6 one year, 7 the next). The GB can confirm the exact number and any changes to the structure.

### Set Up Communication Channels

- **Slack channel**: `#election-help` ([link](https://chaoss-workspace.slack.com/archives/C0ANNBGUVNY)) for public questions. This channel already exists; make sure you have access and it is not archived.
- **Google Group**: `chaoss-election-help@googlegroups.com` for private email. Get added as a member/owner. Ask the previous election officers or a GB member to add you. Test that the group works (can you send and receive?).
- **Coordinate among officers**: Set up a private Slack channel or group DM. Schedule a recurring weekly meeting (30 minutes is enough) to stay aligned.

### Elekto Setup

[Elekto](https://elekto.dev/) is the voting platform. It reads election configuration directly from the GitHub repository. The CHAOSS Elekto instance is hosted and served by Red Hat OSPO — coordinate with them if there are any infrastructure issues.

- **Instance**: https://elections.chaoss.community/
- **GitHub OAuth app**: Elekto uses a GitHub OAuth app for voter authentication. This was set up using the CHAOSS individual GitHub account. If it needs to be recreated or reconfigured, coordinate with whoever controls that account and Red Hat OSPO.
- **GitHub webhook**: Elekto needs a webhook on the `chaoss/community` repo to detect changes to election files. Verify this is still active. If not, consult the [Elekto documentation](https://elekto.dev/docs/).
- **Test before going live**: Run a test election before the real one. Create a test `election.yaml` with a small voter list and short window, verify the full flow (login, voting, exception requests, results), then remove the test election before the real one starts.

## Timeline and Planning

The full process takes roughly **4 months** from first officer meeting to results announcement. The public-facing election window is about 8 weeks, but significant prep work happens before that.

### Phase 1: Preparation (~8 weeks before public announcement)

This phase is internal. The public doesn't see any of this yet.

| When     | Action                                                                     |
|----------|----------------------------------------------------------------------------|
| Week 1-2 | Officers hold kickoff meeting. Agree on timeline, divide responsibilities. |
| Week 1-2 | Confirm number of seats with the GB.                                       |
| Week 2-3 | Start building the voter list (this is the most time-consuming task).      |
| Week 2-3 | Verify Elekto is operational. Run a test election.                         |
| Week 3-4 | Set up or verify communication channels (Slack, Google Group).             |
| Week 3-4 | Draft all election documents (guides, templates, `election.yaml`).         |
| Week 4-5 | First pass of voter list available. Cross-reference all sources.           |
| Week 5-6 | Send the timeline and draft election PR to the GB for review (privately).  |
| Week 6-7 | GB reviews and gives final approval.                                       |
| Week 7   | Merge the election PR. Prepare comms.                                      |
| Week 8   | Public announcement: nominations are open.                                 |

### Phase 2: Nominations and Voting (~8 weeks, public)

| When     | Action                                                                                                                                             |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Day 1    | Public announcement: nominations open. Post on Slack, mailing list, LinkedIn, community meeting.                                                   |
| Week 1   | Hold Open Office session (Q&A about the election, nominations, serving on the GB).                                                                 |
| Week 1-3 | Actively encourage nominations. Send periodic reminders. Use the [nomination encouragement template](email-templates/nomination-encouragement.md). |
| Week 3   | Nomination deadline.                                                                                                                               |
| Week 3-4 | Review and merge all candidate PRs. Verify eligibility and endorsements.                                                                           |
| Week 4   | Voting opens. Announce on all channels.                                                                                                            |
| Week 4-6 | Monitor exception requests. Add approved voters to `voters.yaml`.                                                                                  |
| Week 4-8 | Send periodic reminders to vote (at open, midpoint, and a few days before close).                                                                  |
| Week 6   | Exception request deadline. Do a final voter data pull and add any missing contributors.                                                           |
| Week 8   | Voting closes.                                                                                                                                     |
| Week 8-9 | Verify results, notify candidates privately, then announce publicly.                                                                               |

### Reference Calendar (2026 election)

The 2026 election used this public timeline:
- April 20: Nominations announced
- April 23: Open Office session
- May 11: Nomination deadline
- May 13: Voting opens
- May 27: Exception request deadline
- June 10: Voting closes
- June 15: Results announced

Prep work started in mid-February.

## Setting Up the Election Directory

Create a new directory: `elections/YYYY-GB/` (e.g., `elections/2027-GB/`).

Copy and adapt these files from the previous year's directory:

| File                     | Purpose                            | What to Update                                                                                  |
|--------------------------|------------------------------------|-------------------------------------------------------------------------------------------------|
| `README.md`              | Election overview and contact info | Year, number of seats, officer names and Slack links                                            |
| `election_desc.md`       | Timeline and resource links        | Year, all dates, links                                                                          |
| `VOTER-GUIDE.md`         | How to vote                        | Year, dates, officer contact info. Screenshots can likely be reused if Elekto UI hasn't changed |
| `CANDIDATE-GUIDE.md`     | How to nominate                    | Year, dates, officer contact info, number of seats                                              |
| `nomination-template.md` | Template for candidate PRs         | Year                                                                                            |
| `election.yaml`          | Elekto configuration               | Year, dates, number of winners (`no_winners`), officer GitHub handles (case-sensitive)          |
| `voters.yaml`            | Eligible voter list                | Rebuild from scratch (see below)                                                                |

Do **not** copy candidate files (`candidate-*.md`) or `results.md` from the previous year.

### Getting Board Approval

Before making anything public:
1. Open a draft PR with all the election files.
2. Share the PR privately with the GB for review.
3. Give them a clear deadline for feedback (e.g., 2-3 weeks).
4. Merge once approved.

## Building the Voter List (`voters.yaml`)

This is the most time-consuming part of the process. Start early - at least 6 weeks before the public announcement.

Eligible voters include:

1. **Current GB members**
2. **Working Group chairs** - listed at https://chaoss.community/kb/working-groups/
3. **Software maintainers** - listed in `MAINTAINERS.md` files for GrimoireLab and Augur
4. **GitHub contributors** - anyone with any contribution (commit, PR, issue, review) to any CHAOSS GitHub repository
5. **Community contributions** - people listed in [community-contributions.md](https://github.com/chaoss/community/blob/main/community-contributions.md) for contributions made in the past year

### How to Collect GitHub Contributors

If you have access to a Bitergia instance (e.g., through Red Hat OSPO), that is the easiest way to pull a comprehensive list of contributors across all CHAOSS repos. In 2026, Red Hat OSPO provided the initial voter list using their Bitergia license.

Alternatively, use the GitHub API to pull contributors from all repos in the `chaoss` organization.

In 2026, the initial automated pull produced only ~61 contributors, which was much lower than expected. Self-attestation via `community-contributions.md` was critical for reaching the final count of 247 voters. Encourage community members early and often to add themselves.

### Cleaning the Voter List

After collecting all handles:
- **Remove bot accounts** (e.g., `dependabot`, `greenkeeper`, `allcontributors[bot]`). Review carefully - some bot-like names are real people.
- **Verify accounts exist** - some accounts may have been deleted. Check with `gh api users/HANDLE` and look for 404s.
- **Audit community-contributions.md** - since anyone can add themselves, do a brief audit to prevent ballot stuffing. Verify that additions were made within the past year and represent genuine contributions.
- **Cross-reference with known community members.** Ask GB members and WG chairs if anyone obvious is missing.
- **Deduplicate** - some people may appear from multiple sources.
- **GitHub handles are case-sensitive** - Elekto matches handles exactly. Make sure every handle in `voters.yaml` uses the correct casing as it appears on GitHub.
- **Format as YAML** - the file should be a simple list under `eligible_voters:`.

### Ongoing Voter List Updates

You will need to add voters after the initial list is published:
- People who self-attest via `community-contributions.md` after your initial pull
- People identified through exception requests
- People who contact you directly saying they're missing
- A final data pull near the exception deadline to catch recent contributors

Each update should be a separate PR for traceability. In 2026, multiple rounds of additions were needed throughout the voting period.

## Communications Plan

Election officers are responsible for all election communications. Plan announcements for these key audiences:

### Audiences

1. **Potential candidates** - people who might run for the GB
2. **Voters** - all eligible contributors who should cast a ballot

### Channels

- **Slack** (`#general` and relevant working group channels)
- **CHAOSS weekly community meeting** (ask to have a slot for election updates)
- **LinkedIn** (coordinate with community managers)
- **Mailing list**
- **Blog post** on chaoss.community (for results announcement)

### Communication Touchpoints

| When                                | What                                                              | Audience   |
|-------------------------------------|-------------------------------------------------------------------|------------|
| Nominations open                    | "Nominations are open! Here's how to run."                        | Candidates |
| Open Office session                 | Reminder about the Q&A session                                    | Both       |
| Mid-nomination period               | "Still time to nominate! Here's what serving on the GB involves." | Candidates |
| Few days before nomination deadline | "Last chance to nominate!"                                        | Candidates |
| Voting opens                        | "Voting is now open. Here's how to vote."                         | Voters     |
| Mid-voting period                   | "Have you voted yet? Here's a reminder."                          | Voters     |
| Few days before exception deadline  | "Request an exception if you can't vote."                         | Voters     |
| Few days before voting closes       | "Last chance to vote!"                                            | Voters     |
| Results                             | "Congratulations to the new GB members!"                          | Both       |

### Ideas That Came Up in 2026

- **"Get to know the candidates" activity**: A shared question (e.g., a "big sky" question about CHAOSS's future) that all candidates answer, published before voting opens. Helps voters who don't know all candidates personally.
- **"You're eligible to vote" notification**: Proactively reaching out to everyone on the voter list to let them know they can vote. Not implemented in 2026, but worth considering.

## Nomination Phase

### Announcing the Election

Post the announcement on all channels listed above. Mention it at the weekly community meeting. Share the nomination encouragement template with WG chairs and ask them to reach out to active contributors.

### Open Office Session

Hold at least one open session where community members can ask questions about the election, the nomination process, or serving on the GB. Schedule it early in the nomination period (within the first week). Put it on the CHAOSS community calendar.

### Processing Nominations

When candidates submit PRs:

1. **Verify eligibility**: Has the candidate been actively participating for 6+ months? Check their GitHub activity, working group attendance, or other contributions.
2. **Check endorsements**: The PR must have comments from 2 eligible voters endorsing the candidate. Verify the endorsers are in `voters.yaml`.
3. **Review the nomination file**: Ensure it follows the template and the filename matches `candidate-<github-handle>.md`. The GitHub handle is case-sensitive — it must match exactly.
4. **Get officer quorum**: At least 2 out of 3 officers should review/approve the PR before merging. The last approver merges.
5. **Merge promptly**: Don't let PRs sit. Candidates are anxious about their submissions.

### PR Review Process

In 2026, the officers decided against automating PR permissions (e.g., CODEOWNERS, branch protection) because the setup and testing overhead was too high. Instead, use **soft rules**:

- Watch for PRs in the `chaoss/community` repository during the election period.
- Do not merge any election-related PR without quorum (at least 2 officer approvals).
- The last approving officer merges the PR.
- Make sure no other person with write access merges election PRs without officer review.

If a future team wants to automate this, it would require a separate test repository, multiple GitHub accounts for testing, and careful validation of side effects. The soft-rule approach worked fine for 2026.

### Common Nomination Issues

- **Candidates unfamiliar with Git/PRs**: Offer to create the PR on their behalf. Have them send you their nomination text privately.
- **Wrong filename or format**: Comment on the PR with what needs to be fixed. Be kind.
- **Endorsers don't comment**: Ping the candidate and ask them to remind their endorsers.
- **Candidate overwrites the nomination template**: This happens when candidates edit `nomination-template.md` instead of copying it. Restore the template and rename their file. This happened multiple times in 2026.

## Voting Phase

### Launching the Election in Elekto

The election is configured via the `election.yaml` and `voters.yaml` files in the election directory. Elekto reads these from the GitHub repository.

- **Elekto instance**: https://elections.chaoss.community/
- **Elekto documentation**: https://elekto.dev/docs/

Ensure the `election.yaml` dates are correct and the files are merged to `main` before the voting start date.

### Monitoring During Voting

- Check the `#election-help` Slack channel and the Google Group email regularly.
- Be responsive to exception requests. Process them promptly so people can vote.
- Send periodic reminders to vote (Slack, mailing list, community meeting) - at least at voting open, midpoint, and a few days before close.
- Post in `#general` on Slack that elections are open and if people aren't on the voter list to let you know.

### Handling Exception Requests

Voters who believe they should be eligible but aren't on the voter list can request exceptions through Elekto. **Elekto does not send any notifications for exception requests** — you must log in to the Elekto admin interface periodically to check for new requests. Set a reminder to check at least every few days during the voting period.

When you receive one:

1. Review the stated reason and check if the person has genuine CHAOSS contributions.
2. If approved, add them to `voters.yaml` and merge the change.
3. Notify the requester that they can now vote.
4. Keep exception details confidential.

Exception requests must be submitted before the exception deadline (set in `election.yaml`).

In practice, some people will simply message you on Slack saying they can't vote. Treat these as informal exception requests - verify and add them.

## Tallying Results

After voting closes:

- Elekto calculates results using the Schulze/Condorcet method automatically.
- **Check organizational limits**: No more than 2 winners from the same organization. If this is violated, remove the lowest vote-getter from the over-represented org and replace with the next highest candidate.
- **Verify the results before announcing**.
- Document the results in `results.md` in the election directory.

## Announcing Results

1. **Notify candidates privately** before the public announcement. No one should learn they lost from a public post. Thank every candidate for running.
2. **Create `results.md`** in the election directory listing the winners, their affiliations, and a thank-you note.
3. **Coordinate the public announcement** with CHAOSS community managers for:
   - Blog post on chaoss.community
   - Slack announcement
   - Mailing list
   - LinkedIn / social media
4. **Congratulate the winners** and thank all candidates publicly.

## Lessons Learned and Tips

### General Advice

- **Start early on the voter list.** It takes much longer than you think to compile, clean, and verify. The automated GitHub pull will give you far fewer names than expected.
- **Encourage self-attestation.** Push community members to add themselves to `community-contributions.md` well before the election. This is critical for reaching a representative voter list.
- **Be responsive.** Candidates and voters have questions at all hours. Try to respond within 24 hours.
- **Be kind and patient.** Many candidates are new to open source governance. The PR process can be intimidating.
- **Coordinate among officers.** Use your weekly meetings to divide tasks clearly. Document who is doing what.
- **Document decisions.** When you make judgment calls (exception approvals, eligibility decisions), note the reasoning for consistency.
- **Talk to the board early.** Send timelines and drafts to the GB for review before going public. Give them a clear deadline for feedback.

### Common Pitfalls

- **Bot accounts in the voter list.** Always review the automated contributor list for bots before publishing.
- **Timezone confusion.** Always specify UTC for deadlines. "23:59:59 UTC" is unambiguous.
- **Forgetting to update links.** When copying files from the previous year, search-and-replace all year references and double-check every URL.
- **Late nominations.** Be firm but fair about the deadline. Once voting opens, it is too late.
- **Voter list too small from automated collection alone.** Don't rely only on the GitHub API. Actively promote self-attestation.

## Checklist

### Preparation Phase

- [ ] Get appointed by the GB
- [ ] Schedule recurring officer sync meetings (weekly, 30 min)
- [ ] Confirm number of seats with the GB
- [ ] Set up or verify access to communication channels (`#election-help` Slack, Google Group)
- [ ] Test the Google Group (send and receive)
- [ ] Verify Elekto is operational (GitHub OAuth app, webhook)
- [ ] Run a test election in Elekto
- [ ] Agree on timeline and key dates
- [ ] Start building the voter list
- [ ] Create the election directory (`elections/YYYY-GB/`)
- [ ] Prepare all election documents (README, guides, templates, `election.yaml`)
- [ ] First pass voter list ready - clean and verify
- [ ] Open draft PR with all election files
- [ ] Send PR to GB for private review
- [ ] GB approves - merge the PR

### Nomination Phase

- [ ] Public announcement: nominations are open (Slack, mailing list, LinkedIn, community meeting)
- [ ] Hold Open Office session
- [ ] Send periodic nomination reminders
- [ ] Process candidate nominations as PRs come in (verify eligibility, endorsements, officer quorum)
- [ ] Send "last chance to nominate" reminder before deadline

### Voting Phase

- [ ] Verify all candidate PRs are merged before voting opens
- [ ] Announce voting is open (all channels)
- [ ] Post in `#general` that people should reach out if they're not on the voter list
- [ ] Send voting reminders (midpoint, near close)
- [ ] Process exception requests promptly
- [ ] Do a final voter data pull near exception deadline
- [ ] Send "last chance to vote" reminder before close

### Results Phase

- [ ] Verify results (including organizational limits)
- [ ] Notify all candidates privately (winners and non-winners)
- [ ] Create `results.md` in the election directory
- [ ] Coordinate public announcement (blog, Slack, mailing list, LinkedIn)

## Resources

- [Election Mechanics](mechanics-GB.md) - Formal rules and procedures
- [Election FAQ](election-faq.md) - Frequently asked questions
- [Nomination Encouragement Template](email-templates/nomination-encouragement.md)
- [Elekto Documentation](https://elekto.dev/docs/)
- [Elekto Platform](https://elections.chaoss.community/)
- [CHAOSS Charter](https://chaoss.community/charter/)
- [Knative Community Elections](https://github.com/knative/community/tree/main/elections) - Used as inspiration for the CHAOSS election process
- [2026 Election Diary](2026-GB/diary.md) - Detailed log of how the 2026 election was run
