---
name: Wisebucks.ai
desc: >-
  Full-stack portfolio generator scoring S&P 500 stocks from price history,
  news sentiment, and financial ratios.
status: archived
startTerm: 2023-fall
endTerm: 2024-spring
pm: Ansh Tandon
advisor: Prof. Eugenio Culurciello
domain: [Finance, Software Engineering]
openings: "4"
skills: Familiarity with deploying applications on cloud.
links:
  - { label: Repository, url: https://github.com/disha101003/wisebucks.ai }
results:
  - Full-stack financial suite completed
---

## Overview

A FinTech project building a comprehensive app and website for FinTech queries
and portfolio generation.

To predict accurate and profitable portfolios, the project accounted for
historical stock prices, current news related to the stocks, and financial ratios
like price-to-earnings, PEG, price-to-sales, price-to-book, and debt-to-equity.
Traditionally LSTMs have been used for stock predictions, but they only account
for historical prices — for accurate predictions it matters more to factor in
current news surrounding those stocks.

The project therefore proposed:

1. Using LLMs on news to run sentiment analysis for each news article for a
   particular stock in the S&P 500
2. Monte Carlo, LSTM, and regression models for historical stock price data
3. Assigning weights to financial ratios reflecting how positively or negatively
   each reflects on a particular stock

These three aspects were then weighted into a final score per stock, used for
portfolio generation.

The project also proposed a paper trading platform in Python as an added website
feature, and a chatbot to answer general FinTech queries using an LLM. Data came
from the yfinance API and Trader Workstation, stored in a SQL database and
retrieved for training. Early on the project used open-source LLMs such as
OpenAI's API for its alpha model, with plans to develop an in-house model for
the chatbot and news sentiment analysis.

## Progress

The project began over the summer under the guidance of Professor Eugenio
Culurciello and Andre Chang, who had been developing his own LLM model.
Substantial work was completed: the finance API, the SQL database, and the
OpenAI GPT LLM model were set up, along with frontend work including the login
page and integration with Flask and Streamlit. Training and experimentation with
other LLM models remained, since OpenAI's API had significant limitations
including requests processed per minute.

A full-stack financial suite was finished, with cloud deployment as the
remaining goal.

## Team

Looking to recruit two people with SWE experience. Meetings once a week
depending on availability.
