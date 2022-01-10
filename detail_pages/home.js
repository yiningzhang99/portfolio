
$(document).ready(function() {
    $.js = function (el) {
        return $('[data-js=' + el + ']')
    };

    function carousel() {
        $.js('timeline-carousel').slick({
            infinite: false,
            arrows: false,
            dots: true,
            autoplay: false,
            speed: 1100,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
        });
    }

    carousel();

});

// $(document).ready(function(){
//     $("h2").append('<em></em>');
//     $(".last_img a").click(function(){
//         var $p1=$(this).attr("href");
//         var $p2=$(this).attr("title");
//         $("#Gpimag").attr({src :$p1,alt: $p2});
//         $("h2 em").html("("+$p1+")");
//         return false;
//     });
// });

