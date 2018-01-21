$(document).ready(function() {
  addTags();
});

/*
* Agregando elementos html <figure> y <figcaption>
*/
var addTags = (function() {
  $('img').wrap('<figure></figure>');
  $('<figcaption></figcaption>').insertAfter('img');


/*
* envuelve las imagenes en un elemento figure
*/
 $("img").wrap('<figure class="alt-text"/>');
 /*
 *agrega el texto del alt en un figcaption
 */
 $("img").each(function() {
  $(this).after('<figcaption class="alt">' + $(this).attr('alt') + '</figcaption>');
  })



});