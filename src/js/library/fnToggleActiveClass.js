export function toggleActiveClass(currentActiveTarget, selectedTarget) {
  if (currentActiveTarget) {
    currentActiveTarget.removeAttribute('data-tag');
    currentActiveTarget.classList.remove('active');
  }
  selectedTarget.classList.add('active');
  selectedTarget.setAttribute(
    'data-tag',
    selectedTarget.innerText.trim().toLowerCase()
  );
}
