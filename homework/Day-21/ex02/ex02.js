function Customer(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}
function createCustomers(customers) {
    customers.sort(function (a, b) {
        return a.age - b.age;
    });
    var result = customers.map(function (customer) {
        var newCustomer = new Customer(customer.name, customer.age, customer.address);
        var nameParts = customer.name.split(" ");
        var lastName = nameParts[nameParts.length - 1];
        newCustomer.shortName = "Nguyễn " + lastName.charAt(0);
        return newCustomer;
    });

    return result;
}
var customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn c", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn B", age: 12, address: "TP.HCM" },
];
var result = createCustomers(customers);
console.log(result);
