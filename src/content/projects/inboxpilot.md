---
name: InboxPilot
desc: >-
  Deployed web app that takes plain-English rules and labels, drafts,
  forwards, and archives your Gmail automatically.
status: archived
startTerm: 2024-fall
endTerm: 2024-fall
pm: Rishi Mantri
domain: [NLP]
openings: "4"
skills: >-
  Proficiency in Python, extensive experience with LLMs and fine-tuning, and web
  and software development — databases, APIs, frontend frameworks like React,
  and backend frameworks like Flask.
results:
  - 4,000+ emails processed
  - 100+ auto-generated drafts
---

## Overview

The project helped people manage their inbox and automate the grunt work of
dealing with the many emails one receives every day. The goal was to build and
deploy a web application using LLMs to automate tasks like grouping, labeling,
drafting common responses, forwarding, and archiving. Rules could be given as
natural language instructions:

- Label all receipts as "receipts" and organize into a folder
- Archive any one-time passwords or verification links after they are read
- Label emails which need a response as "Response Needed"
- Respond to cold emails with "Speak to someone else about this" and forward
  accordingly

**General workflow.** Every user-created rule triggers the creation of a
corresponding LLM prompt and email action, entered into a database. Upon
receiving an email, these prompts are retrieved and combined with the email's
content into an API call to a fine-tuned LLM, which responds with the relevant
actions. Email retrieval and actions use Google's Gmail API and OAuth 2.0. A
good amount of work went into making this workflow manageable for every email
sent to every user.

## Difficulty — Beginner

Project members were not expected to have ML experience, but needed to be
familiar with coding. The project required no more ML knowledge than proficiency
working with LLMs — but it did require substantial time commitment relative to a
member's existing software and web development knowledge, since the goal was to
build and deploy a usable product.

## Milestones

**October 1.** Define the project stack and software requirements, set up the
development environment, begin initial frontend development and data collection.
Define scope, features, requirements, and stack based on member experience. Set
up a dev environment and start building the frontend with basic UI components
and navigation. Work on data collection for LLM fine-tuning.

**November 1.** Develop core backend logic and functionality (auth, database
querying), fine-tune the LLM and integrate it with email handling for basic
rules, continue developing frontend features. Develop backend modules for email
fetching, preprocessing, classification, and actions via the Gmail API. Enhance
the frontend to support rule creation and management.

**December 1.** Integrate the web app end to end, build support for custom rules
with natural language, and test. Create a framework using mock emails and rules
for testing. Debug and refine system prompts and email preprocessing based on
tests. Enhance UI/UX based on feedback.

**January 1.** Deployment, hosting, and making the system work in production.
Deploy frontend and backend after purchasing a domain. Set up automated tests
and CI/CD pipelines. Collect data about incorrect classifications and use it to
refine prompts and fine-tuning. Get users.

## Team

Three members, with fluid responsibilities falling into three buckets: frontend
development, backend development, and LLM fine-tuning / data collection / prompt
testing. One in-person meeting every week, roughly an hour.
