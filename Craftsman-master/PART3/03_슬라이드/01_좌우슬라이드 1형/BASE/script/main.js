let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;

function autoSlide(){
    setInterval(function(){
        nextIdx = (currentIdx + 1) % slideCount;
        slideContainer.animate({ marginLeft: -1200 * nextIdx + 'px'});
        currentIdx = nextIdx;
    }, 3000)
}
autoSlide();