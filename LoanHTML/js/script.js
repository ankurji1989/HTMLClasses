

$(".faqItem .faqTitle").click(function(){

    $(".faqItem").removeClass("selected");

    $(this).parent(".faqItem").addClass("selected");

});