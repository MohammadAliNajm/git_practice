$(document).ready(function() {
    var x=0;
     var z=0; 
     var arrquotes =["'All animals are equal, some are more equal than others'","'That which does not kill us makes us stronger'","'Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice'",
   "' I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion'"]; 
   var arrAuthor = ["-George Orwell","-Friedrich Nietzsche","-Wayne Dyer","-Muhammad Ali Clay"];
$("#newquote").click(function(){
   
   
    $("#text").text(arrquotes[x]);
    $("#author").text(arrAuthor[x]);
   $("#quote-box").addClass(" animate__animated animate__rollIn")
   var wait = setTimeout( function (){
       $("#quote-box").removeClass( " animate__animated animate__rollIn");
   },1000);
   
x++;
    if(x == arrquotes.length){
        x=0;
    }
   
   
});
   $("#tweet-quote").click(function(){

if(x>z || x<z){
    z=x;
    z--;
    }
    $("#tweet-quote").attr("href","https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent( arrquotes[z]+ arrAuthor[z]));
    
    

})
});
