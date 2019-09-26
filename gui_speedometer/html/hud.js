$(function() {
  var speedContainer = $("#speedcontainer"),
    uL1 = $(".uL1"),
    sL1 = $(".sL1"),
    uL2 = $(".uL2"),
    sL2 = $(".sL2"),
    dBL1 = $(".dBL1"),
    dBL2 = $(".dBL2"),
    dBL3 = $(".dBL3"),
    dBL4 = $(".dBL4");
  window.addEventListener("message", function(event) {
    var item = event.data,
      ms = Math.round(item.ms),
      mph = Math.round(item.mph),
      kmh = Math.round(item.kmh),
      scMPH = item.speedColorMPH,
      scKMH = item.speedColorKMH,
      ucMPH = item.speedColorMPH,
      ucKMH = item.speedColorKMH;
    if (item.show_debug) {
      dBL1.text("Hash: " + item.dBL1);
      dBL2.text("Max Speed: " + item.dBL2);
      dBL3.text("MPH: " + item.dBL3);
      dBL4.text("KM/H: " + item.dBL4);
    }
    if ((!item.ussc) && (!item.usuc)) {
      scMPH = [(255 * kmh / ms), 15, ((255 * (ms - kmh)) / ms)];
      scKMH = scMPH;
      ucMPH = scMPH;
      ucKMH = scKMH;
    } else if ((!item.ussc) && (item.usuc)) {
      scMPH = [(255 * kmh / ms), 15, ((255 * (ms - kmh)) / ms)];
      scKMH = scMPH;
      ucMPH = item.unitColorMPH;
      ucKMH = item.unitColorKMH;
    } else if ((item.ussc) && (!item.usuc)) {
      ucMPH = [(255 * kmh / ms), 15, ((255 * (ms - kmh)) / ms)];
      ucKMH = ucMPH;
      scMPH = item.speedColorMPH;
      scKMH = item.speedColorKMH;
    } else {
      scMPH = item.speedColorMPH;
      scKMH = item.speedColorKMH;
      ucMPH = item.unitColorMPH;
      ucKMH = item.unitColorKMH;
    }
    if (item.show_hud) {
      speedContainer.fadeIn();
      /////Speed CSS/////
      sL1.text(item.mph);
      sL2.text(item.kmh);
      sL1.css({
        "color": "rgb(" + scMPH[0] + ", " + scMPH[1] + ", " + scMPH[2] + ")"
      });
      sL2.css({
        "color": "rgb(" + scKMH[0] + ", " + scKMH[1] + ", " + scKMH[2] + ")"
      });
      /////Unit CSS/////
      uL1.text(item.uL1);
      uL2.text(item.uL2);
      uL1.css({
        "color": "rgb(" + ucMPH[0] + ", " + ucMPH[1] + ", " + ucMPH[2] + ")"
      });
      uL2.css({
        "color": "rgb(" + ucKMH[0] + ", " + ucKMH[1] + ", " + ucKMH[2] + ")"
      });
    } else {
      speedContainer.fadeOut();
    }

  });

});
