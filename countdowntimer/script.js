const secondsEL = document.getElementById('seconds');
const daysEL = document.getElementById('days')
const hoursEL = document.getElementById('hours')
const minutesEL = document.getElementById('seconds')
const newYear= '1 Jan 2023'
function countdown(){
    const newyearDate = new Date(newYear);
    const currentDate = new Date();
    interval = (newyearDate.getTime()-currentDate.getTime());
    
    days = Math.floor(interval/(1000*60*60*24))
    interval -= days*1000*60*60*24
    
    hrs = Math.floor(interval/(1000*60*60))
    interval -= hrs*1000*60*60
    
    mins = Math.floor(interval/(1000*60))
    interval -= mins*1000*60

    secs = Math.floor(interval/1000)

    secondsEL.innerHTML = secs;
    daysEL.innerHTML = days;
    hoursEL.innerHTML = hrs;
    minutesEL.innerHTML = mins;
}


setInterval(countdown,1000);