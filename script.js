
const resultbtn = document.getElementById('btnn');
const result = document.getElementById("result");
const resetbtn = document.getElementById("reset");
const methodd = document.getElementById("bin_text");

resultbtn.addEventListener('click', giveresult);
resetbtn.addEventListener('click', reset);


function convertToBinary(x) {
    let num = Number(x);
    num = num.toString(2);
    return num;
}

function convertToHexa(x) {
    let hexStr = Number(x);
    hexStr = hexStr.toString(16);
    return hexStr;
}

function convertToOct(x) {
    let num = Number(x);
    num = num.toString(8);
    return num;
}


function reset() {
    document.location.reload(true);
}

let selvalue = 1;
function getselectvalue() {
    selvalue = document.getElementById("method").value;
    console.log(selvalue);
    result.innerHTML = "Result";
};

function methodSelect(num) {
    if (num === '1') {
        methodd.innerHTML = "Binary Number:";
    } else if (num === '2') {
        methodd.innerHTML = "Hexadecimal Number:"
    } else if (num === '3') {
        methodd.innerHTML = "Octal Number:"
    }
}


function giveresult() {
    let bin_res = 0;
    let decnum = document.getElementById('dec_num').value;
    if (selvalue == "1") {
        bin_res = convertToBinary(decnum);
    } else if (selvalue == "2") {
        bin_res = convertToHexa(decnum);
    } else if (selvalue == "3") {
        bin_res = convertToOct(decnum);
    }
    console.log(decnum);
    result.style.color = "Black";
    result.innerHTML = bin_res;
}