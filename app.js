var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#input-User");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";
function getTranslationURl(text) {
  return serverURL + "?" + "text=" + text;
}
function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}

function hoverHandler() {
  var inputText = txtInput.value;

  fetch(getTranslationURl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })

    .catch(errorHandler);
}
btnTranslate.addEventListener("click", hoverHandler);
