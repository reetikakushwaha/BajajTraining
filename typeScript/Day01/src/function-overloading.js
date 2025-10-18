"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ShopProducts = [
    {
        producId: 123,
        productName: "Samsung galaxy",
        companyName: "samgung",
        price: 34000,
        quantity: 65,
    },
    {
        producId: 124,
        productName: "iphone 17",
        companyName: "Apple",
        price: 150000,
        quantity: 15,
    },
    {
        producId: 125,
        productName: "Moto 5g",
        companyName: "motorola",
        price: 32000,
        quantity: 45,
    },
    {
        producId: 126,
        productName: "iphone 16 pro",
        companyName: "apple",
        price: 120000,
        quantity: 12,
    },
    {
        producId: 127,
        productName: "Nokia 7",
        companyName: "Nokia",
        price: 8000,
        quantity: 45,
    },
];
function searchProducts(value) {
    var availableProducts = __spreadArray([], ShopProducts, true);
    var Products = [];
    if (typeof (value) === 'string') {
        for (var _i = 0, availableProducts_1 = availableProducts; _i < availableProducts_1.length; _i++) {
            var product = availableProducts_1[_i];
            if (product.companyName === value)
                Products.push(product.productName);
        }
    }
    else {
        for (var _a = 0, availableProducts_2 = availableProducts; _a < availableProducts_2.length; _a++) {
            var product = availableProducts_2[_a];
            if (product.quantity >= value) {
                Products.push(product.productName);
            }
        }
    }
    return Products;
}
console.log(searchProducts("Samsung"));
console.log(searchProducts(35));
//# sourceMappingURL=function-overloading.js.map