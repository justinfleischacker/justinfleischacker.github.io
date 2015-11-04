$(document).ready(function (){

  //smooth scroll to contact form when clicking on 'contact' button
  $("#contact-button").on("click",function (){
          $('html, body').animate({
              scrollTop: $("#contact").offset().top
          }, 800);           
  });

  // smooth scroll to resume when clicking on 'resume' button
  $("#resume-button").on("click",function (){
          $('html, body').animate({
              scrollTop: $("#resume").offset().top
          }, 800);           
  });

  $("#about-button").on("click",function (){
          $('html, body').animate({
              scrollTop: $("#about").offset().top
          }, 800);           
  });

  // function to change the text in the #image-text box
  
    //variables

    // text is an array of strings to be display one at a time in the #image-text box
    var text = ["Professor", "Entrepreneur", "Geek", "Lawyer"];

    // counter to loop through the texy array
    var counter = 0;
    
    //set function to change the #image-text
    function change() {
        // swap out the html in the #image-text with a new word from the text array
        $("#image-text").text(text[counter]);
        // immediately fade out the word by setting the opacity to zero
        $("#image-text").css("opacity","0");
        // fade in the new word slowy over 0.8 seconds by increasing the opacity
        $( "#image-text" ).animate({
            opacity: 1.0
        }, 800);
        counter++;
        // if the counter  it is larger than the size of the word array, reset the counter to zero
        if(counter >= text.length) { counter = 0; }
    }

    //implement the change function every 2.2 seconds
    setInterval(change, 2200);
});