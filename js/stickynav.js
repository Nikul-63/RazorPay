window.addEventListener('scroll', function()
{
    const navbar = document.getElementById('navbar');
    const heroSection = document.querySelector('.hero-section');
    const heroHeight = heroSection.offsetHeight;

    if(window.scrollY > heroHeight - 50)
    {
        navbar.classList.add('sticky');
    }
    else 
    {
        navbar.classList.remove('sticky');
    }
});