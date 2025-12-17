// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
inventory.push({name: 'Orange', price: 20, quantity: 300})
let totalPrice = 0
for(let fruit of inventory){
  totalPrice += fruit.price * fruit.quantity
}

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalPrice}`)

// //Function สำหรับ add new โดยไม่ต้อง push
// const addNewFruitToInventory = (name,price,quantity)=>{
//   inventory.push({name: name, price: price, quantity: quantity})
// }
// addNewFruitToInventory('Lychee',26,320)
// console.log(inventory)

// // Function สำหรับ หา Total Price
// const calculateTotalPrice = (fruitList)=>{
//   let totalPrice = 0
//   for(let fruit of fruitList){
//     totalPrice += fruit.price * fruit.quantity
//   } return `มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalPrice}`
// }
// console.log(calculateTotalPrice(inventory))