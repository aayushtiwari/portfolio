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
    document.title = 'skills';
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
    $('#elements').addClass('animated fadeInUp');
    $('nav').addClass('animated fadeInDown');
}
$("#logo a img").hover(function () {
    $(this).removeClass().addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
    });
});
$('#dcir').addClass('coloo');
setTimeout(() => {
    $('#splash').addClass('size')
}, 200);
$('#dcir').removeClass();
$('#splash').removeClass();
var x = 1;
var d = [97, 92, 94, 83, 90, 70, 79, 90, 40, 84];

function bcd() {
    $("#leftb img").removeClass().addClass('zoomIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $("#leftb img").removeClass();
    });
    $('#splash').removeClass();
    $('#dcir').addClass('coloo');
    setTimeout(() => {
        $('#splash').addClass('size')
    }, 250);
    setTimeout(() => {
        $('#splash').removeClass()
    }, 800);
    setTimeout(() => {
        $('#dcir').removeClass()
    }, 350);
    $(`#i${x+1}`).css('opacity', '0');
    $('#names').animate({
        top: '+=50px'
    });
    $('#score').empty();
    $('#score').html(`${d[x-1]}%`);
    $('.bar').css({
        "width": `${d[x-1]}`
    });
    setTimeout(() => {
        $(`#i${x}`).css('opacity', '1');
        $(`#i${x}`).addClass('animated bounceIn');
    }, 900);
};

function lclick() {
    $(`#i${x+1}`).removeClass('animated bounceIn');
};
$('#leftb button').on('click', () => {
    if (x !== 1) {
        (() => {
            x--;
            bcd();
            lclick();
        })(x);
    }
});
$('#rightb button').on('click', () => {
    if (x !== 10) {
        (() => {
            x++;
            abc();
            rclick();
        })(x);
    }
});
setInterval(
    () => {
        if (x !== 10) {
            (() => {
                x++;
                abc();
                rclick();
            })(x);
        }
        else {
            (() => {
                $(`#names`).css('top', '50px');
                $('#i10').css('opacity', '0');
                $(`#i10`).removeClass('animated bounceIn');
                x = 1;
                abc();
                rclick();
            })(x);
        }
    }, 5000);

function abc() {
    $("#rightb img").removeClass().addClass('zoomIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $("#rightb img").removeClass();
    });
    $('#splash').removeClass();
    $('#dcir').addClass('coloo');
    setTimeout(() => {
        $('#splash').addClass('size')
    }, 250);
    setTimeout(() => {
        $('#splash').removeClass()
    }, 800);
    setTimeout(() => {
        $('#dcir').removeClass()
    }, 350);
    $(`#i${x-1}`).css('opacity', '0');
    $('#names').animate({
        top: '-=50px'
    });
    $('#score').empty();
    $('#score').html(`${d[x-1]}%`);
    $('.bar').css({
        "width": `${d[x-1]}%`
    });
    setTimeout(() => {
        $(`#i${x}`).css('opacity', '1');
        $(`#i${x}`).addClass('animated bounceIn');
    }, 900);
};

function rclick() {
    $(`#i${x-1}`).removeClass('animated bounceIn');
}
$("#wheel").on('focus', () => {
    $(".modal-open #Experience p").css('color', 'grey');
    $("span3").css('color', 'grey');
});
$("#wheel").on('focusout', () => {
    $("#Experience p").css('color', 'ghostwhite');
     $("span3").css('color', 'ghostwhite');
});
