const refs = {
  questionItem: document.querySelectorAll('.questions-top'),
  accordionBtn: document.querySelectorAll('.questions-btn'),
  questionTop: document.querySelectorAll('.questions-top'),
  openText: document.querySelectorAll('.detailed-questions'),
  closeBtn: document.querySelectorAll('.close-btn')
};

refs.accordionBtn.forEach(e => e.addEventListener('click', onOpenAccordion));
refs.closeBtn.forEach(e => e.addEventListener('click', onCloseAccordion));

function onOpenAccordion() {
  // this.parentNode.parentNode.parentNode.parentNode.querySelector('.questions-item').classList.toggle('new-item');
  this.parentNode.parentNode.parentNode.parentNode.querySelector('.questions-top').classList.add('new-container');
  this.parentNode.parentNode.parentNode.parentNode.querySelector('.detailed-questions').classList.add('open');
  // this.parentNode.parentNode.parentNode.parentNode.querySelector('.questions-text').classList.toggle('new-text');
}

function onCloseAccordion() {
  const open = this.parentNode.parentNode.parentNode.parentNode.querySelector('.detailed-questions');
  const top = this.parentNode.parentNode.parentNode.parentNode.querySelector('.questions-top');

  if (open.classList.contains('open')) {
    open.classList.remove('open');
  } 
  if (top.classList.contains('new-container')) {
    top.classList.remove('new-container');
  }
}