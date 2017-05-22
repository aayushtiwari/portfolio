var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
$("h1 span").hover(function () {
    $(this).css('display', 'inline-block');
    $(this).removeClass().addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
    });
});
console.error('ultra private zone !!');
console.log('%cTrying To Scoooooop  :)', 'background:#222;color:#bada55;font-size:25px');
window.onblur = function () {
    document.title = 'notice me senpai :(';
}
window.onfocus = function () {
    document.title = 'contact';
}
window.onload = function () {
    var fadeoutTime = 3000;

    function hidePreloader() {
        var preloader = $('.loader-wrapper');
        preloader.hide();
        addclasses();
    }
    setTimeout(hidePreloader, fadeoutTime);
};

function addclasses() {
    $('.contact').addClass('animated fadeInUp');
    $('nav').addClass('animated fadeInDown');
}
$("#logo a img").hover(function () {
    $(this).removeClass().addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
    });
});
$(() => {
    setInterval(
        () => {
            $('#glitch').addClass('noise1');
            setTimeout(
                () => {
                    $('#glitch').removeClass();
                }, 3000);
            setTimeout(
                () => {
                    $('#glitch').addClass('noise2');
                }, 3000)
            setTimeout(
                () => {
                    $('#glitch').removeClass();
                }, 5500)
        }, 6000);
});
$('input[type="text"]').on('change', () => {
    $(this).css({
        'input[type="text"]:focus+.s2': 'width: 100%;'
    })
});
$("form").submit((e) => {
    if ($('form input[type="email"]')[0].value.length === 0 || $('form textarea')[0].value.length === 0) {
        $("#alert2").css({
            'opacity': '1'
        });
        $("#alert2").animate({
            'padding-left': '0'
        });
        setTimeout(() => {
            $("#alert2").animate({
                'padding-left': '340px'
            })
        }, 3000);
        e.preventDefault();
    }
    else {
        $("#alert").css({
            'opacity': '1'
        });
        $("#alert").animate({
            'padding-left': '0'
        });
        setTimeout(() => {
            $("#alert").animate({
                'padding-left': '340px'
            })
        }, 3000);
        e.preventDefault();
        $('form input[type="text"]')[0].value = '';
        $('form input[type="email"]')[0].value = '';
        $('form textarea')[0].value = '';
    }
});