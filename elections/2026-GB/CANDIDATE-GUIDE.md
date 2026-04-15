# 2026 CHAOSS Governing Board Election - Candidate Guide

Thank you for your interest in serving on the CHAOSS Governing Board! This guide will help you understand the nomination process and prepare your candidacy.

For an overview of this election and all related resources, see the [2026 Election README](README.md).

For more information about CHAOSS elections, visit [the elections documentation](https://github.com/chaoss/community/tree/main/elections).

## Election Timeline

- **April 20, 2026**: Public announcement for nominations to open
- **April 23, 2026**: Open Office - 10:00 PST / 13:00 EST (everyone welcome)
- **May 11, 2026**: All candidate nominations due (23:59:59 UTC)
- **May 13, 2026**: Election begins
- **June 10, 2026**: Election closes (23:59:59 UTC)
- **June 15, 2026**: Announcement of results

**Open Office**: An open office session will be held on April 23 at 10:00 PST / 13:00 EST where everyone is welcome to ask questions about the election process, nominations, and voting. This is a great opportunity to ask questions about running for the Governing Board.

## About the Governing Board

The CHAOSS Governing Board is responsible for:
- Setting strategic direction for the CHAOSS project
- Overseeing working groups and software projects
- Managing resources and budgets
- Representing CHAOSS in the broader open source community
- Ensuring the project's sustainability and growth

**This election will fill 6 Governing Board seats** with two-year terms. There is a limit of 2 seats per organization/conglomerate to ensure diverse representation.

For more details about the Governing Board's role and structure, see the [CHAOSS Charter](https://chaoss.community/charter/) and [election mechanics](https://github.com/chaoss/community/blob/main/elections/mechanics-GB.md).

## Candidate Eligibility

To run in this election, you must:

1. **Have been actively participating in CHAOSS** for at least 6 months consistently before the nomination deadline
2. **Receive endorsements from 2 eligible voters** (see [voter eligibility](https://github.com/chaoss/community/blob/main/elections/mechanics-GB.md#voter-eligibility))

There are **no term limits** for Governing Board members, so current board members may run for re-election.

### What Counts as Active Participation?

Active participation includes:
- Working group participation (attending meetings, contributing to discussions)
- Code contributions to GrimoireLab, Augur, or other CHAOSS projects
- Metric development or documentation
- Community building, organizing events, or outreach
- Technical writing or translation
- Any other meaningful contributions to CHAOSS

If you're unsure whether your participation qualifies, please reach out to the election officers (see contact information below).

## The Nomination Process

### 1. Find Your Endorsers

Before you can submit your nomination, you need **2 endorsements from eligible voters**.

- Reach out to CHAOSS community members who are familiar with your work
- Endorsers should be able to verify your contributions and support your candidacy
- Check the [voter eligibility criteria](https://github.com/chaoss/community/blob/main/elections/mechanics-GB.md#voter-eligibility) to ensure your endorsers qualify

### 2. Prepare Your Nomination

Your nomination will be visible to all voters during the election. Use the [nomination template](nomination-template.md) to create your candidate profile.

Your nomination should include:

**Required Information:**
- Your name
- Your GitHub handle (case-sensitive)
- Your organizational affiliation (or "Independent")

**Nomination Statement:**
- **My Contributions to CHAOSS**: Describe your participation in CHAOSS over the past 6 months or longer
- **Why I'm Running**: Explain your vision for CHAOSS and what you hope to contribute as a board member


### 3. Submit Your Nomination

**Deadline: May 11, 2026 (23:59:59 UTC)**

#### Option A: Submit via Pull Request (Recommended)

1. **Fork the repository**: Go to [github.com/chaoss/community](https://github.com/chaoss/community) and click "Fork"

2. **Create your nomination file**:
   - Copy the [nomination-template.md](nomination-template.md) file
   - Name it `candidate-yourhandle.md` (use your exact GitHub handle with correct case)
   - Fill in all sections with your information

3. **Add and commit your file**:
   - Place your file in the `elections/2026-GB/` directory
   - Commit with a clear message like "Add nomination for [Your Name]"

4. **Create a pull request**:
   - Push your changes to your fork
   - Open a pull request to the main CHAOSS community repository
   - In the PR description, include:
     - A brief note about your candidacy
     - Your 2 endorsers' GitHub handles (e.g., "@endorser1 and @endorser2")

5. **Get endorsements**:
   - Your 2 endorsers should comment on the pull request confirming their endorsement
   - Example comment: "I endorse this nomination. @candidate has been an active contributor to CHAOSS and would be an excellent board member."

#### Option B: Request Assistance from Election Officers

**If you're not comfortable with GitHub pull requests**, don't let that stop you from running! Contact the election officers (see contact information below) in private and they will:
- Help you submit your nomination
- Create the pull request on your behalf
- Coordinate with your endorsers

Just provide the election officers with:
- Your completed nomination text
- Your GitHub handle
- Your 2 endorsers' GitHub handles or contact information

#### Important Notes

- **Filename**: Must match your GitHub handle exactly (case-sensitive)
- **Deadline**: Submit before May 11, 2026 (23:59:59 UTC) - late nominations cannot be accepted
- **Visibility**: The contents of your nomination file will be visible to voters in the election system
- **Endorsements**: Must be provided as comments on the pull request by the endorsers themselves

### 4. What Happens Next

After you submit your nomination:

1. **Election officers review**: We'll verify your eligibility and endorsements
2. **PR merge**: Once approved, your nomination PR will be merged
3. **Voter visibility**: Your candidate profile will be visible to voters when the election opens on May 13
4. **Election period**: Voters will rank candidates from May 13 - June 10
5. **Results announcement**: Winners will be announced on June 15

## During the Campaign Period

While there are no formal campaign restrictions, we encourage all candidates to:

- Be respectful of other candidates and community members
- Follow the [CHAOSS Code of Conduct](https://chaoss.community/code-of-conduct/)
- Focus on your own qualifications and vision rather than criticizing others
- Engage authentically with the community

You may:
- Share your nomination in CHAOSS communication channels
- Discuss your vision at community meetings or events
- Answer questions from community members

## Organizational Representation Limits

**Important**: No more than 2 seats may be held by employees of the same organization (or conglomerate).

If election results would place more than 2 employees from the same organization on the board, the lowest vote-getters from that organization will be removed until representation is down to 2.

This ensures diverse organizational representation on the Governing Board.

## Election Methodology

CHAOSS elections use the **Condorcet method** (specifically the **Schulze method**), a ranked choice voting system where:
- Voters rank all candidates in order of preference
- The system analyzes head-to-head matchups between all candidates
- The candidates who win the most pairwise comparisons are elected

This method ensures that elected candidates best represent the community's preferences. For more details, see the [voter guide](VOTER-GUIDE.md#election-methodology).

## Questions

For common questions about nominations, eligibility, and the election process, see the [CHAOSS Election FAQ](https://github.com/chaoss/community/blob/main/elections/election-faq.md).


## Need Help?

If you have questions about the nomination process or candidacy:

- **Public questions:** Ask in the [#election-help](https://chaoss-workspace.slack.com/archives/C0ANNBGUVNY) Slack channel
- **Private concerns:**
  - Send an email to chaoss-election-help@googlegroups.com
  - Or send a private message on Slack to one of the election officers:
    - [Elizabeth Barron](https://chaoss-workspace.slack.com/team/U016ZS8LHLK)
    - [Emma Irwin](https://chaoss-workspace.slack.com/team/U02G54BURL3)
    - [Ali Ok](https://chaoss-workspace.slack.com/team/U05N0MJ9CF2)

## Resources

- **2026 Election Overview**: [README.md](README.md)
- **Election FAQ**: [GitHub - CHAOSS election FAQ](https://github.com/chaoss/community/blob/main/elections/election-faq.md)
- **Nomination Template**: [nomination-template.md](nomination-template.md)
- **Election Mechanics**: [GitHub - CHAOSS election mechanics](https://github.com/chaoss/community/blob/main/elections/mechanics-GB.md)
- **Voter Guide**: [VOTER-GUIDE.md](VOTER-GUIDE.md)
- **CHAOSS Charter**: [CHAOSS governance structure](https://chaoss.community/charter/)
- **Code of Conduct**: [Understanding community values and expectations](https://chaoss.community/code-of-conduct/)
