$(function() {

    var header = $('.header'),
        introH = $('.intro').innerHeight(),
        scrollT = $(window).scrollTop()

    checkscroll(scrollT)

    $(window).on('scroll', function() {
        scrollT = $(this).scrollTop()

        checkscroll(scrollT)
    })

    function checkscroll(scrollT) {
        if(scrollT >= introH) {
            header.addClass('active')
        } else {
            header.removeClass('active')
        }
    }



    const active = [
        '.categories__type',
        '.goods__item',
    ]

    active.forEach(el => {
        $(el).on('click', function() {
            $(el).removeClass('active')
            $(this).toggleClass('active')
        })
    })

    $('.header__burg').on('click', function() {
        $('.header__item').toggleClass('active')
    })


    // nav__modal
    $(document).on('click', function (e) {
        var nav = $('.nav__modal')
        if(nav.hasClass('active')) {
            if (nav.has(e.target).length === 0){
                nav.removeClass('active')
            }
        }
    })

    $('.nav__close').on('click', function() {
        $('.nav__modal').removeClass('active')
    })

    $('.nav__modal-btn').on('click', function() {
        $('.nav__modal').removeClass('active')
        var modal = $(this).parent()
        $(modal).toggleClass('active')
    })


    $('.categories').on('scroll', function() {
        if(this.scrollLeft >= (this.scrollWidth - this.clientWidth)) {
            $('.categories__arrow-next').addClass('gray')
        } else if(this.scrollLeft < (this.scrollWidth - this.clientWidth)) {
            $('.categories__arrow-next').removeClass('gray')
        }

        if(this.scrollLeft <= 0) {
            $('.categories__arrow-prev').addClass('gray')
        } else if (this.scrollLeft >= 0) {
            $('.categories__arrow-prev').removeClass('gray')
        }
    })

    $('.categories__arrow-prev').on('click', function() {
            $('.categories').scrollLeft($('.categories').scrollLeft() - 125)    
    })

    $('.categories__arrow-next').on('click', function() {
        $('.categories').scrollLeft($('.categories').scrollLeft() + 125)    
    })


    $('.learn__more-look').on('click', function() {
        $('.look__item').removeClass('active')
        var item = $(this).parent().parent()
        item.addClass('active')
    })


    $('.look__close').on('click', function() {
        $(this).parent().parent().removeClass('active')
    })

    $(document).on('click', function(e) {
        var $this = $('.look__item.active')
        if ($this.has(e.target).length === 0){
            $this.removeClass('active')
        }
    })


    $(document).on('click', function (e) {
        var goods = $('.goods__item')
        if(goods.hasClass('active')) {
            if (goods.has(e.target).length === 0){
                goods.removeClass('active')
            }
        }
    })


    function inputqty() {
        const input =$('.product__input input'),
              btnPlus = $('.product__input-plus'),
              btnMin = $('.product__input-min')

              btnPlus.on('click', quantityPlus)
              btnMin.on('click', quantityMinus)

              function quantityMinus() {
                if (input.val() > 30) {
                  input.val(+input.val() - 1)
                }
              }
          
              function quantityPlus() {
                if(input.val() < 48) {
                    input.val(+input.val() + 1)
                }
              }
    }
    inputqty()

    $('[data-choose]').on('click', function() {
        let $this = $(this),
            dtst = $this.data('choose')
            btn = $(dtst)
        $('.info__item').removeClass('active')
        btn.addClass('active')

        if($('#video').hasClass('active')) {
            $('#infovid').add()
        } else {
            let leg = $('#infovid').attr("src")
            $('#infovid').attr("src", leg)
        }
    })

    $('#nav_toggle').on('click', function() {
        $(this).toggleClass('active')
        $('.nav').toggleClass('active')
        $('.header').toggleClass('white')
    })



    $('.product__slider').slick({
        infinite: true,
        slidesToShow: 1,
        fade: false,
        slidesToScroll:1
    })




})