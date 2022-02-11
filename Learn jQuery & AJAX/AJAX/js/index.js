// console.log("hello");

//jQuery $.get() Method : Local File

$(document).ready(function () {
  $("#myBtn1").click(function () {
    $.get("data.txt", function (data, status) {
      $("#para1").text(data);
    });
  });

  //jQuery $.get() Method : URL
 
  $("#myBtn2").click(function (event) {
    event.preventDefault();
    $.get("http://dummy.restapiexample.com/api/v1/employee/1", function (data, status) {
      console.log(data);
      alert(status);
    });
  });
});

//jQuery $.post() Method : URL

$("#myBtn3").click(function(){
  $.post("http://dummy.restapiexample.com/api/v1/create",
  {"name":"test123","salary":"12345","age":"99"},function(data, status){
    console.log(data);
    alert(status);
  })
})