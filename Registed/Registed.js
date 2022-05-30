function Redirect() {
    window.location="http://localhost:63342/Index.html/Index.html?_ijt=i8a13u3574n5gkkfoh8hbook9v&_ij_reload=RELOAD_ON_SAVE";
}

function dangNhap() {
    let Login = document.getElementById("form-login-group").value;
    let pass = document.getElementById("form-login-pass").value;
    if ((Login == "admin") && (pass == "123456")) {
        Redirect()
    }
    else {
        alert(' Tài khoản hoặc mật khẩu không chính xác')
    }
}