$(document).ready(function() {
  $('.cardifyDown').cardify({});
});

(function ($){
  $.fn.cardifyDown = function() {
/*
* envuelve las imagenes en un elemento figure
*/
$('.cardifyDown').wrap('<figure class="alt-text"/>');
/*
 *agrega el texto del alt en un figcaption
 */
  $('.cardifyDown').each(function() {
    $(this).after('<figcaption class="down">' + $(this).attr('alt') + '</figcaption>');
  });
  };




function cardifyUp(){
/*
* envuelve las imagenes en un elemento figure
*/
$('.cardifyUp').wrap('<figure class="alt-text"/>');
/*
 *agrega el texto del alt en un figcaption
 */
  $('.cardifyUp').each(function() {
    $(this).after('<figcaption class="up">' + $(this).attr('alt') + '</figcaption>');
  });
}


})($);