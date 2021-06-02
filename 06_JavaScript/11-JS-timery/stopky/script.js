class Stopky {
  constructor() {
    this.start = null;
    this.paused = null;
  }
  
  startStop() {
    if (!this.start) { //start
      this.start = (new Date()).getTime();
    } else if (!this.paused) { //pauza
      this.paused = (new Date()).getTime();
    } else { //odpauzuj
      //vypocist jak posunout start dozadu
      const now = (new Date()).getTime();
      const actualTime = this.paused - this.start;
      this.start = now - actualTime;
      this.paused = null;
    }
  }
  
  reset() {
    this.start = this.paused = null;
  }
  
  getTime() {
    let time = 0;
    if (this.paused)
      time = this.paused - this.start;
    else if (this.start)
      time = (new Date()).getTime() - this.start;
    
    return this.formatTime(time);
    
  }
  
  formatTime(time) {
    let ms = time % 1000;
    time = Math.floor(time/1000);
    
    let sec = time % 60;
    time = Math.floor(time/60);
        
    let min = time % 60;
    time = Math.floor(min/60);
    
    let result = time.toString().padStart(2, "0") 
            + ":" 
            + min.toString().padStart(2, "0")
            + ":" 
            + sec.toString().padStart(2, "0") 
            + "," 
            + ms.toString().padStart(3, "0");
    return result;
  }
}



window.addEventListener('DOMContentLoaded', function() {

  const stopky = new Stopky();
  
  function displayTime(){
    document.getElementById("stopky").innerText = stopky.getTime()
  }

  document.getElementById("start").addEventListener("click", ()=>{stopky.startStop()})
  document.getElementById("reset").addEventListener("click", ()=>{stopky.reset()})
  
  window.setInterval(displayTime, 50);
  displayTime();
});