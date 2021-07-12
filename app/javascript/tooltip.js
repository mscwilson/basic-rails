document.addEventListener("turbolinks:load", function() {

  console.log("here in tooltip.js")

  function showColourTooltip(event){
    console.log("here in buttonClicked")
    console.log(event);

    const positiveWords = ["great choice", "great choice", "lovely", "nice", "excellent", "love it", "beautiful"]
    const randomPositiveWords = positiveWords[Math.floor(Math.random() * positiveWords.length)]

    const colour = event.target.className.split(" ")[1]
    console.log(colour);
    const message = `${colour[0].toUpperCase()}${colour.slice(1)}, ${randomPositiveWords}!`

    const tooltip = document.querySelectorAll('.tooltip')[0];
    const tooltiptext = document.querySelectorAll('.tooltiptext')[0];

    tooltip.style.top = (event.pageY - 20) + "px";
    tooltip.style.left = (event.pageX - 60) + "px";

    tooltiptext.innerHTML = message
    tooltiptext.style.visibility = 'visible';
  }

  function hideTooltip() {
    console.log("here in hideTooltip")
    let tooltip = document.querySelectorAll('.tooltiptext')[0];
    tooltip.style.visibility = 'hidden';
  }

    function printMessage() {
      console.log("left the grid");
    }

  document.getElementsByClassName("container")[0].onclick = function(event) {
    const target = event.target;
    if (!target.classList.contains("colour")) return;
    console.log("a colour got clicked")

    target.addEventListener("click", showColourTooltip(event));

  };

  document.getElementsByClassName("grid")[0].addEventListener("mouseleave", printMessage);




});
