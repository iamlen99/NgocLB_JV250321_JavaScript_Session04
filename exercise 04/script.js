let N;
do {
  N = +prompt("Nhập số nguyên dương N:");
  if (!Number.isInteger(N) || N < 1) {
    alert("Giá trị bạn vừa nhập không hợp lệ! Hãy nhập lại!");
  }
} while (!Number.isInteger(N) || N < 1);

while (true) {
  let yourChoice = +prompt(`=== MENU XỬ LÝ SỐ NGUYÊN N ===
(N là số nguyên dương bạn nhập ban đầu)

1. Kiểm tra N có phải số nguyên tố
2. Tính tổng các số từ 1 đến N
3. Tính giai thừa của N (N!)
4. In bảng nhân của N
5. Đếm số ước của N
6. Kiểm tra N có phải số hoàn hảo
7. In tất cả số chia hết cho 3 và 5 từ 1 đến N
8. In tất cả số lẻ từ 1 đến N
9. Thoát
Lựa chọn của bạn: `);
  switch (yourChoice) {
    case 1:
      let isPrime = true;
      if (N === 1) {
        isPrime = false;
      } else {
        for (let i = 2; i <= Math.sqrt(N); i++) {
          if (N % i === 0) {
            isPrime = false;
            break;
          }
        }
      }
      console.log(
        `${N} ${isPrime ? "là số nguyên tố" : "không phải là số nguyên tố"}`
      );
      break;

    case 2:
      let sum = 0;
      for (let i = 1; i <= N; i++) {
        sum += i;
      }
      console.log(`Tổng các số từ 1 đến ${N} là: ${sum}`);
      break;

    case 3:
      let factorial = 1;
      for (let i = 1; i <= N; i++) {
        factorial *= i;
      }
      console.log(`Giai thừa của ${N} là: ${factorial}`);
      break;

    case 4:
      console.log(`Bảng Nhân của ${N}:`);
      for (let i = 1; i <= 10; i++) {
        console.log(`  ${N} x ${i} = ${N * i}`);
      }
      break;

    case 5:
      let divisorCount = 0;
      for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
          divisorCount++;
        }
      }
      console.log(`Số ước của ${N} là: ${divisorCount}`);
      break;

    case 6:
      let divisorsSum = 0;
      for (let i = 1; i < N; i++) {
        if (N % i === 0) {
          divisorsSum += i;
        }
      }
      console.log(
        `${N} ${
          divisorsSum === N ? "là số hoàn hảo" : "không phải là số hoàn hảo"
        }`
      );
      break;

    case 7:
      let multipleSequence = "";
      for (let i = 1; i <= N; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          multipleSequence += i + " ";
        }
      }
      if (multipleSequence === "") {
        console.log(`Từ 1 đến ${N} không có số nào chia hết cho 3 và 5 `);
      } else {
        console.log(
          `Tất cả các số chia hết cho 3 và 5 từ 1 đến ${N} là: ${multipleSequence}`
        );
      }
      break;

    case 8:
      let oddSequence = "";
      for (let i = 1; i <= N; i += 2) {
        oddSequence += i + " ";
      }
      console.log(`Tất cả số lẻ từ 1 đến ${N} là: ${oddSequence}`);
      break;

    case 9:
      console.log("Cảm ơn đã sử dụng dịch vụ!");
      break;

    default:
      alert("Dữ liệu bạn nhập không hợp lệ, xin hãy nhập lại!");
  }
  if (yourChoice === 9) break;
}
