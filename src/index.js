export function initDropdown(container = document) {
  const btn = container.querySelector(".dropdown-btn");
  const menu = container.querySelector(".dropdown-content");

  if (!btn || !menu) return () => {};

  const onBtnClick = () => {
    menu.classList.toggle("show");
  };

  const onWindowClick = (e) => {
    if (!e.target.matches(".dropdown-btn")) {
      menu.classList.remove("show");
    }
  };

  btn.addEventListener("click", onBtnClick);
  window.addEventListener("click", onWindowClick);

  // return a cleanup to avoid memory leaks
  return function destroy() {
    btn.removeEventListener("click", onBtnClick);
    window.removeEventListener("click", onWindowClick);
  };
}
