$(document).ready(function () {
  $("#fshowError").hide();
  $("#mshowError").hide();
  $("#eshowError").hide();
  $("#pshowError").hide();
  $("#cshowError").hide();

  var fullNameErr = true;
  var mobileNumberErr = true;
  var emailErr = true;
  var passwordErr = true;
  var confPasswordErr = true;

  //Full Name

  $("#fullName").keyup(function () {
    checkFullName();
  });

  function checkFullName() {
    var user = $("#fullName").val();
    var nameRegex = /^([a-zA-Z]{3,16})$/;

    if (nameRegex.test(user)) {
      $("#fshowError").hide();
    } else {
      $("#fshowError").show();
      $("#fshowError").html("Enter valid name");
      $("#fshowError").css("color", "red");
      $("#fshowError").focus();
      fullNameErr = false;
      return false;
    }
  }

  // Mobile Number

  $("#mobileNumber").keyup(function () {
    checkMobileNumber();
  });

  function checkMobileNumber() {
    var mobileNo = $("#mobileNumber").val();

    if (mobileNo.length == 10) {
      $("#mshowError").hide();
    } else {
      $("#mshowError").show();
      $("#mshowError").html("Enter Valid Number");
      $("#mshowError").css("color", "red");
      $("#mshowError").focus();
      mobileNumberErr = false;
      return false;
    }

    if (isNaN(mobileNo)) {
      $("#mshowError").show();
      $("#mshowError").html("Enter Valid Number");
      $("#mshowError").css("color", "red");
      $("#mshowError").focus();
      mobileNumberErr = false;
      return false;
    } else {
      $("#mshowError").hide();
    }
  }

  // Email Id

  $("#email").keyup(function () {
    checkEmailId();
  });

  function checkEmailId() {
    var mailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    var mail = $("#email").val();

    if (mail.length == "") {
      $("#eshowError").show();
      $("#eshowError").html("Enter Email Id");
      $("#eshowError").css("color", "red");
      $("#eshowError").focus();
      emailErr = false;
      return false;
    } else {
      $("#eshowError").hide();
    }

    if (mail.length >= 25) {
      $("#eshowError").show();
      $("#eshowError").html("Email Id should contain less than 25 letters");
      $("#eshowError").css("color", "red");
      $("#eshowError").focus();
      emailErr = false;
      return false;
    } else {
      $("#eshowError").hide();
    }

    if (mailRegex.test(mail)) {
      $("#eshowError").hide();
    } else {
      $("#eshowError").show();
      $("#eshowError").html("Enter valid Email Id");
      $("#eshowError").css("color", "red");
      $("#eshowError").focus();
      emailErr = false;
      return false;
    }
  }

  // Password

  $("#password").keyup(function () {
    checkPassword();
  });

  function checkPassword() {
    var passRegex = new RegExp(
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    );

    var pwd = $("#password").val();

    if (pwd.length == "") {
      $("#pshowError").show();
      $("#pshowError").html("Enter password");
      $("#pshowError").css("color", "red");
      $("#pshowError").focus();
      passwordErr = false;
      return false;
    } else {
      $("#pshowError").hide();
    }

    if (pwd.length <= 4 || pwd.length >= 15) {
      $("#pshowError").show();
      $("#pshowError").html("Enter stronge password");
      $("#pshowError").css("color", "red");
      $("#pshowError").focus();
      passwordErr = false;
      return false;
    } else {
      $("#pshowError").hide();
    }

    if (pwd.match(passRegex)) {
      $("#pshowError").hide();
    } else {
      $("#pshowError").show();
      $("#pshowError").html("Enter stronge password");
      $("#pshowError").css("color", "red");
      $("#pshowError").focus();
      passwordErr = false;
      return false;
    }
  }

  //Confirm Password

  $("#confPassword").keyup(function () {
    checkConfirmPassword();
  });

  function checkConfirmPassword() {
    var pwd = $("#password").val();
    var confirmPass = $("#confPassword").val();

    if (confirmPass.length == "" || confirmPass != pwd) {
      $("#cshowError").show();
      $("#cshowError").html("Password not matching");
      $("#cshowError").css("color", "red");
      $("#cshowError").focus();
      emailErr = false;
      return false;
    } else {
      $("#cshowError").hide();
    }
  }

  //Submit

  $("#submit").click(function () {
    fullNameErr = true;
    mobileNumberErr = true;
    emailErr = true;
    passwordErr = true;
    confPasswordErr = true;

    checkFullName();
    checkMobileNumber();
    checkEmailId();
    checkPassword();
    checkConfirmPassword();

    if (
      fullNameErr == true &&
      mobileNumberErr == true &&
      emailErr == true &&
      passwordErr == true &&
      confPasswordErr == true
    ) {
      return true;
    } else {
      return false;
    }
  });
});
