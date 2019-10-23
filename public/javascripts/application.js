/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// Print control
function printPage() {
  window.print();
}

// Hide 0 values
// $("tr td:contains('£0.00')").parent().hide();

//Filter and search 

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// Hide alpha banner for certain url's
  $(function() {
    if (document.location.href.indexOf('service-overview') > -1 ) {
        $('.alphaBanner').css("display", "none")
    }});

    $(function() {
      if (document.location.href.indexOf('sign') > -1 ) {
          $('.alphaBanner').css("display", "none")
      }});

      $(function() {
        if (document.location.href.indexOf('glossary-of-terms') > -1 ) {
            $('.alphaBanner').css("display", "none")
        }});