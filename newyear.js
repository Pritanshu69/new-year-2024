document.addEventListener("DOMContentLoaded", function () {
    const effects = document.querySelector(".effects");
  
    document.addEventListener("mousemove", function (event) {
      createEffect(event.pageX, event.pageY);
    });
  
    function createEffect(x, y) {
      const effect = document.createElement("div");
      effect.className = "effect";
      effect.style.left = `${x}px`;
      effect.style.top = `${y}px`;
      effects.appendChild(effect);
  
      setTimeout(() => {
        effect.remove();
      }, 1000);
    }
  });
  