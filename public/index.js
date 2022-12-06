const title = document.querySelector(".title");
const purdueWords = document.querySelector(".bio-text");
const quote = document.querySelector("#quote");
const quoteName = document.querySelector("#mandela-name");

const allWords = [title, purdueWords, quote, quoteName];

// element.clientHeight
// window.innerHeight
// element.getBoundingClientRect()

const callBack = function (entries, observer) {
  const [entry] = entries;
  if (entry.target.classList.contains("title")) {
    entry.target.classList.remove("hidden-drop-state");
  } else {
    entry.target.classList.remove("hidden-drop-state");
  }
};

const observer = new IntersectionObserver(callBack, {
  root: null,
  threshold: [1],
});

allWords.forEach((el) => {
  observer.observe(el);
  el.classList.add("hidden-drop-state");
});
