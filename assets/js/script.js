var moment = moment();
var momHour = parseInt(moment.format("H"));
var currentDay = $("#currentDay");
var tA9 = $("#hour-09");
var tA10 = $("#hour-10");
var tA11 = $("#hour-11");
var tA12 = $("#hour-12");
var tA1 = $("#hour-13");
var tA2 = $("#hour-14");
var tA3 = $("#hour-15");
var tA4 = $("#hour-16");
var tA5 = $("#hour-17");
var saveBtn9 = $("#save-Btn-1");
var saveBtn10 = $("#save-Btn-2");
var saveBtn11 = $("#save-Btn-3");
var saveBtn12 = $("#save-Btn-4");
var saveBtn1 = $("#save-Btn-5");
var saveBtn2 = $("#save-Btn-6");
var saveBtn3 = $("#save-Btn-7");
var saveBtn4 = $("#save-Btn-8");
var saveBtn5 = $("#save-Btn-9");
var timeBlock = $(".time-block");
var hour = $("[data-currentHour]");
  // CURRENT DAY TO DISPLAY
currentDay.text(moment.format("dddd, MMMM Do"));
console.log ("test");


timeBlock.each(function () {
    // Do stuff with each div
    console.log($(this).data().hour);
    if ($(this).data().hour > momHour) {
      $(this).addClass("future");
    } else if ($(this).data().hour == momHour) {
      $(this).addClass("present");
      // console.log($(this).data()); //current data layer value
    } else {
      $(this).addClass("past");
    }
  });

  
// INIT TIME BLOCKS WITH INFO HOUR 9
$(function () {
    var t = localStorage.getItem("9");
    if (t !== null) {
      tA9.text("");
    }
    tA9.val(t);
  });
  
  // INIT TIME BLOCKS WITH INFO HOUR 10
  $(function () {
    var t = localStorage.getItem("10");
    if (t !== null) {
      tA10.text("");
    }
    tA10.val(t);
  });
  
  // INIT TIME BLOCKS WITH INFO HOUR 11
  $(function () {
    var t = localStorage.getItem("11");
    if (t !== null) {
      tA11.text("");
    }
    tA11.val(t);
  });
  
  // INIT TIME BLOCKS WITH INFO HOUR 12
  $(function () {
    var t = localStorage.getItem("12");
    if (t !== null) {
      tA12.text("");
    }
    tA12.val(t);
  });
  
  // INIT TIME BLOCKS WITH INFO HOUR 1
  $(function () {
    var t = localStorage.getItem("1");
    if (t !== null) {
      tA1.text("");
    }
    tA1.val(t);
  });
  
  // INIT TIME BLOCKS WITH INFO HOUR 2
  $(function () {
    var t = localStorage.getItem("2");
    if (t !== null) {
      tA2.text("");
    }
    tA2.val(t);
  });
  
  // INIT TIME BLOCKS WITH INFO HOUR 3
  $(function () {
    var t = localStorage.getItem("3");
    if (t !== null) {
      tA3.text("");
    }
    tA3.val(t);
  });
  
  // INIT TIME BLOCKS WITH INFO HOUR 4
  $(function () {
    var t = localStorage.getItem("4");
    if (t !== null) {
      tA4.text("");
    }
    tA4.val(t);
  });
  
  // INIT TIME BLOCKS WITH INFO HOUR 5
  $(function () {
    var t = localStorage.getItem("5");
    if (t !== null) {
      tA5.text("");
    }
    tA5.val(t);
  });
  
  // HOUR 9 BLOCK SAVE BUTTON
  saveBtn9.on("click", function (event) {
    event.preventDefault();
    var val = tA9.val();
    localStorage.setItem("9", val);
  });
  
  // HOUR 10 BLOCK SAVE BUTTON
  saveBtn10.on("click", function (event) {
    event.preventDefault();
    var val = tA10.val();
    localStorage.setItem("10", val);
  });
  
  // HOUR 11 BLOCK SAVE BUTTON
  saveBtn11.on("click", function (event) {
    event.preventDefault();
    var val = tA11.val();
    localStorage.setItem("11", val);
  });
  
  // HOUR 12 BLOCK SAVE BUTTON
  saveBtn12.on("click", function (event) {
    event.preventDefault();
    var val = tA12.val();
    localStorage.setItem("12", val);
  });
  
  // HOUR 1 BLOCK SAVE BUTTON
  saveBtn1.on("click", function (event) {
    event.preventDefault();
    var val = tA1.val();
    localStorage.setItem("1", val);
  });
  
  // HOUR 2 BLOCK SAVE BUTTON
  saveBtn2.on("click", function (event) {
    event.preventDefault();
    var val = tA2.val();
    localStorage.setItem("2", val);
  });
  
  // HOUR 3 BLOCK SAVE BUTTON
  saveBtn3.on("click", function (event) {
    event.preventDefault();
    var val = tA3.val();
    localStorage.setItem("3", val);
  });
  
  // HOUR 4 BLOCK SAVE BUTTON
  saveBtn4.on("click", function (event) {
    event.preventDefault();
    var val = tA4.val();
    localStorage.setItem("4", val);
  });
  
  // HOUR 5 BLOCK SAVE BUTTON
  saveBtn5.on("click", function (event) {
    event.preventDefault();
    var val = tA5.val();
    localStorage.setItem("5", val);
  });