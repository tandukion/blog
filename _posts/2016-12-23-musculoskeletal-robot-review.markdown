---
layout: post
title:  "Musculoskeletal robot: A review"
date:   2016-12-23 13:39:40 +0900
tags: robot musculoskeletal review
---
> Review on the development on musculoskeletal robots.
<!--more-->

## Overview
Musculoskeletal robot is a robot that mimics a muscular and skeletal system of a bioligical creature (not necessarily human).
One key feature of the musculoskeletal robot is the utilization of artifical muscle actuators.
The actuators replace the common electric motor actuator to gain similar property with the muscle.
The main property which the actuators aim is the muscle compliance.
There are several type of actuators designed for a musculoskeletal humanoid, where the objective of each actuator may have different purpose.

### Series Elastic Actuator (SEA)
Series elastic actuator (SEA) consists of motor and spring.
SEA has compliance and energy strage features from the spring.
However, the compliance may be fixed, due to the spring constant.

(SEA img)

The robots in BioBoped projects utilize the SEA for their actuator.
(BioBiped 1)(BioBiped 2)(BioBiped 3)

### Tendon-driven muscle
Tendon-driven muscle actuator employs similar configuration with SEA, but with a different arrangement for the spring.
It uses nonlinear spring tension mechanism.

(img)

Utilizing tendon-driven muscle enables implementing redundant muscles to realize an anatomical musculoskeletal robot.
JSK robots use this type of muscle and have shown the ability of various motion, such as push-up, roll over, and stepping motion.

(Kenta)(Kotaro)(Kojiro)(Kenzoh)(Kenshiro)(Kengoro)

### Pneumatic Artificial Muscle (PAM)
Pneumatic articial muscle exploits air pressure to create a mechanism similar to human muscle instead of using electrical motor.

(img)

Having features of high power-to-weight ratio and passive compliance, the robots exploiting this actuator are capable of performing more dynamic locomotions.

ISI robots have shown this kind of ability.

(mowgli)(athlete1)(athlete running)(athlete jumping)

Hosoda Lab also have been developing robots with PAM.

(Pneumat BS)

### Electromagnetic Linear Actuator (EMLA)
Electromagnetic Linear Actuator (EMLA) uses permanent magnet to get compliance property.
EMLA tries to solve the drawback of PAM for its slow response on changing stiffness during motion.

(img)

EMLA has been proved to enable robot for performing hopping steps by changing the stiffness dynamically [].
One drawback of EMLA is that it cannot be used for maintaining posture since the coil will continuously be excited and produce heat.

(monoped img)


### References:
[] 

