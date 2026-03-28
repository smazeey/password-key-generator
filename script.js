
alert("Hello, Welcome Back!.");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const passwordInput = document.getElementById("password");


const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols ="!@#$%^&*()_+ . ,`~-[?/{{}";

generateBtn.addEventListener("click",()=> {
const length = document.getElementById("length").value;
const useUppercase = document.getElementById("uppercase").checked;
const useNumbers = document.getElementById("numbers").checked;
const useSymbols = document.getElementById("symbols").checked;

let chars = letters;
if (useUppercase) chars += letters.toUpperCase();
if (useNumbers) chars += numbers;
if (useSymbols) chars +=symbols;

let  password="";
 for (let i =0; i < length;i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
 }
 passwordInput.value = password;
})

copyBtn.addEventlistener("click", () => {
passwordInput.select ();
document.execCommand("copy");
alert("password copied!.");
});
