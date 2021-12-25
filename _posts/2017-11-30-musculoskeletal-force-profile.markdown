---
layout: post
title:  "Force properties and compliant properties on musculoskeletal robot"
date:   2017-11-30 13:39:40 +0900
tags: musculoskeletal dynamics
---
> "Maximum output force profile" and compliant properties as a framework to design a musculoskeletal robot.
<!--more-->

## Overview
A musculoskeletal robot can benefit from pneumatic artificial muscles to execute dynamic motions.
A dynamic motion is characterized by large instantaneous force and short duration.
Therefore, force properties become important to design a musculoskeletal robot.

"Maximum output force profile" (MOFP) is explained here to describe the force properties of a musculoskeletal system.
MOFP represents the maximum output force vectors distribution on the end-effector.
MOFP can also be used to analyze the joint compliances.

## Maximum Output Force Profile
Based on a geometric method, the force properties of a two-link musculoskeletal arm can be defined as a polygonal force distribution [1].
More generally, a "Maximum output force profile" was introduced to define the force properties for a musculoskeletal system
with more than two joints [2].

### Muscle output force distribution
The mechanism of a two-joint link mechanism with two motors (placed directly on each joint) and a two-joint link mechanism with muscles are greatly different [1].
The figure below shows the difference in the output force distribution from the individual actuator.

![][two-joint-motor-force]{: height="200" }
![][two-joint-muscle-force]{: height="200" }
###### *Fig.1 Two-joint mechanism with two motors (left) and six muscles (right) [1]*

The output forces distribution developed by multiple muscles system in any direction could be derived by geometrical summation of the individual force vectors [1].
The output force distribution is in a polygonal shape. From the figure below, the output force distribution is defined with the hexagon denoted by point A~F.

![][muscle-force-individual]{: height="200" }
![][muscle-force-distribution]{: height="200" }
###### *Fig.2 Individual output forces by muscles (left) and output force distribution (right) [1]*

### Concept of maximum output force profile
![][mofp-concept]{: height="100" }
###### *Fig.3 Concept of MOFP [2]*
"Maximum output force profile" (MOFP) is introduced to describe the force properties of a musculoskeletal system [2].
The method is applicable for a system with more than two joints.
Based on the muscle output force distribution [1], the musculoskeletal system is represented by a serial-link structure.

![][mofp-statics]{: height="100" }
###### *Fig.4 Statics of serial-link structure [2]*

On a serial-link structure, consider the Jacobian matrix $$ \mathbf{J} = \frac{\partial \mathbf{x}}{\partial \mathbf{q}} $$ which represents
the differential relationship between the joint motion $$\dot{\mathbf{q}}$$ and the end-effector motion $$\dot{\mathbf{x}}$$. 

The free-body diagram for the serial-link structure is shown in Fig.4.
Let $$\mathbf{Q}$$ be the endpoint force and moment vector, consisting of forces $$\mathbf{F}$$ and moments $$\mathbf{M}$$ that the end-effector applies to the environment.

$$ \mathbf{Q} = \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix} $$

Because of the duality of differential kinematics and statics [3], the equivalent joint torques are related to the endpoint force by the Jacobian matrix.
Therefore, the joint torque vector $$\tau$$ is:

$$ \tau = {\mathbf{J}}^T \mathbf{Q} $$

From the musculoskeletal system approach, consider another Jacobian matrix $$ \mathbf{G} $$ which represents
the relationship between the joint motion and the muscle (actuator) motion.
Similarly, we can get the joint torque vector as:

$$ \tau = {\mathbf{G}}^T \mathbf{f} $$

with $$\mathbf{f}$$ denotes the output force of the muscles.



## References:
[1] T. Oshima, T. Fujikawa, O. Kameyama, and M. Kumamoto,
“Robotic analyses of output force distribution developed by human limbs”
Proceedings 9th IEEE International Workshop on Robot and Human Interactive Communication, pp. 229-234, 2000.

[2] R. Niiyama, S. Nishikawa, and Y. Kuniyoshi,
“Athlete robot with applied human muscle activation patterns for bipedal running”
2010 10th IEEE-RAS International Conference on Humanoid Robots, pp. 498-503, 2010.

[3] [https://ocw.mit.edu/courses/mechanical-engineering/2-12-introduction-to-robotics-fall-2005/lecture-notes/chapter6.pdf](https://ocw.mit.edu/courses/mechanical-engineering/2-12-introduction-to-robotics-fall-2005/lecture-notes/chapter6.pdf)

[4] K. Ito, T. Tsuji, and M. Nagamachi.
"Motor impedance and inverse kinematics in musculoskeletal systems"
Proceedings of the Annual International Conference of the IEEE Engineering in Medicine and Biology Society, pp. 635-636, 1988.


[two-joint-motor-force]: {{ "/assets/images/mofp/muscle_force_distribution_1.png" | relative_url }}
[two-joint-muscle-force]: {{ "/assets/images/mofp/muscle_force_distribution_2.png" | relative_url }}
[muscle-force-individual]: {{ "/assets/images/mofp/muscle_force_distribution_3.png" | relative_url }}
[muscle-force-distribution]: {{ "/assets/images/mofp/muscle_force_distribution_4.png" | relative_url }}
[mofp-concept]: {{ "/assets/images/mofp/mofp_concept.png" | relative_url }}
[mofp-statics]: {{ "/assets/images/mofp/mofp_serial_link_statics.png" | relative_url }}

