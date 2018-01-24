
  if (typeof window === 'undefined') return;


$(document).ready(function() {
  $('.imgwrap').cardify({});
});

(function ($){
  jQuery.fn.cardify = function() {
/*
* envuelve las imagenes en un elemento figure
*/
$('img').wrap('<figure class="alt-text"/>');
/*
 *agrega el texto del alt en un figcaption
 */
  $('img').each(function() {
    $(this).after('<figcaption class="alt">' + $(this).attr('alt') + '</figcaption>');
  });

  };

})(jQuery);

