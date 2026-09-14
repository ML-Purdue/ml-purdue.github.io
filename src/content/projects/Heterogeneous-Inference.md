---
name: Heterogeneous LLM Inference
desc: >-
  Improving local LLM performance by splitting speculative decoding across
  CPU, GPU, and NPU resources.
status: active
intake: open
startTerm: 2026-fall
pm: Mofiyinfoluwa Orekoya
domain: [LLMs, Inference, ML Systems]
hoursPerWeek: "5-7"
openings: "4-5"
skills: >-
  Python proficiency, including basic PyTorch. A basic understanding of neural
  networks and transformer inference. Some systems knowledge involving
  processes, threads, memory, latency, and compute. Most importantly, a
  willingness to learn.
---

## Core question

Can separating speculative drafting and target-model verification across CPU,
GPU, and NPU resources improve LLM decoding performance through greater
execution overlap and less compute-resource contention?

## Project

Modern consumer AI PCs increasingly contain three distinct compute resources:
CPUs, GPUs, and NPUs. Current local LLM inference runtimes make extensive use of
CPUs and GPUs, while NPUs are often underused because they favor relatively
static computational graphs, support a narrower set of operations, and may
introduce additional compilation and memory-transfer constraints.

Rather than attempting to run an entire LLM on an NPU, this project will
investigate whether heterogeneous inference can improve local LLM performance
by assigning different parts of the inference workload to the processors best
suited to them.

Our primary experimental workload will be speculative decoding. In speculative
decoding, a smaller model proposes several future tokens and a larger target
model verifies them. Standard implementations can still include periods when
the draft and target models wait for one another or compete for resources on
the same accelerator.

We will investigate whether physically separating drafting and verification
across available consumer hardware can improve end-to-end inference performance
while avoiding contention on the primary GPU.

## Objectives

### Minimum success

Build a reproducible heterogeneous-inference prototype that compares CPU, GPU,
and NPU placements for speculative drafting, with quantitative measurements
that explain the performance of each configuration.

### Target success

Demonstrate that heterogeneous execution improves end-to-end inference
performance for at least one realistic model and workload, and identify the
conditions under which that improvement occurs.

### Exceptional success

Build an adaptive scheduler that selects an execution configuration based on
runtime characteristics and consistently approaches or exceeds the best fixed
policy across different workloads.

## Milestones

### 1. Baseline inference and hardware characterization

Build a reproducible baseline environment and characterize the hardware
available to the project before attempting heterogeneous optimization.

### 2. Heterogeneous speculative decoding

Implement and benchmark speculative decoding with different draft-device
placements.

### 3. Cost model and scheduling policy

Develop a first-principles model explaining when each speculative-decoding
configuration should or should not improve performance.
