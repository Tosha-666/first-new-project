const callButton = document.querySelectorAll('.modal__call--button');
const modalCall = document.querySelector('.modal__call');
const commonContainerBlurCall = document.querySelector('.common-container ');
const closeModalCall = document.querySelector('.call-close');




for (let i = 0; i < callButton.length; i++){
    callButton[i].addEventListener('click', (e) => {
      modalCall.classList.add('active__modal');
      commonContainerBlurFeedback.classList.add('blur')
      e.stopPropagation();
        
      }
 );
}





