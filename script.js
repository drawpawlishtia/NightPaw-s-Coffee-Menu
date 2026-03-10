// Fireflies
const fireflyContainer = document.querySelector(".fireflies");

for (let i = 0; i < 30; i++) {
  const firefly = document.createElement("div");
  firefly.classList.add("firefly");
  firefly.style.left = Math.random() * 100 + "vw";
  firefly.style.animationDuration = 6 + Math.random() * 10 + "s";
  firefly.style.animationDelay = Math.random() * 10 + "s";
  fireflyContainer.appendChild(firefly);
}

// Emoji Mushrooms
const emojiLayer = document.querySelector(".emoji-mushrooms");

for (let i = 0; i < 12; i++) {
  const mush = document.createElement("div");
  mush.classList.add("emoji-mushroom");
  mush.textContent = "🍄";
  mush.style.left = Math.random() * 100 + "vw";
  mush.style.bottom = Math.random() * 20 + "px";
  mush.style.fontSize = 20 + Math.random() * 20 + "px";
  emojiLayer.appendChild(mush);
}