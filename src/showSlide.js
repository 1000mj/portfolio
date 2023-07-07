function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

function checkSlide() {
  const slideElements = document.querySelectorAll(
    ".slide-in1,.slide-in2,.slide-in3"
  );
  slideElements.forEach(element => {
    const slideInAt =
      window.scrollY + window.innerHeight - element.offsetHeight / 2;
    const elementBottom = element.offsetTop + element.offsetHeight;

    if (slideInAt > element.offsetTop && window.scrollY < elementBottom) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
  window.removeEventListener("scroll", slideElements);
}

window.addEventListener("scroll", debounce(checkSlide, 1));
