
$(document).ready(function() {
  var checkoutURL = "https://www.directoryforcontractors.org/checkout/";
  var linkArray = {"basic1":"36", "basic2":"56", "basic3":"57", "basic4":"58",
  "pro1":"38", "pro2":"59", "pro3":"60", "pro4":"61",
  "preferred1":"40", "preferred2":"62", "preferred3":"63", "preferred4":"64"};

  $('select[name="basic-select"]').change(function() {
    if ($(this).val() !== "") {
      var variable = "basic" + $(this).val();
      $("#basic-select-button").attr("disabled", false).removeClass("select-join--disabled").addClass("select-join--enabled").attr("href", checkoutURL + linkArray[variable]);
    }
  });

  $('select[name="pro-select"]').change(function() {
    if ($(this).val() !== "") {
      var variable = "pro" + $(this).val();
      $("#pro-select-button").attr("disabled", false).removeClass("select-join--disabled").addClass("select-join--enabled").attr("href", checkoutURL + linkArray[variable]);
    }
  });

  $('select[name="preferred-select"]').change(function() {
    if ($(this).val() !== "") {
      var variable = "preferred" + $(this).val();
      $("#preferred-select-button").attr("disabled", false).removeClass("select-join--disabled").addClass("select-join--enabled").attr("href", checkoutURL + linkArray[variable]);
    }
  });
});
