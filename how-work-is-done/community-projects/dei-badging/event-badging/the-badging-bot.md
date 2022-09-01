# The badging-bot

## Command & Functionality

We integrate a GitHub app, the `@badging-bot,` to help us coordinate the workflow. The main function of the badging-bot is improving the efficiency of the reviewing process with some automated integration. 

**Some more functions of the badging-bot include:**

* Guiding applicants/reviewers
* Assigning reviewers for a submission
* Opening checklists for reviewers according to the type of event
* Checking current badge status
* Generating the final badge link
* Closing an application issue when an application is finalized

### Instances when the bot is triggered

Here is a mock submission illustrating the review process:

[https://github.com/badging/event-diversity-and-inclusion/issues/46](https://github.com/badging/event-diversity-and-inclusion/issues/46)

This is what happened where the`@badging-bot` is triggered:

* **A new submission is created.** Once the issue of a new submission is successfully initiated, `@badging-bot` will do three things:
  * greet the applicant and provide guiding information \([see example](https://github.com/badging/event-diversity-and-inclusion/issues/46#issuecomment-674938374)\)
  * assign reviewers according to `reviewers.md`
  * open a checklist for each assigned reviewer \([see example](https://github.com/badging/event-diversity-and-inclusion/issues/46#issuecomment-674938396)\)
* **A command is typed in a review issue comment.** When someone creates an issue comment with a command, the bot will be triggered and respond in a new comment. 

### Commands

You can also interact with `@badging-bot`using a few commands.

#### 1. /result \(Anyone\)

* Type this command and only this command in an issue anytime during the review when you wish to check the current badge status.
* All roles are allowed to use this command.

```text
/result
#show the current badge status
```

#### 2. /end \(Moderators\)

* Type this command and only this command in an issue when the review is at an end.
* Only moderators are allowed to use this command.

```text
/end
#obtain the final badge and close the issue
```



