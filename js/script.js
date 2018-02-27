var pricingTable = {
  init: function() {
    $(".table-expander").click(pricingTable.toggleTable);
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
  }
}

$(document).ready(pricingTable.init);
