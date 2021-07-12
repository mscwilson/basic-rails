function showColourTooltip(event, position){
  // console.log(position);

  const colourName = event.target.className.split(" ")[1]
  const message = `${colourName[0].toUpperCase()}${colourName.slice(1)}, ${nicePhrase()}!`

  const inserted = document.createElement("div");
  document.body.appendChild(inserted)
  inserted.className = "tooltiptext2"
  inserted.style.cssText = "position:absolute; color: red; backgroundColor: black; z-position: 1;";
  inserted.innerHTML = `<span style= "visibility: visible">${message}</span>`
  inserted.style.left = position.left + "px";
  inserted.style.top = position.top + "px";

  const tooltip = document.querySelectorAll('.tooltip')[0];
  const tooltiptext = document.querySelectorAll('.tooltiptext')[0];

  tooltip.style.top = (event.pageY - 20) + "px";
  tooltip.style.left = (event.pageX - 60) + "px";

  tooltiptext.innerHTML = message
  tooltiptext.style.visibility = 'visible';
}

function nicePhrase() {
  const positiveWords = ["great choice", "great choice", "lovely", "nice", "excellent", "love it", "beautiful"]
  return positiveWords[Math.floor(Math.random() * positiveWords.length)]
}

function hideTooltip() {
  let tooltip = document.querySelectorAll('.tooltiptext')[0];
  tooltip.style.visibility = 'hidden';

  let newTooltip = document.getElementsByClassName("tooltiptext2")
  // newTooltip.remove()
}

document.addEventListener("turbolinks:load", function() {

  const squares = document.querySelectorAll("div.colour");
  squares.forEach((element) => {
    const position = element.getBoundingClientRect();
    element.addEventListener("click", (event) => {
      showColourTooltip(event, position);
    })
    element.addEventListener("mouseleave", hideTooltip);
  })

});
