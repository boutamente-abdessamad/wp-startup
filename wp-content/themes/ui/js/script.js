$(document).ready(() => {

    var gallerySideImgs = $('.gallery-side-imgs');
    var galleryPrincipaleImg = $('.gallery-principale-img');
    if (gallerySideImgs.length) {
        gallerySideImgs.slick({
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            vertical: true,
            verticalSwiping: true,
            focusOnSelect: true,
            asNavFor: '.gallery-principale-img'
        });
    }
    if (galleryPrincipaleImg.length) {
        galleryPrincipaleImg.slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '.gallery-side-imgs'
        });
    }
    // filter collaps 
    $('.category-filter-title').on('click',function (e) { 
        e.preventDefault();
        $(this).closest('.category-filter').toggleClass('in');
     })
    $('.filter-sizes a').on('click',function (e) { 
        e.preventDefault();
        $('.filter-sizes a').removeClass('active');
        $(this).addClass('active');
     })
    $('.display-style a').on('click',function (e) { 
        e.preventDefault();
        $('.display-style a').removeClass('active');
        $(this).addClass('active');
     })

    $(".shopping-card-items").niceScroll();
    /*----------------------  slider range ------------------*/
      // Get inputs by container
        $('.double-slider input[type="range"]').on('input', function(e){    
            // Split the elements From/To Slider and From/To values so you can handle them separtely 
            const fromSlider = $(this).parent().children('input[type="range"].from'),
                toSlider = $(this).parent().children('input[type="range"].to'),
                fromValue = parseInt($(this).parent().children('input[type="range"].from').val()),
                toValue = parseInt($(this).parent().children('input[type="range"].to').val()),
                currentlySliding = $(this).hasClass('from') ? 'from' : 'to',
                outputElemFrom = $(this).parent().find('.value-output.from'),
                outputElemTo = $(this).parent().find('.value-output.to');

            // Check which slider has been adjusted and prevent them from crossing each other 
            if(currentlySliding == 'from' && fromValue >= toValue){
                fromSlider.val((toValue - 1));
                fromValue = (toValue - 1);
            } else if(currentlySliding == 'to' && toValue <= fromValue){
                toSlider.val((fromValue + 1)); 
                toValue = (fromValue + 1);
            }

            // Updating the output values so they mirror the current slider's value
            outputElemFrom.html(fromValue);
            outputElemTo.html(toValue);
        
        });
    /*----------------------  slider range ------------------*/ 

    $('#qteInput').on('input change', function (e) {
        var intRegex = /^\d+$/;
        var str = $(this).val();
        if (!intRegex.test(str)) {
            $(this).val(str.substring(0, str.length - 1));
        }
    })
    $('#qteInput').on('focusout', function (e) {
        var str = $(this).val();
        if (!str || str == 0) {
            $(this).val(1);
        }
    })
    $('#add').on('click', function (e) {
        var qte = $('#qteInput').val();
        $('#qteInput').val(parseInt(qte) + 1)
    })
    $('#down').on('click', function (e) {
        var qte = $('#qteInput').val();
        if (parseInt(qte) <= 1 ){
            $('#qteInput').val(1);
            return 0;
        }
        $('#qteInput').val(parseInt(qte) - 1)
    })

    $('.fade-subnav').on('mouseenter',function (e) { 
        e.preventDefault();
        $('.subnav').addClass('in');
    });

    $('.ct-page-root').on('mouseenter',function (e) { 
        e.preventDefault();
        $('.subnav').removeClass('in');
    });

    $('.subnav').on('mouseleave',function (e) { 
        e.preventDefault();
        $('.subnav').removeClass('in');
    });

})