var $body = $('body');

$('html').on('keydown', function (e) {
  var $name = $('<div>');
  $name.addClass('ball');
  $body.append($name);
  var newLeft = Math.floor(Math.random() * (1000 - 0)) + 0;
  var newTop = Math.floor(Math.random() * (1000 - 0)) + 0;
  $name.css('left', newLeft);
  $name.css('top', newTop);
});
