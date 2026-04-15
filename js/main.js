$(document).ready(function () {

  let current = 0;
  let slides = $(".slide");

  // Start button
  $("#show-q").click(function () {
    $("#first-text").hide();
    $("#qustions").fadeIn();
    showSlide(current);
  });

  function showSlide(index) {
    slides.hide().eq(index).fadeIn();

    $("#error-msg").hide();

    // Previous button
    if (index === 0) {
      $("#prev").hide();
    } else {
      $("#prev").show();
    }

    // Next / Result button
    if (index === slides.length - 1) {
      $("#next").hide();
      $("#result").show();
    } else {
      $("#next").show();
      $("#result").hide();
    }
  }

  // Next
  $("#next").click(function () {
    let selected = slides.eq(current).find("input:checked").length;

    if (selected === 0) {
      $("#error-msg").text("Please select an option").fadeIn();
      return;
    }

    current++;
    showSlide(current);
  });

  // Previous
  $("#prev").click(function () {
    current--;
    showSlide(current);
  });

  // Hide error on select
  $("input[type=radio]").change(function () {
    $("#error-msg").fadeOut();
  });

  // RESULT + RESET
  $("#result").click(function () {

    let total = 0;

    $("input[type=radio]:checked").each(function () {
      total += parseInt($(this).val());
    });

    // Show score
    $("#answer").text(total);

    // Scroll to result
    $("html, body").animate({
      scrollTop: $(".score").offset().top
    }, 600);

    // ⏳ After 2 sec → Reset everything
    setTimeout(function () {

      // Clear all radio selections
      $("input[type=radio]").prop("checked", false);

      // Reset index
      current = 0;

      // Hide questions & show first screen
      $("#qustions").hide();
      $("#first-text").fadeIn();

      // Reset buttons state
      $("#next").show();
      $("#result").hide();
      $("#prev").hide();

      // Optional: reset score text
      // $("#answer").text("0");

    }, 2000); // change time if needed

  });
    $("#show-q").click(function () {

      // Reset score
      $("#answer").text("00");

      // Reset radio buttons
      $("input[type=radio]").prop("checked", false);

      // Reset question index
      current = 0;

      $("#first-text").hide();
      $("#qustions").fadeIn();

      showSlide(current);
    });

    $("#share-instagram").click(function () {
    window.open("https://www.instagram.com/", "_blank");
  });
});
