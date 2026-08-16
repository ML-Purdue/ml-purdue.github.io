---
name: AIMM ICC
desc: >-
  Autonomous 12-foot boat for a Navy-funded Indiana collegiate challenge,
  combining computer vision, path planning, and Gazebo simulation.
status: archived
startTerm: 2023-fall
endTerm: 2025-spring
domain: [Computer Vision, Process Control]
hoursPerWeek: "~10"
links:
  - {
      label: AIMM project page,
      url: https://www.trine.edu/innovation-one/aimm/index.aspx,
    }
  - {
      label: Competition details,
      url: https://www.trine.edu/innovation-one/aimm/support-information/course-details.pdf,
    }
results:
  - 2nd Overall Grand Champion, AIMM ICC Competition
---

A project funded by the Naval Surface Warfare Center Crane Division, with
Purdue, IU, Notre Dame, and Trine competing to create an autonomous full-sized
(12ft) boat able to complete a set of tasks. Multiple professors led the project,
across two main teams: Robotics and ML.

## Areas of work

1. Computer vision
2. Motion planning
3. Event planning
4. Working with data from other sensors

## Overview

Six universities in Indiana competed in an artificial intelligence maritime
maneuvering challenge designed by the US Naval Surface Warfare Center and Trine
University. We were provided a boat, a sensor kit, and funds to purchase
additional materials. Students integrated the provided and purchased sensors to
autonomously navigate the boat through the challenges — providing in-depth
learning on machine learning, artificial intelligence, circuits, mechatronics,
and naval engineering.

## Team plans

**CV team.** Improve accuracy on the existing buoy model, add classes for other
course objects, work on synthetic data generation, and use pre-processing
techniques to handle bad weather.

**Navigation team.** Set up the boat design fully in the AIMM Gazebo simulation
and design path planning to work with the course. If time allowed, train an
agent model to compete in the course in simulation — the aim being to learn new
ways of setting up path planning to maximize points. Getting a model good enough
to run fully in the water is extremely hard, so training in simulation and then
designing a path planning algorithm from that was the preferred approach.

Beyond that: with the competition in April and a good base from the prior year,
getting ahead of schedule on CV and navigation would free time for further
autonomy work or multi-agent communication, most likely involving a drone.

## Difficulty

**Computer vision — Beginner.** Members were not expected to have ML experience
but needed familiarity with coding.

**Autonomous navigation — Intermediate.** Members had taken CS373, CS471, CS290,
or an equivalent, or self-taught to that level, and were familiar with
TensorFlow or PyTorch.

## Milestones

**October 1 — Onboarding.** Get everyone up to speed on the previous year's
work, familiar with the repo and code, and settled into roles for the semester.

**November 1 — Improve CV models and set up simulation.** Test and ensure
accuracy on the buoy CV model, add data and train the model for other classes
(course obstacles like rings), and set up a digital twin of the boat in the
Gazebo simulation.

**December 1 — Decrease latency and simulation testing.** Latency testing across
model formats and sizes to find a good accuracy/latency tradeoff — the target
was about 70ms (~15fps) for the entire pipeline. Test movement in Gazebo,
starting simple and working up to CV and then the full pipeline.

**January 1.** Buffer built into the timeline for finals and winter break.

**February 1 — Finish CV and further Gazebo testing.** Finish CV testing with
good fps and accuracy for all course objects, with further work on robustness
to rain and darkness. Test more pipeline components in Gazebo: GPS if possible,
camera, sensor input, path planning.

**March 1 — Wrap up testing and advanced work.** Everything working in
simulation and in real life, with time for bug fixes and advanced concepts.
