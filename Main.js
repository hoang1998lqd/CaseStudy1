let KichThuoc = document.getElementsByClassName('slide')[0].clientWidth;
let chuyenSlide = document.getElementsByClassName('chuyen-slide')[0];

let img = chuyenSlide.getElementsByTagName('img');
let max = KichThuoc*img.length;
max -= KichThuoc;
let chuyen = 0;
function Next() {
    if  (chuyen<max){
        chuyen +=KichThuoc;

    }
    else (chuyen=0)
    chuyenSlide.style.marginLeft = '-' + chuyen + 'px';

}
function Back() {
    if  (chuyen==0){
        chuyen = max;

    }
    else (chuyen -=KichThuoc)
    chuyenSlide.style.marginLeft = '-' + chuyen + 'px';

}
setInterval(function (){
    Next();
},3000)















// Class
class Product {
    constructor(name, price, img, laptop) {
        this.name=name;
        this.price=price;
        this.img=img;
        this.laptop=laptop;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    getImg(){
        return this.img;
    }
    getLaptop(){
        return this.laptop;
    }
    setName(name) {
        this.name=name;
    }setPrice(price) {
        this.price=price;
    }setImg(img) {
        this.img=img;
    }setLaptop(laptop) {
        this.laptop=laptop;
    }

    edit(name,price,img,laptop){
        this.name=name;
        this.price=price;
        this.img=img;
        this.laptop=laptop;

    }
}

// Khai báo Product

// Laptop Acer list
let acer1 = new Product("Acer Asphire 7", 17000000, "../Immage/Laptop/product/Acer/acer1.jpg", "Acer")
let acer2 = new Product("Acer", 18600000, "../Immage/Laptop/product/Acer/acer2.jpg", "Acer")
let acer3 = new Product("Acer", 22400000, "../Immage/Laptop/product/Acer/acer3.jpg", "Acer")
let acer4 = new Product("Acer", 19800000, "../Immage/Laptop/product/Acer/acer4.jpg", "Acer")
let acer5 = new Product("Acer", 15000000, "../Immage/Laptop/product/Acer/acer5.jpg", "Acer")
let acer6 = new Product("Acer", 22500000, "../Immage/Laptop/product/Acer/acer5.jpg", "Acer")
arrayAcer = [acer1, acer2, acer3, acer4, acer5, acer6];

// List Asus
let asus1 = new Product("Asus Expert Book", 18600000, "../Immage/Laptop/product/Asus/Asus_expert_Book.png", "Asus")
let asus2 = new Product("Asus Pro Art", 24500000, "../Immage/Laptop/product/Asus/asus_Proart.png", "Asus")
let asus3 = new Product("Asus ROG Trix", 24300000, "../Immage/Laptop/product/Asus/asus_ROG.png", "Asus")
let asus4 = new Product("Asus Gamming TUF", 18600000, "../Immage/Laptop/product/Asus/Asus_Tuf.png", "Asus")
let asus5 = new Product("Asus Vivobook Flip", 18400000, "../Immage/Laptop/product/Asus/Asus_VivoBook_Flip .png", "Asus")
let asus6 = new Product("Asus ROG Zephyrus", 18600000, "../Immage/Laptop/product/Asus/asus_Zephyrus.png", "Asus")
arrayAsus=[asus1,asus2,asus3, asus4,asus5,asus6];


// List Dell
let dell1 = new Product("Dell Gaming Alienware", 28600000, "../Immage/Laptop/product/Dell/10505_dell_alienware_x15_r1_6.jpg", "Dell");
let dell2 = new Product("Dell Latitude", 21300000, "../Immage/Laptop/product/Dell/10383_dell_latitude_9520__6.jpg", "Dell");
let dell3 = new Product("Dell Gaming G5 5515", 27400000, "../Immage/Laptop/product/Dell/9667_dell_gaming_g15_5515_red_3.jpg", "Dell");
let dell4 = new Product("Dell Inspiron 5510", 21600000, "../Immage/Laptop/product/Dell/dell_inspiron.jpg", "Dell");
let dell5 = new Product("Dell Vostro", 19800000, "../Immage/Laptop/product/Dell/dell_vostro.jpg", "Dell");
let dell6 = new Product("Dell XPS", 28600000, "../Immage/Laptop/product/Dell/dell_Xps.jpg", "Dell");
arrayDell = [dell1,dell2,dell3, dell4,dell5,dell6];

// List HP
let Hp1 = new Product("HP Gaming Omen 16", 23600000, "../Immage/Laptop/product/HP/9115_hp_omen_16_b012_5.jpg", "HP");
let Hp2 = new Product("HP Gaming Victus 16", 21600000, "../Immage/Laptop/product/HP/9145_hp_victus_16_e_black__5.jpg", "HP");
let Hp3 = new Product("HP Evy 360", 18600000, "../Immage/Laptop/product/HP/9359_hp_envy_x360_convert_13_bd0063dx_3.jpg", "HP");
let Hp4 = new Product("HP Ellite Book", 20500000, "../Immage/Laptop/product/HP/hp_elitebook.jpg", "HP");
let Hp5 = new Product("HP Pavilon 15", 24300000, "../Immage/Laptop/product/HP/hp_pavilon.jpg", "HP");
let Hp6 = new Product("HP Pro Book", 20600000, "../Immage/Laptop/product/HP/hp_probook.jpg", "HP");
arrayHP = [Hp1,Hp2,Hp3, Hp4,Hp5,Hp6];

// List Lenovo
let l1 = new Product("Lenovo Think Pad x15 carbon", 33600000, "../Immage/Laptop/product/Lenovo/1.jpg", "Lenovo");
let l2 = new Product("Lenovo Idea Pad", 18500000, "../Immage/Laptop/product/Lenovo/ideapad.jpg", "Lenovo");
let l3 = new Product("Lenovo IdeaPad Gaming 3 Pro", 28600000, "../Immage/Laptop/product/Lenovo/ideapadgaming.jpg", "Lenovo");
let l4 = new Product("Lenovo Gaming Legion 5 Pro", 34500000, "../Immage/Laptop/product/Lenovo/legion5.jpg", "Lenovo");
let l5 = new Product("Lenovo Think Book x15 carbon", 31600000, "../Immage/Laptop/product/Lenovo/thinkbook.jpg", "Lenovo");
let l6 = new Product("Lenovo Think Pad x15 Gen 2", 22600000, "../Immage/Laptop/product/Lenovo/thinkpad.jpg", "Lenovo");
arrayLenovo = [l1,l2,l3, l4,l5,l6];

// List Macbook
let m1 = new Product("Apple Macbook Air", 33600000, "../Immage/Laptop/product/Macbook/air.jpg", "Macbook");
let m2 = new Product("Apple Macbook Pro 16inch", 38600000, "../Immage/Laptop/product/Macbook/Pro16.jpg", "Macbook");
let m3 = new Product("Apple Macbook Pro 2021", 31000000, "../Immage/Laptop/product/Macbook/proz11.jpg", "Macbook");
let m4 = new Product("Apple Macbook Pro 14inch", 295000000, "../Immage/Laptop/product/Macbook/proz11.jpg", "Macbook");
let m5 = new Product("Apple Macbook Pro 13inch", 31600000, "../Immage/Laptop/product/Macbook/air.jpg", "Macbook");
let m6 = new Product("Apple Macbook Air 2020", 23600000, "../Immage/Laptop/product/Macbook/proz11.jpg", "Macbook");
arrayMac = [m1,m2,m3, m4,m5,m6];

// List MSI
let ms1 = new Product("MSI Gaming Crosshair", 32600000, "../Immage/Laptop/product/MSI/crosshair.jpg", "MSI");
let ms2 = new Product("MSI Flip", 22600000, "../Immage/Laptop/product/MSI/flip.jpg", "MSI");
let ms3 = new Product("MSI Gaming GF63", 22100000, "../Immage/Laptop/product/MSI/gf63.jpg", "MSI");
let ms4 = new Product("MSI Modern 14", 18900000, "../Immage/Laptop/product/MSI/modern14.jpg", "MSI");
let ms5 = new Product("MSI Modern Prestige 15", 20600000, "../Immage/Laptop/product/MSI/prestige15.jpg", "MSI");
let ms6 = new Product("MSI Gaming Raizer", 38500000, "../Immage/Laptop/product/MSI/raizer.jpg", "MSI");
arrayMSI = [ms1,ms2,ms3,ms4,ms5,ms6]


// Hàm tạo bảng Product
//
// function showLaptop(array) {
//     let content = "<table>";
//     for (let i = 0; i < array.length; i++) {
//         content += "<tr>";
//         for (let j = 0; j < array[i].length; j++) {
//             content += "<td class='display-item' style='margin-top: 100px' >"
//             content += "<img class='img-prd'  src='" + array[i][j].img + "' width='50%' height='50%' style='margin-top: 100px alt='Error' ' '>"
//             content += "<h2 id='content-product'>" + array[i][j].name + "</h2>"
//             content += "<p class='price'>Giá: " + array[i][j].price + " VND</p>"
//             content += "<button onclick='editProduct(" + i + "," + j + ',\"' + array[i][j].getLaptop() + '"' + ")'>&nbsp;Sửa&nbsp;</button>"
//             // content += "<button onclick='delteteProduct(" + i + "," + j + ',\"' + array[i][j].getLaptop() + '"' + ")'>&nbsp;Xóa&nbsp;</button>"
//             content += "<button class='btn btn-cart' onclick='updatecart(" + i + "," + j + ',\"' + array[i][j].getLaptop(this) + '"' + ")'>&nbsp;Thêm vào giỏ hàng&nbsp;</button>"
//             content += "</td>"
//         }
//         content += "<tr>"
//     }
//     content += "</table>"
//     document.getElementById('wrapper').innerHTML =content
//     // Gọi hàm thêm Products
//
// }
// function showAcer() {
//     showLaptop(arrayAcer)
// }
// function showAsus() {
//     showLaptop(arrayAsus)
// }
// function showDell() {
//     showLaptop(arrayDell)
// }
// function showHP() {
//     showLaptop(arrayHP)
// }
// function showLenovo() {
//     showLaptop(arrayLenovo)
// }
// function showMacbook() {
//     showLaptop(arrayMac)
// }
// function showMSI() {
//     showLaptop(arrayMSI)
// }

// Tạo list product
    function showLaptop(array) {
    let content = "";
        for (let i = 0; i < array.length; i++) {
            content +='<div class="products">\n' +
                '            <ul>\n' +
                '                <li class="main-product">\n' +
                '                    <div class="img-product">\n' +
                '                        <img class="img-prd"\n' +
                '                             src='+ array[i].img +'\n' +
                '                             alt="">\n' +
                '                    </div>\n' +
                '                    <div class="content-product">\n' +
                '                        <h3 class="content-product-h3">'+ array[i].name +'</h3>\n' +
                '                        <div class="content-product-deltals">\n' +
                '                            <div class="price">\n' +
                '                                <span class="money"> '+ array[i].price + 'VNĐ  </span>\n' +
                '                            </div>\n' +
                '                            <button type="button" class="btn btn-cart" >Thêm Vào Giỏ</button>\n' +
                '                            <button type="button" class="btn btn-cart" onclick="editProduct()">Edit</button>\n' +
                '                            <button type="button" class="btn btn-cart" onclick="renderEdit(\'Cập nhật\');editProduct(' + i   + ',\'' + array[i].getLaptop() + ' '+')">Edit</button>\n' +

                '                        </div>\n' +
                
                '                    </div>\n' +
                '                </li>\n' +
                '             \n' +
                '            </ul>\n' +
                '        </div>'
        }
        document.getElementById('wrapper').innerHTML=content



}
function showAcer() {
    showLaptop(arrayAcer)
}
function showAsus() {
    showLaptop(arrayAsus)
}
function showDell() {
    showLaptop(arrayDell)
}
function showHP() {
    showLaptop(arrayHP)
}
function showLenovo() {
    showLaptop(arrayLenovo)
}
function showMacbook() {
    showLaptop(arrayMac)
}
function showMSI() {
    showLaptop(arrayMSI)
}



function renderEdit(text) {
    let data = ""
    data += "<table id='table'>" +
        "<tr><td colspan='2'><h2>" + text + "</h2></td></tr>" +
        "<tr><td><label for='name'>Tên sản phẩm</label></td>" +
        "<td><input type='text' name='name' size='25' maxlength='30' id='name'></td></tr>" +
        "<tr><td><label for='price'>Giá sản phẩm</label></td>" +
        "<td><input type='text' name='price' size='25' maxlength='30' id='price'></td></tr>" +
        "<tr><td><label for='image'>Ảnh sản phẩm</td>" +
        "<td><input type='text' name='image' size='25' maxlength='30' id='image'></label></td></tr>" +
        "<tr><td><label for='latop'>Loại máy</label></td>" +
        "<td><select id='laptop'>" +
        "<option></option>" +
        "<option value='Acer'>Acer</option>" +
        "<option value='Asus'>Asus</option>" +
        "<option value='Dell'>Dell</option>" +
        "<option value='HP'>HP</option>" +
        "<option value='Lenovo'>Lenovo</option>" +
        "<option value='Macbook'>Macbook</option>" +
        "<option value='MSI'>MSI</option>" +
        "</select></td></tr>" +
        "<tr><td></td><td>" +
        "<button onclick='editForm()'>&emsp;&emsp;" + text + "&emsp;&emsp;</button> " +
        "<button onclick='cancelEdit()'>&emsp;&emsp;Hủy&emsp;&emsp;</button></td></tr>" +
        "</table>"
    document.getElementById("image-add").innerHTML = data
}

function cancelEdit() {
    document.getElementById("image-add").innerHTML = "<img src=\"../Immage/Laptop/Slide/huongdan.png\" alt=\"Lỗi\" width=\"100%\" height=\"100%\">"
}

//edit khi click vào submit form
function editForm() {
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let image = document.getElementById("image").value
    let laptop = document.getElementById("laptop").value
    let i = localStorage.getItem("indexI")
    // let j = localStorage.getItem("indexJ")
    switch (laptop) {
        case "Acer": {
            arrayAcer[i] = new Product(name, price, image, laptop)
            showAcer()
            break
        }
        case "Asus": {
            arrayAsus[i] = new Product(name, price, image, laptop)
            break
        }
        case "Dell": {
            arrayDell[i] = new Product(name, price, image, laptop)
            break
        }
        case "Motorbike": {
            arrayLenovo[i] = new Product(name, price, image, laptop)
            break
        }
    }
    cancelEdit()
}

//edit khi click vào nút edit
function editProduct(i,laptop) {
    localStorage.setItem("indexI", i)
    switch (laptop) {
        case "Acer": {
            renderValueEdit(arrayAcer[i])
            break
        }
        case "Asus": {
            renderValueEdit(arrayAsus[i])
            break
        }
        case "Dell": {
            renderValueEdit(arrayDell[i])
            break
        }
        case "Lenovo": {
            renderValueEdit(arrayLenovo[i])
            break
        }
    }
}

function renderValueEdit(product) {
    document.getElementById("name").value = product.getName()
    document.getElementById("price").value = product.getPrice()
    document.getElementById("image").value = product.getImg()
    document.getElementById("laptop").value = product.getLaptop()
}




// Modal
let modal = document.getElementById("myModal");
let btn = document.getElementById("cart");
let close = document.getElementsByClassName("close")[0];
// // tại sao lại có [0] như  thế này bởi vì mỗi close là một html colection nên khi mình muốn lấy giá trị html thì phải thêm [0].
// Nếu mình có 2 cái component cùng class thì khi [0] nó sẽ hiển thị component 1 còn [1] thì nó sẽ hiển thị component 2.
let close_footer = document.getElementsByClassName("close-footer")[0];
let order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
close.onclick = function () {
    modal.style.display = "none";
}
close_footer.onclick = function () {
    modal.style.display = "none";
}
order.onclick = function () {
    alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
// xóa cart
let remove_cart = document.getElementsByClassName("btn-danger");
for (let i = 0; i < remove_cart.length; i++) {
    let button = remove_cart[i]
    button.addEventListener("click", function () {
        let button_remove = event.target
        button_remove.parentElement.parentElement.remove()
    })
}
updatecart()



// Edit sản phẩm
// let cartRowEdit = `
//   <div class="cart-item cart-column">
//       <img class="cart-item-image" src="${img}" width="100" height="100">
//       <span class="cart-item-name">${name}</span>
//   </div>
//   <span class="cart-price cart-column">${price}</span>
//   <div class="cart-quantity cart-column">
//       <input class="cart-quantity-input" type="number" value="1">
//       <button class="btn btn-edit" type="button">Xóa</button>
//   </div>`
//
//
//
//
//
//
// function editSP() {
//     let edit-product =
// }







// update cart
// Trong file main.js các bạn cũng gọi HTML DOM như ở trên. Mình sẽ giải thích cơ chế hoạt động của updatecart() này cho các bạn dễ hiểu nha.
// Thì nó sẽ gọi .cart_items trong .cart_items có nhiều .cart_row trong mỗi cart_row chứa các thông tin của sản phẩm
// như hình ảnh, tiêu đề, giá tiền của sản phẩm. Bởi vì .cart-row này trong .cart-items nên không thể gọi document được
// mà phải gọi dựa trên DOM của .cart_items.
// Sau khi gọi được cart_rows chúng ta sẽ chạy vòng lặp để biết có bao nhiêu
// .cart_row. Tiếp đến chúng ta sẽ gọi HTML DOM của .cart-price và .cart-quantity-input, bởi vì chỉ có một giá tiền và số lượng sản phẩm nên chúng ta sử dụng [0]
// Tiếp đến chúng ta sẽ lấy giá trị của giá tiền và số lượng của sản phẩm.
// Cuối cùng là tính tổng tiền, ở đây mình sẽ nói rõ ra tí. Total sẽ gán bằng 0 đúng không nào. Sau khi chúng ta tính
// tổng tiền của sản phẩm đầu tiên sẽ được gán vào total. Thì bây giờ total được gán bằng tổng số tiền của sản phẩm đầu tiên, n
// ếu bạn có sản phẩm thứ hai trong giỏ hàng thì total = total của sản phẩm đầu tiên + tổng tiền của sản phẩm thứ hai
// và gán vào total tổng, cứ thế nhiều sản phẩm hơn cũng làm như vậy đó.
function updatecart() {
    let cart_item = document.getElementsByClassName("cart-items")[0];
    let cart_rows = cart_item.getElementsByClassName("cart-row");
    let total = 0;
    for (let i = 0; i < cart_rows.length; i++) {
        let cart_row = cart_rows[i]
        let price_item = cart_row.getElementsByClassName("cart-price ")[0]
        let quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
        let price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
        let quantity = quantity_item.value // lấy giá trị trong thẻ input
        total = total + (price * quantity)
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'
    // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
}

// thay đổi số lượng sản phẩm
let quantity_input = document.getElementsByClassName("cart-quantity-input");
for (let i = 0; i < quantity_input.length; i++) {
    let input = quantity_input[i];
    input.addEventListener("change", function (event) {
        let input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatecart()
    })
}













// Thêm vào giỏ
// Khau báo mảng dữ liệu của sản phẩm.
// addEventListener: Tạo ra hành động kh gọi hàm


let add_cart = document.getElementsByClassName("btn-cart");
for (let i = 0; i < add_cart.length; i++) {
    let add = add_cart[i];
    add.addEventListener("click", function (event) {
        let button = event.target; // Phần tử được thêm Event Listener
        let product = button.parentElement.parentElement;
        let img = product.parentElement.getElementsByClassName("img-prd")[0].src
        let name = product.getElementsByClassName("content-product-h3")[0].innerText
        let price = product.getElementsByClassName("price")[0].innerText
        addItemToCart(name, price, img)
        // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
        modal.style.display = "block";

        updatecart()
    })
}
// Lấy thông tin sản phẩm để thêm vào Cart
function addItemToCart(name, price, img) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cart_name = cartItems.getElementsByClassName('cart-item-name')
    // Nếu name của sản phẩm bằng với name mà bạn thêm vào giỏ hàng thì sẽ thông cho user.
    for (let i = 0; i < cart_name.length; i++) {
        if (cart_name[i].innerText === name) {
            alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
            return
        }
    }
// Tạo bảng trong cart
    let cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-name">${name}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa</button>
  </div>`


    //Thao tác trên Cart
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
        if (confirm('Bạn có chắc là không mua sản phẩm này nữa không ?')){
            let button_remove = event.target
            button_remove.parentElement.parentElement.remove()
            updatecart()
        }

    })
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
        let input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatecart()
    })
}



