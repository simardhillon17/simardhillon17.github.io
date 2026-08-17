/**
 * Lightweight "swarm" particle network for the hero background.
 * Vanilla canvas 2D — no libraries. Nodes drift, connect to nearby
 * neighbours with fading lines, and gently steer toward the pointer.
 * Respects prefers-reduced-motion (renders a single static frame).
 */

type Node = { x: number; y: number; vx: number; vy: number };

export function initParticles(canvasId = "hero-canvas") {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const accent = "94, 234, 212"; // teal rgb
  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let nodes: Node[] = [];
  const pointer = { x: -9999, y: -9999, active: false };

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Density scales with area, capped for performance.
    const count = Math.min(90, Math.floor((width * height) / 14000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));
  }

  const LINK_DIST = 130;

  function step() {
    ctx.clearRect(0, 0, width, height);

    for (const n of nodes) {
      // steer subtly toward pointer when nearby
      if (pointer.active) {
        const dx = pointer.x - n.x;
        const dy = pointer.y - n.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 200 * 200 && d2 > 1) {
          const f = 0.6 / Math.sqrt(d2);
          n.vx += dx * f * 0.02;
          n.vy += dy * f * 0.02;
        }
      }

      n.x += n.vx;
      n.y += n.vy;

      // friction + speed clamp so it never runs away
      n.vx *= 0.99;
      n.vy *= 0.99;
      const sp = Math.hypot(n.vx, n.vy);
      if (sp > 0.9) {
        n.vx = (n.vx / sp) * 0.9;
        n.vy = (n.vy / sp) * 0.9;
      }

      // wrap around edges
      if (n.x < -20) n.x = width + 20;
      if (n.x > width + 20) n.x = -20;
      if (n.y < -20) n.y = height + 20;
      if (n.y > height + 20) n.y = -20;
    }

    // links
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < LINK_DIST) {
          const alpha = (1 - dist / LINK_DIST) * 0.35;
          ctx.strokeStyle = `rgba(${accent}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // nodes
    for (const n of nodes) {
      ctx.fillStyle = `rgba(${accent}, 0.8)`;
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }

    if (!reduce) raf = requestAnimationFrame(step);
  }

  let raf = 0;
  resize();

  window.addEventListener("resize", () => {
    cancelAnimationFrame(raf);
    resize();
    if (reduce) step();
    else raf = requestAnimationFrame(step);
  });

  window.addEventListener("pointermove", (e) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = e.clientX - rect.left;
    pointer.y = e.clientY - rect.top;
    pointer.active = true;
  });
  window.addEventListener("pointerleave", () => (pointer.active = false));
  window.addEventListener("blur", () => (pointer.active = false));

  // Pause when the hero scrolls out of view.
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (reduce) {
          if (entry.isIntersecting) step();
          continue;
        }
        if (entry.isIntersecting) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(step);
        } else {
          cancelAnimationFrame(raf);
        }
      }
    },
    { threshold: 0 },
  );
  io.observe(canvas);

  if (reduce) step();
  else raf = requestAnimationFrame(step);
}
