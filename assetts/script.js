//Get current day using momemt and set it to display on page
var dayYear = moment().format('MMM Do, YYYY');
$('#currentDay').text(dayYear)
//Create variable for the current hour using moment (logging it to make sure it worked)
var currentTime = moment().format('H')
console.log(currentTime)
//set variables for text location of saved data
var nineText = $('#text-09');
var tenText = $('#text-10');
var elevenText = $('#text-11');
var twelveText = $('#text-12');
var thirteenText = $('#text-13');
var fourteenText = $('#text-14');
var fifteenText = $('#text-15');
var sixteenText = $('#text-16');
var seventeenText = $('#text-17');

var saveBtn = $('.saveBtn')
//set variables for each text input id
var nine = $('#input-nine');
var ten = $('#input-ten');
var eleven = $('#input-eleven');
var twelve = $('#input-twelve');
var thirteen = $('#input-thirteen');
var fourteen = $('#input-fourteen');
var fifteen = $('#input-fifteen');
var sixteen = $('#input-sixteen');
var seventeen = $('#input-seventeen');


// Create function that calls on local storage by item and sets it to designated text location
var getLocal = function() {
    var nineSaved = localStorage.getItem('9');
    nineText.text(nineSaved);

    var tenSaved = localStorage.getItem('10');
    tenText.text(tenSaved);

    var elevenSaved = localStorage.getItem('11');
    elevenText.text(elevenSaved);

    var twelveSaved = localStorage.getItem('12');
    twelveText.text(twelveSaved);

    var thirteenSaved = localStorage.getItem('13');
    thirteenText.text(thirteenSaved);

    var fourteenSaved = localStorage.getItem('14');
    fourteenText.text(fourteenSaved);

    var fifteenSaved = localStorage.getItem('15');
    fifteenText.text(fifteenSaved);

    var sixteenSaved = localStorage.getItem('16');
    sixteenText.text(sixteenSaved);

    var seventeenSaved = localStorage.getItem('17');
    seventeenText.text(seventeenSaved);

}
getLocal();


//Create function to change color of background based on time of day
var whichColor = function() {
    // Estabish variable for all timeblock spaces
    var timeblockEl = $('.time-block');
    
    
    // Create a for loop for the length off all timeblock areas
    for (var i = 0; i < timeblockEl.length; i++) {
        // Set variables to pick out inidvidual IDs
        var setTime = timeblockEl[i].id;
        var changeId = document.getElementById(timeblockEl[i].id)
        // Console log to make sure variables are putting out correct info
        console.log(setTime);
        console.log(changeId)
        // Create if statement to establish conditions based on current time and our set time variables
        // Add classes based on said established conditions with different colors in CSS
        if (setTime < currentTime) {
            $(changeId).addClass('past');
        } else if (setTime > currentTime) {
            $(changeId).addClass('future');
        } else if (setTime === currentTime){
            $(changeId).addClass('present');
        }
        
    }
}
// Run the function
whichColor();

//Create function so when matching save button is pressed info in corresponding text input is saved to local storage
$('#btn-09').click(function() {
    localStorage.setItem('9', nine.val());
})

$('#btn-10').click(function() {
    localStorage.setItem('10', ten.val())
})

$('#btn-11').click(function() {
    localStorage.setItem('11', eleven.val())
})

$('#btn-12').click(function() {
    localStorage.setItem('12', twelve.val())
})

$('#btn-13').click(function() {
    localStorage.setItem('13', thirteen.val())
})

$('#btn-14').click(function() {
    localStorage.setItem('14', fourteen.val())
})

$('#btn-15').click(function() {
    localStorage.setItem('15', fifteen.val())
})

$('#btn-16').click(function() {
    localStorage.setItem('16', sixteen.val())
})

$('#btn-17').click(function() {
    localStorage.setItem('17', seventeen.val())
})