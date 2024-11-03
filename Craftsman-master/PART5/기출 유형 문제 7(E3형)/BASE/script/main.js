let mainMenu = $('.main-menu > li');
mainMenu.mouseover(function(){
    $(this).find('ul').stop().slideDown();
}).mouseout(function(){
    $(this).find('ul').stop().slideUp();
});

mainMenu.focusin(function(){
    $(this).addClass('on');
    $(this).find('ul').stop().slideDown();
}).focusout(function(){
    $(this).removeClass('on');
    $(this).find('ul').stop().slideUp();
});

let slideContainer = $('.slide-wrapper .container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;

function autoSlide() {
    setInterval(function(){
        let nextIdx = (currentIdx + 1) % slideCount;
        slideContainer.animate({
            top: -100 * nextIdx + '%'
        });
        currentIdx = nextIdx;
    }, 3000);
}
autoSlide();

let popupLink = $('.notice li:first');
let popup = $('#popup');
let popupCloseBtn = popup.find('.close');

popupLink.click(function(e){
    e.preventDefault();
    popup.addClass('active');
});

popupCloseBtn.click(function(){
    popup.removeClass('active');
});