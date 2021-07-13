function showColourMessage(element){
  hideColourMessage();

  const insertedDiv = document.createElement("div");
  document.querySelectorAll(".container")[0].appendChild(insertedDiv);

  styleMessage(insertedDiv, element)
}

function styleMessage (messageDiv, colourSquare) {
  messageDiv.className = "colour-message";
  messageDiv.style.cssText = "position:absolute;";
  messageDiv.innerHTML = `<span>${colourMessage(colourSquare)}</span>`;

  const colourXY = colourSquare.getBoundingClientRect();
  const messageXY = messageDiv.getBoundingClientRect();
  messageDiv.style.left = (colourXY.left + (colourXY.width/2) - (messageXY.width/2)) + "px";
  messageDiv.style.top = (colourXY.top - 40) + "px";
}

function colourMessage(colourSquare) {
  let colourName;

  if (colourSquare.parentElement.classList[1] === "light") {
    colourName = `Pale ${colourSquare.className.split(" ")[1]}`;
  } else if (colourSquare.parentElement.classList[1] === "dark") {
    colourName = `Dark ${colourSquare.className.split(" ")[1]}`;
  } else {
    const colour = colourSquare.className.split(" ")[1]
    colourName = `${colour[0].toUpperCase()}${colour.slice(1)}`
  }

  const positiveWords = ["great choice", "great choice", "lovely", "nice", "excellent", "love it", "beautiful"];
  const randomNicePhrase = positiveWords[Math.floor(Math.random() * positiveWords.length)];
  return `${colourName}, ${randomNicePhrase}!`;
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
