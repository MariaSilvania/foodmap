function myMapa() {
  var map = L.map('map').setView([-23.557567, -46.658615], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  var latitude;
  var longitude;
  for (i = 0; i < restaurantes.length; i++) {
    latitude = restaurantes[i].latitude;
    longitude = restaurantes[i].longitude;
    L.marker([latitude, longitude]).addTo(map)
      .bindPopup(restaurantes[i].name)
      .openPopup();
  }
}
myMapa();
$('.home').hide();
$(document).ready(function () {
  setTimeout(function () {
    $('.logo').hide();
    $('.home').show();
  }, 5000);
  var listaIndex = [];
  var names = [];
  var images = [];
  var types = [];
  var descriptions = [];
  $.each(restaurantes, function (index, value) {
    listaIndex.push(index);
    names.push(value.name);
    images.push(value.image);
    types.push(value.type.toUpperCase());
    descriptions.push(value.description);
    $(".imagensRestaurantes").append("<img src= " + value.image + " alt=" + value.type.toUpperCase() + " val=" + index + " data-toggle='modal' data-target='#modalRestautante'>");
  });

  $('.btnFiltrar').click(function () {
    var inputValue = $('.textoFiltrar').val().toUpperCase();
    $("img").each(function () {
      if ($(this).attr("alt") !== inputValue) {
        $(this).fadeOut('slow');
      }
    });
  });
  $('.textoFiltrar').on('input', function () {
    if ($(this).val() === "") {
      $("img").each(function () {
        $(this).fadeIn('slow')
      });
    }
  });
  $('img').click(function () {
    var index = $(this).attr("val");
    $("#h1Modal").append(names[index]);
    $('#imgModal').attr('src', images[index]);
    $('#imgModal').attr('alt', names[index]);
    $('#imgModal').show();
    $("#typeModal").append("<b>Tipo: </b>" + types[index]);
    $('#descriptionModal').append("<b>Descrição: </b>" + descriptions[index]);
  });
  $('.close').click(function () {
    $('#h1Modal').html("");
    $('#imgModal').hide();
    $('#typeModal').html("");
    $('#descriptionModal').html("");
  });

  function autoCompleteType() {
    var autoCompleteType = [];
    for (var i = 0; i < types.length; i++) {
      if (types[i] !== types[i + 1]) {
        autoCompleteType.push(types[i]);
      }
    }
    $(function () {
      $(".textoFiltrar").autocomplete({
        source: autoCompleteType
      });
    });
  }
  autoCompleteType();
});