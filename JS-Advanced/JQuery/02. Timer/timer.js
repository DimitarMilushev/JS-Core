function timer() {

   //variables
   
   let seconds = 57;
   let minutes = 59;
   let hours = 0;

   //elements

   let $seconds = $("#seconds");
   let $minutes = $("#minutes");
   let $hours = $("#hours");
   let $startBtn = $("#start-timer");
   let $stopBtn = $("#stop-timer");

   let timer;

   //START
   $startBtn.on("click", function () {
      $startBtn.off();

      timer = setInterval(step, 1000);     
   });

   //STOP
   $stopBtn.on("click", function() {
      clearInterval(timer);

      $startBtn.on("click", function () {
         $startBtn.off();
   
         timer = setInterval(step, 1000);     
      });
   })
   
   function step() {
      
      ++seconds;
      if(seconds >= 60) {
         seconds -= 60;
         ++minutes;

         if(minutes >= 60) {
            minutes -= 60;
            ++hours
            $hours.text(hours);
         }
         else {
         $minutes.text((minutes < 10) ? "0" + minutes : minutes);
         }
      }
      

      $seconds.text((seconds < 10) ? "0" + seconds : seconds);    
   }
}