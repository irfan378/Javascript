const alarmSubmit=document.getElementById('alarmSubmit');

// Add a click event listener to the submit button 
alarmSubmit.addEventListener('click',setAlarm);

var audio=new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
// Function to play the alarm ringtone
function ringBell(){
    audio.play();
}
// This function will run whenever alarm is set from the UI
function setAlarm(e){
    e.preventDefault();
    const alarm=document.getElementById('alarm');
    alarmDate=new Date(alarm.value);
    now=new Date();
    let timeToAlarm=alarmDate-now;
    if (timeToAlarm>=0) {
        setTimeout(()=>{
            ringBell();
        },timeToAlarm)
    }
}

 