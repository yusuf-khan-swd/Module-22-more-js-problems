
// Practice Problem 1
function areaOfTriangle(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return parseFloat(area.toFixed(2));
}

console.log(areaOfTriangle(20, 20, 30));

