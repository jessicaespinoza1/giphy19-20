/* global $ */
console.log('hi');

$('button').click(function(){
  var input = $("input").val();
  var name = "https://api.giphy.com/v1/gifs/search?rating=pg&api_key=dc6zaTOxFJmzC&q=" + input;
  fetch(name)
  .then(function(response){
    return response.json();
})
    .then(function(data){
      var Url = data.data[0].images.original.url;
      $("body").append(`<img src="${Url}">`);
     
    });
});
