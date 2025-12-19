let input = `7,1
11,1
11,7
9,7
9,5
2,5
2,3
7,3`;

const points = input.split("\n").map((line) => line.split(",").map(Number));
let largest = 0;

for (let p1 of points) {
  for (let p2 of points) {
    if (p1 === p2) continue;

    let area = calcualteArea(p1, p2);

    if (area > largest) {
      largest = area;
    }
  }
}

function calcualteArea(p1, p2) {
  let [x1, y1] = p1;
  let [x2, y2] = p2;

  let w = Math.abs(x1 - x2) + 1;
  let l = Math.abs(y1 - y2) + 1;

  return w * l;
}

console.log(largest);
