/*
  Top Header bar
*/ 
const headerDiv = document.querySelector('.site-header');
const pageLinks = document.getElementsByClassName('page-link');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
 
  if (scrollPosition > 100) {
    headerDiv.classList.add('scrolled');
    for (let i = 0; i < pageLinks.length; i++) {
      pageLinks[i].classList.add('scrolled');
    }
  }
  else {
    headerDiv.classList.remove('scrolled');
    for (let i = 0; i < pageLinks.length; i++) {
      pageLinks[i].classList.remove('scrolled');
    }
  }
});


/**
 * Menu
 */
 $("a.menu-icon").on("click", function(event) {
   var w = $(".menu");

   w.css({
     display: w.css("display") === "none"
      ? "block"
      : "none"
   });
 });

/**
 * mini info window widget
 */
function moveWidget(event) {
  var link = $(this);
  var widgetId = link.data("widget-id");
  var w = $("#" + widgetId + "-info");

  w.css({
    left: event.pageX - 25,
    top: event.pageY - w.height() - 60
  });
}

$("a[data-widget-id]").on("mouseenter", function(event) {
  var link = $(this);
  var widgetId = link.data("widget-id");
  $("#" + widgetId + "-info").css({ display: "block" });
  moveWidget.call(this, event);
});

$("a[data-widget-id]").on("mousemove", moveWidget);

$("a[data-widget-id]").on("mouseleave", function(event) {
  var link = $(this);
  var widgetId = link.data("widget-id");
  $("#" + widgetId + "-info").css({ display: "none" });
});
