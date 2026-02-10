const slider = document.getElementById("angleSlider");
const valueText = document.getElementById("angleValue");
const ed_distance_span = document.getElementById("ed_distance");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function drawPentagon(angle) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  angle = Number.parseFloat(angle);

  const angleB = 360 - angle - angle;

  const A = [500, 500];
  const B = [500, 300];
  const C = [
    B[0] - Math.cos(degreesToRadians(angleB - 90)) * 200,
    B[1] - Math.sin(degreesToRadians(angleB - 90)) * 200,
  ];
  const D = [
    C[0] - Math.sin(degreesToRadians(angleB - 90)) * 200,
    C[1] + Math.cos(degreesToRadians(angleB - 90)) * 200,
  ];
  const E = [300, 500];

  ctx.beginPath();
  for (const [x, y] of [A, B, C, D, E, A]) {
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = "black"; // Linienfarbe
  ctx.lineWidth = 10; // Linienbreite
  ctx.stroke();

  console.log("angle test", angle + angle + 90 + 90 + angleB);
  //   console.log("E[1] - D[1]", E[1] - D[1], "E[1]", E[1], "D[1]", D[1]);

  const ed_distance = Math.sqrt((E[1] - D[1]) ** 2 + (D[0] - E[0]) ** 2);
  console.log("E-D distance:", ed_distance, "angle", angle);
  ed_distance_span.textContent = ed_distance;
}

valueText.textContent = slider.value.toString().padStart(6, "0");
drawPentagon(slider.value);

slider.addEventListener("input", () => {
  valueText.textContent = slider.value.toString().padStart(6, "0");
  drawPentagon(slider.value);
});

// const points = [
//   [350, 350],
//   [350, 550],
//   [
//     350 + Math.cos(degreesToRadians(135)) * 200,
//     550 + Math.sin(degreesToRadians(135)) * 200,
//   ],
//   [
//     350 + Math.cos(degreesToRadians(135)) * 200 * 2,
//     550 +
//       Math.sin(degreesToRadians(135)) * 200 -
//       Math.sin(degreesToRadians(45)) * 200,
//   ],
//   [150, 350],
//   [350, 350],

//   //   [350, 150],
//   //   [350 - 141.422, 150 - 141.422],
//   //   [350 - 141.422 - 141.422, 150 - 141.422 + 141.422],
//   //   [150, 350],
//   //   [350, 350],
// ];

// ctx.beginPath();
// for (const [x, y] of points) {
//   ctx.lineTo(x, y);
// }
// ctx.strokeStyle = "black"; // Linienfarbe
// ctx.lineWidth = 2; // Linienbreite
// ctx.stroke();

// const points2 = [
//   [350, 350],
//   [350, 550],
//   [
//     350 + Math.cos(degreesToRadians(130)) * 200,
//     550 + Math.sin(degreesToRadians(130)) * 200,
//   ],
//   [
//     350 + Math.cos(degreesToRadians(130)) * 200 * 2,
//     550 +
//       Math.sin(degreesToRadians(130)) * 200 -
//       Math.sin(degreesToRadians(50)) * 200,
//   ],
//   [150, 350],
//   [350, 350],
// ];
// ctx.beginPath();
// for (const [x, y] of points2) {
//   ctx.lineTo(x, y);
// }
// ctx.strokeStyle = "red"; // Linienfarbe
// ctx.lineWidth = 2; // Linienbreite
// ctx.stroke();

// const points3 = [
//   [350, 350],
//   [350, 550],
//   [
//     350 + Math.cos(degreesToRadians(100)) * 200,
//     550 + Math.sin(degreesToRadians(100)) * 200,
//   ],
//   [
//     350 + Math.cos(degreesToRadians(100)) * 200 * 2,
//     550 + +Math.sin(degreesToRadians(100)) * 200,
//     -Math.sin(degreesToRadians(80)) * 200,
//   ],
//   [150, 350],
//   [350, 350],
// ];
// ctx.beginPath();
// for (const [x, y] of points3) {
//   ctx.lineTo(x, y);
// }
// ctx.strokeStyle = "green"; // Linienfarbe
// ctx.lineWidth = 2; // Linienbreite
// ctx.stroke();

// // // Linie zeichnen
// // // neuen Pfad starten
// // ctx.moveTo(350, 350); // Startpunkt (x, y)
// // ctx.lineTo(150, 350); // Endpunkt (x, y)
// // ctx.strokeStyle = "black"; // Linienfarbe
// // ctx.lineWidth = 2; // Linienbreite
// // ctx.stroke();

// // ctx.beginPath(); // neuen Pfad starten
// // ctx.moveTo(350, 350); // Startpunkt (x, y)
// // ctx.lineTo(550, 350); // Endpunkt (x, y)
// // ctx.strokeStyle = "black"; // Linienfarbe
// // ctx.lineWidth = 1; // Linienbreite
// // ctx.stroke();
