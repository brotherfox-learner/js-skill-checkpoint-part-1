// Question #3
let userPassword = "abcde";
// เริ่มเขียนโค้ดตรงนี้
const checkPasswordStrength = (password) => {
  return password.length < 6
    ? "Weak"
    : password.length > 10
    ? "Strong"
    : "Medium";
};

console.log(checkPasswordStrength(userPassword));

// Handle Edge cases เพิ่มให้ไม่ Error => let userPassword = udf || null || 2131232 ;
// let userPassword2 = '';
// const checkPasswordStrength2 = (password) => {
//   if (!password && password !== 0) {
//     return "The password must be text or nnumber only!!!";
//   } else {
//     let strPass = String(password);
//     return strPass.length < 6
//       ? "Weak"
//       : strPass.length > 10
//       ? "Strong"
//       : "Medium";
//   }
// };
// console.log(checkPasswordStrength2(userPassword2));
