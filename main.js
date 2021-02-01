$.ajax({ url: "https://sky-frontend.herokuapp.com/movies" }).done(function (
  data
) {
  console.log(data);
  $(".teste").append(
    '<img style="max-width: 100%; and height: auto;" class="img-responsive center-block" src="' +
      data[0].items[0].images[0].url +
      '"/>'
  );
  $(".teste2").append(
    '<p style="color: yellow">Title: ' + data[0].items[0].title + "</p>"
  );
  $(".teste3").append(
    '<p style="color: yellow">Year: ' + data[0].items[0].year + "</p>"
  );
  $(".teste4").append(
    '<p style="color: yellow">Description: ' +
      data[0].items[0].description +
      "</p>"
  );
});
