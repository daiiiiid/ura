$(function() {
var nav = $('.nav');
$('li', nav)
.mouseover(function(e) {
$('ul', this).stop().slideDown('fast');
})
.mouseout(function(e) {
$('ul', this).stop().slideUp('fast');
});
});

  
  
  
$('.list-item').click(function() {
  $(this).css('color', 'red');
  });
});
