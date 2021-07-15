const feedbackButton = document.querySelectorAll('.modal__feedback--button');
const modalFeedback = document.querySelector('.modal__feedback');
const commonContainerBlurFeedback = document.querySelector('.common-container ');
//const pageWidth = document.documentElement.scrollWidth;
//console.log(pageWidth);

for (let i = 0; i < feedbackButton.length; i++){
    feedbackButton[i].addEventListener('click', () => {
    modalFeedback.classList.add('active__feedback');
    commonContainerBlurFeedback.classList.add('blur')
      }
 );
}




