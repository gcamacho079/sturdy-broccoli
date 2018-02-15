var pricingTable = {
  init: function() {
    $(".table-expander").click(pricingTable.toggleTable);
    $(".priceToggle").click(pricingTable.togglePrice);
  },

  toggleTable: function() {
    if ($(".table-expander").hasClass("expander--closed")) {
      $(".row--hidden").toggle();
      $(".expander-arrow").text("▲");
      $(this).removeClass("expander--closed")
             .addClass("expander--open");
    }
    else {
      $(".expander-arrow").text("▼");
      $(".row--hidden").toggle();
      $(this).removeClass("expander--open")
             .addClass("expander--closed");
    }
  },

  togglePrice: function() {
    const monthlyBasic = "$147";
    const monthlyPro = "$167";
    const monthlyPreferred = "$247";

    const annuallyBasic = "$117";
    const annuallyPro = "$137";
    const annuallyPreferred = "$197";

    $(".priceToggle").removeClass("priceToggle--active");
    $(this).addClass("priceToggle--active");
    let nowShow = $(this).attr("data-this");
    console.log(nowShow);
    if (nowShow == "monthly") {
      $("#basicPrice").html(monthlyBasic);
      $("#proPrice").html(monthlyPro);
      $("#preferredPrice").html(monthlyPreferred);
      $(".annual-disclaimer").hide();
    }
    else {
      $("#basicPrice").html(annuallyBasic);
      $("#proPrice").html(annuallyPro);
      $("#preferredPrice").html(annuallyPreferred);
      $(".annual-disclaimer").show();
    }
  }
}

$(document).ready(pricingTable.init);
