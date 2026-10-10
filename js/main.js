/*
  main.js — builds the image wall from projects.js and packs it tightly.
  You shouldn't need to edit this file; change js/projects.js instead.
*/
(function () {
  "use strict";

  var grid = document.querySelector("[data-grid]");
  var works = window.WORKS || [];
  var projects = window.PROJECTS || {};

  var isTouch = window.matchMedia("(hover: none)").matches;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isTouch) document.documentElement.classList.add("is-touch");

  /* ---------- 1. Build the tiles ---------- */
  var tiles = (grid ? works : []).map(function (work) {
    var project = projects[work.project] || {};
    var el = document.createElement(project.url ? "a" : "div");
    el.className = "tile";
    el.dataset.project = work.project;
    if (project.url) el.href = project.url;
    else el.tabIndex = 0;

    var inner = document.createElement("div");
    inner.className = "tile__inner";

    var media = document.createElement("div");
    media.className = "tile__media";
    media.dataset.label = work.id;
    if (work.img) {
      var img = new Image();
      img.src = work.img;
      img.alt = project.title || "";
      img.loading = "lazy";
      img.decoding = "async";
      img.onerror = function () { img.remove(); media.classList.add("is-empty"); };
      media.appendChild(img);
    } else {
      media.classList.add("is-empty");
    }

    el.setAttribute("aria-label", [project.title, project.category, project.year].filter(Boolean).join(", "));

    var info = document.createElement("div");
    info.className = "tile__info";
    var title = document.createElement("span");
    title.className = "tile__title";
    title.textContent = project.title || "";
    var meta = document.createElement("span");
    meta.className = "tile__meta";
    meta.textContent = [project.category, project.year].filter(Boolean).join(", ");
    info.append(title, meta);

    inner.append(media, info);
    el.appendChild(inner);
    grid.appendChild(el);

    return { el: el, work: work };
  });

  /* ---------- 2. Pack the tiles into a seamless wall ---------- */
  function columnCount(width) {
    if (width >= 1100) return 6;
    if (width >= 720) return 4;
    return 2;
  }

  function layout() {
    var width = grid.clientWidth;
    var cols = columnCount(width);
    var gap = parseFloat(getComputedStyle(grid).getPropertyValue("--gap")) || 10;
    var cap = isTouch ? parseFloat(getComputedStyle(grid).getPropertyValue("--cap")) || 38 : 0;
    var colW = (width - gap * (cols - 1)) / cols;

    var bottoms = new Array(cols).fill(0); // where the next tile can start in each column
    var lastIn = new Array(cols).fill(null); // the last tile placed in each column
    var placed = [];

    tiles.forEach(function (t) {
      var span = Math.min(t.work.span || 1, cols);
      var w = span * colW + (span - 1) * gap;
      var h = (w * t.work.h) / t.work.w;

      // Pick the spot that starts highest and leaves the least empty space.
      var best = null;
      for (var c = 0; c <= cols - span; c++) {
        var seg = bottoms.slice(c, c + span);
        var top = Math.max.apply(null, seg);
        var waste = seg.reduce(function (s, b) { return s + (top - b); }, 0);
        var score = top + waste;
        if (!best || score < best.score - 0.5) best = { col: c, top: top, score: score };
      }

      // Close small holes above the new tile by letting the tile above grow (it crops slightly).
      for (var k = best.col; k < best.col + span; k++) {
        stretch(lastIn[k], best.top - bottoms[k]);
      }

      var rec = { el: t.el, col: best.col, x: best.col * (colW + gap), y: best.top, w: w, h: h, span: span };
      placed.push(rec);
      for (var j = best.col; j < best.col + span; j++) {
        bottoms[j] = best.top + h + cap + gap;
        lastIn[j] = rec;
      }
    });

    // Even out the bottom edge where it can be done without heavy cropping.
    var end = Math.max.apply(null, bottoms);
    for (var m = 0; m < cols; m++) stretch(lastIn[m], end - bottoms[m]);

    placed.forEach(function (r) {
      r.el.style.width = r.w + "px";
      r.el.style.height = r.h + cap + "px";
      r.el.style.transform = "translate(" + r.x + "px," + r.y + "px)";
    });
    grid.style.height = Math.max(0, end - gap) + "px";
    return placed;

    // Let a tile grow downward by `amount` (max 40% of its height) if nothing sits under it yet.
    function stretch(rec, amount) {
      if (!rec || amount < 0.5 || amount > rec.h * 0.4) return;
      for (var c = rec.col; c < rec.col + rec.span; c++) {
        if (lastIn[c] !== rec) return;
      }
      rec.h += amount;
      for (var d = rec.col; d < rec.col + rec.span; d++) bottoms[d] += amount;
    }
  }

  /* ---------- 3. Hover: a plain text label follows the cursor,
                 the hovered project stays, everything else fades ---------- */
  if (!isTouch && grid) {
    var tip = document.createElement("div");
    tip.className = "cursor-label";
    tip.setAttribute("aria-hidden", "true");
    document.body.appendChild(tip);

    var setActive = function (t) {
      var key = t ? t.work.project : null;
      grid.classList.toggle("is-hovering", !!key);
      tiles.forEach(function (o) { o.el.classList.toggle("is-active", o.work.project === key); });
      if (t) {
        var p = projects[key] || {};
        tip.textContent = p.title || "";
        var meta = [p.category, p.year].filter(Boolean).join(", ");
        if (meta) {
          var s = document.createElement("span");
          s.className = "cursor-label__meta";
          s.textContent = "  " + meta;
          tip.appendChild(s);
        }
      }
      tip.classList.toggle("is-on", !!t);
    };
    var moveTip = function (x, y) {
      var nx = Math.min(x + 14, window.innerWidth - tip.offsetWidth - 8);
      var ny = Math.min(y + 18, window.innerHeight - tip.offsetHeight - 8);
      tip.style.transform = "translate(" + nx + "px," + ny + "px)";
    };
    tiles.forEach(function (t) {
      t.el.addEventListener("mouseenter", function (e) { setActive(t); moveTip(e.clientX, e.clientY); });
      t.el.addEventListener("mousemove", function (e) { moveTip(e.clientX, e.clientY); });
      t.el.addEventListener("focus", function () {
        setActive(t);
        var r = t.el.getBoundingClientRect();
        moveTip(r.left, r.top);
      });
      t.el.addEventListener("blur", function () { setActive(null); });
    });
    grid.addEventListener("mouseleave", function () { setActive(null); });
  }

  /* ---------- 4. Scroll: tiles below the first screen slide in as you reach them ---------- */
  function setupReveal(placed) {
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    var gridTop = grid.getBoundingClientRect().top + window.scrollY;
    var fold = window.scrollY + window.innerHeight;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.remove("is-pending");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    placed.forEach(function (r) {
      if (gridTop + r.y > fold) {
        r.el.classList.add("is-pending");
        io.observe(r.el);
      }
    });
  }

  /* ---------- 5. Footer wordmark: fit exactly to the page width ---------- */
  var wordmark = document.querySelector("[data-fit]");
  function fitWordmark() {
    if (!wordmark) return;
    var available = wordmark.parentElement.clientWidth -
      parseFloat(getComputedStyle(wordmark.parentElement).paddingLeft) -
      parseFloat(getComputedStyle(wordmark.parentElement).paddingRight);
    wordmark.style.fontSize = "100px";
    var natural = wordmark.scrollWidth;
    if (natural > 0) wordmark.style.fontSize = (100 * available) / natural + "px";
  }

  /* ---------- Run ---------- */
  if (grid) setupReveal(layout());
  fitWordmark();

  var lastWidth = grid ? grid.clientWidth : 0;
  var queued = false;
  window.addEventListener("resize", function () {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () {
      queued = false;
      if (grid && grid.clientWidth !== lastWidth) {
        lastWidth = grid.clientWidth;
        layout();
      }
      fitWordmark();
    });
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitWordmark);
})();
