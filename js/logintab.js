document.addEventListener('DOMContentLoaded', function()
{
    const loginElement = document.querySelector('.sale__Login');
    const loginBox = document.querySelector('.sale__LoginBox');
    const loginBridge = document.querySelector('.login__Bridge');

    //adding event listner for mouse enter or leave
    loginElement.addEventListener('mouseenter', function() {
        loginBox.style.opacity = '1';
        loginBox.style.visibility = 'visible';
        loginBox.style.transform = 'translateY(0)';
    });

    loginElement.addEventListener('mouseleave', function(e){
        //check if mouse is moving to login box
        if(!e.relatedTarget || 
            (!e.relatedTarget.closest('.sale__LoginBox') &&
            !e.relatedTarget.closest('.login__Bridge'))) {
                loginBox.style.opacity = '0';
                loginBox.style.visibility = 'hidden';
                loginBox.style.transform = 'translateY(10px) scale(0.95)';
            }
    });

    // prevent the login box from closing when hovering over it
    loginBox.addEventListener('mouseenter', function(){
        loginBox.style.opacity = '1';
        loginBox.style.visibility = 'visible';
        loginBox.style.transform = 'translateY(0) scale(1)';
    })

    loginBox.addEventListener('mouseleave', function(){
        // check if mouse is moving to login element
        if(!e.relatedTarget || !e.relatedTarget.closest('.sale__Login'))
        {
            loginBox.style.opacity = '0';
            loginBox.style.visibility = 'hidden';
            loginBox.style.transform = 'translateY(10px) scale(0.95)';
        }
    });

    // handle the invisible login bridge
    loginBridge.addEventListener('mouseenter', function() {
        loginBox.style.opacity = '1';
        loginBox.style.visibility = 'visible';
        loginBox.style.transform = 'translateY(0) scale(1)';
    });
}); 