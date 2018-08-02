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
  var listaIndex = [];
  var names = [];
  var images = [];
  var types = [];
  var descriptions = [];

  $.each(restaurantes, function(index, value) {
    listaIndex.push(index);
    names.push(value.name);
    images.push(value.image);
    types.push(value.type);
    descriptions.push(value.description);
    $(".imagensRestaurantes").append("<img src= " + value.image + " alt=" + value.name + " >");
  });
  $('.btnFiltrar').click(function () {
   var inputValue = $('.textoFiltrar').val();
   $.each(names, function(index, value) {
     if(value === inputValue) {
       $("#h1Modal").append(names[index]);
       $('#imgModal').attr('src', images[index]);
       $('#imgModal').attr('alt', names[index]);
       $('#imgModal').show();
       $("#typeModal").append("Tipo: " + types[index]);
       $('#descriptionModal').append("Descrição: " + descriptions[index]);
     }
  });
   $('.close').click(function () {
     $('.textoFiltrar').val("");
     $('#h1Modal').html("");
     $('#imgModal').hide();
     $('#typeModal').html("");
     $('#descriptionModal').html("");
    });
  })
//
//  $('.termo').on('input', function () {
//    if($(this).val() === "") {
//      $( "li" ).each(function( ) {
//        $(this).fadeIn('slow')
//      });
//    }
//  })
});
