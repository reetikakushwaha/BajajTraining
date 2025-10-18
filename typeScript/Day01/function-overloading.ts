const ShopProducts = [
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
]

function searchProducts(company: string): string[];
function searchProducts(stock: number): string[];
function searchProducts(value: string | number): string[] {
    const availableProducts = [...ShopProducts];
    const Products: string[] = [];
    if(typeof(value)==='string'){
        for (const product of availableProducts) {
            if(product.companyName===value) Products.push(product.productName);
        }
    }else{
        for (const product of availableProducts) {
            if(product.quantity>=value){
                Products.push(product.productName);
            }
        }
    }
    return Products;
}
console.log(searchProducts("Samsung"));
console.log(searchProducts(35));

