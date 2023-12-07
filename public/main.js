const topMenu = document.querySelector('#ts-top-menu');
const toggleTopMenuIcon = document.querySelector('#ts-toggle-top-menu-icon');

document.addEventListener('click', (ev) => {
  if (toggleTopMenuIcon.contains(ev.target)) {
    // Click to Toggle top menu icon
    topMenu.classList.toggle('hidden');
    topMenu.classList.toggle('ts-topmenu-expanded');
  } else {
    // Click outside from Toggle top menu icon
    if (topMenu.classList.contains('ts-topmenu-expanded')) {
      topMenu.classList.remove('ts-topmenu-expanded');
      topMenu.classList.add('hidden');
    }
  }
});