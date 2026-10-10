/*
  ============================================================
  THIS IS THE ONLY FILE YOU NEED TO EDIT TO CHANGE THE GRID.
  ============================================================

  PROJECTS — the info that appears when you hover an image.
    title:    project name
    category: e.g. "Visual identity", "Editorial", "Poster"
    year:     e.g. "2025" (leave "" to hide it)

  WORKS — every image in the grid, in order (top of the page first).
    id:      just a number, shown on grey placeholders
    img:     the file in the images/ folder, e.g. "images/gpf-stickers.jpg"
             leave "" and a grey placeholder is shown instead
    w, h:    the image's width and height in pixels (only the ratio matters)
    span:    1 = one column wide, 2 = two columns wide
    project: which project the image belongs to (a key from PROJECTS).
             Images of the same project stay lit together on hover.

  Titles marked "?" are guesses from your current site. Please check them.
*/

window.PROJECTS = {
  p01:          { title: "Project 01",                         category: "Category", year: "" },
  p02:          { title: "Project 02",                         category: "Category", year: "" },
  cooking:      { title: "A Student Guide to Cooking",         category: "Editorial", year: "" },
  cnp70:        { title: "70 — Crnogorsko narodno pozorište",  category: "Visual identity", year: "" },
  p05:          { title: "Project 05",                         category: "Category", year: "" },
  p06:          { title: "Project 06",                         category: "Category", year: "" },
  p07:          { title: "Project 07",                         category: "Category", year: "" },
  gpf:          { title: "gpf",                                category: "Visual identity", year: "" },
  p10:          { title: "Project 10",                         category: "Category", year: "" },
  parasocialna: { title: "Parasocialna ogledala",              category: "Editorial", year: "" },
  p12:          { title: "Project 12",                         category: "Category", year: "" },
  p13:          { title: "Project 13",                         category: "Category", year: "" },
  p14:          { title: "Project 14",                         category: "Category", year: "" },
  p15:          { title: "Project 15",                         category: "Category", year: "" },
  p16:          { title: "Project 16",                         category: "Category", year: "" },
  p17:          { title: "Project 17",                         category: "Category", year: "" },
  p18:          { title: "Project 18",                         category: "Category", year: "" },
  sizif:        { title: "Mit o Sizifu",                       category: "Book cover", year: "" },
  p20:          { title: "Project 20",                         category: "Category", year: "" },
  p21:          { title: "Project 21",                         category: "Category", year: "" },
  p22:          { title: "Project 22",                         category: "Category", year: "" },
  sociale:      { title: "Sociale ?",                          category: "Editorial", year: "" },
  p25:          { title: "Project 25",                         category: "Category", year: "" },
  p26:          { title: "Project 26",                         category: "Category", year: "" },
  p27:          { title: "Project 27",                         category: "Category", year: "" }
};

window.WORKS = [
  { id: "01", img: "", w: 159, h: 159, span: 1, project: "p01" },
  { id: "02", img: "", w: 160, h: 160, span: 1, project: "p02" },
  { id: "03", img: "", w: 329, h: 233, span: 2, project: "cooking" },
  { id: "04", img: "", w: 329, h: 232, span: 2, project: "cnp70" },
  { id: "05", img: "", w: 330, h: 330, span: 2, project: "p05" },
  { id: "06", img: "", w: 159, h: 222, span: 1, project: "p06" },
  { id: "07", img: "", w: 159, h: 223, span: 1, project: "p07" },
  { id: "08", img: "", w: 329, h: 178, span: 2, project: "gpf" },
  { id: "09", img: "", w: 160, h: 146, span: 1, project: "gpf" },
  { id: "10", img: "", w: 330, h: 369, span: 2, project: "p10" },
  { id: "11", img: "", w: 160, h: 175, span: 1, project: "parasocialna" },
  { id: "12", img: "", w: 159, h: 168, span: 1, project: "p12" },
  { id: "13", img: "", w: 330, h: 244, span: 2, project: "p13" },
  { id: "14", img: "", w: 159, h: 204, span: 1, project: "p14" },
  { id: "15", img: "", w: 160, h: 191, span: 1, project: "p15" },
  { id: "16", img: "", w: 329, h: 325, span: 2, project: "p16" },
  { id: "17", img: "", w: 160, h: 35,  span: 1, project: "p17" },
  { id: "18", img: "", w: 159, h: 191, span: 1, project: "p18" },
  { id: "19", img: "", w: 331, h: 331, span: 2, project: "sizif" },
  { id: "20", img: "", w: 160, h: 222, span: 1, project: "p20" },
  { id: "21", img: "", w: 159, h: 224, span: 1, project: "p21" },
  { id: "22", img: "", w: 328, h: 271, span: 2, project: "p22" },
  { id: "23", img: "", w: 160, h: 108, span: 1, project: "sociale" },
  { id: "24", img: "", w: 160, h: 106, span: 1, project: "sociale" },
  { id: "25", img: "", w: 329, h: 263, span: 2, project: "p25" },
  { id: "26", img: "", w: 168, h: 139, span: 1, project: "p26" },
  { id: "27", img: "", w: 170, h: 141, span: 1, project: "p27" },
  { id: "28", img: "", w: 160, h: 107, span: 1, project: "sociale" },
  { id: "29", img: "", w: 160, h: 106, span: 1, project: "sociale" },
  { id: "30", img: "", w: 160, h: 106, span: 1, project: "sociale" }
];
