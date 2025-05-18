---
layout: post
title:  "Orientation representation"
date:   2019-04-15 09:00:00 +0900
tags: robot control
---
> Orientation representation for a rigid body in a 3D space.
<!--more-->



## Introduction
In general, a rigid body in a 3D space has six degrees of freedom: three translational and three rotational.
At a given time, a rigid body has a *pose*, defined as position and orientation, with respect to a reference frame.
A *transformations* represents the changes from a pose to another pose.
Basic transformations include translation and rotation.

For position and translation, the representation is based on the chosen coordinates system: Cartesian coordinates, or Polar coordinates.
Cartesian coordinates system is the common coordinates to represent the translation.
For further information about coordinates system, www.euclideanspace.com has a broad description and examples [1].

For orientation and rotation, there are several representations available [2][3].
1. Rotation matrices
    - :o: The general representation of a relative orientation.
    - :x: Not compact
    - :x: Not intuitive

2. Euler angles
    - :o: The most compact and intuitive (minimal representation)
    - :x: Hass issue on gimbal lock!
    - :x: Ambiguity  --> need to determine axis

3. Quaternions
    - :o: No ambiguity (define a single unique orientation)
    - :o: Avoid gimbal lock
    - :o: Easier to compute
    - :x: Not intuitive

Further explanations are also available on Wikipedia [4].

## 1. Rotation matrices

A rotation by $$\alpha$$ about X-axis:
$$ R_{x}(\alpha) = 
\begin{bmatrix}
1 & 0 & 0 \\
0 & cos(\alpha) & -sin(\alpha) \\
0 & sin(\alpha) &  cos(\alpha) \\
\end{bmatrix}
$$

A rotation by $$\beta$$ about Y-axis:
$$ R_{y}(\beta) = 
\begin{bmatrix}
cos(\beta) & 0 & -sin(\beta) \\
0 & 1 & 0 \\
sin(\beta) & 0 &  cos(\beta) \\
\end{bmatrix}
$$

A rotation by $$\gamma$$ about Z-axis:
$$ R_{z}(\gamma) = 
\begin{bmatrix}
cos(\gamma) & -sin(\gamma) & 0 \\
sin(\gamma) &  cos(\gamma) & 0 \\
0 & 0 & 1 \\
\end{bmatrix}
$$

### Compound rotations
Compound rotations are the multiplication of rotation matrices.

$$ R(xyz,\alpha,\beta,\gamma) = R(x,\alpha) R(y,\beta) R(z,\gamma)$$

## 2. Euler angles
Euler angles are a minimal representation of a compound rotations, describing the sequence of rotations about the axes.
For a 3D space, there are 12 Euler angles conventions:

| XYX | YXY | ZXY |
| XYZ | YXZ | ZXZ |
| XZX | YZX | ZYX |
| XZY | YZY | ZYZ |

NOTE: It is actually X-Y'-Z" instead of X-Y-Z, because the rotation depends on the new frame resulted from the first rotation. Here, it is written as XYZ for simplification.

Each robot maker has their own Euler angle conventions [5], for example:

| Robot makers | Euler Angle convention |
| -- | -- |
| FANUC, Motoman, KUKA | XYZ |
| ABB | ZYX |
| Kawasaki, Omron | ZYZ |

### Forward Mapping
Forward mapping calculates the given Euler angles to the resulting rotation matrix.

### Inverse Mapping
Inverse mapping calculates the given orientation matrix, to the Euler angles resulting the orientation.

### Roll, Pitch, Yaw
In aircraft, the principal axes are commonly called roll, pitch, and yaw (or may also be called RPY angles).

![][img-rpy]{: height="200" }
###### *Fig.1 Roll, Pitch, Yaw [6]*

The convention used in RPY angles is a ZYX convention.
The forward mapping of RPY angles is as follows, with $$\alpha$$ as roll, $$\beta$$ as pitch, $$\gamma$$ as yaw.

$$ R(RPY,\alpha,\beta,\gamma) = R(z,\gamma) R(y,\beta) R(x,\alpha)$$

### Heading, Attitude, Bank
Another terms for Euler angles in aircraft are heading, attitude, and bank.
Heading is for the angle applied first, attitude is for the angle applied second, and bank is for the angle applied third.

Since RPY angles follow ZYX convention, heading-attitude-back is equal to yaw-pitch-roll.

## 3. Quaternion
Quaternions represent the orientation using a number system that extends the complex numbers.

![][img-axis-angle]{: height="200" }
###### *Fig.2. Rotation around an axis [7]*

Consider the following rotation around an axis [7]. The rotation can be represented as a rotation $$\theta$$ around the Euclidean vector $$\hat{u}$$, with:


$$ \hat{u} = u_x \hat{i} + u_y \hat{j} + u_z \hat{k} $$

Quaternion represent this rotation in a form of:

$$ q = w + x \hat{i} + y \hat{j} + z \hat{k} $$

where

$$ q = cos(\frac{\theta}{2}) + ( u_x \hat{i} + u_y \hat{j} + u_z \hat{k} )  sin(\frac{\theta}{2})$$


## Samples in 90 degree steps
The following shows the sample rotations in 90 degree steps [8][9].

<style>
  .custom-cell {
    font-size: 14px;
    font-family: 'Georgia', serif;
    line-height: 1.5;
  }
</style>

#### 1. Applying heading as the first rotation.
<table>
    <colgroup>
        <col width="25%" />
        <col width="25%" />
        <col width="25%" />
        <col width="25%" />
    </colgroup>
    <tbody>
        <tr>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-11]</span>
                <span>
                    $$ R = R(z,0) R(y,0) R(x,0) $$
                </span>
                <span>
                    $$ q = 1 + 0 \hat{i} + 0 \hat{j} + 0 \hat{k} $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-12]</span>
                <span>
                    $$ R = R(z,90) R(y,0) R(x,0) $$
                </span>
                <span>
                    $$ q = 0.707 + 0 \hat{i} + 0.707 \hat{j} + 0 \hat{k} $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-13]</span>
                <span>
                    $$ R = R(z,180) R(y,0) R(x,0) $$
                </span>
                <span>
                    $$ q = 0 + 0 \hat{i} + 1 \hat{j} + 0 \hat{k} $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-14]</span>
                <span>
                    $$ R = R(z,-90) R(y,0) R(x,0) $$
                </span>
                <span>
                    $$
                    q =  0.707 + 0 \hat{i} - 0.707 \hat{j} + 0 \hat{k} \\
                    q = -0.707 + 0 \hat{i} + 0.707 \hat{j} + 0 \hat{k}
                    $$
                </span>
            </td>
        </tr>
    </tbody>
</table>

#### 2. Applying attitude as the second rotation.
#### 2.1 Attitude +90 degree.
<table>
    <colgroup>
        <col width="25%" />
        <col width="25%" />
        <col width="25%" />
        <col width="25%" />
    </colgroup>
    <tbody>
        <tr>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-21]</span>
                <span>
                    $$ R = R(z,0) R(y,90) R(x,0) $$
                </span>
                <span>
                    $$ q = 0.707 + 0 \hat{i} + 0 \hat{j} + 0.707 \hat{k} $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-22]</span>
                <span>
                    $$ R = R(z,90) R(y,90) R(x,0) $$
                </span>
                <span>
                    $$ q = 0.5 + 0.5 \hat{i} + 0.5 \hat{j} + 0.5 \hat{k} $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-23]</span>
                <span>
                    $$ R = R(z,180) R(y,90) R(x,0) $$
                </span>
                <span>
                    $$ q = 0 + 0.707 \hat{i} + 0.707 \hat{j} + 0 \hat{k} $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-24]</span>
                <span>
                    $$ R = R(z,-90) R(y,90) R(x,0) $$
                </span>
                <span>
                    $$ q = 0.5 - 0.5 \hat{i} - 0.5 \hat{j} + 0.5 \hat{k} $$
                </span>
            </td>
        </tr>
    </tbody>
</table>

#### 2.2 Attitude -90 degree.
<table>
    <colgroup>
        <col width="25%" />
        <col width="25%" />
        <col width="25%" />
        <col width="25%" />
    </colgroup>
    <tbody>
        <tr>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-31]</span>
                <span>
                    $$ R = R(z,0) R(y,-90) R(x,0) $$
                </span>
                <span>
                    $$
                    q =  0.707 + 0 \hat{i} + 0 \hat{j} - 0.707 \hat{k} \\
                    q = -0.707 + 0 \hat{i} + 0 \hat{j} + 0.707 \hat{k}
                    $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-32]</span>
                <span>
                    $$ R = R(z,90) R(y,-90) R(x,0) $$
                </span>
                <span>
                    $$ q = 0.5 - 0.5 \hat{i} + 0.5 \hat{j} - 0.5 \hat{k} $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-33]</span>
                <span>
                    $$ R = R(z,180) R(y,-90) R(x,0) $$
                </span>
                <span>
                    $$
                    q = 0 - 0.707 \hat{i} + 0.707 \hat{j} + 0 \hat{k} \\
                    q = 0 + 0.707 \hat{i} - 0.707 \hat{j} + 0 \hat{k}
                    $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-34]</span>
                <span>
                    $$ R = R(z,-90) R(y,-90) R(x,0) $$
                </span>
                <span>
                    $$ q = 0.5 + 0.5 \hat{i} - 0.5 \hat{j} - 0.5 \hat{k} $$
                </span>
            </td>
        </tr>
    </tbody>
</table>

#### 3. Applying bank as the second rotation. (Not as the third rotation.)
#### 3.1 Bank +90 degree.
<table>
    <colgroup>
        <col width="25%" />
        <col width="25%" />
        <col width="25%" />
        <col width="25%" />
    </colgroup>
    <tbody>
        <tr>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-41]</span>
                <span>
                    $$ R = R(z,0) R(y,0) R(x,90) $$
                </span>
                <span>
                    $$ q = 0.707 + 0.707 \hat{i} + 0 \hat{j} + 0 \hat{k} $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-42]</span>
                <span>
                    $$ R = R(z,0) R(y,0) R(x,90) $$
                </span>
                <span>
                    $$ q = 0.5 + 0.5 \hat{i} + 0.5 \hat{j} + 0.5 \hat{k} $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-43]</span>
                <span>
                    $$ R = R(z,0) R(y,0) R(x,90) $$
                </span>
                <span>
                    $$ q = 0 + 0 \hat{i} + 0.707 \hat{j} - 0.707 \hat{k} $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-44]</span>
                <span>
                    $$ R = R(z,0) R(y,0) R(x,90) $$
                </span>
                <span>
                    $$ q = 0.5 + 0.5 \hat{i} - 0.5 \hat{j} + 0.5 \hat{k} $$
                </span>
            </td>
        </tr>
    </tbody>
</table>

#### 3.2 Bank +180 degree.
<table>
    <colgroup>
        <col width="25%" />
        <col width="25%" />
        <col width="25%" />
        <col width="25%" />
    </colgroup>
    <tbody>
        <tr>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-51]</span>
                <span>
                    $$ R = R(z,0) R(y,0) R(x,180) $$
                </span>
                <span>
                    $$ q = 0 + 1 \hat{i} + 0 \hat{j} + 0 \hat{k} $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-52]</span>
                <span>
                    $$ R = R(z,0) R(y,0) R(x,180) $$
                </span>
                <span>
                    $$ q = 0 + 0.707 \hat{i} + 0 \hat{j} - 0.707 \hat{k} $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-53]</span>
                <span>
                    $$ R = R(z,0) R(y,0) R(x,180) $$
                </span>
                <span>
                    $$ q = 0 + 0 \hat{i} + 0 \hat{j} + 1 \hat{k} $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-54]</span>
                <span>
                    $$ R = R(z,0) R(y,0) R(x,180) $$
                </span>
                <span>
                    $$ q = 0 + 0.707 \hat{i} + 0 \hat{j} + 0.707 \hat{k} $$
                </span>
            </td>
        </tr>
    </tbody>
</table>

#### 3.3 Bank -90 degree.
<table>
    <colgroup>
        <col width="25%" />
        <col width="25%" />
        <col width="25%" />
        <col width="25%" />
    </colgroup>
    <tbody>
        <tr>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-61]</span>
                <span>
                    $$ R = R(z,0) R(y,0) R(x,-90) $$
                </span>
                <span>
                    $$
                    q =  0.707 - 0.707 \hat{i} + 0 \hat{j} + 0 \hat{k} \\
                    q = -0.707 + 0.707 \hat{i} + 0 \hat{j} + 0 \hat{k}
                    $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-62]</span>
                <span>
                    $$ R = R(z,0) R(y,0) R(x,-90) $$
                </span>
                <span>
                    $$ q = 0.5 - 0.5 \hat{i} + 0.5 \hat{j} + 0.5 \hat{k} $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-63]</span>
                <span>
                    $$ R = R(z,0) R(y,0) R(x,-90) $$
                </span>
                <span>
                    $$ q = 0 + 0 \hat{i} + 0.707 \hat{j} + 0.707 \hat{k} $$
                </span>
            </td>
            <td class="custom-cell">
                <span markdown="span">![][img-rot-64]</span>
                <span>
                    $$ R = R(z,0) R(y,0) R(x,-90) $$
                </span>
                <span>
                    $$ q = 0.5 - 0.5 \hat{i} - 0.5 \hat{j} + 0.5 \hat{k} $$
                </span>
            </td>
        </tr>
    </tbody>
</table>

## References:
[1] [https://www.euclideanspace.com/maths/geometry/space/coordinates/index.htm][euclidean-coordinates]

[2] [https://www.euclideanspace.com/physics/kinematics/orientation/index.htm][euclidean-orientation]

[3] [https://en.wikibooks.org/wiki/Robotics_Kinematics_and_Dynamics/Description_of_Position_and_Orientation][wikibooks-position-orientation]

[4] [https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation][wikipedia-quaternions-and-spatial-rotation]

[5] [https://mecademic.com/insights/academic-tutorials/space-orientation-euler-angles/][mecademic-space-orientation]

[6] [https://en.wikipedia.org/wiki/Aircraft_principal_axes][img-rpy]

[7] [https://www.euclideanspace.com/maths/geometry/rotations/axisAngle/index.htm][euclidean-axis-angle]

[8] [https://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/transforms/examples/index.htm] [euclidean-examples-quaternions]

[9] [https://www.euclideanspace.com/maths/geometry/rotations/euler/examples/index.htm] [euclidean-examples-euler]

## Bonus:

Good visualization for quaternions: [https://quaternions.online/][quaternions-visualization]

<!-- Links -->
[euclidean-coordinates]: {{ "https://www.euclideanspace.com/maths/geometry/space/coordinates/index.htm" }}
[euclidean-orientation]: {{ "https://www.euclideanspace.com/physics/kinematics/orientation/index.htm" }}
[euclidean-axis-angle]: {{ "https://www.euclideanspace.com/maths/geometry/rotations/axisAngle/index.htm" }}
[euclidean-examples-quaternions]: {{ "https://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/transforms/examples/index.htm" }}
[euclidean-examples-euler]: {{ "https://www.euclideanspace.com/maths/geometry/rotations/euler/examples/index.htm" }}
[wikibooks-position-orientation]: {{ "https://en.wikibooks.org/wiki/Robotics_Kinematics_and_Dynamics/Description_of_Position_and_Orientation" }}
[wikipedia-quaternions-and-spatial-rotation]: {{ "https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation" }}
[mecademic-space-orientation]: {{ "https://mecademic.com/insights/academic-tutorials/space-orientation-euler-angles/" }}
[quaternions-visualization]: {{ "https://quaternions.online/" }}

[img-rpy]: {{ "/assets/images/orientation_representation/rpy.svg" | relative_url }}
[img-axis-angle]: {{ "/assets/images/orientation_representation/axis_angle.gif" | relative_url }}

[img-rot-11]: {{ "/assets/images/orientation_representation/11_rightUp.gif" | relative_url }}
[img-rot-12]: {{ "/assets/images/orientation_representation/12_backUp.gif" | relative_url }}
[img-rot-13]: {{ "/assets/images/orientation_representation/13_leftUp.gif" | relative_url }}
[img-rot-14]: {{ "/assets/images/orientation_representation/14_forwardUp.gif" | relative_url }}
[img-rot-21]: {{ "/assets/images/orientation_representation/21_upLeft.gif" | relative_url }}
[img-rot-22]: {{ "/assets/images/orientation_representation/22_upForward.gif" | relative_url }}
[img-rot-23]: {{ "/assets/images/orientation_representation/23_upRight.gif" | relative_url }}
[img-rot-24]: {{ "/assets/images/orientation_representation/24_upBack.gif" | relative_url }}
[img-rot-31]: {{ "/assets/images/orientation_representation/31_downRight.gif" | relative_url }}
[img-rot-32]: {{ "/assets/images/orientation_representation/32_downBack.gif" | relative_url }}
[img-rot-33]: {{ "/assets/images/orientation_representation/33_downLeft.gif" | relative_url }}
[img-rot-34]: {{ "/assets/images/orientation_representation/34_downForward.gif" | relative_url }}
[img-rot-41]: {{ "/assets/images/orientation_representation/41_rightForward.gif" | relative_url }}
[img-rot-42]: {{ "/assets/images/orientation_representation/42_backRight.gif" | relative_url }}
[img-rot-43]: {{ "/assets/images/orientation_representation/43_leftBack.gif" | relative_url }}
[img-rot-44]: {{ "/assets/images/orientation_representation/44_forwardLeft.gif" | relative_url }}
[img-rot-51]: {{ "/assets/images/orientation_representation/51_rightDown.gif" | relative_url }}
[img-rot-52]: {{ "/assets/images/orientation_representation/52_backDown.gif" | relative_url }}
[img-rot-53]: {{ "/assets/images/orientation_representation/53_leftDown.gif" | relative_url }}
[img-rot-54]: {{ "/assets/images/orientation_representation/54_forwardDown.gif" | relative_url }}
[img-rot-61]: {{ "/assets/images/orientation_representation/61_rightBack.gif" | relative_url }}
[img-rot-62]: {{ "/assets/images/orientation_representation/62_backLeft.gif" | relative_url }}
[img-rot-63]: {{ "/assets/images/orientation_representation/63_leftForward.gif" | relative_url }}
[img-rot-64]: {{ "/assets/images/orientation_representation/64_forwardRight.gif" | relative_url }}