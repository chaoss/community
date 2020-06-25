# CHAOSS Metrics Release

The version number is `YYYY-MM` of the release date. Continuous Metric Contributions are versioned `YYYY-MMx` to just add an `x`, which is a lower-case letter starting with `a` to indicate that a change was made after the release.

## Continuous Metric Contribution

The goal is to have short cycles of feedback and to get metrics out sooner.

1. Coordinate release of metric through [release tracking spreadsheet](https://docs.google.com/spreadsheets/d/1tAGzUiZ9jdORKCnoDQJkOU8tQsZDCZVjcWqXYOSAFmE/edit#gid=0)
2. Decide in a working group that a metric is ready for release.
3. Merge metric into the working group repository.
4. Include inside the metric mark down file - a message that it will be part of the next regular release. The message should be at the top metric markdown file using the following format:

    ###This metric is a release candidate
    The 30 day comment period for this metric begins on xx/xx/xxxx and ends on xx/xx/xxxx.
    To comment on this metric please see [Issue #xx](xxxxxxxxxxxxxxx)
    Following the comment period this metric will be included in the next regular release.

5. Create an issue for collecting feedback before release. Please include a link to the metric markdown file and the dates for the comment period.
6. Announce a 1-month feedback window on the mailing list and point to the issue and the markdown page. Update community on weekly zoom call.
7. Address feedback in issue and through edits to the markdown page.
8. Following comment period and edits, update the website to include the new metric. The website release will include the new metric with a label that it is ready for release. The link to the metric will point towards the working metric markdown page. Note: this means that the metric information displayed on the website may still be edited prior to the regular release.
9. Add an item on the **Release History** page in the _Continuous Metric Contributions Since Last Release_ section stating the date and what metric was added.
10. Create a release notes issue within the working group repository and update information for each new metric released. This issue will be used to create the regular release cadence release notes.

## Regular Release

The regular release is when we update the version number, update the full release notes, and make a big announcement. These releases occur one to two times a year and may correspond with the dates for CHAOSScon North America and Europe.

Timeline:
* 2 months before release
  * Decide on a release date, coordinate with working groups
  * Complete previously started CMCs but hold further metrics for release 
* 1 month +1 week before release
  * Finalize which metrics to include in the release
  * Open issues for all new metrics and reopen CMC metrics for further review
  * Create a Metric Release Candidate page `metrics-rc` (see below)
    * Create all metric pages
    * Link to issues for comments
  * Announce **Review Period** on mailing list
  * Working Groups review and respond to comments as the come in
  * Request reviews in newsletter, Twitter, all community calls during review period
  * Working groups draft release notes
* 1 week before release
  * Announce on mailing list that review period is closed
  * Prepare the final release (see below)
    * Prepare the PDF release
    * Prepare release notes
    * Replace /metrics page with new release
* Day of release
  * All the work was done before
  * Announce on mailinglist and Twitter and all other channels
  * Celebrate!


### Create a Metric Release Candidate page

These steps are for the Release Engineer:

* Duplicate `/metrics` to `/metrics-rc`
  * Add timeline of review period and request for review at top of `/metrics-rc`
  * Open an issue for overall feedback in `chaoss/metrics` repository and link to it at the top of `/metrics-rc` page
* Add new metrics to website under their final url (metrics do not have a release candidate URL)
* For all new metrics, CMC metrics, and substantially changed metrics
  * Website pulls from master branch
  * Open issues for comments or reopen CMC issues
  * For CMC metrics: Remove the “will be included in next release” label on new metrics markdown pages and on the website
  * On the metric page, include a request for review with link to issue for comments
  * Highlight them on the `/metrics-rc` page
  * Add link to issue for comments on `/metrics-rc` page
* Update release notes with the text prepared by working groups. Merge CMC release notes into full release, there needs to be no difference or mention of CMC.

Text to include on top of every metric that is open for review:

    ### This metric is a release candidate
    The 30 day comment period for this metric begins on xx/xx/xxxx and ends on xx/xx/xxxx.
    To comment on this metric please see [Issue chaoss/wg-xxxxx#xx](xxxxxxxxxxxxxxx)
    Following the comment period this metric will be included in the regular release.

### Prepare the final release

* Determine release version number because it will be used for several steps
* Extend list of contributors to include those who contributed to the new and previous releases
* Working Groups respond to all comments in the issues and close them
* Working Groups merge or close all pull requests related to the release
* Working Groups remove the request for review from the top of all metrics
* Release Engineer creates a release tag in all working groups to freeze metrics for release
  * Tag name: release<versionnumber>
  * Description: Release notes for that working group
* Release Engineer updates metric pages to pull from release tag
* Release engineer cleans up `/metrics-rc` by removing everything not needed in final release
* Release Engineer transitions `/metrics-rc` to `/metrics`, replacing the old release
* Release Engineer cleans up the release notes page 
* Release Engineer creates a PDF of the release
* Release Engineer links the PDF on the `/metrics` and release notes page
