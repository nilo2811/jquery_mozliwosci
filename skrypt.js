$(document).ready(function () {
    $(".accordion-header").click(function () {
      $(this).next(".accordion-content").slideToggle();
    });
    $("#datepicker").datepicker({
      dateFormat: 'yy-mm-dd',
      changeMonth: true,
      changeYear: true,
      yearRange: "1900:2025"
    });
    $("#dialog-confirm").dialog({
      autoOpen: false,
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Tak": function() {
          $(this).dialog("close");
        },
        "Nie": function() {
          $(this).dialog("close");
        }
      }
    });
    $(".sortable-list").sortable();
    $(".sortable-list").disableSelection();
    $("#toggle-menu").on("click", function() {
      $("#menu").toggle("slide");
    });
    $("#animated-button").button().on("click", function() {
      $(this).toggleClass("ui-state-active").toggleClass("ui-state-default");
    });
    $("#draggable-element").draggable();
    var progressbar = $("#progressbar");
    var progressLabel = $(".progress-label");
    progressbar.progressbar({
      value: 50,
      change: function () {
        progressLabel.text("Postęp: " + progressbar.progressbar("value") + "%");
      },
      complete: function () {
        progressLabel.text("Zadanie zakończone!");
      }
    });

    $("#decrease-progress").on("click", function() {
      var value = progressbar.progressbar("value");
      progressbar.progressbar("value", value - 10);
    });

    $("#increase-progress").on("click", function() {
      var value = progressbar.progressbar("value");
      progressbar.progressbar("value", value + 10);
    });
  });