$(document).ready(function() {
  // Sticky Navigation Bar
  $("#features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "80px"
    }
  );

  // Scroll animations
  $("#wp-1").waypoint(
    function(direction) {
      $("#wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );
  $("#wp-2").waypoint(
    function(direction) {
      $("#wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );
  $("#wp-3").waypoint(
    function(direction) {
      $("#wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );
  $("#wp-4").waypoint(
    function(direction) {
      $("#wp-4").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );

  // Mobile Nav
  $("#nav-icon").click(function() {
    $("#nav").slideToggle(200);

    var icon = $("#nav-icon i");
    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});
