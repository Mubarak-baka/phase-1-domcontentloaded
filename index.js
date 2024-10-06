function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10)
    if (left < 360) {
      dodger.style.left = `${left + 1}px`
    }
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft()
    }
  })
  
  document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight()
    }
  })
  
  
  
  
  document.addEventListener( "DOMContentLoaded", function () {
      updateDOM()
    } );
    
    
    function updateDOM() {
      document.getElementById( "text" )
        .innerHTML = "This is really cool!";
    }