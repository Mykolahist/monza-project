const e={accordionBtn:document.querySelectorAll(".questions-btn"),closeBtn:document.querySelectorAll(".close-btn")};function t(){this.parentNode.parentNode.querySelector(".questions-top").classList.add("new-container"),this.parentNode.parentNode.querySelector(".detailed-questions").classList.add("open")}function n(){const e=this.parentNode.parentNode.parentNode.querySelector(".detailed-questions"),t=this.parentNode.parentNode.parentNode.querySelector(".questions-top");e.classList.contains("open")&&e.classList.remove("open"),t.classList.contains("new-container")&&t.classList.remove("new-container")}e.accordionBtn.forEach((e=>e.addEventListener("click",t))),e.closeBtn.forEach((e=>e.addEventListener("click",n)));
//# sourceMappingURL=index.40f460fe.js.map