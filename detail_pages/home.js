
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

// (function ( window, document, undefined ) {
 
//     /*
//      * Grab all iframes on the page or return
//      */
//     var iframes = document.getElementsByTagName( 'iframe' );
   
//     /*
//      * Loop through the iframes array
//      */
//     for ( var i = 0; i  0 ) {
   
//         /*
//          * Calculate the video ratio based on the iframe's w/h dimensions
//          */
//         var videoRatio        = ( iframe.height / iframe.width ) * 100;
   
//         /*
//          * Replace the iframe's dimensions and position
//          * the iframe absolute, this is the trick to emulate
//          * the video ratio
//          */
//         iframe.style.position = 'absolute';
//         iframe.style.top      = '0';
//         iframe.style.left     = '0';
//         iframe.width          = '100%';
//         iframe.height         = '100%';
   
//         /*
//          * Wrap the iframe in a new <div> which uses a
//          * dynamically fetched padding-top property based
//          * on the video's w/h dimensions
//          */
//         var wrap              = document.createElement( 'div' );
//         wrap.className        = 'fluid-vids';
//         wrap.style.width      = '100%';
//         wrap.style.position   = 'relative';
//         wrap.style.paddingTop = videoRatio + '%';
   
//         /*
//          * Add the iframe inside our newly created <div>
//          */
//         var iframeParent      = iframe.parentNode;
//         iframeParent.insertBefore( wrap, iframe );
//         wrap.appendChild( iframe );
   
//       }
   
//     }
   
//   })( window, document );
