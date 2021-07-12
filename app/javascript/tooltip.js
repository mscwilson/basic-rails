document.addEventListener("turbolinks:load", function() {

  console.log("here in tooltip.js")

  function buttonClicked(event){
    console.log("here in buttonClicked")
    console.log(event);

    const tooltip = document.querySelectorAll('.tooltip')[0];
    const tooltiptext = document.querySelectorAll('.tooltiptext')[0];

    tooltip.style.top = (event.pageY - 20) + "px";
    tooltip.style.left = (event.pageX - 60) + "px";
    tooltiptext.style.visibility = 'visible';
  }

  function hideTooltip() {
    console.log("here in hideTooltip")
    let tooltip = document.querySelectorAll('.tooltiptext')[0];
    tooltip.style.visibility = 'hidden';
  }

  // document.getElementById('button1').addEventListener("click", buttonClicked);
  // document.getElementById('button1').addEventListener("mouseout", hideTooltip);

  document.getElementsByClassName("container")[0].onclick = function(event) {
    const target = event.target;
    if (!target.classList.contains("colour")) return;
    console.log("a colour got clicked")

    target.addEventListener("click", buttonClicked(event));
    target.addEventListener("mouseout", hideTooltip);

  };





});
