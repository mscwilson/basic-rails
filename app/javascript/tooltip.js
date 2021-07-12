function showColourTooltip(event){
  const positiveWords = ["great choice", "great choice", "lovely", "nice", "excellent", "love it", "beautiful"]
  const randomPositiveWords = positiveWords[Math.floor(Math.random() * positiveWords.length)]

  const colour = event.target.className.split(" ")[1]
  const message = `${colour[0].toUpperCase()}${colour.slice(1)}, ${randomPositiveWords}!`

  const tooltip = document.querySelectorAll('.tooltip')[0];
  const tooltiptext = document.querySelectorAll('.tooltiptext')[0];

  tooltip.style.top = (event.pageY - 20) + "px";
  tooltip.style.left = (event.pageX - 60) + "px";

  tooltiptext.innerHTML = message
  tooltiptext.style.visibility = 'visible';
}

function hideTooltip() {
  let tooltip = document.querySelectorAll('.tooltiptext')[0];
  tooltip.style.visibility = 'hidden';
}

document.addEventListener("turbolinks:load", function() {

  const squares = document.querySelectorAll("div.colour");
  squares.forEach((element) => {
    element.addEventListener("click", (event) => {
      showColourTooltip(event);
    })
    element.addEventListener("mouseleave", hideTooltip);
  })

});
