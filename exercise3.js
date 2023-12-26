let n = +prompt("Nhập chiều cao của tam giác vuông cân");

for (let i = 1; i <= n; i++) {
  let output = "";
  // Thêm khoảng trắng phía trước để tạo thành tam giác vuông cân
  for (let j = 1; j <= n - i; j++) {
    output += " ";
  }
  // // Thêm dấu '*' để tạo thành tam giác vuông cân
  for (let k = 1; k <= 2 * i - 1; k++) {
    output += "*";
  }

  console.log(output);
}
