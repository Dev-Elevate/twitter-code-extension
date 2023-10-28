// content.js
const regex = /`(.*?)`/g;
// Function to replace <span> with <p>
function replaceCodeSnippetStringWithCodeBlock() {
  let url = window.location.href;
  if (
    url.toString().includes("twitter.com") ||
    url.toString().includes("x.com")
  ) {
    const spans = document.querySelectorAll("span");
    spans.forEach((span) => {
      const text = span.innerHTML;
      const matches = text.match(regex);
      if (matches) {
        span.innerHTML = span.innerHTML.replace(
          regex,
          '<code style="background: rgb(128 128 128 / 27%);padding: 1px; border-radius: 4px;padding-left: 8px;padding-right: 8px;">$1</code>'
        );
      }
    });
  }
}

// Run the replacement function when the page is loaded
window.addEventListener("scroll", replaceCodeSnippetStringWithCodeBlock);
