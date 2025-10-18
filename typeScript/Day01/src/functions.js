"use strict";
// function saleNetProfit(cogs:number, expense:number, actualSales:number, gstPercent:number): number{
//     const gstAmount: number = actualSales * gstPercent /100;
//     return actualSales - (cogs + expense + gstPercent) 
// }
// console.log(`Sales Net Profit is: ${saleNetProfit(12000, 13000,150000, 18)}`);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var PizzaOrder = {
    orderId: 3893,
    orderDate: new Date(),
    pizza: "Veg Italiano",
    price: 450,
    status: "PizzaHut has accepted your order!",
};
var PizzaInOven = __assign(__assign({}, PizzaOrder), { status: "Your Pizza is getting baked!" });
var PizzaOutForDelivery = __assign(__assign({}, PizzaInOven), { status: "Your Pizza is out for delivery!" });
console.log(PizzaOrder);
console.log(PizzaInOven);
console.log(PizzaOutForDelivery);
//# sourceMappingURL=functions.js.map