document.addEventListener('DOMContentLoaded', function()
{
    const menuItem = document.querySelector('.page__SmMenu3');
    const subMenu = document.querySelector('.subMenuContainer3');

    // Show submenu on hover 
    menuItem.addEventListener('mouseenter', function()
    {
        subMenu.style.opacity = '1';
        subMenu.style.visibility = 'visible';
    });

    // hide submenu when mouse leaves 
    menuItem.addEventListener('mouseleave', function() {
        subMenu.style.opacity = '0';
        subMenu.style.visibility = 'hidden';
    });

    // keep submenu visible when hovering over it
    subMenu.addEventListener('mouseenter', function() {
        subMenu.style.opacity = '1';
        subMenu.style.visibility = 'visible';
    });

    subMenu.addEventListener('mouseleave', function(){
        subMenu.style.opacity = '0';
        subMenu.style.visibility = 'hidden';
    });
});