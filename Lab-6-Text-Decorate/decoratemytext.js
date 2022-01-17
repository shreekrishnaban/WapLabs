window.onload = pageLoad;
var globalElements = Object;



function pageLoad(e) {
    "use strict";
    initializeDom();
    globalElements.biggerDecorationButton.onclick = intervalTextResizer;
    // blingCheckBox.addEventListener()
    globalElements.blingCheckBox.addEventListener('change', blingCheckBoxChange);
    globalElements.pigLatinButton.onclick = pigLatinFunc;
    globalElements.malkovichButton.onclick = malkovrichFunc;

}

const initializeDom = function() {
    globalElements.myTextArea = document.getElementById("myTextArea");
    globalElements.biggerDecorationButton = document.getElementById("biggerDecoration");
    globalElements.blingCheckBox = document.getElementById("bling");
    globalElements.pigLatinButton = document.getElementById("pigLatin");
    globalElements.malkovichButton = document.getElementById("malkovich");

}


var intervalId = null;
var intervalTextResizer = function resizer() {
    if (intervalId == null) {
        globalElements.biggerDecorationButton.innerHTML = "Stop";
        intervalId = setInterval(createBiggerDecoration, 200);
    } else {
        globalElements.biggerDecorationButton.innerHTML = "Bigger Decoration";

        clearInterval(intervalId);
        intervalId = null;


    }


}


var showAlert = function() {
    alert("hello");
}

var createBiggerDecoration = function() {
    var currentSize = parseInt(globalElements.myTextArea.style.fontSize);

    if (!currentSize)
        currentSize = parseInt(currentSize = window.getComputedStyle(globalElements.myTextArea, null).getPropertyValue('font-size'));
    currentSize += 2;
    globalElements.myTextArea.style.fontSize = currentSize + 'pt'
}

var blingCheckBoxChange = function(e) {

    if (e.currentTarget.checked) {
        globalElements.myTextArea.style.color = "green";
        globalElements.myTextArea.style.fontWeight = "bold";
        globalElements.myTextArea.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('https://media.istockphoto.com/photos/macro-shot-of-a-100-dollar-picture-id628767816?s=612x612')";



    } else {
        globalElements.myTextArea.style.fontWeight = "normal";
        globalElements.myTextArea.style.color = "black";
        globalElements.myTextArea.style.textDecoration = "none";
        document.body.style.backgroundImage = "none";


    }



}

var pigLatinFunc = function() {

    const content = globalElements.myTextArea.value.split(' ');
    let vlregx = /[aeiouAEIOU]/;

    let newValue = '';
    for (let i = 0; i < content.length; i++) {

        let word = content[i];
        if (word[0].match(vlregx) === null) {
            newValue += word.substring(1) + word[0] + 'ay';
        } else {
            newValue += word + "ay";
        }
        newValue += i === content.length - 1 ? '' : ' ';

    }
    globalElements.myTextArea.value = newValue;
}

var malkovrichFunc = function() {
    const content = globalElements.myTextArea.value.split(' ');
    let newValue = '';
    for (let i = 0; i < content.length; i++) {
        if (content[i].length >= 5) {
            newValue += 'Malkovich';
        } else {
            newValue += content[i];
        }
        newValue += i === content.length - 1 ? '' : ' ';

    }
    globalElements.myTextArea.value = newValue;
}