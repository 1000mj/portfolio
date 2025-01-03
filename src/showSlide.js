function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

function checkSlide() {
  const slideElements = document.querySelectorAll(
    ".slide-in-profile,.slide-in-skills"
  );
  slideElements.forEach(element => {
    const slideInAt =
      window.scrollY + window.innerHeight - element.offsetHeight / 5;
    const elementBottom = element.offsetTop + element.offsetHeight;

    if (slideInAt > element.offsetTop && window.scrollY < elementBottom) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide, 1));
