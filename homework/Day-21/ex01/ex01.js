var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
}
function getError(field) {
    if (field in errors) {
        var fieldErrors = errors[field];
        var errorTypes = Object.keys(fieldErrors);
        for (var i = 0; i < errorTypes.length; i++) {
            var errorType = errorTypes[i];
            if (errorType in fieldErrors && fieldErrors[errorType]) {
                return fieldErrors[errorType];
            }
        }
    }
    return null;
}
console.log(getError('name'));