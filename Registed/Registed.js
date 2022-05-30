function Redirect() {
    window.location="http://localhost:63342/Shop/Index.html?_ijt=fg4t9cgf2a5fgntid7p1odaest&_ij_reload=RELOAD_ON_SAVE";
}

function dangNhap() {
    let Login = document.getElementById("form-login-group").value;
    let pass = document.getElementById("form-login-pass").value;
    if ((Login === "admin") && (pass === "123456")) {
        Redirect()
    }
    else {
        alert(' Tài khoản hoặc mật khẩu không chính xác')
    }
}
function dangKy(user, password) {
    localStorage.setItem('user')
}