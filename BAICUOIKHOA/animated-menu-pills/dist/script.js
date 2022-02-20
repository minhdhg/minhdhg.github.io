var pill = $(".menu__pill");
setup();

function setup() {
  const newWidth = $(".menu__item").first().innerWidth() + 30;
  pill.width(newWidth);
}

$(".menu__item").on("click", function (e) {
  var $this = $(this);
  const newWidth = $this.innerWidth() + 30;
  pill.width(newWidth);
  var leftOffset = "translateX(" + $this.position().left + "px)";
  pill.css("transform", leftOffset);
});