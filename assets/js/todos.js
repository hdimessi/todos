// Check off specific todos by clicking
$("ul").on("click", ".content", function() {
  // if li is gray
  $(this).toggleClass("completed");
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
  let adjacentSpan = $(this).prev();
  console.log(adjacentSpan);
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(adjacentSpan).text()).select();
  document.execCommand("copy");
  $temp.remove();
  $("#tooltip").fadeToggle(function() {
    $(this).fadeToggle(800);
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    // grabbing new todo text from input
    var todoText = $(this).val();
    // create a new li and add it to ul
    $("ul").append(
      '<li><span class="delete far fa-trash-alt"></span><span class="content"> ' +
        todoText +
        '</span> <span class="copy far fa-copy"></span></li>'
    );
    // clear the input
    $(this).val("");
  }
});

$(".fa-plus-square").click(function() {
  $("input[type='text']").fadeToggle();
});
