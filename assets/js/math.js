document.addEventListener("DOMContentLoaded", () => {
  const article = document.querySelector(".post-content");
  if (!article || typeof renderMathInElement !== "function") return;

  renderMathInElement(article, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\[", right: "\\]", display: true },
      { left: "\\(", right: "\\)", display: false },
    ],
    throwOnError: false,
    strict: "ignore",
  });
});
