// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

$(function(){ $(document).foundation(); });


// sticky footer begins 

$(document).foundation();

/*!
 * jQuery Sticky Footer 1.1
 * Corey Snyder
 * http://tangerineindustries.com
 *
 * Released under the MIT license
 *
 * Copyright 2013 Corey Snyder.
 *
 * Date: Thu Jan 22 2013 13:34:00 GMT-0630 (Eastern Daylight Time)
 * Modification for jquery 1.9+ Tue May 7 2013
 * Modification for non-jquery, removed all, now classic JS Wed Jun 12 2013
 */

window.onload = function() {
  stickyFooter();
  
  //you can either uncomment and allow the setInterval to auto correct the footer
  //or call stickyFooter() if you have major DOM changes
  //setInterval(checkForDOMChange, 1000);
};

//check for changes to the DOM
function checkForDOMChange() {
  stickyFooter();
}

//check for resize event if not IE 9 or greater
window.onresize = function() {
  stickyFooter();
}

//lets get the marginTop for the <footer>
function getCSS(element, property) {

  var elem = document.getElementsByTagName(element)[0];
  var css = null;
  
  if (elem.currentStyle) {
    css = elem.currentStyle[property];
  
  } else if (window.getComputedStyle) {
  css = document.defaultView.getComputedStyle(elem, null).
  getPropertyValue(property);
  }
  
  return css;

}

function stickyFooter() {
  
  if (document.getElementsByTagName("footer")[0].getAttribute("style") != null) {
    document.getElementsByTagName("footer")[0].removeAttribute("style");
  }
  
  if (window.innerHeight != document.body.offsetHeight) {
    var offset = window.innerHeight - document.body.offsetHeight;
    var current = getCSS("footer", "margin-top");
    
    if (isNaN(current) == true) {
      document.getElementsByTagName("footer")[0].setAttribute("style","margin-top:0px;");
      current = 0;
    } else {
      current = parseInt(current);
    }
            
    if (current+offset > parseInt(getCSS("footer", "margin-top"))) {      
      document.getElementsByTagName("footer")[0].setAttribute("style","margin-top:"+(current+offset)+"px;");
    }
  }
}

/*
! end sticky footer
*/

