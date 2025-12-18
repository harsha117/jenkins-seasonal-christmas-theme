(function () {
  function startSnow() {
    if (!document.body) {
      setTimeout(startSnow, 50);
      return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";

    document.body.appendChild(canvas);

    let w, h, flakes = [];

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function createFlakes() {
      flakes = Array.from(
        { length: Math.min(160, (w * h) / 16000) },
        () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 2.5 + 1,
          dx: Math.random() * 0.6 - 0.3,
          dy: Math.random() * 1.5 + 0.6,
          o: Math.random() * 0.5 + 0.3
        })
      );
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      flakes.forEach(f => {
        f.x += f.dx;
        f.y += f.dy;

        if (f.y > h) {
          f.y = -10;
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
