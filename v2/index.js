const ab_width_slider = document.getElementById("ab_width_slider");
const ab_width_value = document.getElementById("ab_width_value");

const ce_x_offset_slider = document.getElementById("ce_x_offset_slider");
const ce_x_offset_value = document.getElementById("ce_x_offset_value");
const ce_y_offset_slider = document.getElementById("ce_y_offset_slider");
const ce_y_offset_value = document.getElementById("ce_y_offset_value");
const d_y_offset_slider = document.getElementById("d_y_offset_slider");
const d_y_offset_value = document.getElementById("d_y_offset_value");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function rotate90(point, center) {
  const [px, py] = point;
  const [cx, cy] = center;

  return [cx + (py - cy), cy - (px - cx)];
}

function drawPentagons(ab_width, ce_y_offset, ce_x_offset, d_y_offset) {
  function drawPentagon(x, y, rotate_n_times = 0, rotate_center = [0, 0]) {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    ab_width = Number.parseInt(ab_width);
    const A = [x, y];
    const B = [x + ab_width, y];

    ce_y_offset = Number.parseInt(ce_y_offset);
    ce_x_offset = Number.parseInt(ce_x_offset);
    const C = [B[0] + ce_x_offset, A[1] - ce_y_offset];
    const E = [A[0] - ce_x_offset, A[1] - ce_y_offset];

    d_y_offset = Number.parseInt(d_y_offset);
    const D = [x + ab_width / 2, C[1] - d_y_offset];

    let points_roated = [A, B, C, D, E];
    for (let i = 0; i < rotate_n_times; i++) {
      points_roated = points_roated.map(p => rotate90(p, rotate_center));
    }


    ctx.beginPath();
    for (const [x, y] of points_roated) {
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.closePath();
    ctx.stroke();

    return [A, B, C, D, E];
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let [A, B, C, D, E] = drawPentagon(250, 500);
  drawPentagon(B[0], 500, 2, B);
  drawPentagon(A[0] - ab_width / 2, A[1] + (A[1] - D[1]) + ab_width, 1, A);
  drawPentagon(A[0] - ab_width / 2, A[1] + (A[1] - D[1]), 3, A);
  // drawPentagon(C[0], C[1]);
}

ab_width_value.textContent = ab_width_slider.value.toString().padStart(3, "0");
drawPentagons(
  ab_width_slider.value,
  ce_y_offset_slider.value,
  ce_x_offset_slider.value,
  d_y_offset_slider.value,
);

ab_width_slider.addEventListener("input", () => {
  ab_width_value.textContent = ab_width_slider.value
    .toString()
    .padStart(3, "0");
  drawPentagons(
    ab_width_slider.value,
    ce_y_offset_slider.value,
    ce_x_offset_slider.value,
    d_y_offset_slider.value,
  );
});

ce_y_offset_value.textContent = ce_y_offset_slider.value
  .toString()
  .padStart(3, "0");

ce_y_offset_slider.addEventListener("input", () => {
  ce_y_offset_value.textContent = ce_y_offset_slider.value
    .toString()
    .padStart(3, "0");
  drawPentagons(
    ab_width_slider.value,
    ce_y_offset_slider.value,
    ce_x_offset_slider.value,
    d_y_offset_slider.value,
  );
});

ce_x_offset_value.textContent = ce_x_offset_slider.value
  .toString()
  .padStart(3, "0");

ce_x_offset_slider.addEventListener("input", () => {
  ce_x_offset_value.textContent = ce_x_offset_slider.value
    .toString()
    .padStart(3, "0");
  drawPentagons(
    ab_width_slider.value,
    ce_y_offset_slider.value,
    ce_x_offset_slider.value,
    d_y_offset_slider.value,
  );
});

d_y_offset_value.textContent = d_y_offset_slider.value
  .toString()
  .padStart(3, "0");

d_y_offset_slider.addEventListener("input", () => {
  d_y_offset_value.textContent = d_y_offset_slider.value
    .toString()
    .padStart(3, "0");
  drawPentagons(
    ab_width_slider.value,
    ce_y_offset_slider.value,
    ce_x_offset_slider.value,
    d_y_offset_slider.value,
  );
});
