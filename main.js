$( document ).ready(function() {

    
});
            

let aRight = 0, aWrong = 0;



   
    $("#submit").click(function() {
        if($("input[type='radio'].qNum").is(':checked')) {
            aRight++;
        } if($("input[type='radio'].wrongOne").is(':checked')) {

            aWrong++;
        }
       if($("input[type='radio'].q2").is(':checked')) {

            aRight++;

        } if($("input[type='radio'].w2").is(':checked')) {

            aWrong++;
        }

        if($("input[type='radio'].q3").is(':checked')) {
            aRight++;
        } if($("input[type='radio'].w3").is(':checked')) {

            aWrong++;
        }
        if($("input[type='radio'].q4").is(':checked')) {
            aRight++;
        } if($("input[type='radio'].w4").is(':checked')) {

            aWrong++;
        }


        if($("input[type='radio'].q5").is(':checked')) {
            aRight++;
        } if($("input[type='radio'].w5").is(':checked')) {

            aWrong++;
        }
     
   

        $('#scoreR').html(aRight);
        $('#scoreW').html(aWrong); 
    });

        $("#start").click(function()
        
{
    
var sec =30;
var timer = setInterval(function() {     
   $("#timer").text(--sec);
   if (sec == 0) {
      clearInterval(timer);
      alert("Times up! check score at the bottom of page")
      
   } 
}, 1000);






    });
    
    
        
            
            
       
    





