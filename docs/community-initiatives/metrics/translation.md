---
description: >-
  This sections provides the guidelines regarding the process of translating
  metrics into other various languages.
---

# Translation

## **Adding translations in a new language**

* New metrics that need to be translated may be identified through translation repository issues, working group repository issues, and on the CHAOSS website release page.
* Before adding translations in a new language, it is strongly recommended to have an active community of native speakers of that language.
* To begin with translations into a new language, create a new directory in the [translations repository](https://github.com/chaoss/translations). Name the directory as the language in which the metrics are to be translated.
* Create subdirectories for each working group within the language directory. Note that the name of the sub-directories must match with the repository names of the working groups. \(e.g., wg-common, wg-value, etc.\)
* The structure of the subdirectory for each working group must be the same as specified for the working group repositories on this [page](https://handbook.chaoss.community/community-handbook/community-initiatives/working-groups/wg-repository-structure). Note:- The base files can be ignored except for the README.
* Follow the templates of other files analogous to as specified in the [governance repository](https://github.com/chaoss/governance/tree/master/templates)
* The metrics themselves also follow a [standard template](https://github.com/chaoss/metrics/blob/master/resources/metrics-template.md). Further, it is recommended to create a translated version of this template to ensure headings are consistent across all translated metrics.
* All directories and files must be named in English only.
* When the directory structure for translations in a new language is ready,  the translated metrics can now be added to their respective working group and the focus area.
* The above steps should be completed by the translating community before starting with the translation of the metrics.
* Many of the above requirements are necessary for the [M.A.R.S. release automation](https://github.com/chaoss/MARS) process.

**Note: Optionally, an English - translated language comparison table or glossary can be created to ensure consistent naming of keywords in the translated language.**

## **Updating translations**

![](../../.gitbook/assets/update-translations-flowchart.png)

The working groups keep revising the focus areas and the metrics regularly. Therefore, it is necessary for the translations to be updated as per the current version of the release. The following steps help ensure this:

* The translations should be updated whenever a change takes place in the original metrics including when:
  * A metric is added, updated, renamed, or removed
  * A focus area is added, updated, renamed, or removed
* New metrics that need to be translated may be identified through translation repository issues, working group repository issues, and on the CHAOSS website release page.
* An issue should be created for each metric that needs translation attention \(this may be created by the working group\) The issue should be labeled with the languages it affects.
* The translation community should then investigate the issue and try to accommodate the changes in the translated metrics.
* Optionally, the translation team may compare different versions of the metric. The relevant commit hashes can be used to easily identify the changes via the \`git diff\` command. Git history may be used to see changes to the metric markdown file and identify the relevant commit hashes.
* The issue label for a specific language after it has been applied to metrics/focus areas in that particular language.
* The issue may be closed when the change is implemented in all languages in which the metrics are maintained.

## **Release of translated metrics**

* It is preferable for the translated metrics to get released biannually similar to their English counterparts in the form of a PDF report.
* All metrics undergo a 1-month community review period before the official release. This period should be utilized by the translations team to translate the metrics and share them for review.
* The translations team should update the YAML file in the MARS project when the metrics are ready for release. This serves as the signal to the Release Engineer to generate the release PDF.
* The translations release should ideally happen within two weeks of English metrics release, however, the target for some translation teams may be a simultaneous release.
* The version of the report should be the same as the version of the English report it is based on.
* The version number for the report should be in the format: `YYYY-MM_language-code`
* When the translation team signals to the metrics release team that translated metrics for a specific language are aligned with the English release, the release manager will use the MARS tool to create the release PDF for that language. The release PDF will be available on the CHAOSS website and an official announcement will be made on CHAOSS communication platforms
* The translation team for each language should update and maintain a contributors list that can be added to the Release document

## **Timeline for release of translated metrics**

The translation teams and release team should ensure that the processes outlined below are executed in a timely manner.

* 1 month before the release.
  * Translate new metrics and update existing ones \(identified during the continuous release process\) with the most recent changes
  * The release team will announce on the mailing list that the review period is open
  * Request reviews on Twitter, newsletter, or any other social media platform
  * Translate or Draft any other required documents such as cover page and release notes.
* 1 week before the release
  * The release team will announce that the review period is closed.
  * Prepare the English PDF release 
  * Buffer period \(as long as is needed - translation team for each language will signal when ready\)
  * Prepare the Translated PDF release
* Day of release
  * Announce on all social platforms about the release
  * Celebrate! 🎉

## **Other information**

* The English version of the metrics is original and must be used as the only source during the translation process.
* Presently, the [templates](https://github.com/chaoss/governance/tree/master/templates) are maintained only in English. These templates can be translated into different languages as and when required to ensure consistency among the translations.
* Follow the general conventions related to naming and structure as specified [here](https://handbook.chaoss.community/community-handbook/community-initiatives/working-groups/wg-repository-structure#general-convention)

## 

