ExpandChars = (charsId)=>{
  let charHidden = document.querySelectorAll(".chars-hidden")[charsId];
  charHidden.classList.toggle("show");
}

ExpandAccordion = (accordionId)=>{
  let elemHidden = document.querySelectorAll(".question-body")[accordionId];
  elemHidden.classList.toggle("show");
  let elemBtn = document.querySelectorAll(".accordion-btn")[accordionId];
  elemBtn.classList.toggle("show");
}