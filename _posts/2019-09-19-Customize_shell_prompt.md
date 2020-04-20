---
layout: post
title: Customize Shell Prompt
categories: [Bash]
tags: [bash]
---
-------------------------
## Table for shell prompt
---

|  Sequence  | Description                                                       |     | Sequence |  Description                                                        |
| :--------: | :----------------------------------------------------------------- | :----: | :--------: | :------------------------------------------------------------------ |
|     \d     | The date (+%a\ %b\ %d format) 1)                                  |     |    \v    | The version of the shell (short)                                   |
| \D{format} | The date in the desired format (in strftime format) 2)            |     |    \w    | The path of the working directory                                  |
|     \t     | The time, 24-hour (+%k:%M:%S format) 3)                           |     |    \W    | The name of the working directory                                  |
|     \T     | The time, 12-hour (+%l:%M:%S format) 4)                           |     |    \!    | The current command number in the history                          |
|     \@     | The time, 12-hour, with AM/PM (+%l:%M\ %p format) 5)              |     |    \#    | The command number (from the start of the shell)                   |
|     \A     | The time, 24-hour (+%k:%M format) 6)                              |     |    \$    | If the current user is root, displays a #, else displays a \$      |
|     \h     | The host name                                                     |     |    \[    | Start a sequence of non-printing characters                        |
|     \H     | The full host name (with the domain name)                         |     |    \]    | End a sequence of non-printing characters                          |
|     \j     | The number of suspended processes in the current shell (<Ctrl>+Z) |     |
|     \l     | The name of the shell's terminal device                           |     | \a ,\007 | The  bell character                                                |
|     \s     | The name of the shell executable                                  |     |    \n    | Start a new line                                                   |
|     \u     | The current user name                                             |     |    \r    | Carriage return                                                    |
|     \\     | A single backslash                                                |     | \e ,\033 | The  Escape character. Used by some Control Sequences (see bellow) |

---
<!--Prompt Helper-->
<div id="ph_prompt_helper" style="border: 3px solid rgb(192, 192, 192); padding: 0px; background: rgb(0, 0, 0); color: rgb(255, 255, 255); font-family: monospace; font-size: 9pt;">
<div id="ph_titlebar" style="padding: 0px 0px 3px; background: rgb(192, 192, 192); color: rgb(0, 0, 0); font-family: sans-serif; font-weight: bold; min-height: 16px; overflow: hidden; white-space: nowrap;">
<a href="http://download.flogisoft.com/files/misc/softwares/prompt_helper/">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOAQMAAAAlhr%2BSAAAAAXNSR0IArs4c6QAAAAZQTFRFAGAHOTk527ktlgAAAAF0Uk5TAEDm2GYAAAAfSURBVAjXY2BgYGBvQEf2HxjkHzDwHwCxmRlAXAYGAJloB%2BGJ8YGpAAAAAElFTkSuQmCC" alt="Download Prompt Helper" title="Download Prompt Helper" style="vertical-align: middle; margin: -1px 2px 0px 0px; border: none;">
</a>Prompt Helper</div>
<div id="ph_prev" style="padding: 3px 5px 5px; min-height: 16px; overflow: hidden;">
<span style="color: rgb(255, 255, 255); background: rgb(0, 0, 0);"></span>
<span style="color: rgb(0, 205, 0); background: rgb(0, 0, 0); font-weight: bold;"></span><span style="color: rgb(0, 205, 0); background: rgb(0, 0, 0); font-weight: bold;">username</span>
<span style="color: rgb(0, 205, 0); background: rgb(0, 0, 0); font-weight: bold;">@</span><span style="color: rgb(0, 205, 0); background: rgb(0, 0, 0); font-weight: bold;">hostname</span><span style="color: rgb(0, 205, 0); background: rgb(0, 0, 0); font-weight: bold;"></span><span style="color: rgb(255, 255, 255); background: rgb(0, 0, 0); font-weight: bold;"></span><span style="color: rgb(255, 255, 255); background: rgb(0, 0, 0); font-weight: bold;">:</span><span style="color: rgb(255, 255, 255); background: rgb(0, 0, 0); font-weight: bold;"></span>
<span style="color: rgb(0, 205, 205); background: rgb(0, 0, 0);"></span>
<span style="color: rgb(0, 205, 205); background: rgb(0, 0, 0);">~/Documents</span>
<span style="color: rgb(0, 205, 205); background: rgb(0, 0, 0);"></span>
<span style="color: rgb(255, 255, 255); background: rgb(0, 0, 0);"></span><span style="color: rgb(255, 255, 255); background: rgb(0, 0, 0);">$</span>
</div>
<div id="ph_input_div" style="padding: 3px 5px; font-weight: bold;">PS1="<input type="text" name="ph_input" id="ph_input" value="\[\e[1;32m\]\u@\h\[\e[0;1m\]:\[\e[0;36m\]\w\[\e[0m\]\$ " style="border: 1px dashed rgb(68, 68, 68); background: rgb(34, 34, 34); color: rgb(170, 170, 170); font-family: monospace; font-size: 9pt; width: 1072px;">"</div></div>
<script src="{{ site.baseurl }}/js/prompt_helper.js" type="text/javascript"></script>
<!-- <script src="https://misc.flogisoft.com/scripts/prompt_helper.js" type="text/javascript"></script> -->

## Prompt Examples


### For system wide change
- /etc/profile
- /etc/bashrc
### For user based changes
~/.bash_profile
~/.bash_login
~/.profile
~/.bashrc
~/.bash_logout
