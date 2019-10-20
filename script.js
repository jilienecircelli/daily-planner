$(document).ready(function() {
    var currentDay = $("#currentDay");
    var date = $("<div>");
    date.text(moment().format('dddd, MMMM Do YYYY'));
    currentDay.append(date);
});

var apptText = $("<textarea>");
var apptTextContent = apptText.val();
$(".col-md-10").append(apptText);


// var saveFunction = $(".saveBtn").on("click", function clickToSave() {
//     alert("You saved this appointment!");
//     var apptTextContent = $(this).siblings(".col-md-10").val();
//     console.log(apptTextContent);


//     var timeSlot = localStorage.getItem("col-md-1");
//     var appointmentText = localStorage.getItem("col-md-10");
//     localStorage.setItem(timeSlot, appointmentText);
//     console.log(timeSlot)

// });
// clickToSave()

// var pastTime = moment().diff;
// var presentTime = moment().diff;
// var futureTime = moment().diff;


// moment().isBefore(current.time);

var currentTime = moment()
console.log(currentTime)


var startDay = "09:00 AM"
var startTime = moment(startDay)
var endDay = "05:00 PM"
var endTime = moment(endDay)
console.log(startTime, endDay)
var r9 = $("#r9");
r9.append(startTime)