let mainMenu = $('nav > ul > li');
let subMenu = mainMenu.find('ul');

mainMenu.mouseover(function(){
    subMenu.stop().slideDown();
}).mouseout(function(){
    subMenu.stop().slideUp();
});