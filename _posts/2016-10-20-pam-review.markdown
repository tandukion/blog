---
layout: post
title:  "Pneumatic artificial muscle actuator"
date:   2016-10-20 13:39:40 +0900
tags: actuator review
comments: true
---

## Overview

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

## McKibben muscle model

### Muscle output force
McKibben  muscles consist of internal rubber bladder surrounded by a braided mesh shell.
When the internal bladder is pressurized and its volume increases, the braided thread angle will change
due to the nonextensibility of the braided thread.

![][mckibben-parameters]{: width="300" }
##### *McKibben muscle geometry parameters during initial and pressurized state*

$$\theta_0$$ = initial braided thread angle [rad],
$$\theta$$ = pressured braided thread angle [rad]<br/>
$$L_0$$ = initial McKibben length [rad],
$$L$$ = pressured McKibben length [rad]<br/>
$$D_0$$ = initial McKibben diameter [m],
$$D$$ = pressured McKibben diameter [m]<br/>

Based on above parameter, we can create a new parameter $$\epsilon$$ for the change in length with respect to initial length:

$$\epsilon = \frac{L_0 - L}{L} = \frac{\cos\theta_0 - \cos\theta}{\cos\theta_0}$$


The relationship between output force and geometry parameters can be calculated as below [3].

$$F = \frac{\pi D_0^2 P}{4 \sin^2 \theta_0} (3 \cos^2\theta -1)$$

where:<br/>
$$F$$ = output force [N]<br/>
$$P$$ = pressure [Pa]<br/>

Using the $$\epsilon$$ parameter we defined previously, we can simplify the equation into:

$$F = \frac{\pi D_0^2}{4} P (\alpha (1-\epsilon)^2 - \beta)$$

where:<br/>
$$\alpha = 3 / \tan^2\theta_0$$ ,
$$\beta = 1 / \sin^2\theta_0 $$ , and
$$\epsilon = {(L_0 - L)}/{L_0}$$

### Muscle compliance
Muscle stiffness of McKibben muscle can be determined as derrivative of produced force about muscle contraction [2].
Then, muscle compliance can be determined as an inverse of muscle stiffness.
From the output force equation, we can derive the quation into:

$$C^{-1} = K = \frac{\delta F}{\delta (\Delta L)} = \frac{6\pi}{\cot^2 \theta_0} \frac{D_0^2}{L_0^2} P L$$

where $$C$$ is muscle complaice and $$K$$ is muscle stiffness.

### References:

[1] Bertrand Tondu and Pierre Lopez. Modeling and control of mckibben artificial muscle robot actuators.
*IEEE control systems*, Vol. 20, No. 2, pp. 15–38, 2000.<br/>
[2] Frank Daerden and Dirk Lefeber. Pneumatic artificial muscles: actuators for robotics and automation.
*European journal of mechanical and environmental engineering*, Vol. 47, No. 1, pp. 11–21, 2002.<br/>
[3] Ching Ping Chou and Blake Hannaford. Measurement and modeling of mckibben pneumatic artificial muscles.
*IEEE Transactions on Robotics and Automation*, Vol. 12, No. 1, pp. 90–102, 1996.<br/>

[pam-gif]: {{ "/assets/images/2016/2016_mckibben.gif" | relative_url }}
[pam-structure]: {{ "/assets/images/2016/2016_pam.jpg" | relative_url }}
[pam-type-1]: {{ "/assets/images/2016/2016_pam_type_1.jpg" | relative_url }}
[pam-type-2]: {{ "/assets/images/2016/2016_pam_type_2.jpg" | relative_url }}
[mckibben-parameters]: {{ "/assets/images/2016/2016_mckibben_parameters.png" | relative_url }}