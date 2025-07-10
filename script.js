// Makes hearts float up when you click the button
function releaseHearts() {
  const container = document.getElementById("balloon-container");
  const button = document.querySelector("button");
  const buttonRect = button.getBoundingClientRect();
  const startY = buttonRect.top + window.scrollY;

  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random spot across the page
    const randomLeft = Math.random() * window.innerWidth;
    heart.style.left = `${randomLeft}px`;
    heart.style.top = `${startY}px`;

    // Random float speed
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";

    // Add to the page
    container.appendChild(heart);

    // Remove after 5 seconds
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  if (password === "gujiguji") {
    window.location.href = "home.html"; // This is your real homepage
  } else {
    alert("Nope! Try again 💔");
  }
}
