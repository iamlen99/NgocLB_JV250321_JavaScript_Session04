let input;
while (true) {
  input = prompt("Nhập vào một số nguyên dương:");
  if (input === null || input.trim() === "") continue;
  if (!Number.isInteger(+input) || +input < 1) {
    alert("Giá trị nhập vào không hợp lệ, hãy nhập lại");
    continue;
  }
  break;
}

let n = +input;
let loop = true;

while (loop) {
  let choice = +prompt(`=== MENU PHÂN TÍCH SỐ NGUYÊN N ===
1. In tất cả các số nguyên tố từ 1 đến N
2. Đếm và tính tổng các số chia hết cho 3 hoặc 7 từ 1 đến N
3. In ra N dòng tam giác sao cân (từ 1 tới N dòng)
4. Kiểm tra N có phải số palindrome (đối xứng)
5. In ra các số có tổng chữ số là chẵn từ 1 đến N
6. Tìm số lớn nhất nhỏ hơn N chia hết cho cả 3 và 5
7. Thoát
Lựa chọn của bạn: `);

  switch (choice) {
    case 1:
      let primeArr = "";
      for (let i = 1; i <= n; i++) {
        let isPrime = true;
        if (i === 1) {
          isPrime = false;
        } else {
          for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
              isPrime = false;
              break;
            }
          }
        }
        if (isPrime) {
          primeArr += i + ", ";
        }
      }
      console.log(
        `Tất cả số nguyên tố từ 1 đến ${n} là: ${primeArr.slice(
          0,
          primeArr.length - 2
        )}`
      );
      break;
    case 2:
      let multipleOf3Count = 0;
      let multipleOf3Sum = 0;
      let multipleOf7Count = 0;
      let multipleOf7Sum = 0;
      for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
          multipleOf3Count++;
          multipleOf3Sum += i;
        }
        if (i % 7 === 0) {
          multipleOf7Count++;
          multipleOf7Sum += i;
        }
      }
      console.log(
        `Từ 1 đến ${n} có ${multipleOf3Count} số chia hết cho 3 và tổng là: ${multipleOf3Sum}`
      );
      console.log(
        `Từ 1 đến ${n} có ${multipleOf7Count} số chia hết cho 7 và tổng là: ${multipleOf7Sum}`
      );

      break;
    case 3:
      for (let i = 1; i <= n; i++) {
        let star = "";
        let empty = "";
        for (let j = 1; j <= n; j++) {
          if (j <= n - i) {
            empty += " ";
          } else {
            star += "* ";
          }
        }
        star = empty + star;
        console.log(star);
      }
      break;
    case 4:
      if (n < 10) {
        console.log(`${n} là số palindrome`);
      } else {
        let checkStr = "";
        for (let i = input.length - 1; i >= 0; i--) {
          checkStr += input.slice(i, i + 1);
        }
        reverse = +checkStr;

        if (reverse === n) {
          console.log(`${n} là số palindrome`);
        } else {
          console.log(`${n} không phải là số palindrome`);
        }
      }

      break;
    case 5:
      let evenSumSquence = "";
      if (n < 10) {
        for (i = 2; i <= n; i = i + 2) {
          evenSumSquence += i + " ";
        }
      } else {
        evenSumSquence = "2 4 6 8";
        for (let j = 10; j <= n; j++) {
          let checkStr = j.toString();
          let evenSum = 0;
          for (let k = 0; k < checkStr.length; k++) {
            evenSum += +checkStr.slice(k, k + 1);
          }
          if (evenSum % 2 === 0) {
            evenSumSquence += " " + j;
          }
        }
      }
      console.log(
        `Các số có tổng các chữ số là chẵn từ 1 đến ${n} là: ${evenSumSquence}`
      );
      break;

    case 6:
      let max;
      if (n <= 15) {
        console.log(`Không có số nào nhỏ hơn ${n} chia hết cho cả 3 và 5`);
      } else {
        for (let i = 15; i < n; i += 15) {
          max = i;
        }
      }
      console.log(`Số lớn nhất nhỏ hơn ${n} chia hết cho cả 3 và 5 là ${max}`);

      break;

    case 7:
      loop = false;
      break;

    default:
  }
}
