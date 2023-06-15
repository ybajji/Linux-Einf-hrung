window.onload = function() {
    // Get all div elements with class "par"
    var divs = document.querySelectorAll('.par');
  
    // Hide all divs except the first one
    for (var i = 1; i < divs.length; i++) {
      divs[i].style.display = 'none';
    }
  
    // Attach click event listeners to all buttons with class "next"
    var nextButtons = document.querySelectorAll('.next');
    for (var i = 0; i < nextButtons.length; i++) {
        if(i<=2){
            nextButtons[i].addEventListener('click', function() {
                // Check if the checkbox is checked
                var checkbox = this.parentNode.querySelector('.chek');
               
                         
                // Find the index of the current div and hide it
                var currentDiv = this.parentNode;
                var currentIndex = Array.prototype.indexOf.call(divs, currentDiv);
                currentDiv.style.display = 'none';
          
                // Show the next div
                var nextIndex = (currentIndex + 1) % divs.length;
                divs[nextIndex].style.display = 'block';
              });

        }
        else{
      nextButtons[i].addEventListener('click', function() {
        // Check if the checkbox is checked
        var checkbox = this.parentNode.querySelector('.chek');
        
        if (!checkbox.checked) {
          alert('hast du micht geanwortet');
          return;
        }
  
        // Find the index of the current div and hide it
        var currentDiv = this.parentNode;
        var currentIndex = Array.prototype.indexOf.call(divs, currentDiv);
        currentDiv.style.display = 'none';
  
        // Show the next div
        var nextIndex = (currentIndex + 1) % divs.length;
        divs[nextIndex].style.display = 'block';
      });
    }
        
    }
  
    // Attach click event listeners to all buttons with class "back"
    var backButtons = document.querySelectorAll('.back');
    for (var i = 0; i < backButtons.length; i++) {
      backButtons[i].addEventListener('click', function() {
        // Find the index of the current div and hide it
        var currentDiv = this.parentNode;
        var currentIndex = Array.prototype.indexOf.call(divs, currentDiv);
        currentDiv.style.display = 'none';
  
        // Show the previous div
        var prevIndex = (currentIndex - 1 + divs.length) % divs.length;
        divs[prevIndex].style.display = 'block';
      });
    }
  }
  


function showVideo(id) {
    
    id.classList.add("show");
  }
function hideVideo(id){
    
    id.classList.remove("show");
}  

function openLocalWindow() {
  window.open("projekt1.html", "_blank", "width=500,height=500");
}