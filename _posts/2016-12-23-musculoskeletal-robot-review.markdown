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

![][actuator-sea]{: width="200" }
###### *Series Elastic Actuator (SEA) [1]*

The robots in BioBoped projects utilize the SEA for their actuator.
(BioBiped 1)(BioBiped 2)(BioBiped 3)

![][robot-biobiped1]{: height="300" }
![][robot-biobiped2]{: height="300" }
![][robot-biobiped3]{: height="300" }
###### *BioBiped1 [2], BioBiped2 [3], BioBiped3 [4]*

### Tendon-driven muscle
Tendon-driven muscle actuator employs similar configuration with SEA, but with a different arrangement for the spring.
It uses nonlinear spring tension mechanism.

![][actuator-tendon-driven]{: width="300" }
###### *Nonlinear spring tensioner for tendon-driven muscle [5]*

Utilizing tendon-driven muscle enables implementing redundant muscles to realize an anatomical musculoskeletal robot.
JSK robots use this type of muscle and have shown the ability of various motion, such as push-up, roll over, and stepping motion [10].

(Kenta)(Kotaro)(Kojiro)(Kenzoh)(Kenshiro)(Kengoro)

![][robot-jsk-kotaro]{: height="300" }
![][robot-jsk-kojiro]{: height="300" }
<!-- ![][robot-jsk-kenzoh]{: height="200" } -->
![][robot-jsk-kenshiro]{: height="300" }
![][robot-jsk-kengoro]{: height="300" }
###### *Kotaro [6], Kojiro [7], Kenshiro [9], Kengoro [10]*
<!-- ###### *Kotaro [6], Kojiro [7], Kenzoh [8], Kenshiro [9], Kengoro [10]* -->

### Pneumatic Artificial Muscle (PAM)
Pneumatic articial muscle exploits air pressure to create a mechanism similar to human muscle instead of using electrical motor.

![][actuator-pam]{: width="350" }
###### *Pneumatic artificial muscle [11]*

Having features of high power-to-weight ratio and passive compliance, the robots exploiting this actuator are capable of performing more dynamic locomotions.

ISI robots have shown this kind of ability.

![][robot-isi-mowgli]{: height="250" }
![][robot-isi-athlete1]{: height="300" }
![][robot-isi-athlete2]{: height="300" }
![][robot-isi-athlete3]{: height="300" }
###### *Mowgli [12], Athlete robot [13], Running Athlete [14], Jumping Athlete [15]*

Hosoda Lab also have been developing robots with PAM.

(Pneumat BS)

### Electromagnetic Linear Actuator (EMLA)
Electromagnetic Linear Actuator (EMLA) uses permanent magnet to get compliance property.
EMLA tries to solve the drawback of PAM for its slow response on changing stiffness during motion.

![][actuator-emla-a]{: width="300" }
![][actuator-emla-b]{: width="300" }
###### *Electromagnetic Linear Actuator (EMLA) []*

EMLA has been proved to enable robot for performing hopping steps by changing the stiffness dynamically [].
One drawback of EMLA is that it cannot be used for maintaining posture since the coil will continuously be excited and produce heat.

(monoped img)


### References:
[1] Katayon Radkhah, Christophe Maufroy, Moritz Maus, Dorian Scholz, Andre Seyfarth, and Oskar Von Stryk.
Concept and design of the biobiped1 robot for human-like walking and running. 
*International Journal of Humanoid Robotics*, Vol. 8, No. 03, pp. 439–458, 2011. <br/>
[2] Christophe Maufroy, Moritz Maus, Katayon Radkhah, Dorian Scholz, Oskar Von Stryk, and Andre Seyfarth.
Dynamic leg function of the BioBiped humanoid robot. 
*Proc. 5th Intl. Symposium on Adaptive Motion of Animals and Machines (AMAM)*, pp. 11-14, 2011. <br/>
[3] Dorian Scholz1 and Oskar von Stryk. 
Efficient Design Parameter Optimization for Musculoskeletal Bipedal Robots Combining Simulated and Hardware-in-the-Loop Experiments.
*2015 IEEE-RAS 15th International Conference on Humanoid Robots (Humanoids)*,pp. 512-518, 2015.<br/>
[4] Maziar Ahmad Sharbafi, Christian Rode, Stefan Kurowski, Dorian Scholz, Rico Möckel, Katayon Radkhah, Guoping Zhao, Aida Mohammadinejad Rashty, Oskar von Stryk, and Andre Seyfarth. 
A new biarticular actuator design facilitates control of leg function in biobiped3.
*Bioinspiration & biomimetics*, Vol. 11, No. 4, p.046003, 2016.<br/>
[5] Kazuhito Hyodo and Hiroaki Kobayashi.
A study on tendon controlled wrist mechanism with nonlinear spring tensioner.
*Journal of the robotics Society of Japan*, Vol. 11, No. 8, pp. 1244–1251, 1993.<br/>
[6] Ikuo Mizuuchi, Tomoaki Yoshikai, Yoshinao Sodeyama, Yuto Nakanishi, Akihiko Miyadera, Taichi Yamamoto,Tuomas Niemela, Marika Hayashi, Junichi Urata, Yuta Namiki, Tamaki Nishino, Masayuki Inaba.
Development of Musculoskeletal Humanoid Kotaro.
*Proceedings 2006 IEEE International Conference on Robotics and Automation*, pp. 82-87, 2006.<br/>
[7] Ikuo Mizuuchi, Yuto Nakanishi, Yoshinao Sodeyama, Yuta Namiki, Tamaki Nishino, Naoya Muramatsu, Junichi Urata, Kazuo Hongo, Tomoaki Yoshikai, Masayuki Inaba.
An Advanced Musculoskeletal Humanoid Kojiro.
*2007 7th IEEE-RAS International Conference on Humanoid Robots*, pp. 294-299, 2007.<br/>
[8] Yuto Nakanishi, Tamon Izawa, Masahiko Osada, Nobuyuki Ito, Shigeki Ohta, Junichi Urata and Masayuki Inaba.
Development of Musculoskeletal Humanoid Kenzoh with Mechanical Compliance Changeable Tendons by Nonlinear Spring Unit.
*2011 IEEE International Conference on Robotics and Biomimetics*, pp. 2384-2389, 2011.<br/>
[9] Yuto Nakanishi, Yuki Asano, Toyotaka Kozuki, Hironori Mizoguchi, Yotaro Motegi, Masahiko Osada, Takuma Shirai, Junichi Urata, Kei Okada and Masayuki Inaba.
Design Concept of Detail Musculoskeletal Humanoid ”Kenshiro” - Toward a real human body musculoskeletal simulator -.
*2012 12th IEEE-RAS International Conference on Humanoid Robots (Humanoids 2012)*, pp. 1-6, 2012.<br/>
[10] Yuki Asano, Toyotaka Kozuki, Soichi Ookubo, Masaya Kawamura, Shinsuke Nakashima, Takeshi Katayama, Iori Yanokura, Toshinori Hirose, Kento Kawaharazuka, Shogo Makino, et al.
Human mimetic musculoskeletal humanoid kengoro toward real world physically interactive actions.
*IEEE-RAS 16th International Conference on Humanoid Robots (Humanoids)*, pp. 876–883, 2016.<br/>
[11] Frank Daerden and Dirk Lefeber.
Pneumatic artificial muscles: actuators for robotics and automation.
*European journal of mechanical and environmental engineering*, Vol. 47, No. 1, pp. 11–21, 2002.<br/>
[12] Ryuma Niiyama, Akihiko Nagakubo, and Yasuo Kuniyoshi.
Mowgli: A bipedal jumping and landing robot with an artificial musculoskeletal system.
*Proceedings 2007 IEEE International Conference on Robotics and Automation*, pp. 2546-2551, 2007.<br/>
[13] Ryuma Niiyama and Yasuo Kuniyoshi. 
A pneumatic biped with an artificial musculoskeletal system. 
*Proceedings of 4th International Symposium on Adaptive Motion of Animals and Machines*, pp. 80-81, 2008.<br/>
[14] Ryuma Niiyama, Satoshi Nishikawa, and Yasuo Kuniyoshi.
Athlete robot with applied human muscle activation patterns for bipedal running.
*IEEE-RAS International Conference on Humanoid Robots (Humanoids)*, pp. 498–503. IEEE, 2010.<br/>
[15] Satoshi Nishikawa, Kazutoshi Tanaka, Kazuya Shida, Toshihiko Fukushima, Ryuma Niiyama, and Yasuo Kuniyoshi.
A musculoskeletal bipedal robot designed with angle-dependent moment arm for dynamic motion from multiple states.
*Advanced Robotics*, Vol. 28, No. 7, pp. 487–496, 2014.<br/>
[] Yoshihiro Nakata, Hiroshi Ishiguro, and Katsuhiro Hirata.
Dynamic analysis method for electromagnetic artificial muscle actuator under pid control. 
*IEEJ Transactions on Industry Applications*, Vol. 131, No. 2, pp. 166–170, 2011.<br/>

[actuator-sea]: {{ "/assets/images/2016/2016_actuator_sea.jpg" | relative_url }}
[actuator-tendon-driven]: {{ "/assets/images/2016/2016_actuator_tendon_driven.jpg" | relative_url }}
[actuator-pam]: {{ "/assets/images/2016/2016_pam_type_1.jpg" | relative_url }}
[actuator-emla-a]: {{ "/assets/images/2016/2016_actuator_emla_a.jpg" | relative_url }}
[actuator-emla-b]: {{ "/assets/images/2016/2016_actuator_emla_b.jpg" | relative_url }}
[robot-biobiped1]: {{ "/assets/images/2016/2016_robot_biobiped1.png" | relative_url }}
[robot-biobiped2]: {{ "/assets/images/2016/2016_robot_biobiped2.png" | relative_url }}
[robot-biobiped3]: {{ "/assets/images/2016/2016_robot_biobiped3.jpg" | relative_url }}
[robot-jsk-kotaro]: {{ "/assets/images/2016/2016_robot_jsk_kotaro.png" | relative_url }}
[robot-jsk-kojiro]: {{ "/assets/images/2016/2016_robot_jsk_kojiro.png" | relative_url }}
[robot-jsk-kenzoh]: {{ "/assets/images/2016/2016_robot_jsk_kenzoh.png" | relative_url }}
[robot-jsk-kenshiro]: {{ "/assets/images/2016/2016_robot_jsk_kenshiro.png" | relative_url }}
[robot-jsk-kengoro]: {{ "/assets/images/2016/2016_robot_jsk_kengoro.jpg" | relative_url }}
[robot-isi-mowgli]: {{ "/assets/images/2016/2016_robot_isi_mowgli.png" | relative_url }}
[robot-isi-athlete1]: {{ "/assets/images/2016/2016_robot_isi_athlete1.jpg" | relative_url }}
[robot-isi-athlete2]: {{ "/assets/images/2016/2016_robot_isi_athlete2.jpg" | relative_url }}
[robot-isi-athlete3]: {{ "/assets/images/2016/2016_robot_isi_athlete3.png" | relative_url }}
