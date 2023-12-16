const inputArea = document.getElementsByClassName("display")[0];
const copyBtn = document.getElementsByClassName("data-copy")[0];
const slider = document.getElementsByClassName("slider")[0];
const generatePassword = document.getElementsByClassName("generateButton")[0];
const showLengthSlider = document.getElementsByClassName("data-lengthNumber")[0];
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("numbers");
const symbol = document.getElementById("symbols");
let password = "";
let passwordLength;

slider.addEventListener('input', (e) => {
    let sliderValue = e.target.value;
    passwordLength = sliderValue;
    showLengthSlider.innerText = passwordLength;
});

generatePassword.addEventListener("click", () => {
    let str = [
        ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."]
    ];
    let str_user = [];
    
    if (uppercase.checked) str_user = str_user.concat(str[0]);
    if (lowercase.checked) str_user = str_user.concat(str[1]);
    if (number.checked) str_user = str_user.concat(str[2]);
    if (symbol.checked) str_user = str_user.concat(str[3]);

    if (str_user.length) {
        password = "";
        for (let i = 0; i < passwordLength; i++) {
            let v = Math.floor(Math.random() * str_user.length);
            password += str_user[v];
        }
    }
    inputArea.value = password;

});

copyBtn.addEventListener('click', async () => {
    let value1 = inputArea.value; // Use 'value' for input elements
    try {
        await navigator.clipboard.writeText(value1);
        console.log('Text successfully copied to clipboard!');
    } catch (err) {
        console.error('Unable to copy text to clipboard:', err);
    }
})

