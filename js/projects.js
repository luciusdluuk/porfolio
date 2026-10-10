/*
  ============================================================
  THIS IS THE ONLY FILE YOU NEED TO EDIT TO CHANGE THE GRID.
  ============================================================

  PROJECTS — the info that appears when you hover an image.
    title:    project name
    category: e.g. "Visual identity", "Editorial", "Poster"
    year:     e.g. "2025" (leave "" to hide it)

  WORKS — every image in the grid, in order (top of the page first).
    id:      just a number to keep track (not shown on the site)
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
  { id: "01", img: "images/01.webp", w: 1600, h: 1600, span: 1, project: "p01" },
  { id: "02", img: "images/02.webp", w: 1597, h: 1600, span: 1, project: "p02" },
  { id: "03", img: "images/03.webp", w: 1566, h: 1090, span: 2, project: "cooking" },
  { id: "04", img: "images/04.webp", w: 1582, h: 1110, span: 2, project: "cnp70" },
  { id: "05", img: "images/05.gif", w: 768, h: 768, span: 2, project: "p05" },
  { id: "06", img: "images/06.webp", w: 962, h: 1350, span: 1, project: "p06" },
  { id: "07", img: "images/07.webp", w: 1142, h: 1600, span: 1, project: "p07" },
  { id: "08", img: "images/08.webp", w: 1550, h: 836, span: 2, project: "gpf" },
  { id: "09", img: "images/09.webp", w: 792, h: 700, span: 1, project: "gpf" },
  { id: "10", img: "images/10.webp", w: 1433, h: 1600, span: 2, project: "p10" },
  { id: "11", img: "images/11.webp", w: 1170, h: 1278, span: 1, project: "parasocialna" },
  { id: "12", img: "images/12.webp", w: 1600, h: 1248, span: 1, project: "p12" },
  { id: "13", img: "images/13.webp", w: 1444, h: 986, span: 2, project: "p13" },
  { id: "14", img: "images/14.webp", w: 1080, h: 1350, span: 1, project: "p14" },
  { id: "15", img: "images/15.webp", w: 546, h: 732, span: 1, project: "p15" },
  { id: "16", img: "images/16.webp", w: 1344, h: 1314, span: 2, project: "p16" },
  { id: "17", img: "images/17.webp", w: 702, h: 468,  span: 1, project: "p17" },
  { id: "18", img: "images/18.webp", w: 1080, h: 1350, span: 1, project: "p18" },
  { id: "19", img: "images/19.webp", w: 1520, h: 1506, span: 2, project: "sizif" },
  { id: "20", img: "images/20.webp", w: 1148, h: 1600, span: 1, project: "p20" },
  { id: "21", img: "images/21.webp", w: 1072, h: 1518, span: 1, project: "p21" },
  { id: "22", img: "images/22.webp", w: 1080, h: 890, span: 2, project: "p22" },
  { id: "23", img: "images/23.webp", w: 1542, h: 1038, span: 1, project: "sociale" },
  { id: "24", img: "images/24.webp", w: 1388, h: 924, span: 1, project: "sociale" },
  { id: "25", img: "images/25.webp", w: 674, h: 558, span: 2, project: "p25" },
  { id: "26", img: "images/26.webp", w: 1080, h: 890, span: 1, project: "p26" },
  { id: "27", img: "images/27.webp", w: 1080, h: 890, span: 1, project: "p27" },
  { id: "28", img: "images/28.webp", w: 1536, h: 1026, span: 1, project: "sociale" },
  { id: "29", img: "images/29.webp", w: 1394, h: 926, span: 1, project: "sociale" },
  { id: "30", img: "images/30.webp", w: 1392, h: 926, span: 1, project: "sociale" }
];
