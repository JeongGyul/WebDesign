let tabMenu = $('.tabmenu li');

tabMenu.click(function(e){
    e.preventDefault();
    tabMenu.removeClass('active');
    $(this).addClass('active');
});