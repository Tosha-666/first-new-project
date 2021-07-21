const callButton = document.querySelectorAll('.modal__call--button');
const modalCall = document.querySelector('.modal__call');
const commonContainerBlurCall = document.querySelector('.common-container ');
const closeModalCall = document.querySelector('.call-close');




for (let i = 0; i < callButton.length; i++){
    callButton[i].addEventListener('click', () => {
    modalCall.classList.add('active__call');
    commonContainerBlurFeedback.classList.add('blur')
        
      }
 );
}



closeModalCall.addEventListener('click', (e) => {
  //console.log(e.target);
 //if (modalCall.classList.contains ('active__call')) {
 // if (e.target !== modalCall) {
    console.log(e.target);
      modalCall.classList.remove('active__call');
     commonContainerBlurFeedback.classList.remove('blur')
      /*closeModal();
      mobileMenu.classList.add('mobile-menu-close');
      mobileMenu.classList.remove('mobile-menu-active');
      document.body.style.overflow = '';
      overlayMenu.classList.remove('overlay');*/
  // }
  
  //}
 //return
  });
/*const closeModalCall = function () {
    modalCall.classList.remove('active__call');
    commonContainerBlurFeedback.classList.remove('blur')
 }
*/

/*function outsideEvtListener(evt) {
    if (modalCall.className == 'active__call'){
        if (evt.target === modalCall || modalCall.contains(evt.target)) {
        console.log(modalCall)
            return
        } 
            modalCall.classList.remove('active__call');
            commonContainerBlurFeedback.classList.remove('blur')
            /*document.removeEventListener(outsideEvtListener);
        }
        
  }
       
document.addEventListener('click', outsideEvtListener);*/

