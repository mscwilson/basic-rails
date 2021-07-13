function showColourMessage(element){
  hideColourMessage();

  const insertedDiv = document.createElement("div");
  document.querySelectorAll(".container")[0].appendChild(insertedDiv);

  styleMessage(insertedDiv, element)
}

function styleMessage (messageDiv, colourSquare) {
  const colourName = colourSquare.className.split(" ")[1];
  const colourXY = colourSquare.getBoundingClientRect();
  const messageXY = messageDiv.getBoundingClientRect();

  messageDiv.className = "colour-message";
  messageDiv.style.cssText = "position:absolute;";
  messageDiv.innerHTML = `<span>${colourMessage(colourName)}</span>`;

  messageDiv.style.left = (colourXY.left + (colourXY.width/2) - (messageXY.width/2)) + "px";
  messageDiv.style.top = (colourXY.top - 40) + "px";
}

function colourMessage(colourName) {
  const positiveWords = ["great choice", "great choice", "lovely", "nice", "excellent", "love it", "beautiful"];
  const randomNicePhrase = positiveWords[Math.floor(Math.random() * positiveWords.length)];
  return `${colourName[0].toUpperCase()}${colourName.slice(1)}, ${randomNicePhrase}!`;
}

function hideColourMessage() {
  const messages = document.getElementsByClassName("colour-message");

  if (messages.length > 0) {
    const container = document.querySelectorAll(".container")[0]
    container.removeChild(messages[0])
  };
}

document.addEventListener("turbolinks:load", function() {
  const squares = document.querySelectorAll("div.colour");

  squares.forEach((element) => {
    element.addEventListener("click", () => {
      showColourMessage(element);
    })
    element.addEventListener("mouseout", hideColourMessage);
  })

});
