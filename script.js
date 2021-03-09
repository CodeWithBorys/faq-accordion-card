const questions = document.querySelectorAll('.question');
const expandBtns = document.querySelectorAll('button');
const faqs = document.querySelectorAll('.faq');
console.log(faqs);
questions.forEach((question) => {
  addListener(question);
});

expandBtns.forEach((btn) => {
  addListener(btn);
});

function addListener(el) {
  el.addEventListener('click', () => {
    if (el.parentNode.classList.value.includes('active')) {
      el.parentNode.classList.remove('active');
    } else {
      closeAllTabs(el);
      el.parentNode.classList.toggle('active');
    }
  });
}

function closeAllTabs() {
  faqs.forEach((faq) => faq.classList.remove('active'));
}
