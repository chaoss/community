---
description: >-
  Working Groups that define metrics need to follow the repository structure
  outlined here
---

# WG Repository Structure

The goal of this document is to describe a uniform structure that CHAOSS Working Groups are currently using for developing metrics. The outcome of this standardizing Working Group repository structure is less overhead for community members moving between WGs and a consistent expectation for new members.

## Naming Convention

Below mentioned is the standard naming covention followed by all Working Group repositories -

### Base Files

* `/README.md` - describes WG, informs about getting engaged, shows off work, meeting information
* `/LICENSE.md` - default always MIT in accordance with Charter
* `/CONTRIBUTING.md` - describes the technicalities of engaging with the WG through GitHub; explain the DCO sign-off
* `/code-of-comnduct.md` - copy of CHAOSS’s Code of Conduct
* `/.gitignore` - for system files like .DS\_Store
* `/.github/FUNDING.yml` - information for where to donate to CHAOSS
* Other files may exist in the base of WG repositories

### Focus areas

* `/focus-areas/` - directory for all metrics work
* `/focus-areas/README.md` - a table of focus areas and their goals, linking to the next level
* `/focus-areas/<focus-area-name>/` - directory for metrics in a focus area
* `/focus-areas/<focus-area-name>/README.md` - table of metrics in this focus area with questions the metrics answer; linking to specific metrics

### Metrics

* `/focus-areas/<focus-area-name>/<metric-name>.md` - metric detail page, must conform to the standard [template](https://github.com/chaoss/metrics/blob/master/resources/metrics-template.md)
* `/focus-areas/<focus-area-name>/images/<metric-name>_<image-name>.png` - images included in a metric; file-ending can be png/jpg/gif/svg

## General conventions

* DO NOT use spaces in names
* Use hyphens “-” instead of spaces within names
* Use underscore to separate different names \(e.g., between metric-name and image-name\)
* Use lower case for all file and folder names, except README, LICENSE, CONTRIBUTING, FUNDING which are standard across open source always capitalized
* Images are always in a sub-directory “images” under the markdown file that references the image
* The WG repos should have only released and under-review metrics
* In cases where the metric name is also a descriptor, please use this convention:

  "specific thing being measured"-"further description if needed"

  EX: `pull-requests-open.md` EX: `issues-first-response.md`

