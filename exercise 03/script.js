let correct = 0;
let wrong = 0;

while (true) {
  let yourChoice = +prompt(`=== MENU BẢNG CỬU CHƯƠNG NÂNG CAO ===
1. Hiển thị bảng cửu chương từ 1 đến 9
2. Hiển thị bảng cửu chương của một số cụ thể
3. Kiểm tra kết quả phép nhân
4. Hiển thị bảng cửu chương ngược
5. Luyện tập bảng nhân với số lần tùy chọn
6. Thống kê kết quả đúng/sai
7. Thoát
Lựa chọn của bạn: `);
  switch (yourChoice) {
    case 1:
      for (let i = 1; i <= 9; i++) {
        console.log(`Bảng nhân ${i}:`);
        for (let j = 1; j <= 10; j++) {
          console.log(`   ${i} x ${j} = ${i * j}`);
        }
      }
      break;

    case 2:
      let multiplicationTable = +prompt(
        "Bạn muốn hiển thị bảng cửu chương của số nào? (1-9):"
      );
      while (
        !Number.isInteger(multiplicationTable) ||
        multiplicationTable < 1 ||
        multiplicationTable > 9
      ) {
        multiplicationTable = +prompt(
          "Số bạn vừa nhập không hợp lệ, xin hãy nhập lại:"
        );
      }

      console.log(`Bảng cửu chương ${multiplicationTable}:`);
      for (let j = 1; j <= 10; j++) {
        console.log(
          `   ${multiplicationTable} x ${j} = ${multiplicationTable * j}`
        );
      }
      break;

    case 3:
      let randomA = Math.ceil(9 * Math.random());
      let randomB = Math.ceil(10 * Math.random());
      let result = null;
      do {
        result = prompt(
          `Kết quả của phép nhân ${randomA} x ${randomB} là bao nhiêu?`
        );
        if (
          !Number.isInteger(+result) ||
          result === null ||
          result.trim() === ""
        ) {
          alert("Giá trị bạn vừa nhập không hợp lệ, xin hãy nhập lại!");
        }
      } while (
        !Number.isInteger(+result) ||
        result === null ||
        result.trim() === ""
      );
      if (+result === randomA * randomB) {
        console.log("Bingooo! Bạn trả lời đúng rồi ^^");
        correct++;
      } else {
        console.log(
          `Rất tiếc! Kết quả của phép nhân ${randomA} x ${randomB} là ${
            randomA * randomB
          }`
        );
        wrong++;
      }
      break;

    case 4:
      for (let i = 1; i <= 9; i++) {
        console.log(`Bảng chia ${i}:`);
        for (let j = 1; j <= 10; j++) {
          console.log(`  ${i * j} : ${i} = ${j}`);
        }
      }
      break;

    case 5:
      let times;
      do {
        times = +prompt("Nhập số lần luyện tập bảng nhân:");
        if (!Number.isInteger(times) || times < 1) {
          alert("Giá trị bạn nhập không hợp lệ, xin hãy nhập lại");
        }
      } while (!Number.isInteger(times) || times < 1);
      for (let i = 1; i <= times; i++) {
        let randomA = Math.ceil(9 * Math.random());
        let randomB = Math.ceil(10 * Math.random());
        let result = null;
        do {
          result = prompt(
            `Kết quả của phép nhân ${randomA} x ${randomB} là bao nhiêu?`
          );
          if (
            !Number.isInteger(+result) ||
            result === null ||
            result.trim() === ""
          ) {
            alert("Giá trị bạn vừa nhập không hợp lệ, xin hãy nhập lại!");
          }
        } while (
          !Number.isInteger(+result) ||
          result === null ||
          result.trim() === ""
        );
        if (+result === randomA * randomB) {
          console.log("Bingooo! Bạn trả lời đúng rồi ^^");
          correct++;
        } else {
          console.log(
            `Rất tiếc! Kết quả của phép nhân ${randomA} x ${randomB} là ${
              randomA * randomB
            }`
          );
          wrong++;
        }
      }
      break;

    case 6:
      console.log("Thống kê kết quả đúng / sai:");
      console.log(`Tổng số câu đúng: ${correct}`);
      console.log(`Tổng số câu sai:  ${wrong}`);
      break;

    case 7:
      console.log("Cảm ơn đã sử dụng dịch vụ!");
      break;

    default:
      alert("Dữ liệu bạn nhập không hợp lệ, xin hãy nhập lại!");
  }
  if (yourChoice === 7) break;
}
