---
name: Artwork Genre Classification
desc: >-
  CNNs that tag a painting's genre (Impressionist, Renaissance, Abstract),
  trained on thousands of WikiArt images.
status: archived
startTerm: 2023-fall
endTerm: 2024-spring
domain: [Computer Vision]
hoursPerWeek: "1-5"
skills: >-
  Average proficiency with Python, basics of machine learning concepts
  (understanding CNNs took about a week), and an understanding of image
  processing.
---

## Overview

The Artwork Genre Classification project designed and implemented a machine
learning model that classifies artworks by genre using specific tags. We curated
a database of thousands of art images spanning multiple genres and periods and
used it to train the model. The end goal was a model that, given an artwork
image, accurately assigns genre tags such as "Impressionist," "Renaissance," or
"Abstract."

## Difficulty — Beginner / Intermediate

Beginner members needed familiarity with coding in Python and were able to learn
adequate ML experience while working. Intermediate members familiar with
platforms such as PyTorch accelerated the learning curve for less experienced
members.

## Milestones

**Sprint 1 — start to October 16: initial setup.** Set up DagsHub, find a weekly
time to meet (~2hr), set up clusters on each member's computer and download the
[WikiArt dataset](https://www.kaggle.com/datasets/steubk/wikiart), which comes
prelabeled. Ensure members understand the overall project idea and execution,
and go over the schedule.

**Sprint 2 — October 16 to October 30: architectures and preprocessing.**
Research common model architectures, hyperparameters, and optimization
techniques for image classification. Candidate architectures included LeNet-5
(an older CNN, good for understanding how they work), VGG, and ResNet — starting
simple and slowly increasing complexity. Decide preprocessing steps based on
model input parameters: resizing all images to the same input size, normalizing
pixel values, splitting into training/validation/test, potentially downsampling
for computing efficiency, and data augmentation.

**Sprint 3 — November 1 to November 20: model design, training, deployment.**
Work in parallel with three teams developing different aspects of the model —
training routine, layer architecture, and optimization — plus deployment via
Streamlit and debugging.

**If time allowed — model optimization.** Regularization, learning rate
adjustment, loss functions, early stopping, and hyperparameter tuning.

## Team split

Roughly six members in subteams of two, pairing one more experienced member with
one less experienced, aiming to work in parallel throughout every project stage
and explore different approaches at each. Meetings once a week for updates and
collaborative working sessions, about an hour.
