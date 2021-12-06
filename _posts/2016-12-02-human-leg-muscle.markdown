---
layout: post
title:  "Human lower extremity anatomy"
date:   2016-12-16 13:39:40 +0900
tags: anatomy musculoskeletal
---
> Learning from human muscle anatomy to find insight on designing muscle actuators for robot leg.
<!--more-->

## Overview
To utilize McKibben pneumatic artifical muscle actuator on a robot, it is best to get insight
from biological system, especially from human musculoskeletal system anatomy.
This post mainly focus on the lower extremity (lower limbs) of the human.
The reference for the human musculoskeletal anatomy is Sobotta Atlas of Human Anatomy [1].

As human joints and muscles are much more complicated, I limit the joints to only hip, knee, and angle,
which are the most common design on humanoid robots.
The joint movements for each joint are limited as shown below.

![][joint-movements]{: width="400"}
##### *Simplified joint movements on leg*

One thing to note is there are two types of muscles.
- monoarticular muscles: muscles that cross two joints
- biarticular muscles: muscles that cross only one joint

Therefore, we need to keep in mind that the McKibben muscle can actuate two joints simulataneously when acting as biarticular muscle.

## Hip joint
### Hip flexion
Hip flexion moves the leg in sagittal plane.
The most important flexor of the hip is the *ventral* muscle **M. iliopsoas**.
For hip extension&mdash;opposite of hip flexion&mdash;, the *dorsolateral* muscle **M. gluteus maximus** acts as the most important muscle.
Both M. iliopsoas and M. gluteus maximus are monoarticular muscles.

![][mus-il]{: height="200"}
![][mus-gmax]{: height="200"}
##### *Main flexor and extensor muscles of the hip: M. ilipsoas (left) and M. gluteus maximus (right).*

### Hip abduction
Hip abduction moves the leg in frontal plane.
The abductors of the hip are **Mm.gluteus medius** and **Mm.gluteus medius**.
However, both muscle lengths are really short and it is impossible to replicate using the McKibben muscle.
The **M. tensor fasciae latae** and **M.sartorius** also abduct the hip.
But, they will also flex the hip.
As, it will be more feasible to replicate M. tensor fasciae latae and M.sartorius, we will choose these muscles as the
*abductor* group

The *adductor* group **Mm. adductores** are the most important adductors if the hip. 

![][mus-abd]{: height="300"}
![][mus-add]{: height="300"}
##### *Abductor muscles of the hip (left) and the main adductor muscle of the hip Mm. adductores (right).*

## Knee joint
### Knee flexion
Knee flexion moves the leg in sagittal plane.<br/>
*Note: the knee flexion direction is in opposite direction from the hip flexion.*

The only extensor of the knee is the **M. quadriceps femoris**.
However, since the group consists of both monoarticular and biarticular muscles, it is better to separate them.
So, for knee extension, the **M. vastus** muscles actuate knee extension (monoarticular) and
the **M. rectus femoris** actuates knee extension and hip flexion (biartuicular).

The **hamstring** muscles serve as the strongest knee flexors while also serving as the hip extensors (biarticular).

![][mus-vas-rf]{: height="300"}
![][mus-ham]{: height="300"}
##### *Main extensor and flexor of the knee: M.vastus and M. rectus femoris (left), and hamstring (right).*

## Ankle joint
### Ankle dorsiflexion
*Note: dorsiflexion is flexion toward the upper side whereas plantarflexion is the opposite*

All muscles coursing *anterior* to the transverse axis of the ankle joint are dorsiflexors.
The **M. tibialis anterios** is the main important dorsiflexor.
Contrarily, all muscles *dorsal* to the axis are plantarflexors.
The **M. triceps surae** is the strongest plantarflexor muscle group.
The group consists of **M. soleus** which actuates ankle plantarflexion (monoarticular) and
**M. gastrocnemius** which actuates ankle plantarflexion and knee flexion (biarticular).


![][mus-ta]{: height="300"}
![][mus-sol-gas]{: height="300"}
##### *Main dorsiflexor and plantarflexor of the ankle: M. tibialis anterior (left), M.soleus and M. gastrocnemius (right).*

### Ankle eversion
*Note: eversion rotates the ankle in frontal plane toward the outside, whereas inversion toward the inside*

The **M. fibularis** muscle group acted as the most important eversor (pronator), and also as the plantarflexor due to their tendon position.
While the **M. tibialis posterior** is the most important inversor (supinator), and also a plantarflexor.


![][mus-fb]{: height="300"}
![][mus-tp]{: height="300"}
##### *Main eversor and inversor of the ankle: M. fibularis (left) and M.tibialis posterior (right).*

## Lower extremity muscles
The figure below shows the muscles all together in one image for a full (simplified) human lower extremity muscles.

![][mus-lower-extremity]{: width="500"}
##### *Human lower extremity muscles (simplified)*

### References:

[1] Friedrich Paulsen and Jens Waschke. *Sobotta Atlas of Human Anatomy*, Vol. 1.
Urban & Fischer, 15 edition, 2011.<br/>

[joint-movements]: {{ "/assets/images/2016/2016_leg_joint_movements.png" | relative_url }}
[mus-il]: {{ "/assets/images/2016/2016_mus_IL_ilipsoas_text.jpg" | relative_url }}
[mus-gmax]: {{ "/assets/images/2016/2016_mus_GMAX_gluteusmaximus_text.jpg" | relative_url }}
[mus-abd]: {{ "/assets/images/2016/2016_mus_ABD_abductor_text.jpg" | relative_url }}
[mus-add]: {{ "/assets/images/2016/2016_mus_ADD_adductor_text.jpg" | relative_url }}
[mus-vas-rf]: {{ "/assets/images/2016/2016_mus_VAS_RF_vastus_rectusfemoris_text.jpg" | relative_url }}
[mus-ham]: {{ "/assets/images/2016/2016_mus_HAM_hamstring_text.jpg" | relative_url }}
[mus-ta]: {{ "/assets/images/2016/2016_mus_TA_tibialisanterior_text.jpg" | relative_url }}
[mus-sol-gas]: {{ "/assets/images/2016/2016_mus_SOL_GAS_soleus_gastrocnemus_text.jpg" | relative_url }}
[mus-fb]: {{ "/assets/images/2016/2016_mus_FB_fibularis_text.jpg" | relative_url }}
[mus-tp]: {{ "/assets/images/2016/2016_mus_TP_tibialisposterior_text.jpg" | relative_url }}
[mus-lower-extremity]: {{ "/assets/images/2016/2016_mus_lower_extremity_full_text.jpg" | relative_url }}

