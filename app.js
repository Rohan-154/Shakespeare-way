var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("input-User");
var outputDiv = document.querySelector("output");

var apiUrl = "https://api.funtranslations.com/translate/shakespeare.json";
function getTranslationURL(inputText) {
  return apiUrl + "?" + "text=" + inputText;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}

function hoverHandler() {
  var text = txtInput.value;
  fetch(getTranslationURL(text))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
};

btnTranslate.addEventListener("click", hoverHandler);
