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
    const monthlyBasic = "$167";
    const monthlyPro = "$197";
    const monthlyPreferred = "$277";

    const annuallyBasic = "$137";
    const annuallyPro = "$157";
    const annuallyPreferred = "$227";

    $(".priceToggle").removeClass("priceToggle--active");
    $(this).addClass("priceToggle--active");
    let nowShow = $(this).attr("data-this");
    console.log(nowShow);
    if (nowShow == "monthly") {
      $("#basicPrice").html(monthlyBasic);
      $("#proPrice").html(monthlyPro);
      $("#preferredPrice").html(monthlyPreferred);
      $(".annual-disclaimer").hide();
      $(".monthly-disclaimer").show();
    }
    else {
      $("#basicPrice").html(annuallyBasic);
      $("#proPrice").html(annuallyPro);
      $("#preferredPrice").html(annuallyPreferred);
      $(".annual-disclaimer").show();
      $(".monthly-disclaimer").hide();
    }
  }
}

$(document).ready(pricingTable.init);
