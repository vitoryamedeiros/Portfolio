
const changeTheme = document.querySelector('.change-theme');
const bodyTheme = document.querySelector('body');

const sectionTitleAbout = document.querySelector('.section__title__about');
const sectionTitleSkills = document.querySelector('.section__title__skills');
const sectionTitlePortfolio = document.querySelector('.section__title__portfolio');
const sectionTitleContact = document.querySelector('.section__title__contact');
const bgFooter = document.querySelector('.footer__bg__dark');


const contactForm = document.querySelector('.contact__form');

const skillsIcon = document.querySelectorAll('img.skills__img');


// // const pennywiseDeskTheme = document.querySelector('.pennywise-desktop');
// const sectionUmTheme = document.querySelector('.section-1');
// const titleTheme = document.querySelector('.title');
// const arrowDonwTheme = document.querySelector('.arrow-donw');
// const sectionDoisTheme = document.querySelector('.section-2');
// const jorgeTheme = document.querySelector('.jorge');

changeTheme.onclick = function(){
  this.classList.toggle('active')
  bodyTheme.classList.toggle('active')
  sectionTitleAbout.classList.toggle('active')
  sectionTitleSkills.classList.toggle('active')
  sectionTitlePortfolio.classList.toggle('active')
  contactForm.classList.toggle('active')

  navBar.classList.toggle('active')
  bgFooter.classList.toggle('active')

  skillsIcon.classList.toggle('active')
  
  // titleTheme.classList.toggle('active')
  // arrowDonwTheme.classList.toggle('active')
  // sectionDoisTheme.classList.toggle('active')
  // jorgeTheme.classList.toggle('active')
}