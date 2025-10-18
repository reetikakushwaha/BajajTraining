// function saleNetProfit(cogs:number, expense:number, actualSales:number, gstPercent:number): number{
//     const gstAmount: number = actualSales * gstPercent /100;
//     return actualSales - (cogs + expense + gstPercent) 
// }
// console.log(`Sales Net Profit is: ${saleNetProfit(12000, 13000,150000, 18)}`);

type PizzaOrderType = {
  orderId: number;
  orderDate: Date;
  pizza: string;
  price: number;
  status: string;
};

const PizzaOrder: PizzaOrderType = {
  orderId: 3893,
  orderDate: new Date(),
  pizza: "Veg Italiano",
  price: 450,
  status: "PizzaHut has accepted your order!",
};

const PizzaInOven: PizzaOrderType = {
  ...PizzaOrder,
  status: "Your Pizza is getting baked!",
};

const PizzaOutForDelivery: PizzaOrderType = {
  ...PizzaInOven,
  status: "Your Pizza is out for delivery!",
};

console.log(PizzaOrder);
console.log(PizzaInOven);
console.log(PizzaOutForDelivery);
