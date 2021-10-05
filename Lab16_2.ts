// TALLEST MOUNTAIN
interface Mountain {
    name: string;
    height: number;
};

let mountains: Mountain[] = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310},
];

function findNameOfTallestMountain(mountains: Mountain[]): string {
    let tallestheight: number = 0;
    let currentmountainname: string = '';

    for (let i = 0; i < mountains.length; i++) {
        if (mountains[i].height > tallestheight) {
            tallestheight = mountains[i].height;
            currentmountainname = mountains[i].name;
        }
    }

    return currentmountainname;

}

let nameOfTallestMountain: string = findNameOfTallestMountain(mountains);
console.log('The tallest mountain is: ' + nameOfTallestMountain);


// PRODUCTS
interface Product {
    name: string;
    price: number;
};

let products: Product[] = [
    {name: 'Hot Cheetos', price: 2.00},
    {name: 'Sprite', price: 2.50},
    {name: 'Pizza Slice', price: 3.50},
];

function calcAverageProductPrice(products: Product[]): number {
    let totalproductprice: number = 0;
    let averageproductprice: number = 0;

    totalproductprice = products[0].price + products[1].price + products[2].price; 

    averageproductprice = totalproductprice / products.length;

    return averageproductprice; 
}

let averageProductPrice: number = calcAverageProductPrice(products);
console.log('Average price is: ' + averageProductPrice);

// INVENTORY
interface InventoryItem {
    product: Product;
    quantity: number;
};

let inventory: InventoryItem[] = [
    { product: { name: 'motor', price: 10.00}, quantity: 10},
    { product: { name: 'sensor', price: 12.50}, quantity: 4},
    { product: { name: 'LED', price: 1.00}, quantity: 20}   
    
];

function calcInventoryValue(items: InventoryItem[]): number {
    let totalmotorquantityvalue: number = 0;
    let totalsensorquantityvalue: number = 0;
    let totalLEDquantityvalue: number = 0;
    let totalinventoryvalue: number = 0;

    totalmotorquantityvalue = inventory[0].product.price * inventory[0].quantity;

    totalsensorquantityvalue = inventory[1].product.price * inventory[1].quantity;

    totalLEDquantityvalue = inventory[2].product.price * inventory[2].quantity;

    totalinventoryvalue = totalmotorquantityvalue + totalsensorquantityvalue + totalLEDquantityvalue;
    
    return totalinventoryvalue;
}

let inventoryValue: number = calcInventoryValue(inventory);
console.log('Inventory value is: ' + inventoryValue);