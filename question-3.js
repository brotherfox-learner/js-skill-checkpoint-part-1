// Question #3
let userPassword = "TechUp";
// เริ่มเขียนโค้ดตรงนี้
const checkPasswordStrength = (password) => {
  return password.length < 6
    ? "Weak"
    : password.length > 10
    ? "Strong"
    : "Medium";
};

console.log(checkPasswordStrength(userPassword))