$(document).ready(function() {
    //Apply stilling to the menu

    //get the current position of the active item
    var dleft = $('.lavalamp li.active').offset().left - $('.lavalamp').offset().left;
    var dwidth = $('.lavalamp li.active').width() + "px";

    //apply the current position of active item to our floatr element
    $('.floatr').css({
        "left" : dleft + "px",
        "width" : dwidth
    });

    $('.lavalamp li').hover(function() {

        var left = $(this).offset().left - ($(this).parents('.lavalamp').offset().left + 15);
        var width = $(this).width() + "px";
        var sictranslate = "translate(" + left + "px, 0px)";

        $(this).parent('ul').next('div.floatr').css({
            "width" : width,
            "-webkit-transform" : sictranslate,
            "-moz-transform" : sictranslate
        });

    }, function() {

        var left = $(this).siblings('li.active').offset().left - ($(this).parents('.lavalamp').offset().left + 15);
        var width = $(this).siblings('li.active').width() + "px";

        var sictranslate = "translate(" + left + "px, 0px)";

        $(this).parent('ul').next('div.floatr').css({
            "width" : width,
            "-webkit-transform" : sictranslate,
            "-moz-transform" : sictranslate

        });

    }).click(function() {

        $(this).siblings('li').removeClass('active');

        $(this).addClass('active');

        //work out which page has been clicked on
        var selected = $('li.active').attr("id");

        //show/hide the relevant contents
        switch (selected) {
            case "home":
                $("#content_home").show();
                $("#content_contact").hide();
                $("#content_prices").hide();
                break;
            case "contact":
                $("#content_home").hide();
                $("#content_contact").show();
                $("#content_prices").hide();
                break;
            case "prices":
                $("#content_home").hide();
                $("#content_contact").hide();
                $("#content_prices").show();
                break;
            case "blog":
                window.open("http://bloggercise1.blogspot.co.uk");
             
        }
        
        // this stops the href from working. not a problem though as link is remade above
        return false;

    });

});
