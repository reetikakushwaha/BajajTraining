// function SalesNetProfit(cogs, expense, actualSales, gstPercent  = 0){
//     let gstAmount = (actualSales * gstPercent) / 100;
//     return actualSales - (cogs + expense + gstAmount);
// }

// console.log(`Bajaj net profit is ${SalesNetProfit(1200, 1234, 12345)}`);


// function travelCities(country, ...cities) {
//   console.log(`In country ${country} - You will travel to - `);
//   for (const city of cities) {
//     console.log(`City - ${city}!`);
//   }
// }

// const BajajOffices = [ "Bangalore", "Chennai", "Mumbai", "Pune"];

// travelCities("India", "Bangalore", "Chennai");
// travelCities("India", "Bangalore", "Chennai", "Hyderabad");
// travelCities("India", "Bangalore", "Chennai", "Mumbai", "Pune");


//Spread operator - It unpacks the collection values [Array, String, Object]
// travelCities("India", ...BajajOffices);

const PizzaOrder = {
  orderId: 3893,
  orderDate: new Date(),
  pizza: "Veg Italiano",
  price: 450,
  status: "PizzaHut has accepted your order!",
};
const PizzaInOven={
    ...PizzaOrder,
    status:"Your Pizza is getting baked!"
}
const PizzaOutForDelivery={
    ...PizzaInOven,
    status:"Your Pizza is out for delivery!"
}
console.log(PizzaOrder);
console.log(PizzaInOven);
console.log(PizzaOutForDelivery);