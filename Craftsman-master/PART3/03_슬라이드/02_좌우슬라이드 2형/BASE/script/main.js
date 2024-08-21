let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;

slide.eq(0).siblings().css({ marginLeft: '-1200px'});

function autoSlide(){
    setInterval(function(){
        let nextIdx = (currentIdx + 1) % slideCount;
        slide.eq(currentIdx).animate({ marginLeft: '-1200px'});
        slide.eq(nextIdx).animate({marginLeft: '0px'});
        currentIdx = nextIdx;
    }, 3000)
}
autoSlide();