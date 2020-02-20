/* global $ */
console.log('hi');

$('button').click(function(){
  fetch("https://api.giphy.com/v1/gifs/search?rating=pg&api_key=dc6zaTOxFJmzC&q=puppy")
  .then(function(response){
    return response.json();
})
    .then(function(data){
      console.log(data);
    });
});