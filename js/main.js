var $body = $('body');

$('html').on('keydown', function (e) {
  var $name = $('<div>');
  $name.addClass('ball');
  $body.append($name);
});
