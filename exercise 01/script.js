let userAge = null;
let userName = null;
while (true) {
  let choice = +prompt(`=== MENU QUẢN LÝ THÔNG TIN ===
    1. Nhập tên người dùng
    2. Nhập tuổi người dùng
    3. Kiểm tra người dùng đủ tuổi trưởng thành chưa
    4. In ra tên viết hoa
    5. Thoát
    Lựa chọn của bạn: `);
  switch (choice) {
    case 1:
      userName = prompt("Nhập tên người dùng:");
      while (userName === null || userName.trim() === "") {
        userName = prompt("Bạn chưa nhập gì cả, hãy nhập tên người dùng:");
      }
      break;
    case 2:
      userAge = +prompt("Nhập tuổi người dùng:");
      while (!Number.isInteger(userAge) || userAge <= 0) {
        userAge = +prompt("Dữ liệu bạn nhập vào không hợp lệ, hãy nhập lại:");
      }
      break;
    case 3:
      if (userAge === null) {
        userAge = +prompt("Bạn chưa nhập tuổi người dùng, hãy nhập tuổi:");
        while (!Number.isInteger(userAge) || userAge <= 0) {
          userAge = +prompt("Dữ liệu bạn nhập vào không hợp lệ, hãy nhập lại:");
        }
        console.log(
          userAge >= 18
            ? "Người dùng đã đủ tuổi trưởng thành"
            : "Người dùng chưa đủ tuổi trưởng thành"
        );
      } else {
        console.log(
          userAge >= 18
            ? "Người dùng đã đủ tuổi trưởng thành"
            : "Người dùng chưa đủ tuổi trưởng thành"
        );
      }
      break;
    case 4:
      while (userName === null || userName.trim() === "") {
        userName = prompt("Bạn chưa nhập tên người dùng, hãy nhập lại:");
      }
      userName = userName.toUpperCase();
      console.log(userName);
      break;
    case 5:
      console.log("Cảm ơn bạn đã sử dụng dịch vụ!");
      break;
    default:
      alert("Dữ liệu bạn nhập không hợp lệ, xin hãy nhập lại!");
  }
  if (choice === 5) break;
}
