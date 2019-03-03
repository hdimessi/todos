// Check off specific todos by clicking
$("ul").on("click", ".content", function() {
  // if li is gray
  $(this).toggleClass("completed");
});

$("ul").on("mouseenter mouseleave", "li", function() {
  $(this.lastElementChild).toggleClass("hidden");
});

$("ul").on("click", ".delete", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$("ul").on("click", ".copy", function(event) {
  console.log("hhh");

  let adjacentSpan = $(this).prev();
  console.log(adjacentSpan);
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(adjacentSpan).text()).select();
  document.execCommand("copy");
  $temp.remove();
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    // grabbing new todo text from input
    var todoText = $(this).val();
    // create a new li and add it to ul
    $("ul").append(
      '<li><span class="delete">X</span><span class="content"> ' +
        todoText +
        '</span> <span class="copy">C</span></li>'
    );
    // clear the input
    $(this).val("");
  }
});
