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

// Example function to list products in the cart
function productsInCart(cart, products) {
    return cart.map(item => {
        const product = products.find(p => p.id === item.productID);
        return {
            ...product,
            qty: item.qty
        };
    });
}