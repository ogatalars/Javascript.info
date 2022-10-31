function showMessage(from, text = "no text given") {
  alert(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

// In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.

// In the example above, anotherFunction() isn’t called at all, if the text parameter is provided.

// On the other hand, it’s independently called every time when text is missing.
