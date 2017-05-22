var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
console.error('ultra private zone !!');
console.log('%cTrying To Scoooooop  :)', 'background:#222;color:#bada55;font-size:25px');
window.onblur = function () {
    document.title = 'notice me senpai :(';
}
window.onfocus = function () {
    document.title = 'About';
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
$("#aboutme h1 span").hover(function () {
    $(this).css('display', 'inline-block');
    $(this).removeClass().addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
    });
});
$("#logo a img").hover(function () {
    $(this).removeClass().addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
    });
});