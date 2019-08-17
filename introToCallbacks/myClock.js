class Clock {

  constructor() {
    // 1. Create a Date object.
    const date = new Date();
  
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds(); 

    // 3. Call printTime.
      this.printTime(); 

    // 4. Schedule the tick at 1 second intervals.  

    setInterval(this._tick.bind(this), 1000); //binding our context of 'this'

  }

  printTime() {
    console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
    
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }
   

  _tick() {
    
    this.date = this.date.getTime(); 
    this.date += 1000;
    this.date = new Date(this.date); 
    this.printTime(); 
    
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }



}

const clock = new Clock();