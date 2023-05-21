// alert("Are you okay over there?");

/*Grab the input value*/

document.querySelector(".js-go").addEventListener("click", function () {
  let inputValue = document.querySelector(".js-userinput").value;
  let userInput = getUserInput();
  searchGiphy(userInput);
});

document.querySelector(".js-userinput").addEventListener("keyup", function (e) {
  //if enter key is pressed
  if (e.which === 13) {
    let userInput = getUserInput();
    searchGiphy(userInput);
  }
});

function getUserInput() {
  let inputValue = document.querySelector(".js-userinput").value;
  return inputValue;
}

/*Interacting with the API*/
function searchGiphy(searchQuery) {
  let url =
    "https://api.giphy.com/v1/gifs/search?q=" +
    searchQuery +
    "&api_key=L4NDXQmvGsPcPTKITPeYcaR3xnaREzlD";

  /*Api Calling*/

  let GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", url);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", function (data) {
    let newData = data.target.response;
    // console.log(data);
    pushToDOM(newData);
  });
}
/*Gifs Or GTFO*/
function pushToDOM(input) {
  let response = JSON.parse(input);
  let imageUrls = response.data;
  let container = document.querySelector(".js-container");

  imageUrls.forEach(function (image) {
    let src = image.images.fixed_height.url;
    console.log(src);

    container.innerHTML += '<img src="' + src + '">';
  });
}

//To complete--be able to search and display for whatever is being searched
