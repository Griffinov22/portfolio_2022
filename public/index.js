const title = document.querySelector(".title");
const purdueWords = document.querySelector(".student-div");
const studentSvgPath = document.querySelector("#student-svg path");
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
  } else if (entry.target.classList.contains("student-div")) {
    // this is the student svg
    entry.target.children[1].children[0].style.animation =
      "fillSvg 2s ease-in 300ms forwards";
    // this is the purdue svg
    entry.target.children[1].children[1].style.animation =
      "purdueChange 1s ease-in-out 1.5s forwards";
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
