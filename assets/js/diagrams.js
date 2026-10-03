document.addEventListener("DOMContentLoaded", async () => {
  if (typeof mermaid === "undefined") return;

  const diagrams = [...document.querySelectorAll(".mermaid")];
  if (!diagrams.length) return;
  const sources = diagrams.map((element) => element.textContent.trim());
  const fontFamily = getComputedStyle(document.body).fontFamily;

  // Measure Chinese labels after their web fonts have loaded.
  await document.fonts.ready;

  let rendering = false;
  let pending = false;
  let revision = 0;

  const render = async () => {
    if (rendering) {
      pending = true;
      return;
    }
    rendering = true;
    try {
      do {
        pending = false;
        revision += 1;
        const dark = document.documentElement.dataset.theme === "dark";
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          htmlLabels: false,
          theme: "base",
          fontFamily,
          flowchart: { useMaxWidth: false, nodeSpacing: 30, rankSpacing: 40 },
          themeVariables: {
            fontFamily,
            fontSize: "15px",
            darkMode: dark,
            primaryColor: dark ? "#292c32" : "#f4f6f8",
            primaryTextColor: dark ? "#e0e3e8" : "#30343b",
            primaryBorderColor: dark ? "#727985" : "#b6bec9",
            lineColor: dark ? "#9ba3b0" : "#6c7888",
            secondaryColor: dark ? "#292c32" : "#f4f6f8",
            tertiaryColor: dark ? "#292c32" : "#f4f6f8",
          },
        });

        for (let i = 0; i < diagrams.length; i += 1) {
          try {
            const { svg } = await mermaid.render(
              `article-diagram-${revision}-${i}`,
              sources[i],
            );
            diagrams[i].innerHTML = svg;
            diagrams[i].dataset.renderStatus = "ready";
          } catch (error) {
            diagrams[i].textContent = sources[i];
            diagrams[i].dataset.renderStatus = "error";
            console.error("Unable to render article diagram", error);
          }
        }
      } while (pending);
    } finally {
      rendering = false;
    }
  };

  new MutationObserver(() => render()).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  await render();
});
