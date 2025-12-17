// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";

// เริ่มเขียนโค้ดตรงนี้
const calculateTotalPrice = (productList, code) => {
  let totalPrice = 0;
  for (let product of productList) {
    totalPrice += product.price * product.quantity;
  }
  let discountedPrice =
    code === "SALE20"
      ? (totalPrice * 80) / 100
      : code === "SALE50"
      ? (totalPrice * 50) / 100
      : totalPrice;
  // // If-else - 1
  // let discountedPrice = totalPrice;
  // if (code === "SALE20") {
  //   discountedPrice = (totalPrice * 80) / 100;
  // } else if (code === "SALE50") {
  //   discountedPrice = (totalPrice * 50) / 100;
  // }

  // // Switch-case - 2
  // switch(code){
  //   case("SALE20"): discountedPrice = (totalPrice * 80) / 100; break;
  //   case("SALE50"): discountedPrice = (totalPrice * 50) / 100; break;
  //   default: discountedPrice = totalPrice;
  // }
  return discountedPrice;
};
console.log(calculateTotalPrice(products, promotionCode));
