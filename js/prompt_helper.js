/******************************************************************************
 *                                                                             *
 * Prompt Helper - A script that helps to customise the shell prompt           *
 *                                                                             *
 * Copyright (C) 2011  Fabien LOISON <http://www.flogisoft.com/>               *
 *                                                                             *
 * This program is free software: you can redistribute it and/or modify        *
 * it under the terms of the GNU Affero General Public License as published by *
 * the Free Software Foundation, either version 3 of the License, or           *
 * (at your option) any later version.                                         *
 *                                                                             *
 * This program is distributed in the hope that it will be useful,             *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of              *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the               *
 * GNU Affero General Public License for more details.                         *
 *                                                                             *
 * You should have received a copy of the GNU Affero General Public License    *
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.       *
 *                                                                             *
 ******************************************************************************/

//
// Version: 1.0
// Released: Wed, 22 Jun 2011 12:53:43 +0200
//

var ph_div = document.getElementById("ph_prompt_helper");
var ph_titlebar = null;
var ph_prev = null;
var ph_input_div = null;
var ph_input = null;
var ph_dlbtn = null;

var BSCHARS = {
  d: "Mon Jun 13",
  t: "22:42:01",
  T: "10:42:01",
  "@": "10:42 PM",
  A: "22:42",
  h: "hostname",
  H: "hostname.domain",
  j: "0",
  l: "tty1",
  s: "bash",
  u: "username",
  v: "4.1",
  V: "4.1.5",
  w: "~/Documents",
  W: "Documents",
  "!": "538",
  $: "$",
  "[": "",
  "]": "",
  "\\": "\\",
};

var ENV = {
  $HOME: "/home/username",
  $USER: "username",
  $PWD: "/home/username/Documents",
  $PS1: "-- It's an inception? ;p --",
  $DISPLAY: "-- You really want to display that? oO --",
  $0: "bash",
  $_: "TERM",
  "$#": "0",
  "$?": "0",
};

var FGCOLORS = {
  "30": "#000000", //8 colors ...
  "31": "#cd0000",
  "32": "#00cd00",
  "33": "#cdcd00",
  "34": "#1e90ff",
  "35": "#cd00cd",
  "36": "#00cdcd",
  "37": "#e5e5e5",
  "39": "#ffffff", //default
  "90": "#4c4c4c", //16 colors ...
  "91": "#ff0000",
  "92": "#00ff00",
  "93": "#ffff00",
  "94": "#4682b4",
  "95": "#ff00ff",
  "96": "#00ffff",
  "97": "#ffffff",
  "38:5:0": "#000000", //256 colors ...
  "38:5:1": "#cd0000",
  "38:5:2": "#00cd00",
  "38:5:3": "#cdcd00",
  "38:5:4": "#1e90ff",
  "38:5:5": "#cd00cd",
  "38:5:6": "#00cdcd",
  "38:5:7": "#e5e5e5",
  "38:5:8": "#4c4c4c",
  "38:5:9": "#ff0000",
  "38:5:10": "#00ff00",
  "38:5:11": "#ffff00",
  "38:5:12": "#4682b4",
  "38:5:13": "#ff00ff",
  "38:5:14": "#00ffff",
  "38:5:15": "#ffffff",
  "38:5:16": "#000000",
  "38:5:17": "#00005f",
  "38:5:18": "#000087",
  "38:5:19": "#0000af",
  "38:5:20": "#0000d7",
  "38:5:21": "#0000ff",
  "38:5:22": "#005f00",
  "38:5:23": "#005f5f",
  "38:5:24": "#005f87",
  "38:5:25": "#005faf",
  "38:5:26": "#005fd7",
  "38:5:27": "#005fff",
  "38:5:28": "#008700",
  "38:5:29": "#00875f",
  "38:5:30": "#008787",
  "38:5:31": "#0087af",
  "38:5:32": "#0087d7",
  "38:5:33": "#0087ff",
  "38:5:34": "#00af00",
  "38:5:35": "#00af5f",
  "38:5:36": "#00af87",
  "38:5:37": "#00afaf",
  "38:5:38": "#00afd7",
  "38:5:39": "#00afff",
  "38:5:40": "#00d700",
  "38:5:41": "#00d75f",
  "38:5:42": "#00d787",
  "38:5:43": "#00d7af",
  "38:5:44": "#00d7d7",
  "38:5:45": "#00d7ff",
  "38:5:46": "#00ff00",
  "38:5:47": "#00ff5f",
  "38:5:48": "#00ff87",
  "38:5:49": "#00ffaf",
  "38:5:50": "#00ffd7",
  "38:5:51": "#00ffff",
  "38:5:52": "#5f0000",
  "38:5:53": "#5f005f",
  "38:5:54": "#5f0087",
  "38:5:55": "#5f00af",
  "38:5:56": "#5f00d7",
  "38:5:57": "#5f00ff",
  "38:5:58": "#5f5f00",
  "38:5:59": "#5f5f5f",
  "38:5:60": "#5f5f87",
  "38:5:61": "#5f5faf",
  "38:5:62": "#5f5fd7",
  "38:5:63": "#5f5fff",
  "38:5:64": "#5f8700",
  "38:5:65": "#5f875f",
  "38:5:66": "#5f8787",
  "38:5:67": "#5f87af",
  "38:5:68": "#5f87d7",
  "38:5:69": "#5f87ff",
  "38:5:70": "#5faf00",
  "38:5:71": "#5faf5f",
  "38:5:72": "#5faf87",
  "38:5:73": "#5fafaf",
  "38:5:74": "#5fafd7",
  "38:5:75": "#5fafff",
  "38:5:76": "#5fd700",
  "38:5:77": "#5fd75f",
  "38:5:78": "#5fd787",
  "38:5:79": "#5fd7af",
  "38:5:80": "#5fd7d7",
  "38:5:81": "#5fd7ff",
  "38:5:82": "#5fff00",
  "38:5:83": "#5fff5f",
  "38:5:84": "#5fff87",
  "38:5:85": "#5fffaf",
  "38:5:86": "#5fffd7",
  "38:5:87": "#5fffff",
  "38:5:88": "#870000",
  "38:5:89": "#87005f",
  "38:5:90": "#870087",
  "38:5:91": "#8700af",
  "38:5:92": "#8700d7",
  "38:5:93": "#8700ff",
  "38:5:94": "#875f00",
  "38:5:95": "#875f5f",
  "38:5:96": "#875f87",
  "38:5:97": "#875faf",
  "38:5:98": "#875fd7",
  "38:5:99": "#875fff",
  "38:5:100": "#878700",
  "38:5:101": "#87875f",
  "38:5:102": "#878787",
  "38:5:103": "#8787af",
  "38:5:104": "#8787d7",
  "38:5:105": "#8787ff",
  "38:5:106": "#87af00",
  "38:5:107": "#87af5f",
  "38:5:108": "#87af87",
  "38:5:109": "#87afaf",
  "38:5:110": "#87afd7",
  "38:5:111": "#87afff",
  "38:5:112": "#87d700",
  "38:5:113": "#87d75f",
  "38:5:114": "#87d787",
  "38:5:115": "#87d7af",
  "38:5:116": "#87d7d7",
  "38:5:117": "#87d7ff",
  "38:5:118": "#87ff00",
  "38:5:119": "#87ff5f",
  "38:5:120": "#87ff87",
  "38:5:121": "#87ffaf",
  "38:5:122": "#87ffd7",
  "38:5:123": "#87ffff",
  "38:5:124": "#af0000",
  "38:5:125": "#af005f",
  "38:5:126": "#af0087",
  "38:5:127": "#af00af",
  "38:5:128": "#af00d7",
  "38:5:129": "#af00ff",
  "38:5:130": "#af5f00",
  "38:5:131": "#af5f5f",
  "38:5:132": "#af5f87",
  "38:5:133": "#af5faf",
  "38:5:134": "#af5fd7",
  "38:5:135": "#af5fff",
  "38:5:136": "#af8700",
  "38:5:137": "#af875f",
  "38:5:138": "#af8787",
  "38:5:139": "#af87af",
  "38:5:140": "#af87d7",
  "38:5:141": "#af87ff",
  "38:5:142": "#afaf00",
  "38:5:143": "#afaf5f",
  "38:5:144": "#afaf87",
  "38:5:145": "#afafaf",
  "38:5:146": "#afafd7",
  "38:5:147": "#afafff",
  "38:5:148": "#afd700",
  "38:5:149": "#afd75f",
  "38:5:150": "#afd787",
  "38:5:151": "#afd7af",
  "38:5:152": "#afd7d7",
  "38:5:153": "#afd7ff",
  "38:5:154": "#afff00",
  "38:5:155": "#afff5f",
  "38:5:156": "#afff87",
  "38:5:157": "#afffaf",
  "38:5:158": "#afffd7",
  "38:5:159": "#afffff",
  "38:5:160": "#d70000",
  "38:5:161": "#d7005f",
  "38:5:162": "#d70087",
  "38:5:163": "#d700af",
  "38:5:164": "#d700d7",
  "38:5:165": "#d700ff",
  "38:5:166": "#d75f00",
  "38:5:167": "#d75f5f",
  "38:5:168": "#d75f87",
  "38:5:169": "#d75faf",
  "38:5:170": "#d75fd7",
  "38:5:171": "#d75fff",
  "38:5:172": "#d78700",
  "38:5:173": "#d7875f",
  "38:5:174": "#d78787",
  "38:5:175": "#d787af",
  "38:5:176": "#d787d7",
  "38:5:177": "#d787ff",
  "38:5:178": "#d7af00",
  "38:5:179": "#d7af5f",
  "38:5:180": "#d7af87",
  "38:5:181": "#d7afaf",
  "38:5:182": "#d7afd7",
  "38:5:183": "#d7afff",
  "38:5:184": "#d7d700",
  "38:5:185": "#d7d75f",
  "38:5:186": "#d7d787",
  "38:5:187": "#d7d7af",
  "38:5:188": "#d7d7d7",
  "38:5:189": "#d7d7ff",
  "38:5:190": "#d7ff00",
  "38:5:191": "#d7ff5f",
  "38:5:192": "#d7ff87",
  "38:5:193": "#d7ffaf",
  "38:5:194": "#d7ffd7",
  "38:5:195": "#d7ffff",
  "38:5:196": "#ff0000",
  "38:5:197": "#ff005f",
  "38:5:198": "#ff0087",
  "38:5:199": "#ff00af",
  "38:5:200": "#ff00d7",
  "38:5:201": "#ff00ff",
  "38:5:202": "#ff5f00",
  "38:5:203": "#ff5f5f",
  "38:5:204": "#ff5f87",
  "38:5:205": "#ff5faf",
  "38:5:206": "#ff5fd7",
  "38:5:207": "#ff5fff",
  "38:5:208": "#ff8700",
  "38:5:209": "#ff875f",
  "38:5:210": "#ff8787",
  "38:5:211": "#ff87af",
  "38:5:212": "#ff87d7",
  "38:5:213": "#ff87ff",
  "38:5:214": "#ffaf00",
  "38:5:215": "#ffaf5f",
  "38:5:216": "#ffaf87",
  "38:5:217": "#ffafaf",
  "38:5:218": "#ffafd7",
  "38:5:219": "#ffafff",
  "38:5:220": "#ffd700",
  "38:5:221": "#ffd75f",
  "38:5:222": "#ffd787",
  "38:5:223": "#ffd7af",
  "38:5:224": "#ffd7d7",
  "38:5:225": "#ffd7ff",
  "38:5:226": "#ffff00",
  "38:5:227": "#ffff5f",
  "38:5:228": "#ffff87",
  "38:5:229": "#ffffaf",
  "38:5:230": "#ffffd7",
  "38:5:231": "#ffffff",
  "38:5:232": "#080808",
  "38:5:233": "#121212",
  "38:5:234": "#1c1c1c",
  "38:5:235": "#262626",
  "38:5:236": "#303030",
  "38:5:237": "#3a3a3a",
  "38:5:238": "#444444",
  "38:5:239": "#4e4e4e",
  "38:5:240": "#585858",
  "38:5:241": "#626262",
  "38:5:242": "#6c6c6c",
  "38:5:243": "#767676",
  "38:5:244": "#808080",
  "38:5:245": "#8a8a8a",
  "38:5:246": "#949494",
  "38:5:247": "#9e9e9e",
  "38:5:248": "#a8a8a8",
  "38:5:249": "#b2b2b2",
  "38:5:250": "#bcbcbc",
  "38:5:251": "#c6c6c6",
  "38:5:252": "#d0d0d0",
  "38:5:253": "#dadada",
  "38:5:254": "#e4e4e4",
  "38:5:255": "#eeeeee",
};

var BGCOLORS = {
  "40": "#000000", //8 colors ...
  "41": "#cd0000",
  "42": "#00cd00",
  "43": "#cdcd00",
  "44": "#1e90ff",
  "45": "#cd00cd",
  "46": "#00cdcd",
  "47": "#e5e5e5",
  "49": "#000000", //default
  "100": "#4c4c4c", //16 colors ...
  "101": "#ff0000",
  "102": "#00ff00",
  "103": "#ffff00",
  "104": "#4682b4",
  "105": "#ff00ff",
  "106": "#00ffff",
  "107": "#ffffff",
  "48:5:0": "#000000", //256 colors ...
  "48:5:1": "#cd0000",
  "48:5:2": "#00cd00",
  "48:5:3": "#cdcd00",
  "48:5:4": "#1e90ff",
  "48:5:5": "#cd00cd",
  "48:5:6": "#00cdcd",
  "48:5:7": "#e5e5e5",
  "48:5:8": "#4c4c4c",
  "48:5:9": "#ff0000",
  "48:5:10": "#00ff00",
  "48:5:11": "#ffff00",
  "48:5:12": "#4682b4",
  "48:5:13": "#ff00ff",
  "48:5:14": "#00ffff",
  "48:5:15": "#ffffff",
  "48:5:16": "#000000",
  "48:5:17": "#00005f",
  "48:5:18": "#000087",
  "48:5:19": "#0000af",
  "48:5:20": "#0000d7",
  "48:5:21": "#0000ff",
  "48:5:22": "#005f00",
  "48:5:23": "#005f5f",
  "48:5:24": "#005f87",
  "48:5:25": "#005faf",
  "48:5:26": "#005fd7",
  "48:5:27": "#005fff",
  "48:5:28": "#008700",
  "48:5:29": "#00875f",
  "48:5:30": "#008787",
  "48:5:31": "#0087af",
  "48:5:32": "#0087d7",
  "48:5:33": "#0087ff",
  "48:5:34": "#00af00",
  "48:5:35": "#00af5f",
  "48:5:36": "#00af87",
  "48:5:37": "#00afaf",
  "48:5:48": "#00afd7",
  "48:5:39": "#00afff",
  "48:5:40": "#00d700",
  "48:5:41": "#00d75f",
  "48:5:42": "#00d787",
  "48:5:43": "#00d7af",
  "48:5:44": "#00d7d7",
  "48:5:45": "#00d7ff",
  "48:5:46": "#00ff00",
  "48:5:47": "#00ff5f",
  "48:5:48": "#00ff87",
  "48:5:49": "#00ffaf",
  "48:5:50": "#00ffd7",
  "48:5:51": "#00ffff",
  "48:5:52": "#5f0000",
  "48:5:53": "#5f005f",
  "48:5:54": "#5f0087",
  "48:5:55": "#5f00af",
  "48:5:56": "#5f00d7",
  "48:5:57": "#5f00ff",
  "48:5:58": "#5f5f00",
  "48:5:59": "#5f5f5f",
  "48:5:60": "#5f5f87",
  "48:5:61": "#5f5faf",
  "48:5:62": "#5f5fd7",
  "48:5:63": "#5f5fff",
  "48:5:64": "#5f8700",
  "48:5:65": "#5f875f",
  "48:5:66": "#5f8787",
  "48:5:67": "#5f87af",
  "48:5:68": "#5f87d7",
  "48:5:69": "#5f87ff",
  "48:5:70": "#5faf00",
  "48:5:71": "#5faf5f",
  "48:5:72": "#5faf87",
  "48:5:73": "#5fafaf",
  "48:5:74": "#5fafd7",
  "48:5:75": "#5fafff",
  "48:5:76": "#5fd700",
  "48:5:77": "#5fd75f",
  "48:5:78": "#5fd787",
  "48:5:79": "#5fd7af",
  "48:5:80": "#5fd7d7",
  "48:5:81": "#5fd7ff",
  "48:5:82": "#5fff00",
  "48:5:83": "#5fff5f",
  "48:5:84": "#5fff87",
  "48:5:85": "#5fffaf",
  "48:5:86": "#5fffd7",
  "48:5:87": "#5fffff",
  "48:5:88": "#870000",
  "48:5:89": "#87005f",
  "48:5:90": "#870087",
  "48:5:91": "#8700af",
  "48:5:92": "#8700d7",
  "48:5:93": "#8700ff",
  "48:5:94": "#875f00",
  "48:5:95": "#875f5f",
  "48:5:96": "#875f87",
  "48:5:97": "#875faf",
  "48:5:98": "#875fd7",
  "48:5:99": "#875fff",
  "48:5:100": "#878700",
  "48:5:101": "#87875f",
  "48:5:102": "#878787",
  "48:5:103": "#8787af",
  "48:5:104": "#8787d7",
  "48:5:105": "#8787ff",
  "48:5:106": "#87af00",
  "48:5:107": "#87af5f",
  "48:5:108": "#87af87",
  "48:5:109": "#87afaf",
  "48:5:110": "#87afd7",
  "48:5:111": "#87afff",
  "48:5:112": "#87d700",
  "48:5:113": "#87d75f",
  "48:5:114": "#87d787",
  "48:5:115": "#87d7af",
  "48:5:116": "#87d7d7",
  "48:5:117": "#87d7ff",
  "48:5:118": "#87ff00",
  "48:5:119": "#87ff5f",
  "48:5:120": "#87ff87",
  "48:5:121": "#87ffaf",
  "48:5:122": "#87ffd7",
  "48:5:123": "#87ffff",
  "48:5:124": "#af0000",
  "48:5:125": "#af005f",
  "48:5:126": "#af0087",
  "48:5:127": "#af00af",
  "48:5:128": "#af00d7",
  "48:5:129": "#af00ff",
  "48:5:130": "#af5f00",
  "48:5:131": "#af5f5f",
  "48:5:132": "#af5f87",
  "48:5:133": "#af5faf",
  "48:5:134": "#af5fd7",
  "48:5:135": "#af5fff",
  "48:5:136": "#af8700",
  "48:5:137": "#af875f",
  "48:5:148": "#af8787",
  "48:5:139": "#af87af",
  "48:5:140": "#af87d7",
  "48:5:141": "#af87ff",
  "48:5:142": "#afaf00",
  "48:5:143": "#afaf5f",
  "48:5:144": "#afaf87",
  "48:5:145": "#afafaf",
  "48:5:146": "#afafd7",
  "48:5:147": "#afafff",
  "48:5:148": "#afd700",
  "48:5:149": "#afd75f",
  "48:5:150": "#afd787",
  "48:5:151": "#afd7af",
  "48:5:152": "#afd7d7",
  "48:5:153": "#afd7ff",
  "48:5:154": "#afff00",
  "48:5:155": "#afff5f",
  "48:5:156": "#afff87",
  "48:5:157": "#afffaf",
  "48:5:158": "#afffd7",
  "48:5:159": "#afffff",
  "48:5:160": "#d70000",
  "48:5:161": "#d7005f",
  "48:5:162": "#d70087",
  "48:5:163": "#d700af",
  "48:5:164": "#d700d7",
  "48:5:165": "#d700ff",
  "48:5:166": "#d75f00",
  "48:5:167": "#d75f5f",
  "48:5:168": "#d75f87",
  "48:5:169": "#d75faf",
  "48:5:170": "#d75fd7",
  "48:5:171": "#d75fff",
  "48:5:172": "#d78700",
  "48:5:173": "#d7875f",
  "48:5:174": "#d78787",
  "48:5:175": "#d787af",
  "48:5:176": "#d787d7",
  "48:5:177": "#d787ff",
  "48:5:178": "#d7af00",
  "48:5:179": "#d7af5f",
  "48:5:180": "#d7af87",
  "48:5:181": "#d7afaf",
  "48:5:182": "#d7afd7",
  "48:5:183": "#d7afff",
  "48:5:184": "#d7d700",
  "48:5:185": "#d7d75f",
  "48:5:186": "#d7d787",
  "48:5:187": "#d7d7af",
  "48:5:188": "#d7d7d7",
  "48:5:189": "#d7d7ff",
  "48:5:190": "#d7ff00",
  "48:5:191": "#d7ff5f",
  "48:5:192": "#d7ff87",
  "48:5:193": "#d7ffaf",
  "48:5:194": "#d7ffd7",
  "48:5:195": "#d7ffff",
  "48:5:196": "#ff0000",
  "48:5:197": "#ff005f",
  "48:5:198": "#ff0087",
  "48:5:199": "#ff00af",
  "48:5:200": "#ff00d7",
  "48:5:201": "#ff00ff",
  "48:5:202": "#ff5f00",
  "48:5:203": "#ff5f5f",
  "48:5:204": "#ff5f87",
  "48:5:205": "#ff5faf",
  "48:5:206": "#ff5fd7",
  "48:5:207": "#ff5fff",
  "48:5:208": "#ff8700",
  "48:5:209": "#ff875f",
  "48:5:210": "#ff8787",
  "48:5:211": "#ff87af",
  "48:5:212": "#ff87d7",
  "48:5:213": "#ff87ff",
  "48:5:214": "#ffaf00",
  "48:5:215": "#ffaf5f",
  "48:5:216": "#ffaf87",
  "48:5:217": "#ffafaf",
  "48:5:218": "#ffafd7",
  "48:5:219": "#ffafff",
  "48:5:220": "#ffd700",
  "48:5:221": "#ffd75f",
  "48:5:222": "#ffd787",
  "48:5:223": "#ffd7af",
  "48:5:224": "#ffd7d7",
  "48:5:225": "#ffd7ff",
  "48:5:226": "#ffff00",
  "48:5:227": "#ffff5f",
  "48:5:228": "#ffff87",
  "48:5:229": "#ffffaf",
  "48:5:230": "#ffffd7",
  "48:5:231": "#ffffff",
  "48:5:232": "#080808",
  "48:5:233": "#121212",
  "48:5:234": "#1c1c1c",
  "48:5:235": "#262626",
  "48:5:236": "#303030",
  "48:5:237": "#3a3a3a",
  "48:5:248": "#444444",
  "48:5:239": "#4e4e4e",
  "48:5:240": "#585858",
  "48:5:241": "#626262",
  "48:5:242": "#6c6c6c",
  "48:5:243": "#767676",
  "48:5:244": "#808080",
  "48:5:245": "#8a8a8a",
  "48:5:246": "#949494",
  "48:5:247": "#9e9e9e",
  "48:5:248": "#a8a8a8",
  "48:5:249": "#b2b2b2",
  "48:5:250": "#bcbcbc",
  "48:5:251": "#c6c6c6",
  "48:5:252": "#d0d0d0",
  "48:5:253": "#dadada",
  "48:5:254": "#e4e4e4",
  "48:5:255": "#eeeeee",
};

function _clear_inner(e) {
  while (e.firstChild) {
    e.removeChild(e.firstChild);
  }
}

function _mk_ph_node(str, fg, bg, bold, underline) {
  node = document.createElement("span");
  node.style.color = fg;
  node.style.background = bg;
  if (bold) {
    node.style.fontWeight = "bold";
  }
  if (underline) {
    node.style.textDecoration = "underline";
  }
  if (str == " ") {
    node.appendChild(document.createTextNode("\u00a0"));
  } else {
    node.appendChild(document.createTextNode(str));
  }
  return node;
}

function _ph_input_width() {
  ph_input.style.width = ph_div.offsetWidth - 70 + "px";
}

function ph_init() {
  //#prompt_helper style
  ph_div.style.border = "#c0c0c0 solid 3px";
  ph_div.style.padding = "0px";
  ph_div.style.background = "#000000";
  ph_div.style.color = "#ffffff";
  ph_div.style.fontFamily = "monospace";
  ph_div.style.fontSize = "9pt";
  //Clear the content of #prompt_helper
  _clear_inner(ph_div);
  //Add #ph_titlebar, and set its style and content
  ph_titlebar = document.createElement("div");
  ph_titlebar.setAttribute("id", "ph_titlebar");
  ph_titlebar.style.padding = "0 0 3px 0";
  ph_titlebar.style.background = "#c0c0c0";
  ph_titlebar.style.color = "#000000";
  ph_titlebar.style.fontFamily = "sans-serif";
  ph_titlebar.style.fontWeight = "bold";
  ph_titlebar.style.minHeight = "16px";
  ph_titlebar.style.overflow = "hidden";
  ph_titlebar.style.whiteSpace = "nowrap";
  ph_titlebar.appendChild(document.createTextNode("Prompt Helper"));
  ph_div.appendChild(ph_titlebar);
  //Download button
  ph_dlbtn = document.createElement("a");
  ph_dlbtn.setAttribute(
    "href",
    "http://download.flogisoft.com/files/misc/softwares/prompt_helper/"
  );
  ph_dlbtnimg = document.createElement("img");
  ph_dlbtnimg.setAttribute(
    "src",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOAQMAAAAlhr%2BSAAAAAXNSR0IArs4c6QAAAAZQTFRFAGAHOTk527ktlgAAAAF0Uk5TAEDm2GYAAAAfSURBVAjXY2BgYGBvQEf2HxjkHzDwHwCxmRlAXAYGAJloB%2BGJ8YGpAAAAAElFTkSuQmCC"
  );
  ph_dlbtnimg.setAttribute("alt", "Download Prompt Helper");
  ph_dlbtnimg.setAttribute("title", "Download Prompt Helper");
  ph_dlbtnimg.style.verticalAlign = "middle";
  ph_dlbtnimg.style.margin = "-1px 2px 0 0";
  ph_dlbtnimg.style.border = "none";
  ph_dlbtn.appendChild(ph_dlbtnimg);
  //Add #ph_prev, and set its style and content
  ph_prev = document.createElement("div");
  ph_prev.setAttribute("id", "ph_prev");
  ph_prev.style.padding = "3px 5px 5px 5px";
  ph_prev.style.minHeight = "16px";
  ph_prev.style.overflow = "hidden";
  ph_prev.appendChild(document.createTextNode("Prompt Preview"));
  ph_div.appendChild(ph_prev);
  //Add #ph_input_div, and set its style and content
  ph_input_div = document.createElement("div");
  ph_input_div.setAttribute("id", "ph_input_div");
  ph_input_div.style.padding = "3px 5px";
  ph_input_div.style.fontWeight = "bold";
  ph_input_div.appendChild(document.createTextNode('PS1="'));
  ph_div.appendChild(ph_input_div);
  //Add #ph_input
  ph_input = document.createElement("input");
  ph_input.setAttribute("type", "text");
  ph_input.setAttribute("name", "ph_input");
  ph_input.setAttribute("id", "ph_input");
  ph_input.setAttribute(
    "value",
    "\\[\\e[1;32m\\]\\u@\\h\\[\\e[0;1m\\]:\\[\\e[0;36m\\]\\w\\[\\e[0m\\]\\$ "
  );
  ph_input.style.border = "#444 dashed 1px";
  ph_input.style.background = "#222";
  ph_input.style.color = "#aaa";
  ph_input.style.fontFamily = "monospace";
  ph_input.style.fontSize = "9pt";
  ph_input.addEventListener(
    "keyup",
    function () {
      ph_parse_prompt(ph_input.value);
    },
    true
  );
  ph_input.addEventListener(
    "change",
    function () {
      ph_parse_prompt(ph_input.value);
    },
    true
  );
  ph_input.addEventListener(
    "mouseup",
    function () {
      ph_parse_prompt(ph_input.value);
    },
    true
  );
  ph_input_div.appendChild(ph_input);
  ph_input_div.appendChild(document.createTextNode('"'));
}

function ph_parse_title(title_str) {
  var mode = "char"; //char, bs, var
  var buff = "";
  var result = "";
  //Make the prompt more easy to parse
  title_str = title_str.replace(/([^\\]|^)\$\{(.*)\$(.*)\}/gi, "$1${$2$3}");
  title_str = title_str.replace(/([^\\]|^)\$\$/gi, "$1" + "1337");
  title_str = title_str.replace(
    /([^\\]|^)\$([a-z_][a-z0-9_]*|[0-9]|\?|#|@|\*)/gi,
    "$1${$2}"
  );
  //
  for (i in title_str) {
    switch (mode) {
      case "char":
        if (title_str[i] == "\\") {
          mode = "bs";
        } else if (title_str[i] == "$") {
          mode = "var";
          buff = "";
        } else {
          result += title_str[i];
        }
        break;

      case "var":
        if (title_str[i] == "{" && buff == "") {
          buff = "$";
        } else if (title_str[i] != "{" && buff == "") {
          result += "$" + title_str[i];
          mode = "char";
        } else if (title_str[i] == "}") {
          if (buff in ENV) {
            result += ENV[buff];
          }
          mode = "char";
        } else {
          buff += title_str[i];
        }
        break;

      case "bs":
        if (title_str[i] in BSCHARS) {
          result += BSCHARS[title_str[i]];
          mode = "char";
        } else {
          result += "\\" + title_str[i];
          mode = "char";
        }
        break;
    }
  }
  return result;
}

function ph_parse_prompt(prompt_str) {
  var mode = "char"; //char, bs, var, ESC, CSI, OSC, OSC-T
  var fg_color = "#fff";
  var bg_color = "#000";
  var attr_bold = false;
  var attr_underline = false;
  //Clear the preview div and set the default title
  _clear_inner(ph_prev);
  _clear_inner(ph_titlebar);
  ph_titlebar.appendChild(ph_dlbtn);
  ph_titlebar.appendChild(document.createTextNode("Prompt Helper"));
  //Make the prompt more easy to parse
  prompt_str = prompt_str.replace(/\\E/g, "\\e");
  prompt_str = prompt_str.replace(/\\033/g, "\\e");
  prompt_str = prompt_str.replace(/\\007/g, "\u0007");
  prompt_str = prompt_str.replace(/\\a/g, "\u0007");
  prompt_str = prompt_str.replace(/([^\\]|^)\$\{(.*)\$(.*)\}/gi, "$1${$2$3}");
  prompt_str = prompt_str.replace(/([^\\]|^)\$\$/gi, "$1" + "1337");
  prompt_str = prompt_str.replace(
    /([^\\]|^)\$([a-z_][a-z0-9_]*|[0-9]|\?|#|@|\*)/gi,
    "$1${$2}"
  );
  //
  for (i in prompt_str) {
    switch (mode) {
      case "char":
        if (prompt_str[i] == "\\") {
          mode = "bs";
        } else if (prompt_str[i] == "$") {
          mode = "var";
          buff = "";
        } else {
          ph_prev.appendChild(
            _mk_ph_node(
              prompt_str[i],
              fg_color,
              bg_color,
              attr_bold,
              attr_underline
            )
          );
        }
        break;

      case "var":
        if (prompt_str[i] == "{" && buff == "") {
          buff = "$";
        } else if (prompt_str[i] != "{" && buff == "") {
          ph_prev.appendChild(
            _mk_ph_node(
              "$" + prompt_str[i],
              fg_color,
              bg_color,
              attr_bold,
              attr_underline
            )
          );
          mode = "char";
        } else if (prompt_str[i] == "}") {
          if (buff in ENV) {
            ph_prev.appendChild(
              _mk_ph_node(
                ENV[buff],
                fg_color,
                bg_color,
                attr_bold,
                attr_underline
              )
            );
          }
          mode = "char";
        } else {
          buff += prompt_str[i];
        }
        break;

      case "bs":
        if (prompt_str[i] in BSCHARS) {
          ph_prev.appendChild(
            _mk_ph_node(
              BSCHARS[prompt_str[i]],
              fg_color,
              bg_color,
              attr_bold,
              attr_underline
            )
          );
          mode = "char";
        } else if (prompt_str[i] == "e") {
          mode = "ESC";
        } else if (prompt_str[i] == "r") {
          _clear_inner(ph_prev);
          mode = "char";
        } else if (prompt_str[i] == "n") {
          ph_prev.appendChild(document.createElement("br"));
          mode = "char";
        } else {
          ph_prev.appendChild(
            _mk_ph_node(
              "\\" + prompt_str[i],
              fg_color,
              bg_color,
              attr_bold,
              attr_underline
            )
          );
          mode = "char";
        }
        break;

      case "ESC":
        if (prompt_str[i] == "[") {
          //CSI
          mode = "CSI";
          buff = "";
        } else if (prompt_str[i] == "]") {
          //OSC
          mode = "OSC";
          buff = "";
        } else {
          ph_prev.appendChild(
            _mk_ph_node(
              "\u001b" + prompt_str[i],
              fg_color,
              bg_color,
              attr_bold,
              attr_underline
            )
          );
          mode = "char";
        }
        break;

      case "CSI":
        validattr = {
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": "",
          "6": "",
          "7": "",
          "8": "",
          "9": "",
          "0": "",
          ";": "",
        };
        if (prompt_str[i] in validattr) {
          buff += prompt_str[i];
        } else if (prompt_str[i] == "m") {
          buff = buff.replace(/(38|48);5;([0-9]{1,3})/g, "$1:5:$2"); //256 colors
          attr = buff.split(";");
          for (i in attr) {
            attr[i] = attr[i].replace(/^0+(.+)/, "$1");
            switch (attr[i]) {
              case "0": //Clear all attr
                fg_color = "#fff";
                bg_color = "#000";
                attr_bold = false;
                attr_underline = false;
                break;
              case "1": //Bold
                attr_bold = true;
                break;
              case "4": //underline
                attr_underline = true;
                break;
              case "7": //invert
                invtmp = fg_color;
                fg_color = bg_color;
                bg_color = invtmp;
                break;
              default:
                if (attr[i] in FGCOLORS) {
                  fg_color = FGCOLORS[attr[i]];
                } else if (attr[i] in BGCOLORS) {
                  bg_color = BGCOLORS[attr[i]];
                }
            }
          }
          mode = "char";
        } else {
          ph_prev.appendChild(
            _mk_ph_node(
              "\u001b[" + buff + prompt_str[i],
              fg_color,
              bg_color,
              attr_bold,
              attr_underline
            )
          );
          mode = "char";
        }
        break;

      case "OSC":
        if (prompt_str[i] == "0" || prompt_str[i] == "2") {
          buff = prompt_str[i];
        } else if (prompt_str[i] == ";" && buff != "") {
          mode = "OSC-T";
          buff = "";
        } else {
          ph_prev.appendChild(
            _mk_ph_node(
              "\u001b]" + prompt_str[i],
              fg_color,
              bg_color,
              attr_bold,
              attr_underline
            )
          );
          mode = "char";
        }
        break;

      case "OSC-T":
        if (prompt_str[i] == "\u0007") {
          _clear_inner(ph_titlebar);
          ph_titlebar.appendChild(ph_dlbtn);
          ph_titlebar.appendChild(
            document.createTextNode(ph_parse_title(buff) + " - Prompt Helper")
          );
          mode = "char";
        } else {
          buff += prompt_str[i];
        }
        break;
    }
  }
}

ph_init();
ph_parse_prompt(ph_input.getAttribute("value"));
setInterval("_ph_input_width()", 500);
_ph_input_width();
