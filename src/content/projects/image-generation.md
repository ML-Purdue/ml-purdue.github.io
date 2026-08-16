---
name: Image Generation
desc: >-
  Testing whether GAN-generated images can meaningfully augment small
  training sets, and how that holds across domains.
status: archived
startTerm: 2024-fall
endTerm: 2025-spring
pm: Ivan Philip
domain: [Computer Vision, Generative AI]
hoursPerWeek: "1-5"
openings: "6"
skills: >-
  Basic proficiency in PyTorch or TensorFlow, plus willingness to put in the
  time — the point of the project was to make everyone familiar with image
  generation along the way.
---

## Overview

Building off the tail end of the previous year's disease detection project, this
project swerved toward creating artificial data. Several papers suggested
benefits to training a model on artificial data, and that direction resonated
with the team.

Rather than staying in the eye disease domain, the project tested whether
GAN-generated data can augment small datasets, using standard datasets such as
flower identification and MNIST digits. A major question was how GAN
supplementation performs across different domains. Task specialization came
mainly from investigating CNN performance on different datasets, since creating
and training these datasets one by one would have been inefficient.

## Member training

As long as each member had basic proficiency in PyTorch or TensorFlow and was
willing to put in time and effort, they could learn enough about image
generation along the way — the whole point of the project was to make everyone
familiar with it.

## Milestones

**October 1.** Introduce everyone to the theory of GANs and other types of image
generation models. Basic introductions in the first two meetings, then technical
tutorials (the official PyTorch DCGAN tutorial) on building such a network.
Onboarding did not cover learning PyTorch itself — high-quality PyTorch
tutorials are freely available.

**November 1.** Build a GAN using the knowledge and tutorials from the previous
step. Build at least one GAN model that generates data, based on a pre-existing
dataset (flowers, MNIST) so performance can be compared. Generating many domains
of data enables testing more domains in the next step.

**December 1.** Test a CNN trained on normal versus synthetic versus mixed
datasets, using VGG16 as a relatively standard backbone to standardize the
learning process between CNNs and focus on the training result of the datasets.

## Reflections

One thing that didn't work well the previous year was expecting people to pick
up an ML framework as they went along — this led to very few team members
actually contributing to a final product. This time there was a stronger
expectation that members knew an ML framework, and assignments requiring their
use were directly assigned. Coming in relatively inexperienced was still fine,
but greater personal agency was required.
