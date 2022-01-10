/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    // dotColor: '#5cbdaa',
    // lineColor: '#5cbdaa'
    // dotColor: '#a7c9c4',
    // lineColor: '#a7c9c4'
    dotColor: '#ffffff',
    lineColor: '#ffffff'
  });
  // var links = document.getElementById('links');
  // var particle = document.getElementById('particles');
  // // links.style.marginTop = - particle.height * 2 + 'px';
  //
  // links.style.marginTop = 0 + 'px';
  // console.log(particle.offsetHeight);
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/
