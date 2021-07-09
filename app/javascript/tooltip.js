document.addEventListener("turbolinks:load", function() {

  console.log("here in tooltip.js")

  function buttonClicked(){
    console.log("here in buttonClicked")
    var tooltip = document.querySelectorAll('.tooltiptext')[0];
    tooltip.style.visibility = 'visible';
  }
  document.getElementById('button1').addEventListener("click", buttonClicked);
});
