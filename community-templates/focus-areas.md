# Templates for focus-areas READMEs in WG repositories

This  file is divided into 2 parts:
1. Template for `WG/focus-areas/README.md`
2. Template for `WG/focus-areas/<focus-area-name>/README.md`

## Template for `WG/focus-areas/README.md`

The following template describes the structure of READMEs for focus-areas in each WG repositories:


```
# Focus Areas

The <wg-name> metrics are organized in focus areas:

| Focus Area  | Goal |
| --- | --- |
| [Focus-area-1](focus-area-1)  | Focus-area-1 goal  |
| [Focus-area-2](focus-area-2)  | Focus-area-2 goal  |
| [Focus-area-3](focus-area-3)  | Focus-area-3 goal  |

```

Here, focus-area-1 is a hyperlink to the corresponding focus-area.

We request use of a specific relative path format:
* focus-area-1
* (don’t use this:) ./focus-area-1
* (don’t use this:) ./focus-area-1/
* (don’t use this:) focus-area-1/

## Template for `WG/focus-areas/<focus-area-name>/README.md`

The following template describes the structure of READMEs in each focus-area:

```
# <focus-area name>

**Goal:** <focus-area goal>

| Name  | Question |
| --- | --- |
| [Metric-1](metric-1)  | Metric-1 question  |
| [Metric-2](metric-2)  | Metric-2 question  |
| [Metric-3](metric-3)  | Metric-3 question  |

```

Metric-1 contains a relative path to the corresponding metric markdown file.

Same as before, we have a specific representation for this relative path:

* metric-1.md
* (don’t use this:) ./metric.md
* (don’t use this:) ./metric.md/
* (don’t use this:) metric.md/
