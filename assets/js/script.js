// search id 'currentDay' and display the current day
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// listen for .saveBtn clicks, then save to localstorage
$(".saveBtn").on("click", function () {
  //save field values
  var userInput = $(this).parent().children(".description").val().trim();
  var timeSlot = $(this).parent().attr("id");

  // save to localStorage
  localStorage.setItem(timeSlot, userInput);
});

//retrieve items from localStorage (TODO - make loop if possible)

$("#slot9 .description").val(localStorage.getItem("slot9"));
$("#slot10 .description").val(localStorage.getItem("slot10"));
$("#slot11 .description").val(localStorage.getItem("slot11"));
$("#slot12 .description").val(localStorage.getItem("slot12"));
$("#slot13 .description").val(localStorage.getItem("slot13"));
$("#slot14 .description").val(localStorage.getItem("slot14"));
$("#slot15 .description").val(localStorage.getItem("slot15"));
$("#slot16 .description").val(localStorage.getItem("slot16"));
$("#slot17 .description").val(localStorage.getItem("slot17"));

function checkHour() {
  //check each time slot
  $(".time-block").each(function () {
    //compare time slot with current hour
    var slotHour = parseInt($(this).attr("id").replace("slot", ""));
    var currentHour = moment().hour();

    //change background color of description based on past/present/future time
    if (moment(currentHour).isSame(moment(slotHour))) {
      $(this).children(".description").removeClass("past future");
      $(this).children(".description").addClass("present");
    } else if (moment(currentHour).isAfter(moment(slotHour))) {
      $(this).children(".description").removeClass("present future");
      $(this).children(".description").addClass("past");
    } else if (moment(currentHour).isBefore(moment(slotHour))) {
      $(this).children(".description").removeClass("present past");
      $(this).children(".description").addClass("future");
    }
  });
}

checkHour();