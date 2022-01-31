//Get current day using momemt and set it to display on page
var dayYear = moment().format('MMM Do, YYYY');
$('#currentDay').text(dayYear)
//Create variable for the current hour using moment (logging it to make sure it worked)
var currentTime = moment().format('H')
console.log(currentTime)

var plannerText = document.getElementById('text-09')
var saveBtn = $('.saveBtn')


var getLocal = function() {
    var description = localStorage.getItem('description');
    plannerText.textContent = description;
    console.log(description)
    console.log(plannerText)
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


//Create function to store text data to local storage
var addLocal = function() {

    var description = document.getElementById('text-input').value;

    localStorage.setItem('description', description)
    getLocal();
}
//Create function so when the save button is pressed addLocal is called on
$(saveBtn).click(function() {
    addLocal();
})