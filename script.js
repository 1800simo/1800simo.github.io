




// Add 'enabled' class to div.submit when any div.option is clicked
document.querySelectorAll('div.option').forEach(function(option) {
    option.addEventListener('click', function() {
      // Toggle the 'highlight' class on the clicked option
      this.classList.toggle('highlight');
      
      // Enable the submit button when an option is clicked
      document.querySelector('div.submit').classList.add('enabled');
    });
  });
  
  // When div.submit button is clicked, show a random message and disable further clicks
  document.querySelector('div.submit').addEventListener('click', function() {

    // remove any visible stickers
    document.querySelector(".sticker").classList.remove("show");

    // Only proceed if div.submit has the enabled class
    if (this.classList.contains('enabled')) {
      // Hide all messages first
      document.querySelectorAll('div.randomMessage1, div.randomMessage2, div.randomMessage3, div.randomMessage4')
        .forEach(function(message) {
          message.classList.remove('active');
        });
  
      // Randomly select one of the four messages
      const messages = ['div.randomMessage1', 'div.randomMessage2', 'div.randomMessage3', 'div.randomMessage4'];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
      // Show the randomly selected message
      document.querySelector(randomMessage).classList.add('active');
  
      // Disable the div.submit button by removing the 'enabled' class
      this.classList.remove('enabled');

     // Run popup function
     setTimeout(function() {
        document.querySelector(".sticker1").classList.add("show");
    }, 2000);
    
    setTimeout(function() {
        document.querySelector(".sticker2").classList.add("show");
    }, 1000);
    
    setTimeout(function() {
        document.querySelector(".sticker3").classList.add("show");
    }, 1500);
    
    setTimeout(function() {
        document.querySelector(".sticker4").classList.add("show");
    }, 500);

    }
  });
  