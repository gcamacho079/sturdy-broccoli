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
    const monthlyPreferred = "$127";
    const annuallyPreferred = "$97";

    $(".priceToggle").removeClass("priceToggle--active");
    $(this).addClass("priceToggle--active");
    let nowShow = $(this).attr("data-this");
    if (nowShow == "monthly") {
      $("#preferredPrice").html(monthlyPreferred);
      $(".annual-disclaimer").hide();
      $(".monthly-disclaimer").show();
    }
    else {
      $("#preferredPrice").html(annuallyPreferred);
      $(".annual-disclaimer").show();
      $(".monthly-disclaimer").hide();
    }
  }
}

$(document).ready(pricingTable.init);
