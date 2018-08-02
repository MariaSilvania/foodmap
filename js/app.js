function initMap() {
  var uluru = {
    lat: -23.557567, lng: -46.658615
  };
  var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 4, center: uluru
      });
  var marker = new google.maps.Marker({
    position: uluru, map: map
  });
}
$('.home').hide();
$(document).ready(function() {
  setTimeout(function () {
  	$('.logo').hide();
    $('.home').show();
  }, 5000);

  var names = [];
  var images = [];
  var types = [];
  var descriptions = [];
  $.each(restaurantes, function(index, value) {
    names.push(value.name);
    images.push(value.image);
    types.push(value.type);
    descriptions.push(value.description);
    $(".imagensRestaurantes").append("<img src= " + value.image + " alt=" + value.name + " >");
  });
  $("#h1Modal").append(names[0]);
  $('#imgModal').attr('src', images[0]);
  $('#imgModal').attr('alt', names[0]);
  $("#typeModal").append("Tipo: " + types[0]);
  $('#descriptionModal').append("Descrição: " + descriptions[0]);
});
// $('.filtrar').click(function () {
//    var inputValue = $('.termo').val();
//
//    $( "li" ).each(function( ) {
//      if($(this).text() !== inputValue) {
//        $(this).fadeOut('slow');
//      }
//    });
//  })
//
//  $('.termo').on('input', function () {
//    if($(this).val() === "") {
//      $( "li" ).each(function( ) {
//        $(this).fadeIn('slow')
//      });
//    }
//  })
