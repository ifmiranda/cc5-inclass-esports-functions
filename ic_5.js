// In-class coding challenge Esports Functions 

const products = [ 
    {id: 301, name: "Robot mouse", category:"gear", price: 25.59}, 
    {id: 302, name: "Team wrist band", category: "apparel", price:10.99}, 
    {id: 303, name: "Oreo protein bar", category: "snacks", price: 5.99},
    {id: 304, name: "VIP lounge pass", category: "access", price: 12.99},
    {id: 305, name: "SD card", category: "gear", price: 18.98}
]; 

// Customer cart 
const cart = [ 
    {productID: 302, qty: 1}, 
    {productID: 303, qty: 5}, 
    {productID: 304, qty: 3}, 
    {productID: 305, qty: 4}, 
]; 
// Membership status - "regular", "student", "member", "vip"  
const getCategoryDiscount = "member"; 

function catDiscount(category) { 
    switch(category) {
        case "gear":
            return 0.10;
        case "apparel":
            return 0.15;
        case "snacks":
            return 0.05;
        case "access":
            return 0.12;
        default:
            return 0;
    }
}

function priceAfterCategoryDiscount(product) { 
    rate = getCategoryDiscount(product.category)
    return product.price * (1 - rate); 
}   
function findProductById(id) {
    return products.find(product => product.id === id);
} 








