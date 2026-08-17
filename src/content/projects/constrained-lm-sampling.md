---
name: Constrained LM Sampling for Syntactically Valid Output
desc: >-
  Constraining language model sampling to a formal grammar, so output is
  always valid JSON, code, or regex-matched text.
status: archived
startTerm: 2023-fall
endTerm: 2023-fall
pm: Sagar Patil
domain: [NLP, Generative AI]
skills: >-
  Probability distributions as taught in STAT 511 or STAT 350 are most
  important. Neural networks (training, inference, activation functions), linear
  transformations, and the attention mechanism used in Transformer models are
  all encouraged.
---

## Overview

It's challenging to use large language models in applications where the
structure of the output matters — generating JSON for API requests, for
instance, or generating code so language models can interact with other systems.

It's possible to solve this by constraining the output of the language model to
any arbitrary language. Information about that language can come from a formal
grammar, a state machine (such as regex), or protocols such as the Language
Server Protocol, which is what VS Code uses for IntelliSense.

We pursued all of these avenues for generating syntactically valid output, to
let large language models interact with other systems more reliably even with
conventionally weaker models.

## Difficulty — Intermediate

## Milestones

**October 1 — Architecture setup.** Set up abstractions for language models and
probability distributions, and define possible operations on distributions.

**November 1 — Regex.** Successfully constrain the outputs of arbitrary language
models on a regex pattern, and obtain possible paths from the Language Server
Protocol.

**December 1 — LSP constraining.** Get reliable code generation while
constraining with the Language Server Protocol.

## Team split

Three to four members with no subteams. Each member owned a task, starting with
setting up abstractions for models, constructing state machines from a regex
pattern and randomly generating sequences, and experimenting with the Language
Server Protocol. Team meetings once a week with rolling asynchronous updates.
