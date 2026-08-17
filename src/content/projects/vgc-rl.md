---
name: VGC-RL
desc: >-
  Monte Carlo tree search and reinforcement learning agent that plays
  competitive Pokémon VGC at tournament level.
status: archived
startTerm: 2025-fall
endTerm: 2026-spring
pm: Akkshay Rajan
domain: [Reinforcement Learning]
hoursPerWeek: "3-5"
openings: "0-1"
skills: >-
  Understanding of BERT models, PyTorch, RL algorithms (PPO), and Node.js/Docker
  for deployment.
---

## Description

The goal is a reinforcement learning game AI that plays the official Pokémon
battle format (VGC) at a competent level. Because the sample space of possible
moves and abilities is vast compared to games like chess, we use Monte Carlo
Tree Search (MCTS) to guide moves rather than a pure reinforcement learning
approach that would have to learn the rules of the game on its own. The result
is similar in spirit to what Lc0 is for chess.

Our objective is to complete the VGC RL agent from last semester, reaching
performance parity with the VGC Bench paper, and then deploy it so that anyone
can click a link and play a game against the bot.

That involves:

- Implementing the Phasic Policy Gradient algorithm
- Writing a distributed training loop with a shared policy, trained on the cluster
- Writing a team preview bot to decide team selection
- Hyperparameter optimization
- Collecting gameplay data for behaviour cloning at the start of training
- Dockerizing the model and server, then deploying online
- Possibly collecting data from users who play the bot, to improve further

## Prerequisites

- Python (NumPy, PyTorch, any plotting library)
- RL basics — actor-critic models, implemented in PyTorch
- Node.js basics (self-hosting websites)
