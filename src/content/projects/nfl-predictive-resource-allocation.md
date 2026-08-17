---
name: NFL Predictive Resource Allocation
desc: >-
  Modeling how NFL salary cap and draft capital spent across positions
  translates into player and team success.
status: archived
startTerm: 2025-fall
endTerm: 2026-spring
pm: Pranay Nandkeolyar
domain: [Time Series Modelling]
hoursPerWeek: "3"
openings: "0"
skills: >-
  Basic NFL knowledge, data science and manipulation tools, ML tools, web
  scraping tools, and data visualization tools.
---

## Overview

Our project centers on an in-depth analysis of the NFL, ranging from salary cap
dynamics to draft value assessments, player statistics, and team performance
metrics. Through rigorous data exploration and advanced analytical techniques,
we aim to unearth insights that inform strategic decision-making for NFL teams,
particularly in resource allocation and talent acquisition.

We focus on how different forms of resource allocation — salary cap space and
draft picks into certain positions — correlate to individual player and team
success. We plan to answer questions like: should a team invest in younger,
cheaper quarterback prospects with draft capital, or go after proven veteran
winners with significant cap space? After analyzing resource allocation and
positional value, we create effective data visualizations, then build an ML
model predicting team success for the upcoming season from that data.

## Training

Project members will need to know:

1. **Basic NFL knowledge** — can be taught in a week or two: how the salary cap
   works, how draft capital works (draft value charts), positional terminology,
   and basic familiarity with advanced NFL analytics such as PFF grades, WAR
   (wins above replacement), AV (approximate value), and EPA (expected points
   added)
2. **Data science and manipulation tools** — Pandas, NumPy, SciPy
3. **Web scraping tools** — Beautiful Soup or Selenium
4. **ML tools** — scikit-learn (decision trees, CNNs); other libraries welcome
5. **Data visualization tools** — Matplotlib, Seaborn

## Milestones

### September 15 — Web scrape and gather data

Three teams form: one scrapes basic salary cap and draft data, one gathers
player evaluation data based on a preferred metric (PFF, AV, etc.), and one
gathers team evaluation data (PFF, team website, winning percentage). Once
scraped into CSVs, each team normalizes the data with Pandas — normalizing
positional terminology to an agreed standard, converting raw numbers to
percentages where possible, and grouping data by team or year.

### September 30 — Data visualizations

Team 1 takes salary cap, draft, and player data to analyze player return on
investment. Team 2 takes player performance and team success data to analyze
positional value. Team 3 combines player ROI and positional value data to
generate team success insights based on positional investment.

### October 15 — Develop the ML model

Predict team success for next season from new and pre-existing draft and salary
cap data. Team 1 creates a model with team investment as features and player
success metrics as output; Team 2 creates a model with player success as
features and team success metrics as output. Model types include RNNs, time
series (ARIMA), and decision trees. Two weeks per model type, then two weeks to
combine them so the labels of the first become the features of the second (team
success → predicted player → predicted team).

### December 15 — Report and poster

Develop visualizations for model performance and accuracy, and prepare a report
and poster acknowledging findings.
