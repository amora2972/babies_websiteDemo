$(document).ready(function(){

	// navbar affix
	$(window).scroll(function(){
        /*navbar scroll affixs*/
        var navbar = $(".navbar");
        if($(window).scrollTop() >= navbar.height())
            navbar.addClass("affix-nav");
        else
            navbar.removeClass("affix-nav");
    });

    $(document).on("focus" , "input" , function () {
        attr = $(this).attr("placeholder");
        $(this).removeAttr('placeholder');
    });

    $(document).on("focusout" , "input" , function () {
        if($(this).val() == ''){
            $(this).attr('placeholder' , attr);
        }
    });
    var navHeight = $('.navbar').outerHeight();
    $(".navbar ul li a,.section-header a").not('.dropdown a').click(function(e) {
        var link = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(link).offset().top - navHeight
        },1000);
        e.preventDefault();
    });

    $(".products .card").addClass("wow slideInLeft");

	baguetteBox.run('.compact-gallery', { animation: 'slideIn'});
});