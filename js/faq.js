document.addEventListener('DOMContentLoaded', function() 
{
    const faqCards = document.querySelectorAll('.faq__Card');
    const supportCards = document.querySelectorAll('.support__FAQ1');

    faqCards.forEach(card => {
        const question = card.querySelector('.faq__Question');
        const answer = card.querySelector('.faq__Answer');
        const icon = card.querySelector('.faq__QuestionIcon i');

        question.addEventListener('click', function()
    {
        //close all the other FAQ items 
        faqCards.forEach(otherCard => {
            if(otherCard !== card)
            {
                const otherAnswer = otherCard.querySelector('.faq__Answer');
                const otehrIcon = otherCard.querySelector('.faq__QuestionIcon i');

                otherCard.classList.remove('active');
                otherAnswer.classList.remove('active');
                otehrIcon.classList.remove('fa-minus');
                otehrIcon.classList.add('fa-plus');
            }
        });

        // Toggle Current FAQ Items 
        const isActive = card.classList.contains('active');

        if(isActive)
        {
            //close current item 
            card.classList.remove('active');
            answer.classList.remove('active');
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
        else 
        {
            //open curren item 
            card.classList.add('active');
            answer.classList.add('active');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    });
    });

    supportCards.forEach(card => {
        const question = card.querySelector('.support__Que');
        const answer = card.querySelector('.support__Ans1');
        const icon = card.querySelector('.support__QueIcon i');

        question.addEventListener('click', function()
    {
        //close all the other FAQ items 
        supportCards.forEach(otherCard => {
            if(otherCard !== card)
            {
                const otherAnswer = otherCard.querySelector('.support__Ans1');
                const otehrIcon = otherCard.querySelector('.support__QueIcon i');

                otherCard.classList.remove('active');
                otherAnswer.classList.remove('active');
                otehrIcon.classList.remove('fa-circle-minus');
                otehrIcon.classList.add('fa-circle-plus');
            }
        });

        // Toggle Current FAQ Items 
        const isActive = card.classList.contains('active');

        if(isActive)
        {
            //close current item 
            card.classList.remove('active');
            answer.classList.remove('active');
            icon.classList.remove('fa-circle-minus');
            icon.classList.add('fa-circle-plus');
        }
        else 
        {
            //open curren item 
            card.classList.add('active');
            answer.classList.add('active');
            icon.classList.remove('fa-circle-plus');
            icon.classList.add('fa-circle-minus');
        }
    });
    });
});