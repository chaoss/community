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
9. Create a release notes issue within the working group repository and update information for each new metric released. This issue will be used to create the regular release cadence release notes.

## Regular Release

The regular release is when we update the version number, update the full release notes, and make a big announcement. These releases occur one to two times a year and may correspond with the dates for CHAOSScon North America and Europe.

1. Coordinate between working groups that a new release is coming.
2. Each working group completes the “Continuous Metric Contribution” process for all of the metrics it wants to include in the release.
3. On a set date, all metrics that successfully completed the “Continuous Metric Contribution” process will be included in the next release.
4. Remove the “will be included in next release” label on new metrics markdown pages and on the website.
5. Create a GitHub release label (process is similar to creating a release branch) for all metrics that completed the “Continuous Metric Contribution”. This release label will replace the working markdown page the website was using during the continuous release period, creating a static version of the metric. The website will be edited to point to this static markdown page.
6. The release notes will be updated - based on each of the working groups release issues - on the website to state that all changes are part of the new release. 
7. The release gets a new version number.
8. Produce a PDF of the released metrics for archiving the metric release version.
