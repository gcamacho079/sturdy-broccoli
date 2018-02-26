var pricingTable = {
  init: function() {
    jQuery(".table-expander").click(pricingTable.toggleTable);
    jQuery(".priceToggle").click(pricingTable.togglePrice);
  },

  toggleTable: function() {
    if (jQuery(".table-expander").hasClass("expander--closed")) {
      jQuery(".row--hidden").toggle();
      jQuery(".expander-arrow").text("▲");
      jQuery(this).removeClass("expander--closed")
             .addClass("expander--open");
    }
    else {
      jQuery(".expander-arrow").text("▼");
      jQuery(".row--hidden").toggle();
      jQuery(this).removeClass("expander--open")
             .addClass("expander--closed");
    }
  },

  togglePrice: function() {
    const monthlyPreferred = "$127";
    const annuallyPreferred = "$97";

    jQuery(".priceToggle").removeClass("priceToggle--active");
    jQuery(this).addClass("priceToggle--active");
    let nowShow = jQuery(this).attr("data-this");
    if (nowShow == "monthly") {
      jQuery("#preferredPrice").html(monthlyPreferred);
      jQuery(".annual-disclaimer").hide();
      jQuery(".monthly-disclaimer").show();
    }
    else {
      jQuery("#preferredPrice").html(annuallyPreferred);
      jQuery(".annual-disclaimer").show();
      jQuery(".monthly-disclaimer").hide();
    }
  }
}

jQuery(document).ready(pricingTable.init);
