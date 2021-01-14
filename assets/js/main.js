$(document).ready(function(){
    $('#preloader').fadeOut(200);
    $('body').removeClass('scroll-lock');
});
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



    $('#nav-toggler:not(opened)').click(function(){
        $(this).toggleClass('opened');
        $('#mega-menu').toggleClass('show');
        $('body').toggleClass('scroll-lock');
    });



    $(document).on('keydown', function(event) {
        if (event.key == "Escape") {
            CloseService()
        }
    });

    function CloseService() {
        $('#mega-menu').removeClass('show');
        $('body').removeClass('scroll-lock');
      }

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
                $("nav.navbar").addClass("dark");
            }
            else {
                $("nav.navbar").removeClass("dark");

            }
        });
     }
     darkToLight();



     

      function calcLeft() {
          var leftP = $('.container').offset().left;
          console.log(leftP);
          $('#sidebar').css("left", leftP + 40);
        }
        calcLeft();


///////////// sidebar toggle 
$('.sidebar-toggle').click(function () {
    $(this).next().slideToggle();
    
  })




//////////////////////////////////////////////////////////////////////////////////////////////// 
//////////////////////////.. window resize resposnive ..///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
    $(window).resize(function () {
        bodyPadding();
        darkToLight();
        calcLeft();
      })

}) ////// document.ready.closes.here /////// 

