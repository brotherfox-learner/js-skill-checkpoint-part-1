// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
const findMinQuantity = (fruits) => {
  let minFruit = fruits[0];
  for (let fruit of fruits) {
    if (fruit.quantity < minFruit.quantity) {
      minFruit = fruit;
    }
  }
  let msg = `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minFruit.name} ซึ่งมี ${minFruit.quantity} ชิ้น`;
  return msg;
};

console.log(findMinQuantity(inventory));

// //Add Find max fruit
// const findMaxQuantity = (fruits) => {
//   let minFruit = fruits[0];
//   for (let fruit of fruits) {
//     if (fruit.quantity > minFruit.quantity) {
//       minFruit = fruit;
//     }
//   }
//   let msg = `สินค้าที่มีจำนวนสูงที่สุดในคลังสินค้าคือ ${minFruit.name} ซึ่งมี ${minFruit.quantity} ชิ้น`;
//   return msg;
// };
// console.log(findMaxQuantity(inventory));
// //Higher order to call function
// const displayFruit = (fruitList, callback) => {
//   return callback(fruitList)
// }
// console.log(displayFruit(inventory,findMinQuantity))
// console.log(displayFruit(inventory,findMaxQuantity))
