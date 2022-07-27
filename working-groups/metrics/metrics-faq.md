# Metrics FAQ

## **When are CHAOSS Metrics Released in English?**

* Metrics are continuously released \(this includes edits to existing metrics\) in English. During that time period, any metric may be edited \(they are not static\). 
* The English version of the metrics is officially released in April and October \(approximately 6 months apart\). The official release is preceded by a 30 day review period. When the metrics release candidates go into the 30 day review period, they are frozen and no edits are made. Following the review period, they may be edited prior to release to address comments from the review. The released metrics are a snapshot in time. 
* Following the official metrics release, all metrics can be edited for the next release as part of the continuous release process. Changes to the metrics are kept track of in working group release notes issues and the individual metrics release candidate issues.



## **How should the English metrics release team signal a metric needs to be translated?**

* The working groups need to make sure that the `Metric Release Notes` issue in the working groups’ repository is continuously updated with the latest changes in metrics. This will give an overview of all the changes that are occurring during a release cycle.
* Working groups need to create an issue for each metric that has been created or edited - labeled as `Metrics Candidate Release`. This can signal that a metric needs to be translated.
* Working groups or the release team need to create a corresponding issue in the translation repo that links to the individual Metrics Release Candidate issue. This issue is not targeted towards a specific language community but can be used by the individual language communities to coordinate work. The issue should be labeled with all applicable language tags.
* The release manager will add the `under review` label to the English Metrics Release Candidates on the CHAOSS website. This also signals that a metric needs to be translated. ****

\*\*\*\*

## **How do the translation teams know what metrics need to be translated?**

* The first place the translation team should look is in the translation repository issues \(all metrics that have been edited should have an issue created by the working group that created or edited a metric\). Metrics that need attention should have a language label attached. 
* Additionally, the translations team could refer to the working groups’ `Metric Release Notes` issue. Example: - [https://github.com/chaoss/wg-common/issues/106](https://github.com/chaoss/wg-common/issues/106)\) and the `Metrics Candidate Release` labels in the working group repositories for guidance on which metrics may need to be translated during a release cycle.
* The translations team could also look for the metrics with the label ‘under review’ on the website, which indicates that the metric was added/updated after the previous release. 
* **Note: The metrics are prone to changes during the continuous release process and following the review period.**

\*\*\*\*

## **What is the lifecycle of the translation release process in comparison to English release?**

* The release for translated metrics should happen within 2 weeks of the English metrics release. A simultaneous release is ideal.
* All metrics undergo a 30-day community review period before the official release. This period should be utilized by the translations team to translate the metrics and share them for review.
* The translated metrics should be released only when the translation team signals that the metrics are ready.
* The review period for the translated metrics should follow the same timeline as the English review period.



## **How do the translation teams signal that the translations are ready for release?**

* Translation teams should remove the language tag from the translation repository issue when translation work has been completed for that language.
* The YAML file used as the primary input for MARS can be used to signal that the translations are ready. The translations team can update the YAML file with new metrics signaling that metrics are ready to be released. As an example: [https://github.com/chaoss/MARS/blob/main/automation/active\_user\_input/chinese\_working-groups-config.yml](https://github.com/chaoss/MARS/blob/main/automation/active_user_input/chinese_working-groups-config.yml) 
* The translation team should inform the release team that they are ready for the release \(by email, chat, or in Zoom Meetings\)



## **How are CHAOSS metrics releases versioned?**

* The versioning of the PDFs should be done in the format - `YYYY-MM_language-code`. Example - \``2021-09_EN`, `2022-03_CN`
* The release version for the translations PDF should be the same as the English metrics PDF used as the basis for translations.

