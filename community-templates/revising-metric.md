---
name: Revising a Metric
about: Use this template for revising a CHAOSS metric
labels: 'Revising Metic'

---

### Name of the Metric Being Revised
<!-- Provide the name of metric and the link to the metric markdown file. -->


### Link to Original Metric Release Issue
<!-- Provide the GitHub issue link associated with the original metric release. -->


### Specific Metric Details that Require Attention
<!-- Using a list, explain specific parts of the metric that you recommend should be revised. -->

- Item 1
- Item 2
- Item 3


### Checklist 
<!-- This checklist is used for revised metrics to ensure we follow CHAOSS quality standards and processes. Below checklist items don’t have to be completed all at once: create the metric release candidate issue first and then start working on the checklist. -->

#### Process
*The revision process should address issues related to copyediting, correct template _structure, _appropriate_ links,_ and updated language. If substantial changes are made to the definition of a metric during the revision process, the working should determine if the edits warrant sending the metric through the full review and release process.*

- [ ] Create the “revising metric” labeled issue in the authoring WG’s repo for comments during review period
- [ ] Create pull request of revised metric to WG’s repo (after checking Content Quality and Technical Requirements below)
- [ ] Create issue in [CHAOSS/Translations repository](https://github.com/chaoss/translations) to kick-off translation to other languages (please use the the translation issue template)
- [ ] - [ ] Update the [Metrics Spreadsheet](https://docs.google.com/spreadsheets/d/1tAGzUiZ9jdORKCnoDQJkOU8tQsZDCZVjcWqXYOSAFmE/edit) to indicate that the metric is revised metric or is under review
*If the metric is under review*
- [ ] Add the metric revision to release notes issue in working group repo 
- [ ] "Metric Candidate Release" label added to the metric release candidate issue when fully ready for release

**When above steps are completed:**

- [ ] Announce new/updated metric on mailing list, newsletter, community Zoom call, and Twitter. This can be coordinated with the community manager and can be done as a collective of all revised metrics from the CHAOSS community. 

#### Content Quality (check all that apply)

- [ ] Date of last review has been added to the revised metric at the bottom of the markdown file (month/year)
- [ ] Formatting changes have been made 
- [ ] Minor editorial changes have been made 
- [ ] Major editorial changes have been made (consider sending this through the full review and release process)
- [ ] **Metric adheres to the current [metrics template](https://github.com/chaoss/community/blob/main/templates/metric-template.md)**
- [ ] Metric name has changed and necessary updates are made to the WG README table and metrics tracking spreadsheet

#### Technical Requirements for any Revisions

- [ ] Metric file name is the full metric name (and the name is the same everywhere) and only contains lower case letters and hyphens (“-”) for spaces
- [ ] Images are included using markdown and absolute path links (as described in the metrics template)
- [ ] Images have at least one empty line above and below them
- [ ] Images are placed in image folder and followed [naming convention](https://github.com/chaoss/community/blob/main/templates/metric-template.md)
- [ ] If new a focus area is created, ensure focus area is added to wg repo readme and focus area folder readme
- [ ] There is no HTML code in the metrics markdown file
