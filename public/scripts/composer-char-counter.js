$(document).ready(function() {
  $(".new-tweet").on("keyup", "textarea", function() {
    const charsLeft = (140 - ($(this).val().length));
    const textCount = $(this).closest("form").find(".counter");
    textCount.text(charsLeft);
    if (charsLeft < 0) {
      textCount.addClass("make-text-red");
    }
    else {
      textCount.removeClass("make-text-red");
    }
  });
});