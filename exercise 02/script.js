let studentAge = null;
let studentName = null;
let mathScore = null;
let literatureScore = null;
let englishScore = null;
let averageScore = null;
let academicPerfomance = null;

while (true) {
  let choice = +prompt(`=== MENU QUẢN LÝ HỌC SINH ===

1. Nhập tên học sinh
2. Nhập tuổi học sinh
3. Nhập điểm Toán, Văn, Anh
4. Tính điểm trung bình và xếp loại
5. Hiển thị thông tin học sinh
6. Thoát
Lựa chọn của bạn: `);
  switch (choice) {
    case 1:
      studentName = prompt("Nhập tên học sinh");
      while (studentName === null || studentName.trim() === "") {
        studentName = prompt(
          "Bạn chưa nhập gì cả, hãy nhập lại tên học sinh: "
        );
      }
      break;

    case 2:
      studentAge = prompt("Nhập tuổi học sinh");
      while (
        !Number.isInteger(+studentAge) ||
        +studentAge <= 0 ||
        studentAge === null ||
        studentAge.trim() === ""
      ) {
        studentAge = prompt("Dữ liệu bạn nhập chưa hợp lệ, xin hãy nhập lại: ");
      }
      break;

    case 3:
      mathScore = prompt("Nhập điểm môn Toán:");
      while (
        isNaN(+mathScore) ||
        +mathScore < 0 ||
        +mathScore > 10 ||
        mathScore === null ||
        mathScore.trim() === ""
      ) {
        mathScore = prompt("Dữ liệu bạn nhập chưa hợp lệ, xin hãy nhập lại: ");
      }

      literatureScore = prompt("Nhập điểm môn Văn:");
      while (
        isNaN(+literatureScore) ||
        +literatureScore < 0 ||
        +literatureScore > 10 ||
        literatureScore === null ||
        literatureScore.trim() === ""
      ) {
        literatureScore = prompt(
          "Dữ liệu bạn nhập chưa hợp lệ, xin hãy nhập lại: "
        );
      }

      englishScore = prompt("Nhập điểm môn Anh:");
      while (
        isNaN(+englishScore) ||
        +englishScore < 0 ||
        +englishScore > 10 ||
        englishScore === null ||
        englishScore.trim() === ""
      ) {
        englishScore = prompt(
          "Dữ liệu bạn nhập chưa hợp lệ, xin hãy nhập lại: "
        );
      }
      break;

    case 4:
      if (
        mathScore === null ||
        literatureScore === null ||
        englishScore === null
      ) {
        console.log("Bạn chưa nhập điểm 3 môn Toán, Văn, Anh!");
      } else {
        averageScore = (+mathScore + +literatureScore + +englishScore) / 3;
        console.log(`Điểm trung bình là: ${averageScore.toFixed(2)} `);
        if (averageScore < 4) {
          academicPerfomance = "Kém";
        } else if (averageScore < 5) {
          academicPerfomance = "Yếu";
        } else if (averageScore < 7) {
          academicPerfomance = "Trung bình";
        } else if (averageScore < 8) {
          academicPerfomance = "Khá";
        } else if (averageScore < 9) {
          academicPerfomance = "Giỏi";
        } else {
          academicPerfomance = "Xuất sắc";
        }
        console.log(`Xếp loại học lực: ${academicPerfomance} `);
      }

      break;

    case 5:
      console.log(`Thông tin học sinh:
        Tên học sinh: ${studentName ?? "Chưa nhập"}
        Tuổi: ${studentAge ?? "Chưa nhập"}
        Điểm Toán: ${mathScore ?? "Chưa nhập"}
        Điểm Văn: ${literatureScore ?? "Chưa nhập"}
        Điểm Anh: ${englishScore ?? "Chưa nhập"}
        Điểm trung bình: ${
          averageScore !== null ? averageScore.toFixed(2) : "Chưa tính"
        }
        Học lực: ${academicPerfomance ?? "Chưa tính"}
        `);
      break;

    case 6:
      console.log("Cảm ơn đã sử dụng dịch vụ!");
      break;

    default:
      alert("Dữ liệu bạn nhập không hợp lệ, xin hãy nhập lại!");
  }
  if (choice === 6) break;
}
