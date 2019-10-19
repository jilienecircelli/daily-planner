var containerDiv9 = $("#9");
var containerDiv10 = $("#10");
var containerDiv11 = $("#11");


var textareaNine = $("<textarea id = nine></textarea>")
var textareaTen = $("<textarea id = ten></textarea>")
var saveBtn9 = $("<button class = saveBtn>Save</button>")
var saveBtn10 = $("<button class = saveBtn>Save</button>")



$(containerDiv9).append(textareaNine);
// .append(saveBtn9)

$(containerDiv10).append(textareaTen);
// .append(saveBtn10)



$(document).ready(function() {
    var currentDay = $("#currentDay");
    var date = $("<div>");
    date.text(moment().format('dddd, MMMM Do YYYY'));
    currentDay.append(date);
    // var apptText = $("<textarea>");
    // // var apptTextContent = apptText.val();
    // $(".col-md-10").append(apptText);
    var clickToSave = $(".saveBtn").on("click", function() {
        alert("You saved this appointment");
        var apptTextContent = $(this).siblings(".col-md-10").val();
        console.log(apptTextContent);
        localStorage.setItem("apptTextContent", apptTextContent);
    });
    clickToSave()
});