$(document).ready(function () {

  let current = 0;
  let slides = $(".slide");

  function showSlide(index) {
    slides.hide().eq(index).fadeIn();

    $("#error-msg").hide();

    $("#prev").toggle(index !== 0);

    if (index === slides.length - 1) {
      $("#next").hide();
      $("#result").show();
    } else {
      $("#next").show();
      $("#result").hide();
    }
  }

  $("#show-q").click(function () {

    $("input[type=radio]").prop("checked", false);
    $("#answer").text("00");
    $("#type").text("---------");
    $("#reward").text("---------");
    $("#ruppee").text("₹0"); 
    $("#error-msg").hide();

    current = 0;

    $("#first-text").hide();
    $("#qustions").fadeIn();

    showSlide(current);
  });

  $("#next").click(function () {

    let selected = slides.eq(current).find("input:checked").length;

    if (selected === 0) {
      $("#error-msg").text("Please select an option").fadeIn();
      return;
    }

    current++;
    showSlide(current);
  });

  $("#prev").click(function () {
    current--;
    showSlide(current);
  });

  $("input[type=radio]").change(function () {
    $("#error-msg").fadeOut();
  });

  $("#result").click(function () {

    let selected = slides.eq(current).find("input:checked").length;

    if (selected === 0) {
      $("#error-msg").text("Please select an option").fadeIn();
      return;
    }

    let total = 0;

    $("input[type=radio]:checked").each(function () {
      total += parseInt($(this).val());
    });

    $("#answer").text(total);

    let resultText = "---------";
    let rewardText = "---------";
    let amountText = "₹0"; 

    if (total >= 30 && total <= 49) {
      resultText = "Trend chaser";
      rewardText = "Trend chaser reward";
      amountText = "₹150";
    } 
    else if (total >= 50 && total <= 64) {
      resultText = "Sale printer";
      rewardText = "Sale printer reward";
      amountText = "₹250";
    } 
    else if (total >= 65 && total <= 79) {
      resultText = "Balanced styler";
      rewardText = "Balanced styler reward";
      amountText = "₹350";
    } 
    else if (total >= 80 && total <= 100) {
      resultText = "FAIR & SQUAR MAN";
      rewardText = "Fair & Square reward";
      amountText = "₹500";
    }

    $("#type").text(resultText);
    $("#reward").text(rewardText);
    $("#ruppee").text(amountText); 

    $("html, body").animate({
      scrollTop: $(".score").offset().top
    }, 600);

    setTimeout(function () {

      $("input[type=radio]").prop("checked", false);
      current = 0;

      $("#qustions").hide();
      $("#first-text").fadeIn();

      $("#next").show();
      $("#result").hide();
      $("#prev").hide();

    }, 2000);
  });

  $("#share-instagram").click(function () {
    window.open("https://www.instagram.com/", "_blank");
  });

});