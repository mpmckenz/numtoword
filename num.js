const ones = [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = [" ", " ", "twenty", "thrity", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const hundreds = ["one-hundred", "two-hundred", "three-hundred", "four-hundred", "five-hundred", "six-hundred", "seven-hundred", "eight-hundred", "nine-hundred"];

let count = document.createElement("div")


for (let i = 1; i < ones.length; i++) {
    count = [i] + ": " + ones[i] + ", ";
    let div1 = document.getElementById("div1");
    let result = document.createTextNode(count);
    div1.appendChild(result)
}

for (let tenplace = 2; tenplace < 10; tenplace++) {
    for (let oneplace = 0; oneplace < 10; oneplace++) {
        count = [tenplace] + [oneplace] + ": " + tens[tenplace] + "-" + ones[oneplace] + ", ";
        let div1 = document.getElementById("div1");
        let result = document.createTextNode(count);
        div1.appendChild(result)
    }}
    
    for (let oneplace = 0; oneplace <10; oneplace++) {
        for (let tenplace = 0; tenplace < 10; tenplace++) {
            for (let hundredplace = 1; hundredplace < 10; hundredplace++) {
    count1 = [hundredplace + 1] + [tenplace + 2] + [oneplace] + ": " + hundreds[hundredplace] + tens[tenplace] + ones[oneplace] + ", ";
    let div1 = document.getElementById("div1");
    let result = document.createTextNode(count);
    div1.appendChild(result);
}}}