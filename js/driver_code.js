; (function () {
    'use strict';

   // let state = PomodoroTimer.POMODORO;
   let max_pomodoro_count = 4;
   let pt = new PomodoroTimer(max_pomodoro_count);
   let timer;
  function pause_timer(timer) {
    if(!pt.is_running) return;
     pt.is_running = false;
     clearInterval(timer);  
     document.getElementById("button_text").innerHTML = "Start";
 }
 
 // get state() {
 //    return this.state;
 // }
 
 function update_timer() {
  //  console.log(this.state);
  pt.current_time++;
    let distance = pt.state * 60 - pt.current_time;
 
    let minutes = Math.floor(distance/60);
    let seconds = distance %60;
    
    if (seconds < 10){
     seconds = "0" + seconds;
    }
    document.getElementById("timer").innerHTML = minutes + ":" + seconds;
   // pt.current_time++;
      
    if (distance < 0) {
    pause_timer();
      pt.change_mode(pt.get_next_state());
      document.getElementById("timer").innerHTML = state + ":00";
      ding.play();
    
    }
 }
 

 
  function start_timer() {
     pt.is_running = true;
     timer = setInterval( update_timer, 1000);
     document.getElementById("button_text").innerHTML = "Pause";
  }
 
    let pomodoro_radio = document.getElementById("pomodoro");
    let start_button = document.getElementById("start_checkbox");
    pomodoro_radio.checked = true;
    document.getElementById("timer").innerHTML = pt.state + ":00";
 

    start_button.addEventListener('change', start_button_listener);
    function start_button_listener() {
        if(pt.is_running) {
            pause_timer(timer);
        } else {
            start_timer(timer);
        }
    }
})();
