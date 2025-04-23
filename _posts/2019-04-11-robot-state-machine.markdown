---
layout: post
title:  "State machine for pick-and-place robot"
date:   2019-04-11 09:00:00 +0900
tags: robot control
---
> Implementing a finite state machine on a pick-and-place robot.
<!--more-->



## Introduction

Pick and place is one of the common applications for manipulators.
This application refers to a sequence of robot picking an object and placing it.

The following demo from MoveIt (manipulation framework on ROS) shows the pick and place sequence.
<iframe width="560" height="315" src="https://www.youtube.com/embed/QBJPxx_63Bs?si=xMyGnQ-nL_oyVR-Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The above demo shows a pick and place sequence starting from an initial home pose.
The pick motion starts from the home pose to a certain pick pose based on the given object.
Then, the place motion moves the robot to a final place pose.
The tutorial page also provides the code on how to run a pick and place sequence.

A finite state machine is required to develop a real pick-and-place robot system (not only a demo).
Utilizing a state machine enables the handling of different sequences, either normal or abnormal sequences, in use cases.
For example, there may be use cases for pick-place a single object and pick-place multiple objects.
The state machine makes it easy to design the sequence after the robot reaches the final place pose for certain use cases.

## A simple state machine for pick and place

The following image shows a simple state machine for a pick and place robot.
![][simple-state-machine]

The above state machine handles a "cycle" of pick-and-place sequence.

A more detailed state machine is necessary to handle more error sequences, e.g. robot fails to pick.

[simple-state-machine]: {{ "/assets/images/pick_and_place/simple_state_machine.png" | relative_url }}