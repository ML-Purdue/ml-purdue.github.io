---
name: Roundnet Rally Segmentation
desc: >-
  A computer vision pipeline that turns raw roundnet (Spikeball) match footage 
  into condensed highlight reels and live stats, automatically.
status: active
intake: open
startTerm: 2026-fall
endTerm: 2027-spring
pm: Henry Cheung
domain: [Computer Vision, Sports Analytics]
hoursPerWeek: "4-6"
openings: "4-6"
skills: >-
  Python required, plus some baseline exposure to computer vision and machine
  learning fundamentals — PyTorch basics, and familiarity with concepts like
  object detection (e.g. YOLO family models). OpenCV, multi-object tracking
  (ByteTrack, DeepSORT), and ffmpeg are learned on the job.
---

## Overview

This project builds a computer vision pipeline that converts a full-length
roundnet (Spikeball) match recording into a condensed highlight video of just
the active rallies, generating live stats as a byproduct. The system detects
rally boundaries and cuts dead time between points, tracks the ball and all
players across frames, attributes each ball contact to a player, and
classifies rally-ending events like aces, faults, and unforced errors.

Roundnet is a fast-growing competitive sport with essentially no existing
automated video analysis tools, unlike volleyball, tennis, or basketball. The
end goal is a tool a player or club could feed a raw phone/tripod recording
into and get back a short, watchable highlight video plus a structured stat
sheet — no manual editing or stat-keeping required.

## Prerequisites

- Python, with comfort using core ML libraries (PyTorch, NumPy, etc.)
- Understanding of foundational ML/CV concepts (training a model, object detection, CNNs, etc.)
- OpenCV, multi-object tracking (ByteTrack, DeepSORT), and/or ffmpeg are a plus

## Milestones

Starts with a heuristic, motion/audio-based MVP for rally boundary detection
built on collected and annotated match footage. From there, the project moves
to trained ball and player detection/tracking models with court homography,
then to contact attribution and event classification (aces, faults, unforced
errors) replacing the earlier heuristic. The semester builds toward a full
end-to-end pipeline demo: raw video in, condensed highlight video and stat
sheet out.

## Team structure

Members split into three subteams — Detection & Tracking, Segmentation &
Event Logic, and Video/Infra & Demo.