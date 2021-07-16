const callButton = document.querySelectorAll('.modal__call--button');
const modalCall = document.querySelector('.modal__call');
//const commonContainerBlurCall = document.querySelector('.common-container ');


for (let i = 0; i < callButton.length; i++){
    callButton[i].addEventListener('click', () => {
    modalCall.classList.add('active__call');
    commonContainerBlurFeedback.classList.add('blur')
        
      }
 );
}
/*const closeModalCall = function () {
    modalCall.classList.remove('active__call');
    commonContainerBlurFeedback.classList.remove('blur')
 }

function outsideEvtListener(e) {
    if (e.target === modalCall || modalCall.contains(e.target)) {
        return;
    }
    modalCall.classList.remove('active__call');
    commonContainerBlurFeedback.classList.remove('blur')
  
    document.removeEventListener(outsideEvtListener);
}


document.addEventListener('click', outsideEvtListener);*/