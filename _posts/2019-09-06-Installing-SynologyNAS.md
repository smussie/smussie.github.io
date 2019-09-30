---
layout: post
title: Installing SynologyNas
categories: [blog, module]
tags: [guide, module, nas]
---

Configuration Réseau DSM 6.2

# Installsing SyslogNAS


1. Read the original post announced by jun: <http://xpenology.com/forum/viewtopic.php?f=2&t=20216>

2. Requirements
	* Virtual Box
	* Jun's bootloader v1.03 (DSM 6.2) ds3617)
			(https://mega.nz/#F!yQpw0YTI!DQqIzUCG2RbBtQ6YieScWg!OZw2QKwT)
			\! Here what i got was all in .img file thus i did this to convert them to .vmdk
				```
				VBoxManage convertfromraw imagefile.img vmdkname.vmdk \-\-format VMDK
				```
			(https://xpenology.club/download/)
			* Unzip the package. We will need 2 files: **synoboot.img** and **synoboot.vmdk**

			* What is downloaded is mostly \*.img format so we need this additional steps for vm
					```
					sudo apt-get install ccd2iso
					ccd2iso <filename>.img <filename>.iso
					```
			* Optionally
					```
					mount -o loop <img file name> <mountpoint>
					mkisofs -o <iso output file name> <mountpoint>
					```


	* Synology's DSM : <https://archive.synology.com/download/DSM/release/6.2/23739/.pat> ??
			It is the software that will be installed on the hardisk

	* Synology's DS Assistant : <https://gloabl.download.synology.com/download/Tools/Assistant/>
			<https://www.synology.com/en-global/support/download/DS3617xs#utilities>




3. Configure the Virtual Machine:
	* Type: Linux
	* Version : Linux 2.6 / 3.x / 4.x (64-bit)
	* Chipset : ICH9
	* HDD Virtuel (4x) **(Does it have to be SCSI or SATA???)**
		* Type de fichier HDD : VDI (VirtualBox Disk Image)
		* Allocation dynamique du fichier VDI.
		* Nom du fichier : VM-DSM-HDDx (x = numéro du disque dur)
		* Taille : 8Gb
		* Remove Controller: IDE
	* Number of CPUs: 2
	* Network
		* Set to Bridged Adapter
		* Promiscuous-Mode: Allow all
		* MAC Address:  0011322CA785


4. Setup the network:
	a) Bridge or NAT, it's up to you
	b) Expand the Advanced option
	c) Adapter type: Intel PRO/1000 MT Desktop (8254OEM)
	d) MAC Address: **0011322CA785** (This is the most important setting to make your Xpenology accesssible!)
		* For class the teacher changed this to ...
			* Dans l’adresse MAC indiquez : 001132123456 (important !).
			**Why is it very important?? and why is it different?**

5. Start the VM, press F12 to enable the boot menu


6. Boot from IDE harddisk 1

7. In the gnub menu, select the last option (xxx VMware xxx)

	(http://find.synology.com)

8. Wait around 2~5 minutes, depends on your Hardware spec. The bootloader only show around 10 lines of message. Don't worry. Be patient and it's still loading the system.
		~~I am having most difficulty with this step right now~~

9. Install synology assistant. Press Search button

10. You should see your new DiskStation now. If not, wait for another 1 or 2 minutes

11. The most important step! Verify the MAC address shown in the Synology Assistant. Make sure it's the same as the one you set in step 4.3d above.

12. Here you go, do what you usually do to a Synology system to install the DSM.


## Tuto
	<https://xpenology.com/forum/topic/6927-tutorial-install-6x-on-oracle-virtualbox-juns-loader>
	<https://xpenology.com/forum/topic/13333-tutorialreference-6x-loaders-and-platforms>
