# {Name of Metric}

### This metric is a release candidate. To comment on this metric please see Issue [#[put the respective Issue Number here]](URL to issue). Following a comment period, this metric will be included in the next regular release.

Question: 

Context Tags: [1 to 2 Context Areas from [list](https://docs.google.com/document/d/1zLZeN1hTt62l5vYq1x0pN2htUgaPF3A1r6NlxgjAK6c/) - comma delinated

Keywords: [3 to 5 Search keywords - working group,related terms, and synonyms - this not meant to be a definitive list - comma delinated]

## Description
A description of what the metric is and what it captures.

## Objectives
Answer the question for why someone wants to measure this metric and what can be known with it.

Each metric has the potential to influence diversity, equity, and inclusion on an open source project. Please consider these factors when framing metrics objectives. 

## Implementation
*The usage and dissemination of health metrics may lead to privacy violations. Organizations may be exposed to risks. These risks may flow from compliance with the GDPR in the EU, with state law in the US, or with other laws. There may also be contractual risks flowing from terms of service for data providers such as GitHub and GitLab. The usage of metrics must be examined for risk and potential data ethics problems. Please see [CHAOSS Data Ethics document](https://github.com/chaoss/community/blob/main/data-use-statement.md) for additional guidance.* 

Provide details on how to measure the metric, collect the data, and analyze it. The following sub-headings are optional but help to structure the different aspects of implementation.

### Filters (optional)
Include a Filter

### Visualizations (optional)
Include visualizations such as screenshot of the metric. There may be many more visualizations for this metric, we only want to provide a flavor for what this metric is about.

Please provide attribution where the screenshot was taken, e.g., what software.

### Tools Providing the Metric (optional)
Metric must be currently deployed/available, in contrast to a tool having the "potential" to provide the metric. Provide direct link to implementation/documentation, if applicable

### Data Collection Strategies (Optional)
If there are several different ways to collect data for this metric, list them here. 
This may include expressing a metric in different ways.

## References
Blog posts, websites, academic papers, or books that mention the metric and provide more background.

## Known Contributors
List of people who would like to be mentioned as contributors to this metric 

***This metric was last reviewed on [date] as part of [ release version] [or recurring review process]***

### To reference this metric, please use the static URL: https://chaoss.community/?p=[PageID]

--------
# Notes about document formatting
***The following rules are applicable for the above defined metric template:***

**Metrics naming:** 

The name of the metric should be the same in (1) metric heading, (2) metric file name, (3) focus area, (4) metrics spreadsheet, (5) “review issue”, (6) translation issue, and (7) website

Metric file names should be lower case and delinated by a dash.

_In cases where the metric name is also a descriptor, please use this convention:_

"specific thing being measured"-"further description if needed"

EX: `pull-requests-open.md`
EX: `issues-first-response.md`

_Naming convention for time-based metrics:_
Time to [Event]: The amount of time until something happens. EX: `time-to-first-response.md`  
[Event] Duration: The amount of time that something takes. EX: `issue-resolution-duration.md`  
[Event] Age: The amount of time that has passed for an unfinished activity. EX: `issue-age.md`  

**Guidance for embedding images:**
* Please provide attribution for where the image was taken, e.g., what software.
* All the images should be using the markdown syntax: `![]()`
* All the images should be using an absolute path to the images directory (Absolute paths are necessary, because these documents will be presented on a different platform/server).

EX: `![alt text](https://github.com/chaoss/working-group/focus-area//images/metric-name_img.png)`
    
**Guidance for tables and Lists:**
* No tables should be used in the metrics, alternatively you can insert an image of the table
* Bulleted Lists with sub-lists do not render properly in HTML. Rather than using sub lists markdown style please format with a bold line for first level list and bullet for the sub-list. 

EX: 
```
**List 1**
- sub list 1 a
- sub list 1 b
**line 2**
- sub list 2 a
- sub list 2 b
```

**General Formatting:**
* No HTML code should be used in the metrics, only markdown 
* Please remove formatting text and (Optional) tags from the metric prior to publishing  
* There should be at least one `\n` (newline) between:  
    * 2 images   
    * An image and text  
    * An image and heading     
This is to solve the wrapping issue in the release PDF    

EX:
```
    # Some heading

    ![alt text](https://github.com/chaoss/working-group/focus-area/images/metric-name_test-img1.png)

    ![alt text](https://github.com/chaoss/working-group/focus-area/images/metric-name_test-img2.png)

    Some random text

    ![alt text](https://github.com/chaoss/working-group/focus-area/images/metric-name_test-img3.png)

    Another text line
    ```
