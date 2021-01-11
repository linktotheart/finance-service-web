$(document).ready(function() {
    ///// scroll on click 
    $('.scroll-to').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top)
            }, 750);
            return false;
        }
    });

    
    function bodyPadding() {
       var footerHeight = $('footer.footer').outerHeight();
       console.log(footerHeight)
       $('body').css(
           {
             paddingBottom: footerHeight,
            }
       )
    }
    bodyPadding();

    function darkToLight() { 
        var whiteStart = $('#white-space').offset().top;
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= whiteStart) {
                $("nav.navbar, #sidebar").addClass("dark");
            }
            else {
                $("nav.navbar,  #sidebar").removeClass("dark");

            }
        });
     }
     darkToLight();

    $(window).resize(function () {
        bodyPadding();
        darkToLight();
      })


    $('#mega-menu .mega-link').on('mouseover click', function(){
        $(this).addClass('active').siblings().removeClass('active').children().removeClass('active');
        $(this).children().addClass('active');
        // console.log(this);
        // console.log(this.next());
        if ($(this).hasClass('purple')) $("#mega-menu").css("background", "#AF2BBF") 
        if ($(this).hasClass('red')) $("#mega-menu").css("background", " #CC3363") 
        if ($(this).hasClass('green')) $("#mega-menu").css("background", "#00ad6d") 
        if ($(this).hasClass('yellow')) $("#mega-menu").css("background", "#ce9a00") 
    })



    $('#service-link').click(function(){
        $('#mega-menu').addClass('show');
    });
    $('#mega-menu .mega-close').click(function(){
        $('#mega-menu').removeClass('show');
    });

}) ////// document.ready.closes.here /////// 

