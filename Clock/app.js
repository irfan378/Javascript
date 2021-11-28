function updateClock(){
    // Get current date.
    let currentTime= new Date();

    // get hour,minute and second.
    let currentHour= currentTime.getHours();
    let currentMinutes= currentTime.getMinutes();
    let currentSeconds= currentTime.getSeconds();

    // pad 0 if minute or second is less than 10(single digit).
    currentMinutes=(currentMinutes<10?"0":"")+currentMinutes;
    currentSeconds=(currentSeconds<10?"0":"")+currentSeconds;

    // convert railway clock to AM/PM clock.
    currentHour=(currentHour>12)?currentHour-12:currentHour;
    currentHour=(currentHour==0)?12:currentHour;

    // choose AM/PM as per the time of day.
    let timeOfDay=(currentHour<12)?"AM":"PM";

    // Prepeare the time string from hours,minutes and seconds.
    let currentTimeStr=currentHour+ ":"+currentMinutes+":"+currentSeconds+":"+timeOfDay;

    // Insert the time string inside the DOM.
    document.getElementById("clock").innerHTML=currentTimeStr;


}