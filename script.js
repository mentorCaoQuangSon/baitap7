//out put: console.log/arlert
//input: prompt("nhap vao")
let toan = prompt("Nhap Vao Diem Toan");
let ly = prompt("Nhap Vao Diem Ly");
let hoa = prompt("Nhap Vao Diem Hoa");

let ave = (Number(toan) + Number(ly) + Number(hoa))/3;
console.log(ave.toFixed(1));

