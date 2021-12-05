---
layout: post
title:  "Pneumatic artificial muscle actuator"
date:   2016-10-20 13:39:40 +0900
tags: actuator review
comments: true
---

Pneumatic Artificial Muscle (PAM) actuator is an alternative actuator that mimics muscle mechanism.
PAM uses air pressure to change its length, so it can mimic how muscle contracting and relaxing.

![][pam-structure]{: width="400" }
##### *Pneumatic artificical muscle basic components [1]*

![][pam-gif]
##### *Pneumatic artificical muscle contracting and relaxing*

PAM has some disadvantages over electric motor actuator and in the same time some disadvantages.
PAM benefits compliance property from the air compressability.
PAM has high power-to-weight ratio and is capable to produce large force in short amount of time.
On the other hand, PAM has drawback from its low controlabilty.

There are several types of PAMs.
The two most known types are braided muscle &mdash;mostly known as **McKibben muscle**&mdash; and pleated muscle.

![][pam-type-1]{: height="150" }
![][pam-type-2]{: height="150" }
##### *Diﬀerent types of pneumatic artificial muscle actuator: McKibben muscle (left) and pleated muscle (right) [2]*


References:

[1] Bertrand Tondu and Pierre Lopez. Modeling and control of mckibben artificial muscle robot actuators.
*IEEE control systems*, Vol. 20, No. 2, pp. 15–38, 2000.<br/>
[2] Frank Daerden and Dirk Lefeber. Pneumatic artificial muscles: actuators for robotics and automation.
*European journal of mechanical and environmental engineering*, Vol. 47, No. 1, pp. 11–21, 2002.<br/>

[pam-gif]: {{ "/assets/images/2016/2016_mckibben.gif" | relative_url }}
[pam-structure]: {{ "/assets/images/2016/2016_pam.jpg" | relative_url }}
[pam-type-1]: {{ "/assets/images/2016/2016_pam_type_1.jpg" | relative_url }}
[pam-type-2]: {{ "/assets/images/2016/2016_pam_type_2.jpg" | relative_url }}