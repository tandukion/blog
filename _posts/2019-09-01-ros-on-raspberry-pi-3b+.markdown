---
layout: post
title:  "ROS on Raspberry Pi 3B+"
date:   2019-09-01 14:51:40 +0900
tags: ros raspberry
---
> Installing ROS on Raspberry Pi 3B+ for hands-on experience on using ROS on a real robot
<!--more-->

## Overview

I have been working on ROS recently but I mainly work on a big industrial robot.
I can only do simulation on my PC and need to work on the real robot workcell to see how my system works.

I am planning to install ROS on Raspberry Pi so I can play with ROS on the real hardware, with a cheap and small configuration.

There are two ways to install ROS on Raspberry Pi: on native Raspberry Pi OS, or on Ubuntu OS.

Note that the default OS for ROS is Ubuntu Linux, so installation on Ubuntu OS may result in better performance,
but may miss some porting features specifically for Raspberry Pi.


## ROS on Raspberry Pi OS (Buster)

### Raspberry Pi OS installation

Requirements:
- Display monitor\
    Needed to get into Desktop to assign user and enable ssh.

Steps:
1. Download the OS image.
2. Flash the image to SD card.
3. After boot, create user and enable ssh from the desktop

### ROS Noetic installation

Follow the installation step for ROS Noetic.
[ROS Noetic Installation from Source][ros-noetic-installation-source]

### Issue for headless system

During the installation, I encountered several problems when trying to setup a headless system (without monitor).

#### 1. Wifi connection

Somehow the wifi is not connected after boot.

Here are some workarounds that I found to troubleshoot this issue.

1. Connect to the WLAN while using a monitor from the Desktop.\
    This will create profile for `/etc/wpa_supplicant/wpa_supplicant.conf `


2. Edit `/etc/network/interfaces` as below

   ```
   auto wlan 

   iface lo inet loopback 
   iface eth0 inet dhcp 

   allow-hotplug wlan0 
   iface wlan0 inet dhcp 
   wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf 
   iface default inet dhcp 

   auto eth0 
   iface eth0 inet dhcp
   ```

#### 2. SSH issue

By default, the SSH server is disabled. To enable this, you can either enable it from the Desktop, or do the following steps.

1. Create the ssh file on boot folder\
   Note: create the file by mounting the SD card to a PC, not directly from the Raspberry.
   ```
   sudo touch /boot/firmware/ssh
   ```


2. Boot with the updated boot folder\
   Note: It will take TIME until ssh is enabled!




## ROS On Ubuntu 16.04 image on Raspberry Pi 3B+

### Ubuntu 16.04 installation

Installing Ubuntu on Raspberry Pi is not as straightforward as installing Raspbian.

The following steps are for installing the image from scratch. [1]

1. Flash the sd card with Ubuntu 16.04 for Raspberry Pi 2.\
    Download link: [ubuntu-16.04.4-preinstalled-server-armhf+raspi2.img.xz]

2. Edit the image from Ubuntu (cannot be done from Windows).\
    Follow the instruction until No. 12.

3. Start the Raspberry Pi with SD card. Follow the instruction until the end. 

### WLAN connection

1. WLAN not connecting\
    No need for extra setup, only need to use enough power! Use 5V 3A input!

2. Connecting to WLAN
    - Use NetworkManager. [Reference] [setup-network-manager-on-raspbian]
    - Just need to connect to the network first.\
        Later on, nmcli will save the network and try to automatically connect 


## Afterword

Based on the experience of "tweaking" in order to install Ubuntu on Raspberry Pi,
I expect that there may be also "tweaking" to run ROS on Raspbian, since ROS need to be installed on either Ubuntu or Debian.
Therefore, I decided to continue on using Ubuntu.

## References:

[1] [https://qiita.com/adeliae1316/items/e34170584b3abdb7253c][ubuntu-server-on-raspi]


<!-- Links -->
[ros-noetic-installation-source]: {{ "https://wiki.ros.org/noetic/Installation/Source" }}
[ubuntu-server-on-raspi]: {{ "https://qiita.com/adeliae1316/items/e34170584b3abdb7253c" }}
[ubuntu-16.04.4-preinstalled-server-armhf+raspi2.img.xz]: {{ "http://cdimage.ubuntu.com/ubuntu/releases/xenial/release/ubuntu-16.04.4-preinstalled-server-armhf+raspi2.img.xz" }}
[setup-network-manager-on-raspbian]: {{ "https://raspberrypi.stackexchange.com/questions/29783/how-to-setup-network-manager-on-raspbian/73816#73816 " }}
