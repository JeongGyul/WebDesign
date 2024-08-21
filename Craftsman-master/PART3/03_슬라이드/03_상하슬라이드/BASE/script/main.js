let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;

function autoSlide(){
    setInterval(function(){
        let nextIdx = (currentIdx + 1) % slideCount;
        slideContainer.animate({ marginTop: -300 * nextIdx + 'px'});
        currentIdx = nextIdx;
    }, 3000)
}
autoSlide();