const ShopProducts = [
    {
        producId: 123,
        productName: "Samsung galaxy",
        companyName: "samsung",
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
]

function searchProducts(company: string): string[];
function searchProducts(stock: number): string[];
function searchProducts(company: string, minPrice: number): string[];
function searchProducts(company: string, minPrice: number, maxPrice: number): string[];

function searchProducts(value: string | number, minPrice?: number, maxPrice?: number): string[] {
  const Products: string[] = [];

  if (typeof(value) === "string" && minPrice === undefined && maxPrice === undefined) {
    for (const p of ShopProducts) {
      if (p.companyName.toLowerCase() === value.toLowerCase()) Products.push(p.productName);
    }
  }
  else if (typeof(value) === "number" && minPrice === undefined) {
    for (const p of ShopProducts) {
      if (p.quantity >= value) Products.push(p.productName);
    }
  }
  else if (typeof(value) === "string" && typeof(minPrice) === "number" && maxPrice === undefined) {
    for (const p of ShopProducts) {
      if (p.companyName.toLowerCase() === value.toLowerCase() && p.price >= minPrice)
        Products.push(p.productName);
    }
  }
  else if (typeof(value) === "string" && typeof(minPrice) === "number" && typeof(maxPrice) === "number") {
    for (const p of ShopProducts) {
      if (p.companyName.toLowerCase() === value.toLowerCase() && p.price >= minPrice && p.price <= maxPrice)
        Products.push(p.productName);
    }
  }

  return Products;
}
// console.log(searchProducts("Samsung"));
console.log(searchProducts("apple", 80000, 150000));
// console.log(searchProducts(35));

