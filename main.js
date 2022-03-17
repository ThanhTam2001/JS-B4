// kiểu dữ liệu boolean : true/false
var isLogin = false;

//Phép so sánh bằng(==): so sánh về giá trị
var so1 = 5;
// var so2 = 5;
var so2 = "5";

console.log(so1 == so2);

// Phép so sánh bằng (===): so sánh về giá trị & so sánh kiểu dữ liệu
var so3 = 10;
// var so4 = 10;
var so4 = "10";

console.log(so3 === so4);

// Phép so sánh khác nhau(!=)
var so5 = 9;
var so6 = 10;
console.log(so5 != so6);

// Phép so sánh khác(!==):so sánh về giá trị & so sánh kiểu dữ liệu

var so7 = 1;
var so8 = "1";

console.log(so7 !== so8);

// Phép so sánh lớn(>)

var so9 = 17;
var so10 = 19;

console.log(so9 > so10);

// Phép so sánh lớn (>=)

var so11 = 17;
var so12 = 19;
console.log(so11 >= so12);

// Phép sao sánh nhỏ (<)

var so13 = 17;
var so14 = 19;

console.log(so13 < so14);

//Phép so sánh nhỏ (<=)
var so15 = 17;
var so16 = 19;

console.log(so15 <= so16);

/* Phép so sánh và (&&)
 * Nếu như tất cả các biểu thức là true => true
 * Nếu như có 1 biểu thức là false => false
 */
var bt_1 = true;
var bt_2 = true;
var bt_3 = false;

console.log(bt_1 && bt_2 && bt_3);

console.log(19 > 17 && 17 < 19);

console.log(19 < 17 && 19 > 17);

/* Phép so sánh hoặc (||)
 * Nếu như tất cả các biểu thức là true => true
 * Nếu như có 1 biểu thức true => true
 */

var bt_4 = true;
var bt_5 = false;
var bt_6 = false;

console.log(bt_4 || bt_5 || bt_6);

console.log(7 != 7 || 9 < 10);

/* Phủ định (!)

*/

var bt_7 = true;
console.log(!bt_7);

/* Cấu trúc điều kiện :

*/

if (1 == 1) {
  // Hành động được thực thi
  console.log("Hong bé ơi !");
}

// Bài tập:
/* chuyển số âm => dương:
    vd : -4 = 4 ;
        -9 = 9;
*/

// var d = -17 ;

var d = 19;
if (d < 0) {
  // Chuyển số âm sang số dương
  d = -d;
  console.log(d);
}

/* 


*/

var noConLai = 10000000;
var noPhaiTra = 20000000;
var conNo = noPhaiTra - noConLai;
var lai = 0.015;

if (noConLai > 0) {
  console.log(conNo * lai);
  console.log(noConLai + conNo * lai);
} else {
  console.log("Không có nợ ");
}

/*
 * Cấu trúc điều kiện if else
 */

if (1 == 2) {
  // Hành động 1
  console.log("Đúng rồi đó!");
} else {
  // Hành động 2
  console.log("Lỗi!!!");
}

/*
    * tìm số lớn nhất trong 2 số:
        - tạo biến soThu_1 = 10;
        - tạo biến soThu_2 = 20;
        - Tạo biến soLonNhat;
    * Nếu : - soThu_1 > soThu_2 => soThu_1 > soLonNhat
    - Ngược lại : soThu_2 là soLonNhat
*/
var soThu_1 = 10;
var soThu_2 = 20;

var soLonNhat;

if (soThu_1 > soThu_2) {
  soLonNhat = soThu_1;
} else {
  soLonNhat = soThu_2;
}

console.log("Số Lớn Nhất là: " + soLonNhat);

// Bài tập vd :
var luong1gio = 20000;
var gioLam = 45;
var heLuong = 1.5;
var thanhTien;

if (gioLam > 40) {
  thanhTien = 40 * luong1gio + (gioLam - 40) * luong1gio * heLuong;
} else {
  thanhTien = gioLam * luong1gio;
}

console.log("Tổng lương : " + thanhTien);

/* 
Toán tử điều kiện <=> Toán tử 3 ngôi 

*/

if (2 == 2) {
  console.log("Điều kiện đúng");
} else {
  console.log("Điều kiện sai");
}

//ĐK ? "ĐK đúng" : "ĐK sai"

2 == 2 ? console.log("ĐK đúng") : console.log("ĐK sai");

/* Cấu trúc điều kiện if else if
 */

var so = 999999999999;
if (so == 1) {
  console.log("Đây là số 1");
} else if (so == 2) {
  console.log("Đây là số 2");
} else if (so == 3) {
  console.log("Đây là số 3");
} else {
  console.log("Hông bé ơi");
}

//bài tập điêm  TB:

var toan = 6;
var ly = 8;
var hoa = 9;

var diemTB = (toan + ly + hoa) / 3;

if (diemTB >= 8.5) {
  console.log("Giỏi");
} else if (diemTB >= 6.5 && diemTB < 8.5) {
  console.log("Khá");
} else if (diemTB >= 5 && diemTB < 6.5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

/* mua hàng:
    - Mặt hàng : Coca
    - gia :10000
    - soLuong = ?
    - Nếu soLuong < 50 : soLuong * gia
    - Nếu 50 <= soLuong <= 100 : (49 * gia) + (soLuong - 49) * gia * 0.92
    - Nếu 100 < soLuong : (49 * gia) + 50 * gia * 0.92 + (soLuong -100) * gia * 0.88

*/

var gia = 10000;
var soLuong = 51;

if (soLuong < 50) {
  console.log(soLuong * gia);
} else if (soLuong >= 50 && soLuong <= 100) {
  console.log(49 * gia + (soLuong - 49) * gia * 0.92);
} else if (soLuong > 100) {
  console.log(49 * gia + 50 * gia * 0.92 + (soLuong - 100) * gia * 0.88);
}

/*
            Switch Case

*/

var number = 1;
switch (number) {
  case 1:
    console.log("Đây là số 1");
    break;
  case 2:
    console.log("Đây là số 2");
    break;
  case 3:
    console.log("Đây là số 3");
    break;
  default:
    console.log("Không biết");
    break;
}

//////////BÀI TẬP

/**
 * đầu vào :
 * tạo 3 biến số nguyên để người dùng nhập vào : a,b,c
 * Xử lí: Nếu a>b
 *        Nếu a>c
 *        Nếu b>c
 * Đầu ra : Show kết quả
 */

var a = "10";

var b = "17";
var c = "19";
var tam;

if (a > b) {
  tam = a;
  a = b;
  b = tam;
}

if (a > c) {
  tam = a;
  a = c;
  c = tam;
}
if (b > c) {
  tam = b;
  b = c;
  c = tam;
}

console.log(a + b + c);

/// Xuất câu chào
var ba = 22;
var me = 25;

var anhTrai = 10;

var emgai = 11;

var hoi = 30;

if (hoi < ba && ba == me) {
  console.log("Xin Chào bố");
} else if (hoi < me && me > ba) {
  console.log("Xin Chào mẹ");
} else if (anhTrai < hoi && emgai == anhTrai) {
  console.log(" Xin Chào anh trai");
} else if (emgai < hoi && emgai > anhTrai) {
  console.log("Xin Chào em gái");
}

/////Tính chẳn lẻ

var x = 5;
var y = 15;
var z = 22;

if (tong % 2 == 0) {
  console.log("Đây là Số chẵn");
} else {
  console.log("Dây là Số lẻ");
}

/// Xét Tam Giác
// var t = 3;
// var u=3;
// var i= 2;

// if( t==u && t==i && u==i){
//     console.log("Tam giác đều");
// }
// else if (t==u && t>i & u>i){
//     console.log("Tam giác cân");
// }
// else{
//     console.log("Tam giác vuông");
// }

// void KiemTraTamGiac(a, b, c);
// {
//   if (a == b && b == c) {
//     console.log("Tam giác đều");
//   } else if (a == b || a == c || b == c) {
//     console.log("Tam giác cân");
//   } else if (
//     a * a + b * b == c * c ||
//     a * c + c * c == b * b ||
//     b * b + c * c == a * c
//   ) {
//     console.log("Tam giác vuông");
//   } else {
//     console.log("Đây không phải là tam giác");
//   }
// } sao kì ta đợi anh xem

document.getElementById("btnTinhTG").onclick = function () {
  var a = document.getElementById("txtCanh1").value * 1;
  var b = document.getElementById("txtCanh2").value * 1;
  var c = document.getElementById("txtCanh3").value * 1;

  //   var kq = KiemTraTamGiac(a, b, c);

  // Trường hợp là tam giác đều
  /**
   * Nếu a === b && a === c
   *      Nếu b === c
   * => tam giác đều
   */

  // Cân
  /**
   * Nếu a === b && b === a
   *      Nếu a > c && b > c
   * 3 cạnh thì xét 3 trường hợp
   * => Cân
   */

  // Vuông
  /**
   * Nếu c > a && c > b
   *      Nếu b > a || a < b
   * => Vuông
   */
  //   ...............

  if (a === b && b === a) {
    if (a > c && b > c) {
      document.getElementById("footerKetQua").innerHTML = "Đây là tam giác cân";
      console.log("Cân");
    }
  } else if (b === c && c === b) {
    if (b > a && c > a) {
      document.getElementById("footerKetQua").innerHTML = "Đây là tam giác cân";
      console.log("2Cân");
    }
  } else if (c === a && a === c) {
    if (c > b && a > b) {
      document.getElementById("footerKetQua").innerHTML = "Đây là tam giác cân";
      console.log("3Cân");
    }
  }
  // Tam giác vuông
  if (c > a && c > b) {
    if (b > a || a < b) {
      document.getElementById("footerKetQua").innerHTML =
        "Đây là tam giác vương";
      console.log("Vuông1");
    }
  } else if (b > a && b > c) {
    if (c < a || c > a) {
      document.getElementById("footerKetQua").innerHTML =
        "Đây là tam giác vuông";
      console.log("Vuông2");
    }
  } else if (a > b && a > c) {
    if (b > c || b < c) {
      document.getElementById("footerKetQua").innerHTML =
        "Đây là tam giác vuông";
      console.log("Vuông3");
    }
  }
  // tam giác đều
  if (a === b && a === c) {
    if (b === c) {
      document.getElementById("footerKetQua").innerHTML = "Đây là tam giác đều";
      console.log("Đều");
    }
  }
};





/////                               NÂNG CAO                                        ////////////

/**
 * BÀI 4:
 * 
 * Đầu vào : tạo 3 biến tọa độ của 3 sinh viên
 *          tạo biến tọa độ của trường
 * 
 * 
 * 
 * Xử lí:
 * 
 * 
 * 
 * Đầu ra :
 */

document.getElementById("btn-click").onclick = function (){
  const sv1 = document.getElementById("tui-1a").value;
  const sv2 = document.getElementById("tui-1b").value;
  const sv3 = document.getElementById("tui-1c").value;



  const sv_1 = document.getElementById("thien-1c").value;
  const sv_2 = document.getElementById("thien-1c").value;
  const sv_3 = document.getElementById("thien-1c").value;


  const sv__1 = document.getElementById("tui-1c").value;
  const sv__2 = document.getElementById("tui-1c").value;
  const sv__3 = document.getElementById("tui-1c").value;

  const toado1 = document.getElementById("univer-a").value;
  const toado2 = document.getElementById("univer-b").value;
  const toado3 = document.getElementById("univer-c").value;


 const roadStu1 = Math.sqrt(
    Math.pow((toado1 - sv1), 2) +
    Math.pow((toado2 - sv2), 2) +
    Math.pow((toado3 - sv3), 2)
  );

  const roadStu2 = Math.sqrt(
    Math.pow((toado1 - sv_1), 2) +
    Math.pow((toado2 - sv_2), 2) +
    Math.pow((toado3 - sv_3), 2)
  );

  const roadStu3 = Math.sqrt(
    Math.pow((toado1 - sv__1), 2) +
    Math.pow((toado2 - sv__2), 2) +
    Math.pow((toado3 - sv__3), 2)
  );

  if (roadStu1 > roadStu2 && roadStu1 > roadStu3) {
    document.getElementById('print-univer').innerHTML =
      `
    <p>${nameStu1} có khoảng cách xa trường nhất</p>
    `
  }

}



/*
document.getElementById('btn-univer').onclick = function () {

  DOM lấy value dễ r

  Công thức tìm khoảng cách như website anh gửi em lấy đích trừ đầu

  Math.pow() -> công thức toán bình phương
  Math.sqrt() -> toán căn bậc 2
  gg để biết thêm chi tiết :v

  const roadStu1 = Math.sqrt(
    Math.pow((tọa độ trường A - tọa độ học sinh 1A), 2) +
    Math.pow((tọa độ trường B - tọa độ học sinh 1B), 2) +
    Math.pow((tọa độ trường C - tọa độ học sinh 1C), 2)
  );

  So sánh khoảng cách giữa 1 thằng học sinh với 2 thằng học sinh còn lại. thằng nào lớn thì thằng đó xa nhất
  3 thằng thì 3 trường hợp. xong render coi kết quả
  if (roadStu1 > roadStu2 && roadStu1 > roadStu3) {
    document.getElementById('print-univer').innerHTML =
      `
    <p>${nameStu1} có khoảng cách xa trường nhất</p>
    `
  }

}
*/