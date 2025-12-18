(function () {
  function startSnow() {
    if (!document.body) {
      setTimeout(startSnow, 100);
      return;
    }

    if (document.getElementById("jenkins-snow-canvas")) return;

    const canvas = document.createElement("canvas");
    canvas.id = "jenkins-snow-canvas";
    const ctx = canvas.getContext("2d");

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "1";

    document.body.appendChild(canvas);

    let w, h, flakes = [];
    const SNOW_GROUND_HEIGHT = 110; // must match CSS

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function createFlakes() {
      flakes = Array.from(
        { length: Math.min(110, (w * h) / 17000) },
        () => {
          const size = Math.random() * 2 + 1.5;
          return {
            x: Math.random() * w,
            y: Math.random() * (h - SNOW_GROUND_HEIGHT),
            r: size,
            dx: Math.random() * 0.5 - 0.25,
            dy: Math.random() * 1.4 + 0.6,
            o: Math.random() * 0.5 + 0.4
          };
        }
      );
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      flakes.forEach(f => {
        f.x += f.dx;
        f.y += f.dy;

        /* stop snow at ground */
        if (f.y > h - SNOW_GROUND_HEIGHT) {
          f.y = Math.random() * -20;
          f.x = Math.random() * w;
        }

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${f.o})`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    resize();
    createFlakes();
    draw();

    window.addEventListener("resize", () => {
      resize();
      createFlakes();
    });
  }

  startSnow();
})();
