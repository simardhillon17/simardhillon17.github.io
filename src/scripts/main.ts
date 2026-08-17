/** Site interactions: role rotator, scroll-reveal, mobile nav, footer year. */

function roleRotator() {
  const el = document.getElementById("role-rotator");
  if (!el) return;
  const roles = JSON.parse(el.dataset.roles || "[]") as string[];
  if (!roles.length) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i = 0;

  if (reduce) {
    el.textContent = roles[0];
    return;
  }

  const type = (text: string, done: () => void) => {
    let c = 0;
    const tick = () => {
      el.textContent = text.slice(0, c);
      c++;
      if (c <= text.length) setTimeout(tick, 55);
      else setTimeout(done, 1600);
    };
    tick();
  };

  const erase = (done: () => void) => {
    const text = el.textContent || "";
    let c = text.length;
    const tick = () => {
      el.textContent = text.slice(0, c);
      c--;
      if (c >= 0) setTimeout(tick, 28);
      else done();
    };
    tick();
  };

  const loop = () => {
    type(roles[i], () =>
      erase(() => {
        i = (i + 1) % roles.length;
        loop();
      }),
    );
  };
  loop();
}

function scrollReveal() {
  const els = document.querySelectorAll<HTMLElement>(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((e) => e.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  els.forEach((e) => io.observe(e));
}

function mobileNav() {
  const btn = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => menu.classList.add("hidden")),
  );
}

function footerYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

roleRotator();
scrollReveal();
mobileNav();
footerYear();
