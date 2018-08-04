function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14, center: {lat: -23.561751 , lng: -46.658998},
  });
  for (i = 0; i < restaurantes.length; i++) {
    var latitude = restaurantes[i].latitude;
    var longitude = restaurantes[i].longitude;
    var marker = new google.maps.Marker({
     position: new google.maps.LatLng(latitude , longitude),
     map: map,
    });
  }
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
    names.push(value.name.toUpperCase());
    images.push(value.image);
    types.push(value.type);
    descriptions.push(value.description);
    $(".imagensRestaurantes").append("<img src= " + value.image + " alt=" + value.name + " >");
  });
  $('.btnFiltrar').click(function () {
   var inputValue = $('.textoFiltrar').val();
   $.each(names, function(index, value) {
     if(value === inputValue.toUpperCase()) {
       $("#h1Modal").append(names[index]);
       $('#imgModal').attr('src', images[index]);
       $('#imgModal').attr('alt', names[index]);
       $('#imgModal').show();
       $("#typeModal").append("<b>Tipo: </b>" + types[index]);
       $('#descriptionModal').append("<b>Descrição: </b>" + descriptions[index]);
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
});
