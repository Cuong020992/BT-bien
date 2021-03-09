var vatLy = prompt("nhập điểm môn Vật lý: ");
var toanHoc = prompt("Nhập điểm môn Toán:");
var hoaHoc = prompt("nhập điểm môn Hóa học: ");
var sinhHoc = prompt("nhập điểm môn Sinh học: ");

//chuyển kiểu dữ liệu
var ly = parseInt(vatLy);
var toan = parseInt(toanHoc);
var hoa = parseInt(hoaHoc);
var sinh  = parseInt(sinhHoc);

// tính tổng
var tong = ly + toan + hoa + sinh;
document.write("Tổng điểm các môn là: "+tong +"<br/>");

// tính điểm trung bình
var diemTB = tong / 4;
document.write("điểm trung bình các môn là: "+diemTB +"<br/>");