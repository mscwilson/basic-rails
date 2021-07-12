function showColourTooltip(event, positionAndSize, element){
  console.log(element);
  const colourName = event.target.className.split(" ")[1];
  const message = createColourMessage(colourName);

  const inserted = document.createElement("div");
  document.querySelectorAll(".container")[0].appendChild(inserted);

  styleMessage(message, inserted, positionAndSize)
}

function styleMessage (message, messageDiv, colourPositionAndSize) {
  messageDiv.className = "colour-message";
  messageDiv.style.cssText = "position:absolute;";
  messageDiv.innerHTML = `<span>${message}</span>`;

  const messagePositionAndSize = messageDiv.getBoundingClientRect();
  messageDiv.style.left = (colourPositionAndSize.left + (colourPositionAndSize.width/2) - (messagePositionAndSize.width/2)) + "px";
  messageDiv.style.top = (colourPositionAndSize.top - 40) + "px";
}

function createColourMessage(colourName) {
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
    const positionAndSize = element.getBoundingClientRect();

    element.addEventListener("click", (event) => {
      showColourTooltip(event, positionAndSize, element);
    })
    element.addEventListener("mouseout", hideColourMessage);
  })

});
