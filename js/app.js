//Local Scroll Init
// $('body').localScroll();

//Navbar Function Control
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('active');
    } else {
        $('nav').removeClass('active');
    }
});

function menu(x) {
x.classList.toggle("change");
    if($('.menu-btn').hasClass('change')){
        $('.menu-bg').addClass('active');
        $('.menu-mobile').addClass('active');
        $('.overlay-circle').addClass('active');
    } else {
        $('.menu-bg').removeClass('active');
        $('.menu-mobile').removeClass('active');
        $('.overlay-circle').removeClass('active');
    }
}

$.ajax({
    type: "GET",
    url: "https://covid19.keponet.com/api/negara/indonesia",
    dataType: "JSON",
    success: function (data) {
        $('#active').text(data[0].Active);
        $('#recovery').text(data[0].Recovered);
        $('#dead').text(data[0].Deaths);
        $('#total').text(data[0].Confirmed);
    }
});

$.ajax({
    type: "GET",
    url: "https://covid19.keponet.com/api/provinsi/",
    dataType: "JSON",
    success: function (data) {
        $.map(data, function (value, index) {
            $('.table').append(`
            <div class="row">
                <p>${value.attributes.Provinsi}</p>
                <p>${value.attributes.Kasus_Posi}</p>
                <p>${value.attributes.Kasus_Semb}</p>
                <p>${value.attributes.Kasus_Meni}</p>
            </div>
            `);
        });
    }
});

$('.list').on('click', function(e){
    e.preventDefault();
    const go = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(`${go}`).offset().top
    }, 1000);

    $('.menu-bg').removeClass('active');
    $('.menu-mobile').removeClass('active');
    $('.overlay-circle').removeClass('active');
    $('.menu-btn').removeClass('change');
})


$('.logo-brand').on('click', function(e){
    e.preventDefault();
    const go = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(`${go}`).offset().top
    }, 1000);
})

$('html, body').animate({
    scrollTop: $(`#home`).offset().top
}, 1000);


AOS.init();