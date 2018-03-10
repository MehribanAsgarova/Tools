$(document).ready(function () {
    $(".service .counter").attr('data-count');
    $('.progress').each(function() {
      var a=$(this).text();
      var b=$(this).parent().parent().last().find(".progress_main").css({"width":a+"%"});
    })
  });