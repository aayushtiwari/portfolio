var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
$("h1 span").hover(function() {
    $(this).css('display', 'inline-block');
    $(this).removeClass().addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
});
console.error('ultra private zone !!');
console.log('%cTrying To Scoooooop  :)', 'background:#222;color:#bada55;font-size:25px');
window.onblur = function() {
    document.title = 'notice me senpai :(';
}
window.onfocus = function() {
    document.title = 'work';
}
window.onload = function() {
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
$("#logo a img").hover(function() {
    $(this).removeClass().addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
});
$('#section button').on('click', (e) => {
    $('#section button').removeClass();

    $(e.target).addClass("selected");
});
$("#d1d").hover(() => {
    $('#d1o').css({'display': 'block' });
    $('#d1o').animate({ 'margin-top': '0' }, 500);
},()=>{
  $('#d1o').animate({ 'margin-top': '-200px' }, 500);
  setTimeout($('d1o').css({'display': 'none' }),500);
}
);


$("#wheel").on('focus', () => {
    $("#scene").css('opacity', '0.2');
    
});
$("#wheel").on('focusout', () => {
    $("#scene").css('opacity', '1');
     
     });
