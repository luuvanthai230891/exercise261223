let numRows = 5;

// In phần trên của hình thoi
for (let i = 0; i < numRows; i++) {
  let row = "";

  // In khoảng trắng bên trái
  for (let j = 0; j < numRows - i - 1; j++) {
    row += " ";
  }

  // In dấu '*' cho phần trên của hình thoi
  for (let k = 0; k < 2 * i + 1; k++) {
    row += "*";
  }

  console.log(row);
}

// In phần dưới của hình thoi
for (let i = numRows - 2; i >= 0; i--) {
  let row = "";

  // In khoảng trắng bên trái
  for (let j = 0; j < numRows - i - 1; j++) {
    row += " ";
  }

  // In dấu '*' cho phần dưới của hình thoi
  for (let k = 0; k < 2 * i + 1; k++) {
    row += "*";
  }

  console.log(row);
}
