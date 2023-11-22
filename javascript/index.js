// declearing the minute and seconds variables and linking them to the html input tag
let min = document.querySelector('[data-minutes]')
let sec = document.querySelector('[data-seconds]')


// function for multiplying minutes to seconds, 
//Takes in a value for minutes
function toSeconds() {
    let results = (parseFloat(min.value)*60);
    sec.value = parseFloat(results.toFixed(2))
}

// function for dividing seconds to minutes,
//takes in a value for seconds
function toMinutes() {
    let results = (parseFloat(sec.value)/60);
    min.value = parseFloat(results.toFixed(2))
}


//Added an event listner to the input tag so it can be automatically activated when an input is entered and be displayed in the seconds section
// 
min.addEventListener("input", toSeconds);

//Added an event listner to the input tag so it can be automatically activated when an input is entered and be displayed in the minutes section
sec.addEventListener("input", toMinutes);


// adding event listner to reset the input and answer
let btn = document.getElementById('btn')
btn.addEventListener('click', function () {
    resizeBy.value="";
    min.value="";
    sec.value="";
})