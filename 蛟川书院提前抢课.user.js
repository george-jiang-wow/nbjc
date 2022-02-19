// ==UserScript==
// @name         蛟川书院提前抢课
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       George
// @match        http://xs.nbjc.net.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
   var obj = document.getElementById("btn_Save");
   obj.style.display = "";
})();