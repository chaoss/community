# CHAOSS Metrics Release

| ⚠️ The Handbook moved to: https://handbook.chaoss.community/ |
|---|

The version number is `YYYY-MM` of the release date. Continuous Metric Contributions do not get a separate version number.

## Continuous Metric Contribution

The goal is to have short cycles of feedback and to get metrics out sooner.

1. Coordinate release of metric through [release tracking spreadsheet](https://docs.google.com/spreadsheets/d/1tAGzUiZ9jdORKCnoDQJkOU8tQsZDCZVjcWqXYOSAFmE/edit#gid=0)
2. Decide in a working group that a metric is ready for release.
3. Create a release notes issue within the working group repository and update information for each new metric released. This issue will be used to create the regular release cadence release notes.
4. Create an issue for collecting feedback on that metric before release.
5. Include a message in the metric mark down file that the metric will be part of the next regular release. The message should be at the top metric markdown file using the following format:

    ###This metric is a release candidate
    To comment on this metric please see [Issue #xx](xxxxxxxxxxxxxxx)
    Following a comment period, this metric will be included in the next regular release.

6. Add metric to metric page with a "under review" tag and link to the feedback issue.
7. Add an item on the **Release History** page in the _Continuous Metric Contributions Since Last Release_ section stating that the metric was added.
8. Announce the new metric on the mailing list and point to the issue and the markdown page for feedback. Update community on weekly zoom call.
9. Address feedback in issue and through edits to the markdown page.
10. The metric stays under review until after the next regular release

## Regular Release

The regular release is when we update the version number, update the full release notes, and make a big announcement. These releases occur one to two times a year and may correspond with the dates for CHAOSScon North America and Europe.

Timeline:
* 2 months before release
  * Decide on a release date, coordinate with working groups
* 1 month +1 week before release
  * Finalize which metrics to include in the release
  * All metrics should be prepared as CMC process described above
  * Add information on the /metric page about the review period and planned release deadline
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
* Release Engineer cleans up `/metrics` by removing everything not needed in final release
* Release Engineer cleans up the release notes page 
* Release Engineer creates a PDF of the release
* Release Engineer links the PDF on the `/metrics` and release notes page


### Prepare the PDF release

* The PDF is created from the website.
  * Make sure to not print menu, footer, "to-top" or any other elements that we don't want in the PDF
  * Here is a [Tampermonkey](http://www.tampermonkey.net/) user script that does most of it: [CHAOSS Metric print clean (Tampermonkey).user.js](https://drive.google.com/file/d/1y1uh5aeVbzR4CDGbQQJTdSb2Cnywk3OI/view?usp=sharing)
* The Metrics are saved as PDFs from the browser (Chrome, print).
  - Name the files in order `#) Metric Name.pdf` (the user script will help with naming the pages like this)
* The `CHAOSS Metrics by Working Groups and Focus Areas` pages are the /metrics page saved as PDF
  - Remove the list of contributors and copyright notice from the bottom, they will be in the front-matter
  - Name the file `CHAOSS Metrics by Working Groups and Focus Areas.pdf`
* Create the front-matter using the [Word Document](https://drive.google.com/file/d/1xoWpNPO95n2V1l4rWS7pIHfoQiAUPtcl/view?usp=sharing)
  - update all of the information
  - save as PDF with any name
* Create the License information using the [Word Document](https://drive.google.com/file/d/1xr8YmxFKt12L1mRX8dAODQHH-f_vnLIl/view?usp=sharing), update the year for the copyright
  - Name the file `The MIT License.pdf`

Above steps should create the following files:
* The front-matter PDF
* `CHAOSS Metrics by Working Groups and Focus Areas.pdf`
* `#) Metric Name.pdf` for each metric
* `Release History.pdf`
* `The MIT License.pdf`

Merge the files (except the front-matter) in the order listed above
* Use the open source [PDFsam Basic](https://github.com/torakiki/pdfsam)
* Merge settings
  - YES: Add a footer
  - Bookmarks handling: `Create one entry for each merged document`
  - Table of contents: `Generate from file names`

After creating the merged document, add the front-matter
* If you use PDFsam again, make sure to change the settings:
  - NO: Add a footer
  - Bookmarks handling: `Retain bookmarks`
  - Table of contents: `Don't generate`
  
