function lamBai(){
    let baiSo = parseInt(document.getElementById("baitap").value) ;
    switch (baiSo){
        case 1:
            let a = prompt("Nhập số a");
            let b = prompt ("Nhập số b");
            if (a%b==0){
                alert ("a chia hết cho b");
            }else{
                alert ("a không chia hết cho b")
            }
            break;
        case 2:
            let age = prompt ("Nhập tuổi học sinh")
            if (age<=0){
                alert ("Bạn nhập sai tuổi, xin nhập lại");
            }else if (age >0 && age < 16){
                alert("Bạn học sinh chưa đủ tuổi học lớp 10");
            }else {
                alert("Bạn học sinh đã đủ tuổi học lớp 10");
            }
            break;
        case 3:
            let number =    parseInt(prompt ("Nhập vào số nguyên")) ;
            if (number <0){
                alert(number + " là số nhỏ hơn 0");
            } else if (number >0) {
                alert(number+ " là số lớn hơn 0");
            }else{
                alert("số bạn nhập là "+ number + ", không đúng điều kiện,bạn vui lòng nhập lại!");
            }
            break;
        case 4:
            let a4 = parseInt(prompt("Nhập vào số thứ 1"));
            let b4 = parseInt(prompt("Nhập vào số thứ 2"));
            let c4 = parseInt(prompt("Nhập vào số thứ 3"));
            let max = a4;
            if (max < b4){
                max = b4;
            }else if (max < c4){
                max = c4;
            }
            alert ("Số lớn nhất là "+max);
            break;
        case 5:
            let diemKt = parseFloat(prompt("Nhập điểm bài kiểm tra"));
            let diemGiuaki = parseFloat(prompt("Nhập điểm bài thi giữa kì"));
            let diemCuoiki = parseFloat(prompt("Nhập điểm bài thi cuối kì"));
            let diemtb;
            if (diemKt<0 || diemGiuaki <0 || diemCuoiki<0 || diemKt>10 || diemGiuaki>10 || diemCuoiki >10){
                alert ("Bạn nhập sai điểm, vui lòng nhập lại")
                break;
            }else{
                diemtb=(diemKt+diemGiuaki+diemCuoiki)/3;
            }
            if(diemtb >=0 && diemtb<6){
                alert ("Diem trung bình là "+Math.round(diemtb*100)/100+",học sinh đạt học lực trung bình");
            }else if (diemtb<8 && diemtb>=6){
                alert ("Diem trung bình là "+Math.round(diemtb*100)/100+",học sinh đạt học lực trung khá");
            }else {
                alert ("Diem trung bình là "+Math.round(diemtb*100)/100+",học sinh đạt học lực giỏi");
            }
            break;
        case 6:
            // Hoa hồng tham khảo trên mạng : 5% với 50 triệu, 7% từ 50 triệu --> 100 triệu, 10% nếu doanh số > 100 triệu
            let doanhSo = parseInt(prompt("Nhập doanh số bán hàng của bạn"));
            let hoaHong;
            if (doanhSo<0){
                alert("Bạn nhập sai, vui lòng nhập lại")
            } else if (doanhSo < 50000000) {
                alert("Bạn không nhận được hoa hồng");
            } else if (doanhSo == 50000000) {
                hoaHong=doanhSo*5/100;
                alert("Hoa hồng của bạn là "+hoaHong+" đồng")
            } else if (doanhSo > 50000000 && doanhSo <= 100000000){
                hoaHong=doanhSo*7/100;
                alert("Hoa hồng của bạn là "+hoaHong+" đồng")
            } else{
                hoaHong=doanhSo*10/100;
                alert("Hoa hồng của bạn là "+hoaHong+" đồng")
            }
            break;
        case 7:
            // Bài làm với thông số được giả định như sau: phí thuê bao bắt buộc là 25000 đ
            // 600 đồng cho mỗi phút gọi / 50 phút đầu; 400 đồng cho mỗi phút gọi của 150 phút tiếp theo; 200 đồng cho sau 200 phút đầu tiên
            // yêu cầu nhập số giờ đã gọi trong tháng và tính số tiền cước DT
            let thueBao = 25000;
            let phut = parseInt(prompt("Nhập số phút bạn đã gọi trong tháng"));
            let cuocDt;
            if (phut <0){
                alert("Bạn nhập sai giờ, vui lòng nhập lại");
            }else if (phut <= 50){
                cuocDt = thueBao + phut * 600;
                alert("Với "+phut+" phút, cước điện thoại bạn mất trong tháng là "+ cuocDt + " đồng");
            }else if(phut > 50 && phut<=200){
                cuocDt=thueBao+50*600+(phut-50)*400;
                alert("Với "+phut+" phút, cước điện thoại bạn mất trong tháng là "+ cuocDt + " đồng");
            }else{
            cuocDt = thueBao + 50 * 600 + 150 * 400 + (phut - 200) * 200;
            alert("Với " + phut + " phút, cước điện thoại bạn mất trong tháng là " + cuocDt + " đồng");
            }
        break;
    }
}