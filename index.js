const canvas = document.getElementById("canvas");

// 2D-Zeichenkontext holen
const ctx = canvas.getContext("2d");

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

const points = [
  [350, 350],
  [350, 550],
  [
    350 + Math.cos(degreesToRadians(135)) * 200,
    550 + Math.sin(degreesToRadians(135)) * 200,
  ],
  [
    350 + Math.cos(degreesToRadians(135)) * 200 * 2,
    550 +
      Math.sin(degreesToRadians(135)) * 200 -
      Math.sin(degreesToRadians(45)) * 200,
  ],
  [150, 350],
  [350, 350],

  //   [350, 150],
  //   [350 - 141.422, 150 - 141.422],
  //   [350 - 141.422 - 141.422, 150 - 141.422 + 141.422],
  //   [150, 350],
  //   [350, 350],
];

ctx.beginPath();
for (const [x, y] of points) {
  ctx.lineTo(x, y);
}
ctx.strokeStyle = "black"; // Linienfarbe
ctx.lineWidth = 2; // Linienbreite
ctx.stroke();

const points2 = [
  [350, 350],
  [350, 550],
  [
    350 + Math.cos(degreesToRadians(130)) * 200,
    550 + Math.sin(degreesToRadians(130)) * 200,
  ],
  [
    350 + Math.cos(degreesToRadians(130)) * 200 * 2,
    550 +
      Math.sin(degreesToRadians(130)) * 200 -
      Math.sin(degreesToRadians(50)) * 200,
  ],
  [150, 350],
  [350, 350],
];
ctx.beginPath();
for (const [x, y] of points2) {
  ctx.lineTo(x, y);
}
ctx.strokeStyle = "red"; // Linienfarbe
ctx.lineWidth = 2; // Linienbreite
ctx.stroke();

const points3 = [
  [350, 350],
  [350, 550],
  [
    350 + Math.cos(degreesToRadians(100)) * 200,
    550 + Math.sin(degreesToRadians(100)) * 200,
  ],
  [
    350 + Math.cos(degreesToRadians(100)) * 200 * 2,
    550 + +Math.sin(degreesToRadians(100)) * 200,
    -Math.sin(degreesToRadians(80)) * 200,
  ],
  [150, 350],
  [350, 350],
];
ctx.beginPath();
for (const [x, y] of points3) {
  ctx.lineTo(x, y);
}
ctx.strokeStyle = "green"; // Linienfarbe
ctx.lineWidth = 2; // Linienbreite
ctx.stroke();

// // Linie zeichnen
// // neuen Pfad starten
// ctx.moveTo(350, 350); // Startpunkt (x, y)
// ctx.lineTo(150, 350); // Endpunkt (x, y)
// ctx.strokeStyle = "black"; // Linienfarbe
// ctx.lineWidth = 2; // Linienbreite
// ctx.stroke();

// ctx.beginPath(); // neuen Pfad starten
// ctx.moveTo(350, 350); // Startpunkt (x, y)
// ctx.lineTo(550, 350); // Endpunkt (x, y)
// ctx.strokeStyle = "black"; // Linienfarbe
// ctx.lineWidth = 1; // Linienbreite
// ctx.stroke();
