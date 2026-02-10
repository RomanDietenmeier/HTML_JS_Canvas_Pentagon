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

function drawPentagon(ab_width, ce_y_offset, ce_x_offset, d_y_offset) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ab_width = Number.parseInt(ab_width);
  const A = [250 - ab_width / 2, 500];
  const B = [250 + ab_width / 2, 500];

  ce_y_offset = Number.parseInt(ce_y_offset);
  ce_x_offset = Number.parseInt(ce_x_offset);
  const C = [B[0] + ce_x_offset, A[1] - ce_y_offset];
  const E = [A[0] - ce_x_offset, A[1] - ce_y_offset];

  d_y_offset = Number.parseInt(d_y_offset);
  const D = [250, C[1] - d_y_offset];

  ctx.beginPath();
  for (const [x, y] of [A, B, C, D, E]) {
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.closePath();
  ctx.stroke();
}

ab_width_value.textContent = ab_width_slider.value.toString().padStart(3, "0");
drawPentagon(
  ab_width_slider.value,
  ce_y_offset_slider.value,
  ce_x_offset_slider.value,
  d_y_offset_slider.value,
);

ab_width_slider.addEventListener("input", () => {
  ab_width_value.textContent = ab_width_slider.value
    .toString()
    .padStart(3, "0");
  drawPentagon(
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
  drawPentagon(
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
  drawPentagon(
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
  drawPentagon(
    ab_width_slider.value,
    ce_y_offset_slider.value,
    ce_x_offset_slider.value,
    d_y_offset_slider.value,
  );
});
