---
name: Autonomous Drone Mapping
desc: >-
  Simulation-first drone stack pairing SLAM with reinforcement learning path
  planning, built to transfer onto real hardware.
status: active
intake: tbd
startTerm: 2026-spring
pm: Nathan Miller
domain: [Computer Vision, Process Control, Robotics]
hoursPerWeek: "4-6"
openings: "5-7"
skills: >-
  C++ and Python proficiency including NumPy and PyTorch. Previous robotics
  experience, including SLAM, via FIRST or school organizations. Experience with
  Linux CLI, VMs, and Docker. ML/AI coursework such as CS373 and CS471, or
  similar project-based experience.
---

We aim to develop a simulation-first autonomous drone pipeline that maps
real-world environments. The primary goal is completing a drone navigation stack
using CAD modeling, physics simulations, SLAM, and reinforcement learning path
planning. Once the drone system works, we plan to coordinate and optimize a
swarm of drones to map virtual spaces simultaneously. Research on these systems
is independently scattered; our innovation lies in combining them into a unified
project optimizing for coverage completeness, energy efficiency, and flight time.

The overarching objective is a codebase transferable to physical hardware. By
the end of the semester we plan to demonstrate a single drone autonomously
exploring unknown simulated environments while constructing real-time 3D maps.
We use gym-pybullet-drones for rapid RL iteration and Gazebo with PX4 SITL for
the flight stack — tools that ease the transition from simulation to physical
robotics in future semesters.

## Technical elements

- **SLAM pipeline:** ORB-SLAM3, FAST-LIO2 (LiDAR-based), Nav2, or MATLAB
  Navigation Toolbox for real-time localization with loop closure
- **RL navigation:** PPO, SAC, DQN, or DDQN algorithms
- **Multi-drone coordination:** decentralized frontier-based exploration with
  Hungarian algorithm task allocation and ORCA collision avoidance
- **Simulation stack:** gym-pybullet-drones for algorithm development, Gazebo
  for system integration

Published research advancing robotics SLAM systems, including ORB-SLAM3 and
FAST-LIO2, is the culmination of years of doctoral work. This project distills
realistic milestones while maintaining technical rigor, giving members
research-adjacent experience that bridges classroom knowledge and industry-level
robotics engineering.
