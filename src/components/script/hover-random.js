const DELAY = 2000;
let previous;

function activateRandomSkill() {
  const items = document.querySelectorAll("li.has-icon");
  if (items.length === 0) return;

  if (previous) {
    previous.classList.remove("active-hover");
  }

  const index = Math.floor(Math.random() * items.length);
  const selected = items[index];

  selected.classList.add("active-hover");
  previous = selected;
}

setInterval(activateRandomSkill, DELAY);