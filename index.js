/* Char Counter (index.js) */

// At first, setting the limit to 20.
var limit = 20;

// Selecting the paragraph element which has "p-bottom" class using jQuery.
const paragraphBottom = $(".p-bottom");

// Initial limit
paragraphBottom.text("0 / " + limit); //    0 / 20

// Selecting the radio button elements which has "radio-btn" class using jQuery.
const allRadioButtons = $("input.radio-btn");
allRadioButtons.on("click", myClickFunc);

// Creating a new function 
function myClickFunc() {

    // this: tıklama olayını tetikleyen element!
    // this.value : 20, 50 or 100.

    // Multiple selection is not allowed.
    allRadioButtons.prop("checked", false);

    // Selecting the element that triggered the click event using jQuery.
    var currentElement = $(this);
    currentElement.prop("checked", true);

    limit = this.value; // Limit is changed.
    paragraphBottom.text(0 + " / " + limit);

    $("form").slideUp();
}

// Selecting the textarea element using jQuery.
const textarea = $("textarea");
textarea.on("input", myInputFunc);

// Creating a new function 
function myInputFunc(event) {

    $("form").slideUp();

    var textareaValue = event.target.value;
    var textareaLength = textareaValue.length;

    // console.log(textareaValue);
    // console.log(textareaLength);

    paragraphBottom.text(textareaLength + " / " + limit);

    if (textareaLength > limit) {
        // limit exceeded
        textarea.css("background", "#F11A7B");
        textarea.css("color", "white");
    }
    else {
        // textareaLength <= limit
        textarea.css("background", "white");
        textarea.css("color", "black");
    }
}