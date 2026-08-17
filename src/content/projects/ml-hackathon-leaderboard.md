---
name: ML Hackathon Leaderboard
desc: >-
  Live hackathon leaderboard that scores model submissions without ever
  exposing the held-out test set.
status: archived
startTerm: 2024-fall
endTerm: 2024-fall
pm: Nihal Gunukula
domain: [Software Engineering]
hoursPerWeek: "3-8"
openings: "8"
skills: Frontend development, backend development, and MLflow integration.
github: https://github.com/ML-Purdue/leaderboard-server
---

## Overview

We created a leaderboard that could be used throughout an ML hackathon so
participants could accurately see their current placement. From there, we
adapted it to work with generalized hackathons — specifically sponsored tracks.

## Difficulty — Beginner

Project members were not expected to have ML experience, but needed familiarity
with coding.

## Milestones

**Month one — planning and initial setup.** Define project goals and scope,
including requirements for both generalized and sponsored hackathons. Finalize
the technical stack for frontend, backend, and MLflow integration, and set up
the development environment and version control. Create wireframes and mockups
for the leaderboard UI and begin the backend architecture, including database
schema design. Hold a kickoff meeting, finalize the execution strategy, and
start initial development.

**Month two — development and integration.** Develop core frontend components
such as leaderboard display, user registration, and login, while building
backend APIs for data retrieval and user management. Integrate MLflow for
tracking and logging model performance metrics during the hackathon. Implement
features specific to sponsored hackathons, such as track-specific leaderboards
and custom scoring. Conduct internal testing focused on data flow between
frontend, backend, and MLflow, and begin documenting the codebase.

**Month three — testing, refinement, deployment.** Conduct end-to-end testing
with sample data simulating hackathon scenarios, including edge cases for
sponsored tracks. Gather stakeholder feedback and iterate. Optimize the backend
for scalability so it handles large data volumes during the hackathon. Prepare
deployment: hosting, database migration, and CI/CD pipelines.

**Month four — deployment and post-deployment.** Deploy to a test environment
and conduct a soft launch with selected participants. Officially launch for a
live hackathon, supporting participants and gathering feedback during the event.
Afterward, analyze performance, document lessons learned, clean up the codebase,
and prepare for handoff.

## Team

Four to eight members, split into subteams by skill set, each responsible for
managing their allocated task. Meetings twice weekly, dropping to once weekly
when progress was smooth.
