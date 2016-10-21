$(document).ready(function(){
  $("form#survey").submit(function(event){
    $("#css,#design,#cssdesign,#arrow,#ruby,#rails,#rubyrails,#java,#android,#javaandroid").hide();
    var inputName = $("#name").val();
    var quest1 = $("#frontback").val();
    var quest2 = $("#oop").val();
    var quest3 = $("#job").val();
    var quest4 = $("#interest").val();
    var quest5 = $("#money").val();

    if (quest1 === "Front-end Development"){
      $("#css,#design,#cssdesign,#arrow").fadeIn();
    } else if (quest2 === "Object Oriented Programming" && quest3 === "A Startup") {
      $("#ruby,#rails,#rubyrails,#arrow").slideDown();
    } else if (quest3 === "A large Enterprise" && quest5 === "$100k" || quest4 == "Content-heavy websites"){
      $("#java,#android,#javaandroid,#arrow").fadeIn();
    }

    $(this).hide();
    $("#blank").html(inputName);
    $(".result").show();

    event.preventDefault();
  });
});
