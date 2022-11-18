---
name: Metrics Release Candidate
about: Use this template for new metrics
labels: ['Metrics Candidate Release']

---

This issue is created to collect comments on the <<NAME OF METRIC>> metric

This metric can be found here: <<LINK TO MARKDOWN VERSION OF THE METRIC>>

## CHAOSS Metric Quality Checklist
This checklist is used for new metrics to ensure we follow CHAOSS quality standards and processes. 

### Process

- [ ] Add the new metric to release notes issue in working group repo
- [ ] Update the [Metrics Spreadsheet](https://docs.google.com/spreadsheets/d/1tAGzUiZ9jdORKCnoDQJkOU8tQsZDCZVjcWqXYOSAFmE/edit) to indicate that the metric is under community review.

**When above steps are completed:**

### Content Quality

- [ ] Required headings are filled in
- [ ] If any, ensure links to other CHAOSS metrics work
- [ ] Optional headings that have no content are removed
- [ ] Contributors section lists those contributors that want to be named
- [ ] The name of the metric is the same in all locations

### Technical Requirements

- Message that the metric will be part of the next regular release is at top of page: 

### This metric is a release candidate. To comment on this metric please see Issue [#[put the respective Issue Number here]](URL to issue). Following a comment period, this metric will be included in the next regular release.

- Metric file name is the full metric name and only contains lower case letters and hyphens (“-”) for spaces
- Images are included using markdown and absolute links (as described in the metrics template)
- Images have at least one empty line above and below them
- Ensure images are placed in image folder and followed [naming convention](https://github.com/chaoss/metrics/blob/master/resources/metrics-template.md)
- Ensure tables within metric are converted as images and placed in the image folder (both original MD and screenshotted PNG format) and follow the naming convention
- No HTML code in the metrics markdown.
