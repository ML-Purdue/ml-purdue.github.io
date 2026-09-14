---
name: Autonomous Drone Mapping
desc: >-
  Developing sim-to-real pipeline for autonomously exploring and mapping unknown 3D environments with a drone.
status: active
intake: open
startTerm: 2026-spring
pm: Nathan Miller
domain: [Computer Vision, Process Control, Robotics]
hoursPerWeek: "4-6"
openings: "3-4"
skills: >-
  Proficiency in Python, including PyTorch. Comfort with Linux CLI, VMs, and
  Docker. Foundational knowledge of reinforcement learning. Robotics
  experience (FIRST, school organizations, or similar). Commitment and a willingness to learn.
---

We aim to develop a simulation-first autonomous drone pipeline that maps
real-world environments. The primary goal is completing a drone navigation stack
using CAD modeling, physics simulations, SLAM, and reinforcement learning path
planning. Once the drone system works, we plan to coordinate and optimize a
swarm of drones to map virtual spaces simultaneously. Research on these systems
is independently scattered; our innovation lies in combining them into a unified
project optimizing for coverage completeness, energy efficiency, and flight time.

Last semester, we built individual pieces of this pipeline that passed data between layers via recorded ROS bags. This semester's objective is a codebase transferable to physical hardware. By the end of the term we plan to demonstrate a single drone autonomously
exploring unknown simulated environments while constructing real-time 3D maps.

## Technical elements

- **SLAM pipeline:** FAST-LIO2, RTAB-Map for real-time localization with loop closure
- **RL navigation:** Proximal Policy Optimization (PPO)
- **Multi-drone coordination:** decentralized frontier-based exploration with
  Hungarian algorithm task allocation and ORCA collision avoidance
- **Simulation stack:** Isaac Sim/Lab

Published research advancing robotics SLAM systems, including
FAST-LIO2 and RTAB-Map, is the culmination of years of doctoral work. This project distills
realistic milestones while maintaining technical rigor, giving members
research-adjacent experience that bridges classroom knowledge and industry-level
robotics engineering.
