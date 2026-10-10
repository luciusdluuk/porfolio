/*
  Luka Džarić — Portfolio (Figma plugin)

  Builds the landing page in Figma, desktop and mobile, with the prototype wired up:
  - Page "Landing — Desktop": 1440 wide, hover on any image shows its title, the email stays fixed.
  - Page "Landing — Mobile": 390 wide, captions under the images, the email stays fixed.
  - Page "Components": the image tiles (desktop with a Hover state, mobile with a caption).

  Same text, same 30 images and same packed layout as the website.
  To change titles, edit PROJECTS below (or just edit the text in Figma afterwards).
*/

/* ---------------- Content (same as the website) ---------------- */

const BIO =
  "Luka Džarić is a Montenegrin designer based in Slovenia. Džarić is pronounced JAR-ICH. " +
  "He has worked as a brand, motion, type, UI/UX and editorial designer on commercial projects " +
  "for brands and clients, as well as on academic projects and exhibitions. He is currently " +
  "finishing an MFA at the Academy of Fine Arts and Design in Ljubljana.";

const EMAIL = "dzaricluka@gmail.com";
const INSTAGRAM = "https://www.instagram.com/lukadzaric/";

const FOOTER = [
  { label: "contact", lines: [EMAIL, "instagram"] },
  { label: "address", lines: ["Zeljarska ulica 14", "1000 Ljubljana", "Slovenia"] }
];
const COPYRIGHT = "© 2026 Luka Džarić";

const PROJECTS = {
  p01: { title: "Project 01", category: "Category" },
  p02: { title: "Project 02", category: "Category" },
  cooking: { title: "A Student Guide to Cooking", category: "Editorial" },
  cnp70: { title: "70 — Crnogorsko narodno pozorište", category: "Visual identity" },
  p05: { title: "Project 05", category: "Category" },
  p06: { title: "Project 06", category: "Category" },
  p07: { title: "Project 07", category: "Category" },
  gpf: { title: "gpf", category: "Visual identity" },
  p10: { title: "Project 10", category: "Category" },
  parasocialna: { title: "Parasocialna ogledala", category: "Editorial" },
  p12: { title: "Project 12", category: "Category" },
  p13: { title: "Project 13", category: "Category" },
  p14: { title: "Project 14", category: "Category" },
  p15: { title: "Project 15", category: "Category" },
  p16: { title: "Project 16", category: "Category" },
  p17: { title: "Project 17", category: "Category" },
  p18: { title: "Project 18", category: "Category" },
  sizif: { title: "Mit o Sizifu", category: "Book cover" },
  p20: { title: "Project 20", category: "Category" },
  p21: { title: "Project 21", category: "Category" },
  p22: { title: "Project 22", category: "Category" },
  sociale: { title: "Sociale ?", category: "Editorial" },
  p25: { title: "Project 25", category: "Category" },
  p26: { title: "Project 26", category: "Category" },
  p27: { title: "Project 27", category: "Category" }
};

const WORKS = [
  { id: "01", w: 159, h: 159, span: 1, project: "p01" },
  { id: "02", w: 160, h: 160, span: 1, project: "p02" },
  { id: "03", w: 329, h: 233, span: 2, project: "cooking" },
  { id: "04", w: 329, h: 232, span: 2, project: "cnp70" },
  { id: "05", w: 330, h: 330, span: 2, project: "p05" },
  { id: "06", w: 159, h: 222, span: 1, project: "p06" },
  { id: "07", w: 159, h: 223, span: 1, project: "p07" },
  { id: "08", w: 329, h: 178, span: 2, project: "gpf" },
  { id: "09", w: 160, h: 146, span: 1, project: "gpf" },
  { id: "10", w: 330, h: 369, span: 2, project: "p10" },
  { id: "11", w: 160, h: 175, span: 1, project: "parasocialna" },
  { id: "12", w: 159, h: 168, span: 1, project: "p12" },
  { id: "13", w: 330, h: 244, span: 2, project: "p13" },
  { id: "14", w: 159, h: 204, span: 1, project: "p14" },
  { id: "15", w: 160, h: 191, span: 1, project: "p15" },
  { id: "16", w: 329, h: 325, span: 2, project: "p16" },
  { id: "17", w: 160, h: 35, span: 1, project: "p17" },
  { id: "18", w: 159, h: 191, span: 1, project: "p18" },
  { id: "19", w: 331, h: 331, span: 2, project: "sizif" },
  { id: "20", w: 160, h: 222, span: 1, project: "p20" },
  { id: "21", w: 159, h: 224, span: 1, project: "p21" },
  { id: "22", w: 328, h: 271, span: 2, project: "p22" },
  { id: "23", w: 160, h: 108, span: 1, project: "sociale" },
  { id: "24", w: 160, h: 106, span: 1, project: "sociale" },
  { id: "25", w: 329, h: 263, span: 2, project: "p25" },
  { id: "26", w: 168, h: 139, span: 1, project: "p26" },
  { id: "27", w: 170, h: 141, span: 1, project: "p27" },
  { id: "28", w: 160, h: 107, span: 1, project: "sociale" },
  { id: "29", w: 160, h: 106, span: 1, project: "sociale" },
  { id: "30", w: 160, h: 106, span: 1, project: "sociale" }
];

/* ---------------- Look ---------------- */

const WHITE = { r: 1, g: 1, b: 1 };
const BLACK = { r: 0, g: 0, b: 0 };
const MUTED = { r: 0.541, g: 0.541, b: 0.541 };
const TILE = { r: 0.937, g: 0.937, b: 0.929 };
const solid = (c) => [{ type: "SOLID", color: c }];

const DESKTOP = { name: "Landing — Desktop", width: 1440, gutter: 16, gap: 10, cols: 6, fs: 16, top: 16, bioWidth: 560, workGap: 96, footerGap: 160, caption: 0 };
const MOBILE = { name: "Landing — Mobile", width: 390, gutter: 16, gap: 8, cols: 2, fs: 15, top: 52, bioWidth: 358, workGap: 72, footerGap: 120, caption: 36 };
const SMALL = 13;

let FONT = { family: "Inter", style: "Regular" };

/* ---------------- Helpers ---------------- */

async function pickFont() {
  const all = await figma.listAvailableFontsAsync();
  const families = ["Neue Haas Unica", "Neue Haas Unica Pro", "NeueHaasUnicaPro", "Unica77 LL", "Helvetica Neue", "Helvetica", "Inter"];
  const styles = ["Regular", "Roman", "Book", "Normal"];
  for (const fam of families) {
    for (const st of styles) {
      if (all.some((f) => f.fontName.family === fam && f.fontName.style === st)) {
        return { family: fam, style: st };
      }
    }
  }
  return { family: "Inter", style: "Regular" };
}

function text(chars, size, color, name) {
  const t = figma.createText();
  t.fontName = FONT;
  t.characters = chars;
  t.fontSize = size;
  t.lineHeight = { unit: "PERCENT", value: 130 };
  t.fills = solid(color || BLACK);
  if (name) t.name = name;
  return t;
}

function autoLayout(direction, name, spacing) {
  const f = figma.createFrame();
  f.name = name;
  f.layoutMode = direction;
  f.primaryAxisSizingMode = "AUTO";
  f.counterAxisSizingMode = "AUTO";
  f.itemSpacing = spacing || 0;
  f.fills = [];
  return f;
}

function link(node, url) {
  node.hyperlink = { type: "URL", value: url };
  return node.setReactionsAsync([{ trigger: { type: "ON_CLICK" }, actions: [{ type: "URL", url: url, openInNewTab: true }] }]);
}

// Same packing as the website: each tile goes where it starts highest and wastes least space;
// small holes are closed by letting the tile above grow a little (its image crops slightly).
function pack(width, cols, gap, caption) {
  const colW = (width - gap * (cols - 1)) / cols;
  const bottoms = new Array(cols).fill(0);
  const lastIn = new Array(cols).fill(null);
  const placed = [];

  const stretch = (rec, amount) => {
    if (!rec || amount < 0.5 || amount > rec.h * 0.4) return;
    for (let c = rec.col; c < rec.col + rec.span; c++) if (lastIn[c] !== rec) return;
    rec.h += amount;
    for (let c = rec.col; c < rec.col + rec.span; c++) bottoms[c] += amount;
  };

  for (const work of WORKS) {
    const span = Math.min(work.span || 1, cols);
    const w = span * colW + (span - 1) * gap;
    const h = (w * work.h) / work.w;
    let best = null;
    for (let c = 0; c <= cols - span; c++) {
      const seg = bottoms.slice(c, c + span);
      const top = Math.max(...seg);
      const waste = seg.reduce((s, b) => s + (top - b), 0);
      const score = top + waste;
      if (!best || score < best.score - 0.5) best = { col: c, top, score };
    }
    for (let k = best.col; k < best.col + span; k++) stretch(lastIn[k], best.top - bottoms[k]);
    const rec = { work, col: best.col, span, x: best.col * (colW + gap), y: best.top, w, h };
    placed.push(rec);
    for (let k = best.col; k < best.col + span; k++) {
      bottoms[k] = best.top + h + caption + gap;
      lastIn[k] = rec;
    }
  }
  const end = Math.max(...bottoms);
  for (let c = 0; c < cols; c++) stretch(lastIn[c], end - bottoms[c]);
  return { placed, height: Math.max(0, end - gap) };
}

async function newPage(name) {
  let finalName = name;
  let n = 2;
  while (figma.root.children.some((p) => p.name === finalName)) finalName = name + " " + n++;
  const page = figma.createPage();
  page.name = finalName;
  return page;
}

/* ---------------- Components ---------------- */

async function buildDesktopTile(page) {
  const make = (state) => {
    const c = figma.createComponent();
    c.name = "State=" + state;
    c.resize(240, 240);
    c.fills = [];
    c.clipsContent = true;

    const img = figma.createRectangle();
    img.name = "Image";
    img.resize(240, 240);
    img.fills = solid(TILE);
    img.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    c.appendChild(img);


    const label = autoLayout("HORIZONTAL", "Label", 6);
    label.fills = solid(WHITE);
    label.paddingLeft = label.paddingRight = 5;
    label.paddingTop = 1;
    label.paddingBottom = 2;
    label.appendChild(text("Project title", DESKTOP.fs, BLACK, "Title"));
    label.appendChild(text("Category", DESKTOP.fs, MUTED, "Meta"));
    c.appendChild(label);
    label.x = 10;
    label.y = 240 - 10 - label.height;
    label.constraints = { horizontal: "MIN", vertical: "MAX" };
    label.visible = state === "Hover";
    return c;
  };

  const def = make("Default");
  const hov = make("Hover");
  page.appendChild(def);
  page.appendChild(hov);
  const set = figma.combineAsVariants([def, hov], page);
  set.name = "Tile / Desktop";
  set.layoutMode = "HORIZONTAL";
  set.itemSpacing = 40;
  set.paddingLeft = set.paddingRight = set.paddingTop = set.paddingBottom = 40;
  set.primaryAxisSizingMode = "AUTO";
  set.counterAxisSizingMode = "AUTO";

  const keys = {
    title: set.addComponentProperty("Title", "TEXT", "Project title"),
    meta: set.addComponentProperty("Category", "TEXT", "Category")
  };
  for (const v of set.children) {
    v.findOne((n) => n.name === "Title").componentPropertyReferences = { characters: keys.title };
    v.findOne((n) => n.name === "Meta").componentPropertyReferences = { characters: keys.meta };
  }

  // Prototype: hovering the tile shows its label (Figma reverts it when the mouse leaves)
  const ease = { type: "EASE_OUT" };
  await def.setReactionsAsync([
    {
      trigger: { type: "ON_HOVER" },
      actions: [{ type: "NODE", destinationId: hov.id, navigation: "CHANGE_TO", transition: { type: "DISSOLVE", easing: ease, duration: 0.15 } }]
    }
  ]);
  return { set, def, keys };
}

function buildMobileTile(page) {
  const cap = MOBILE.caption;
  const c = figma.createComponent();
  c.name = "Tile / Mobile";
  c.resize(180, 180 + cap);
  c.fills = [];
  c.clipsContent = true;

  const img = figma.createRectangle();
  img.name = "Image";
  img.resize(180, 180);
  img.fills = solid(TILE);
  img.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
  c.appendChild(img);


  const lines = [["Title", "Project title", BLACK, 180 + 4], ["Meta", "Category", MUTED, 180 + 4 + 16]];
  for (const [name, chars, color, y] of lines) {
    const t = text(chars, SMALL, color, name);
    t.lineHeight = { unit: "PIXELS", value: 16 };
    t.textAutoResize = "NONE";
    t.resize(180, 16);
    t.textTruncation = "ENDING";
    t.x = 0;
    t.y = y;
    t.constraints = { horizontal: "STRETCH", vertical: "MAX" };
    c.appendChild(t);
  }
  page.appendChild(c);

  const keys = {
    title: c.addComponentProperty("Title", "TEXT", "Project title"),
    meta: c.addComponentProperty("Category", "TEXT", "Category")
  };
  c.findOne((n) => n.name === "Title").componentPropertyReferences = { characters: keys.title };
  c.findOne((n) => n.name === "Meta").componentPropertyReferences = { characters: keys.meta };
  return { comp: c, keys };
}

/* ---------------- Landing page ---------------- */

async function buildLanding(page, spec, tileComp, keys) {
  const W = spec.width;
  const G = spec.gutter;
  const inner = W - 2 * G;

  const frame = figma.createFrame();
  frame.name = spec.name;
  frame.resize(W, 1000);
  frame.fills = solid(WHITE);
  frame.clipsContent = true;
  page.appendChild(frame);

  // Bio
  const bio = text(BIO, spec.fs, BLACK, "Bio");
  frame.appendChild(bio);
  bio.textAutoResize = "HEIGHT";
  bio.resize(Math.min(spec.bioWidth, inner), bio.height);
  bio.x = G;
  bio.y = spec.top;

  // Work grid
  const grid = figma.createFrame();
  grid.name = "Work";
  grid.fills = [];
  grid.clipsContent = false;
  frame.appendChild(grid);
  const { placed, height } = pack(inner, spec.cols, spec.gap, spec.caption);
  grid.resize(inner, Math.max(1, height));
  grid.x = G;
  grid.y = bio.y + bio.height + spec.workGap;

  for (const r of placed) {
    const p = PROJECTS[r.work.project] || {};
    const inst = tileComp.createInstance();
    inst.name = "Tile " + r.work.id;
    grid.appendChild(inst);
    inst.resize(r.w, r.h + spec.caption);
    inst.x = r.x;
    inst.y = r.y;
    inst.setProperties({ [keys.title]: p.title || "", [keys.meta]: p.category || "" });
  }

  // Footer
  const footer = figma.createFrame();
  footer.name = "Footer";
  footer.fills = [];
  frame.appendChild(footer);
  footer.x = G;
  footer.y = grid.y + grid.height + spec.footerGap;

  const cols = spec.cols === 6 ? 6 : 2;
  const colW = (inner - spec.gap * (cols - 1)) / cols;
  let maxBottom = 0;
  const pending = [];
  FOOTER.forEach((col, i) => {
    const block = autoLayout("VERTICAL", "Col / " + col.label, 0);
    block.fills = [];
    block.appendChild(text(col.label, spec.fs, MUTED, "Label"));
    for (const line of col.lines) {
      const t = text(line, spec.fs, BLACK, line);
      block.appendChild(t);
      if (line === EMAIL) pending.push(link(t, "mailto:" + EMAIL));
      if (line === "instagram") pending.push(link(t, INSTAGRAM));
    }
    footer.appendChild(block);
    const c = cols === 6 ? i : i % 2;
    const row = cols === 6 ? 0 : Math.floor(i / 2);
    block.x = c * (colW + spec.gap);
    block.y = row * 120;
    maxBottom = Math.max(maxBottom, block.y + block.height);
  });
  const copy = text(COPYRIGHT, spec.fs, BLACK, "Copyright");
  footer.appendChild(copy);
  if (cols === 6) {
    copy.x = inner - copy.width;
    copy.y = maxBottom - copy.height;
  } else {
    copy.x = 0;
    copy.y = maxBottom + 24;
    maxBottom = copy.y + copy.height;
  }
  footer.resize(inner, maxBottom);

  frame.resize(W, footer.y + footer.height + G);

  // Email in the top-right corner: fixed while scrolling, inverts over images
  const nav = text(EMAIL, spec.fs, WHITE, "Email (fixed)");
  nav.blendMode = "DIFFERENCE";
  frame.appendChild(nav);
  nav.x = W - G - nav.width;
  nav.y = spec.gutter;
  pending.push(link(nav, "mailto:" + EMAIL));
  frame.numberOfFixedChildren = 1; // the last child (the email) stays put when scrolling

  await Promise.all(pending);
  return frame;
}

/* ---------------- Run ---------------- */

async function main() {
  FONT = await pickFont();
  await figma.loadFontAsync(FONT);

  const compPage = await newPage("Components");
  await figma.setCurrentPageAsync(compPage);
  const desk = await buildDesktopTile(compPage);
  const mob = buildMobileTile(compPage);
  desk.set.x = 0;
  desk.set.y = 0;
  mob.comp.x = desk.set.width + 80;
  mob.comp.y = 40;

  const deskPage = await newPage("Landing — Desktop");
  await figma.setCurrentPageAsync(deskPage);
  const deskFrame = await buildLanding(deskPage, DESKTOP, desk.def, desk.keys);
  deskPage.flowStartingPoints = [{ nodeId: deskFrame.id, name: "Desktop" }];

  const mobPage = await newPage("Landing — Mobile");
  await figma.setCurrentPageAsync(mobPage);
  const mobFrame = await buildLanding(mobPage, MOBILE, mob.comp, mob.keys);
  mobPage.flowStartingPoints = [{ nodeId: mobFrame.id, name: "Mobile" }];

  await figma.setCurrentPageAsync(deskPage);
  figma.viewport.scrollAndZoomIntoView([deskFrame]);
  const note = FONT.family === "Neue Haas Unica" ? "" : " (Neue Haas Unica not found, used " + FONT.family + ")";
  figma.closePlugin("Built desktop + mobile landing" + note);
}

main().catch((err) => {
  figma.closePlugin("Something went wrong: " + (err && err.message ? err.message : err));
});
