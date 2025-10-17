const ShopProducts = [
    {
        productID:1255,
        productName:'Samsung Galaxy',
        companyName:'samsung',
        unitPrice:3400,
        availableQuantity:45
    },
    {
        productID:1255,
        productName:'Apple 16',
        companyName:'sapple',
        unitPrice:3400,
        availableQuantity:45
    },
    {
        productID:1255,
        productName:'Apple 17',
        companyName:'apple',
        unitPrice:3400,
        availableQuantity:21
    },
    {
        productID:1255,
        productName:'Cherry 12',
        companyName:'Cherry',
        unitPrice:3400,
        availableQuantity:25
    }
];

function searchProducts(company: string): string[];
function searchProducts(stock: number): number[];
function searchProducts(value: string | number): (string|number)[] {
    const availableProducts = [...ShopProducts];
    const Products: string[] = [];
    if(typeof(value)==='string'){
        for (const product of availableProducts) {
            if(product.companyName===value) Products.push(product.productName);
        }
    }else{
        for (const product of availableProducts) {
            if(product.availableQuantity>=value){
                Products.push(product.productName);
            }
        }
    }
    return Products;
}
console.log(searchProducts("Samsung"));
console.log(searchProducts(35));
