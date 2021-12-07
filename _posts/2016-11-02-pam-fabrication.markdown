---
layout: post
title:  "How to make pneumatic artificial muscle actuator"
date:   2016-11-02 13:39:40 +0900
tags: actuator fabrication
---
> This post is a tutorial for how to make a McKibben pneumatic artifical muscle.
<!--more-->

## Overview
McKibben muscle has advantage for its reproducibility.
This post explains one method to fabricate a McKibben muscle.
Using this method, it is possible to arrange multiple muscles to replicate parallel muscles (e.g biceps) or to produce a bigger output force.
A single McKibben muscle going to be made through this method is shown below.


![][mckibben-single]{: width="500" }
###### *One single McKibben muscle*


## Parts
The parts needed to create a McKibben muscle are shown below.
![][mckibben-parts]
###### *McKibben muscle parts*

| Part name | Material | Remarks |
|---|---|---|
| Inner tube | Urethane Tube | $$\phi$$ 15mm <br/> thickness 0.25-0.3mm |
| Braided shell | Braided tube | $$\phi$$ 15-35mm <br/> NFL-19 |
| PAM connector | 3D-printed part |  |
| PAM plug | 3D-printed part |  |
| Inner insulation ring | O ring | $$\phi$$ 6mm <br/> NPA6 |
| Outer insulation tube | Silicon tube | $$\phi$$8x11 <br/> 6-586-30 |
| Air plug | One Touch Fitting | KQ2L06-99 |
| Tightener | Steel wire |  |
| Muscle extension wire | Aluminium wire | $$*$$*not shown in picture* |
|  | Aluminium sleeve | $$*$$*not shown in picture* |

For the muscle ends, we use 3D-printed connector and plug.
The design files are not attached here, but it should be easily created based on the other parts.
Depend on the 3D-printing material, there may be air leak through the surface of the 3D-printed parts.
Therefore, insulation inside and outside the parts are needed.
Both the connector and plug need outer insulation.
For this, we use silicon tube along the valleys on the part.
As for connector, we also need O ring for inner insulation.

## Muscle structure
Based on the parts mentioned above, the structure of the fabricated McKibben muscle is shown as this figure.

![][mckibben-structure]
###### *McKibben structure with part lengths in millimeter*

Note that the length for the parts may changes according to the selected part.
The length shown here is based on the selected parts during the fabrication.
Some lengths are measured after the fabrication.
For example, the muscle attachment at both ends need to be measured manually, as the stiffness of steel wire
may affect the length.

Based on this structure, the total length of the McKibben muscle can be calculated.
Note that a proper muscle design may need the calculation for both muscle length and the extension wire length. 

## Result
The result should be always tested before usage.
A simple test with arbitrary test should be enough (if possible with the maximum available air pressure).
Final check should make sure:
- Correct initial muscle length
- No air leak (air leak should be easily heard with high air pressure)

![][pam-gif]
###### *Final result for parallel McKibben muscles*

[pam-gif]: {{ "/assets/images/pam_fabrication/mckibben.gif" | relative_url }}
[mckibben-single]: {{ "/assets/images/pam_fabrication/mckibben_single.png" | relative_url }}
[mckibben-parts]: {{ "/assets/images/pam_fabrication/mckibben_parts.jpg" | relative_url }}
[mckibben-structure]: {{ "/assets/images/pam_fabrication/mckibben_structure.png" | relative_url }}
