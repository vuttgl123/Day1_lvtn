// Cài đặt sự kiện cho nút "EN" và "VN"
document.getElementById("lang-en").addEventListener("click", function () {
    changeLanguage("en");
});

document.getElementById("lang-vn").addEventListener("click", function () {
    changeLanguage("vn");
});

// Hàm thay đổi ngôn ngữ
function changeLanguage(lang) {
    // Duyệt qua tất cả các phần tử có thuộc tính data-translate
    var textElements = document.querySelectorAll('[data-translate]');

    textElements.forEach(function (element) {
        var key = element.getAttribute('data-translate');
        var translation = translate(key, lang); // Gọi hàm dịch

        // Kiểm tra và cập nhật các thuộc tính thích hợp
        if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
            // Cập nhật placeholder
            element.setAttribute('placeholder', translation);
        } else {
            // Cập nhật nội dung text
            element.textContent = translation;
        }
    });

    // Cập nhật màu sắc cho nút ngôn ngữ đang được chọn
    updateLanguageButtons(lang);
}


// Hàm dịch văn bản giả lập
function translate(key, lang) {
    var translations = {
        "my-orders": {
            "en": "My Orders",
            "vn": "Đơn hàng của tôi"
        },
        "sale-tickets": {
            "en": "Sell Tickets on Vubac",
            "vn": "Mở bán vé trên Vubac"
        },
        "become-partner": {
            "en": "Become a Partner",
            "vn": "Trở thành đối tác"
        },
        "hotline": {
            "en": "24/7 Hotline",
            "vn": "Hotline 24/7"
        },
        "login": {
            "en": "Login",
            "vn": "Đăng nhập"
        },
        "register": {
            "en": "Register",
            "vn": "Đăng ký"
        },
        "forgot-password": {
            "en": "Forgot Password?",
            "vn": "Quên mật khẩu?"
        },
        "enter-phone": {
            "en": "Enter phone number",
            "vn": "Nhập số điện thoại"
        },
        "enter-phone-placeholder": {
            "en": "Enter phone number",
            "vn": "Nhập số điện thoại"
        },
        "enter-password": {
            "en": "Enter password",
            "vn": "Nhập mật khẩu"
        },
        "enter-password-placeholder": {
            "en": "Enter your password",
            "vn": "Nhập mật khẩu"
        },
        "login-button": {
            "en": "Login",
            "vn": "Đăng nhập"
        },
        "register-button": {
            "en": "Register",
            "vn": "Đăng ký"
        },
        "service-promise-vn": {
            "en": "Promise to refund 150% if ",
            "vn": "Cam kết hoàn 150% nếu "
        },
        "service-promise-vn-2": {
            "en": "the transport service is not provided (*)",
            "vn": "nhà xe không cung cấp dịch vụ vận chuyển (*)"
        },
        "login-title": {
            "en": "Log in to your account",
            "vn": "Đăng nhập tài khoản"
        },
        "register-title": {
            "en": "Register a new account",
            "vn": "Đăng ký tài khoản mới"
        },
    };


    // Trả về bản dịch hoặc trả lại khóa nếu không tìm thấy
    return translations[key] ? translations[key][lang] : key;
}

// Hàm cập nhật màu sắc cho nút ngôn ngữ đang được chọn
function updateLanguageButtons(lang) {
    // Loại bỏ lớp 'active' khỏi cả hai nút
    document.getElementById('lang-en').classList.remove('active');
    document.getElementById('lang-vn').classList.remove('active');

    // Thêm lớp 'active' vào nút được chọn
    if (lang === 'en') {
        document.getElementById('lang-en').classList.add('active');
    } else {
        document.getElementById('lang-vn').classList.add('active');
    }
}


