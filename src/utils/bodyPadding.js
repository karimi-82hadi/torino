function addBodyPadding() {
  const scrollbarWidth = window.innerWidth - document.body.offsetWidth;

  document.body.style.overflow = "hidden";

  if (+scrollbarWidth !== 0) {
    document.body.style.paddingRight = scrollbarWidth + "px";
  }
}

function removeBodyPadding(delay) {
  setTimeout(() => {
    document.body.style.overflow && (document.body.style.overflow = "");
    document.body.style.paddingRight && (document.body.style.paddingRight = "");
  }, delay);
}

export { addBodyPadding, removeBodyPadding };
