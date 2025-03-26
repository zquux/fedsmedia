const textarea = document.getElementById("message");
const counter = document.getElementById("counter");

textarea.addEventListener("input", () => {
  const length = textarea.value.length;
  counter.textContent = `${length} / 1000`;
});
