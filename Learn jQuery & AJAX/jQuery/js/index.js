// console.log('hey there...');

//jQuery Selector & Events

$(document).ready(function () {
  $("#myBtn2").click(function () {
    $("tr:even").css("background-color", "#9AD0EC");
  });

  //jQuery Effects

  $("#myBtn1").click(function () {
    $("#para").fadeToggle(2000, function () {
      alert("Toggled....");
    });
  });

  $("#myBtn3").click(function () {
    $("#para").css("color", "#24A19C");
  });

  //jQuery HTML

  $("#myBtn4").click(function () {
    $("ul").append("<li>Item 5</li>");
  });

  $("#myBtn5").click(function () {
    $("ul").remove();
  });

  $("#myBtn6").click(function () {
    $("ul").addClass("blue");
  });

  //jQuery Filtering

  $("#myBtn7").click(function () {
    $("p").filter(".para").addClass("background");
  });
  
});
