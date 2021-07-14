const openmenu = document.querySelector('#main__menu-burger');
const menu = document.querySelector('.menu-list ');
const commoncontainer = document.querySelector('.common-container ');
//const pageWidth = document.documentElement.scrollWidth;
//console.log(pageWidth);


openmenu.addEventListener('click', () => {
    menu.classList.add('active-menu');
    commoncontainer.classList.add('blur')
    
  }
 );

console.log(repairBrands);


