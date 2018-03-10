// accardion starts
$(".head").click(function(ev){
    $(this).parent().find(".body").slideToggle();
    $(this).find("i").toggleClass("fa-minus");
    $(this).find("i").toggleClass("fa-plus");
    
       $(".head").not($(this)).parent().find(".body").slideUp();
       $(".head").not($(this)).find("i").removeClass("fa-minus").addClass("fa-plus");
})
// accardion ends