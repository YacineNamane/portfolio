import { useEffect } from "react";

function StarEffect() {
  useEffect(() => {
    const numStars = 35;
    const container = document.querySelector(".star-container");

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;

      container.appendChild(star);
    }
  }, []);
}
export default StarEffect;
