var itemList = {
    "nt001": {
        "name": "QUẬN:NINH KIỀU  PHƯỜNG:HƯNG LỢI",
        "describe": "30/4, Phường Hưng Lợi, Quận Ninh Kiều, Cần Thơ.",
        "price": "1500",
        "photo": "image/trangchu/nhatro01/01nhatro1500.jpg"
    },

    "nt002": {
        "name": "QUẬN:NINH KIỀU  PHƯỜNG:HƯNG LỢI ",
        "describe": "Tầm Vu, Phường Hưng Lợi, Quận Ninh Kiều, Cần Thơ",
        "price": "2700",
        "photo": "image/trangchu/nhatro02/02nhatro2700.jpg"
    },

    "nt003": {
        "name": "QUẬN:NINH KIỀU  PHƯỜNG:AN KHÁNH ",
        "describe": "Khu Dân Cư Thới Nhựt, Phường An Khánh, Quận Ninh Kiều, Cần Thơ",
        "price": "3300",
        "photo": "image/trangchu/nhatro03/03nhatro3300.jpg"
    },

    "nt004": {
        "name": "QUẬN:NINH KIỀU  PHƯỜNG:CÁI KHẾ",
        "describe": "Đường Trần Phú, Phường Cái Khế, Quận Ninh Kiều, Cần Thơ.",
        "price": "3000",
        "photo": "image/trangchu/nhatro04/04nhatro3000.jpg"
    },

    "nt005": {
        "name": "QUẬN:CÁI RĂNG  PHƯỜNG:THƯỜNG THẠNH",
        "describe": "Phạm Văn Nhờ, Phường Thường Thạnh, Quận Cái Răng, Cần Thơ",
        "price": "2300",
        "photo": "image/trangchu/nhatro05/05nhatro2300.jpg"
    },

    "nt006": {
        "name": "QUẬN:CÁI RĂNG  PHƯỜNG:HƯNG THẠNH",
        "describe": "Đường Số 27, Phường Hưng Thạnh, Quận Cái Răng, Cần Thơ",
        "price": "3000",
        "photo": "image/trangchu/nhatro06/06nhatro3000.jpg"
    },
    "nt007": {
        "name": "QUẬN:CÁI RĂNG  PHƯỜNG:HƯNG PHÚ",
        "describe": "Đường Số 5, Phường Hưng Phú, Quận Cái Răng, Cần Thơ ",
        "price": "1500",
        "photo": "image/trangchu/nhatro07/07nhatro1500.jpg"
    },

    "nt008": {
        "name": "QUẬN:CÁI RĂNG  PHƯỜNG:LÊ BÌNH",
        "describe": "Đường Nguyễn Trãi, Phường Lê Bình, Quận Cái Răng, Cần Thơ",
        "price": "2300",
        "photo": "image/trangchu/nhatro08/08nhatro2300.jpg"
    },

    "nt009": {
        "name": "QUẬN:BÌNH THỦY PHƯỜNG:LONG TUYỀN",
        "describe": "Đường Tô Vĩnh Diện, Phường Long Tuyền, Quận Bình Thuỷ, Cần Thơ",
        "price": "2700",
        "photo": "image/trangchu/nhatro09/09nhatro2700.jpg"
    },
    "nt010": {
        "name": "QUẬN:BÌNH THỦY PHƯỜNG:LONG TUYỀN",
        "describe": "48, Đường Xuân Hồng, Phường Long Tuyền, Quận Bình Thuỷ, Cần Thơ",
        "price": "2500",
        "photo": "image/trangchu/nhatro10/10nhatro2500.jpg"
    },
    "nt011": {
        "name": "QUẬN:BÌNH THỦY PHƯỜNG:AN THỚI",
        "describe": "9/20/61, Phạm Ngọc Hưng, Phường An Thới, Quận Bình Thuỷ, Cần Thơ",
        "price": "1500",
        "photo": "image/trangchu/nhatro11/11nhatro1500.jpg"
    },
    "nt012": {
        "name": "QUẬN:BÌNH THỦY PHƯỜNG:THỚI AN ĐÔNG",
        "describe": "Nguyễn Văn Linh Phường Thới An Đông Quận Bình Thủy Cần Thơ, Phường Thới An Đông, Quận Bình Thuỷ, Cần Thơ",
        "price": "2500",
        "photo": "image/trangchu/nhatro12/12nhatro2500.jpg"
    },
    "nt013": {
        "name": "QUẬN:Ô MÔN PHƯỜNG:PHƯỚC THỚI",
        "describe": "Cầu Sang Trắng 1, Phường Phước Thới, Quận Ô Môn, Cần Thơ",
        "price": "1300",
        "photo": "image/trangchu/nhatro13/13nhatro1400.jpg"
    },
    "nt014": {
        "name": "QUẬN:Ô MÔN PHƯỜNG:PHƯỚC THỚI",
        "describe": "Đặng Thanh Sử, Phường Phước Thới, Quận Ô Môn, Cần Thơ",
        "price": "700",
        "photo": "image/trangchu/nhatro14/14nhatro700.jpg"
    },
    "nt015": {
        "name": "QUẬN:Ô MÔN PHƯỜNG:PHƯỚC THỚI",
        "describe": "Cầu Sang Trắng 1, Phường Phước Thới, Quận Ô Môn, Cần Thơ",
        "price": "1600",
        "photo": "image/trangchu/nhatro15/15nhatro1600.jpg"
    },
    "nt016": {
        "name": "QUẬN:Ô MÔN PHƯỜNG:PHƯỚC THỚI",
        "describe": "854/2, Đường Tôn Đức Thắng, Phường Phước Thới, Quận Ô Môn, Cần Thơ",
        "price": "1000",
        "photo": "image/trangchu/nhatro16/16nhatro1000.jpg"
    },

};

//DIEU HUONG KHI NHAN VAO GIO HANG
function dieu_huong() {
    //khi nhan vao gio hang
    //lấy địa chỉ trang hiện tại (URL) và chuyển hướng trình duyệt sang một trang mới
    window.location.href = "giohang.html";
}

//HIEN THI SAN PHAM
window.onload = function() {
        var infosp = '';
        var ten;
        var describe, image, price, masp;
        var dsmasp;
        dsmasp = Object.keys(itemList);
        for (var i = 0; i < Object.keys(itemList).length; i++) {
            masp = dsmasp[i];
            ten = itemList[masp].name;
            describe = itemList[masp].describe;
            image = itemList[masp].photo;
            price = parseInt(itemList[masp].price);

            infosp = infosp +
                '<div class=' + '"' + masp + ' item">' +
                '<div class="img">' +
                "<img class=" + '"img-sp"src=' + '"' + image + '"' + '>' +
                '<div class="describe-sp">' + describe +
                ' </div>' +
                '</div>' +

                ' <p class="name-sp">' + ten + '</p>' +

                '<div class="price-sp">' + price + ' </div>' +

                // '<span class="order-sp" name="oder">' +
                // ' <label for="order">Số lượng: </label>' +

                //' <input type="number" name="soluong" id=' + '"' + masp + '" ' + ' size="5" min="0" max="100">' +
                //' <button id="order-button" onclick="addCart(' + "'" + masp + "'" + ')"><i class="fas fa-cart-plus"></i></button>' +

                '</span>' +
                '</div>';

        }
        document.getElementById('showsp').innerHTML = infosp;
    }
    /*<div class="sp001 item">
        <div class="img"><img class="img-sp" src="image/sanpham/1burger-bo.jpg">
            <div class="describe-sp">Mềm ở ngoài, giòn nhẹ ở trong, có mùi thơm từ phô mai, bơ, cùng với hương vị vừa ăn của phần thịt xông khói. </div>
        </div>
        <p class="name-sp">Burger Bò Nướng Phômai</p>
        <div class="price-sp">90000 </div>
        <span class="order-sp" name="oder" method="get"> <label for="order">Số lượng: </label> 
        <input name="soluong" id="sp001" type="number" size="5" min="0" max="100">
        <button id="order-button" onclick="addCart('sp001')"><i class="fas fa-cart-plus"></i></button></span>
    </div> */

function addCart(code) {
    var bien = document.getElementById(code).value;

    var number = /^[0-9-+]+$/;
    if (!number.test(bien)) {
        alert('Vui lòng nhập số.');
        bien.focus;
        return false;
    }
    addCart1(code);
    return true;
}
/*TẠO MẢNG ĐỐI TƯỢNG LƯU VÀO LOCAL STORAGE*/
function addCart1(code) { //bien code co value= chuoi 'sp001'
    var number = parseInt(document.getElementById(code).value); //so luong mon hang dang chon
    var ds = {};
    if (typeof localStorage["dssp"] === "undefined") { //dssp chua ton tai
        var obj = {}; // {"sl":10}
        obj["sl"] = number;
        // add vao ds {"sp001":{"sl":10}}
        ds[code] = obj;
        var dsjs = JSON.stringify(ds); //chuyen doi qua json de mang =>string
        localStorage.setItem("dssp", dsjs); //luu lai 
    } else {
        //check ma sp co ton tai hay ch
        var dstemp = localStorage.getItem("dssp");
        var ds = JSON.parse(dstemp); //chuyen doi String => mang
        if (typeof ds[code] === "undefined") {
            var obj = {}; // {"sl":10}
            obj["sl"] = number;
            // add vao ds {"sp001":{"sl":10}, "sp002":{"sl":2}}
            ds[code] = obj;
            var dsjs = JSON.stringify(ds); //chuyen doi mang qua json kieu String
            localStorage.setItem("dssp", dsjs); //luu lai
        } else {
            current = parseInt(ds[code]["sl"]); //lay gia tri trong danh sach
            if (number + current > 100) {
                var obj = {}; //khoi tao object
                obj["sl"] = 100;
                ds[code] = obj;
                var dsjs = JSON.stringify(ds); //chuyen doi qua json de mang =>string
                localStorage.setItem("dssp", dsjs);

            } else {
                var obj = {};
                obj["sl"] = number + current;
                ds[code] = obj;
                var dsjs = JSON.stringify(ds); //chuyen doi qua json de mang =>string
                localStorage.setItem("dssp", dsjs);
            }
        }
    }

}