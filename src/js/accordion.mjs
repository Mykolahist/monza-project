const refs = {
  accordionBtn: document.querySelectorAll('.questions-btn'),
  closeBtn: document.querySelectorAll('.close-btn')
};

refs.accordionBtn.forEach(e => e.addEventListener('click', onOpenAccordion));
refs.closeBtn.forEach(e => e.addEventListener('click', onCloseAccordion));



function onOpenAccordion() {
  this.parentNode.parentNode.querySelector('.questions-top').classList.add('new-container');
  this.parentNode.parentNode.querySelector('.detailed-questions').classList.add('open');
}

function onCloseAccordion() {
  const open = this.parentNode.parentNode.parentNode.querySelector('.detailed-questions');
  const top = this.parentNode.parentNode.parentNode.querySelector('.questions-top');
  
  if (open.classList.contains('open')) {
    open.classList.remove('open');
  } 
  if (top.classList.contains('new-container')) {
    top.classList.remove('new-container');
  }
}