
var auditTasks = function () {
    $(".hour").each(function (index) {
      var taskTimeHour = moment($(this).text(), "h A");
      var nowTimeHour = moment().hour("h A");
      var taskRowEl = $(this).parent().children(".description");
  
      // removes classes
      taskRowEl.removeClass("future past present");
  
      if (taskTimeHour.isAfter(nowTimeHour)) {
        taskRowEl.addClass("future");
      } else if (taskTimeHour.isSame(nowTimeHour, "hour")) {
        taskRowEl.addClass("present");
      } else {
        taskRowEl.addClass("past");
      }
    });
  };
  
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

//retrieve items from localStorage 
//TODO - make loop if possible. prob need to put all into 1 array.
$("#slot9 .description").val(localStorage.getItem("slot9"));
$("#slot10 .description").val(localStorage.getItem("slot10"));
$("#slot11 .description").val(localStorage.getItem("slot11"));
$("#slot12 .description").val(localStorage.getItem("slot12"));
$("#slot13 .description").val(localStorage.getItem("slot13"));
$("#slot14 .description").val(localStorage.getItem("slot14"));
$("#slot15 .description").val(localStorage.getItem("slot15"));
$("#slot16 .description").val(localStorage.getItem("slot16"));
$("#slot17 .description").val(localStorage.getItem("slot17"));


auditTasks();  