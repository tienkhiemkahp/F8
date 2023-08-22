function User(name, password, email, role) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.role = role || "user";
}
function register(data, name, password, email) {
    if (!name || !password || !email) {
        console.log("Lỗi: Thông tin không đủ");
        return;
    }
    var existingUser = data.find(function(user) {
        return user.email === email;
    });
    if (existingUser) {
        console.log("Lỗi: Email đã tồn tại");
        return;
    }
    var newUser = new User(name, password, email);
    data.push(newUser);
}
function login(data, email, password) {
    var user = data.find(function(user) {
        return user.email === email && user.password === password;
    });
    if (user) {
        return user;
    } else {
        console.log("Thông tin đăng nhập không hợp lệ");
        return null;
    }
}
var data = [];
register(data, "Nguyen Van A", "123456", "nguyenvana@email.com");
register(data, "Nguyen Van B", "1234567", "nguyenvanb@email.com");
var dataLogin = login(data, "nguyenvanb@email.com", "1234567");
console.log("data =", data);
console.log("dataLogin =", dataLogin);
