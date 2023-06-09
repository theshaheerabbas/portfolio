document.getElementById("recommendationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Display pop-up message
    alert("Thank you for submitting a recommendation!");
  
    // Reset the form
    this.reset();
  });
  
  document.getElementById("homeButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
  
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });  