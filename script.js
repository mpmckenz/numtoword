const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const oneToTwenty = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const hundreds = ["", "one-hundred", "two-hundred", "three-hundred", "four-hundred", "five-hundred",
    "six-hundred", "seven-hundred", "eight-hundred", "nine-hundred"];

// 1 to 19: use this to count to 19 for each 100
for (let i = 1; i < oneToTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (oneToTwenty[i] + " ")
    document.body.appendChild(div);
}

// 20 to 100: used this to count to the next 100
for (let i = 1; i < tens.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (tens[i] + " " + ones[x] + " ");
        document.body.appendChild(div);
    }
}
// 100th place
for (let i = 1; i < oneToTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[1] + " " + oneToTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < tens.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[1] + " " + tens[i] + " " + ones[x] + " ");
        document.body.appendChild(div);
    }
}

// 200th place
for (let i = 1; i < oneToTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[2] + " " + oneToTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < tens.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[2] + " " + tens[i] + " " + ones[x] + " ");
        document.body.appendChild(div);
    }
}

// 300th place
for (let i = 1; i < oneToTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[3] + " " + oneToTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < tens.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[3] + " " + tens[i] + " " + ones[x] + " ");
        document.body.appendChild(div);
    }
}

// 400th place
for (let i = 1; i < oneToTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[4] + " " + oneToTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < tens.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[4] + " " + tens[i] + " " + ones[x] + " ");
        document.body.appendChild(div);
    }
}

// 500th place
for (let i = 1; i < oneToTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[5] + " " + oneToTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < tens.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[5] + " " + tens[i] + " " + ones[x] + " ");
        document.body.appendChild(div);
    }
}

// 600th place
for (let i = 1; i < oneToTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[6] + " " + oneToTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < tens.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[6] + " " + tens[i] + " " + ones[x] + " ");
        document.body.appendChild(div);
    }
}

// 700th place
for (let i = 1; i < oneToTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[7] + " " + oneToTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < tens.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[7] + " " + tens[i] + " " + ones[x] + " ");
        document.body.appendChild(div);
    }
}

// 800th place
for (let i = 1; i < oneToTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[8] + " " + oneToTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < tens.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[8] + " " + tens[i] + " " + ones[x] + " ");
        document.body.appendChild(div);
    }
}

// 900th place
for (let i = 1; i < oneToTwenty.length; i++) {
    let div = document.createElement("div");
    div.textContent = (hundreds[9] + " " + oneToTwenty[i] + " ")
    document.body.appendChild(div);
}
for (let i = 1; i < tens.length; i++) {
    for (let x = 0; x <= 9; x++) {
        let div = document.createElement("div");
        div.textContent = (hundreds[9] + " " + tens[i] + " " + ones[x] + " ");
        document.body.appendChild(div);
    }
}