$(document).ready(function() {
  addTags();
});

/*
* Agregando elementos html <figure> y <figcaption>
*/
var addTags = (function() {
  $('img').wrap('<figure></figure>');
  $('<figcaption></figcaption>').insertAfter('img');
});