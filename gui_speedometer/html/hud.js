$(function() {
  var speedContainer = $("#speedcontainer"),
    uL1 = $(".uL1"),
    sL1 = $(".sL1"),
    uL2 = $(".uL2"),
    sL2 = $(".sL2"),
    dBL1 = $(".dBL1"),
    dBL2 = $(".dBL2"),
    dBL3 = $(".dBL3"),
    R,
    G,
    B;
  window.addEventListener("message", function(event) {
    var item = event.data;
    var ms = Math.round(item.ms);
    R = ((255 * Math.round(item.mph) / ms));
    G = 15;
    B = ((255 * (ms - Math.round(item.mph))) / ms);
    if (item.showhud) {
      speedContainer.fadeIn();
      sL1.text(item.mph);
      sL2.text(item.kmh);
      uL1.text(item.uL1);
      uL2.text(item.uL2);
      //dBL1.text(item.dBL1);
      //dBL2.text(item.dBL2);
      //dBL3.text(item.dBL3);
      uL1.css({
        "color": "rgb(" + 45 + ", " + 173 + ", " + 95 + ")"
      });
      uL2.css({
        "color": "rgb(" + 45 + ", " + 173 + ", " + 95 + ")"
      });
      sL1.css({
        "color": "rgb(" + R + ", " + G + ", " + B + ")"
      });
      sL2.css({
        "color": "rgb(" + R + ", " + G + ", " + B + ")"
      });
    } else {
      speedContainer.fadeOut();
    }
  });

});
