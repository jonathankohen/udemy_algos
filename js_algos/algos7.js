function dec2BinStr(value) {
    let arr = [];
    while (value > 0) {
        // Saves the remainer of the value
        let y = value % 2;
        // Add remainders into arr in reverse order
        arr.unshift(y);
        // Updates the value
        value = Math.floor(value / 2); //
    }

    // joins the array into a string
    let str = arr.join('');
    return str;
}

console.log(dec2BinStr(75));

const hex2Decimal = hex => {
    let hexString = hex.replace('0x', '');
    (arr = [...hexString].reverse()), (output = 0);

    // loop
    for (let i = 0, len = arr.length; i < len; i++) {
        // setup letters
        if (arr[i] === 'A') {
            output += 10;
        } else if (arr[i] === 'B') {
            output += 11;
        } else if (arr[i] === 'C') {
            output += 12;
        } else if (arr[i] === 'D') {
            output += 13;
        } else if (arr[i] === 'E') {
            output += 14;
        } else if (arr[i] === 'F') {
            output += 15;
            // spit out the numbers
        } else {
            // append to output
            output += arr[i] * Math.pow(16, i);
        }
    }

    return output;
};

//debug
console.log(hex2Decimal('0x6C'));

const hex2Decimal = hex => {
    let hexString = hex.replace('0x', '');
    (arr = [...hexString].reverse()), (output = 0);

    // loop
    for (let i = 0, len = arr.length; i < len; i++) {
        // setup letters
        if (arr[i] === 'A') {
            output += 10;
        } else if (arr[i] === 'B') {
            output += 11;
        } else if (arr[i] === 'C') {
            output += 12;
        } else if (arr[i] === 'D') {
            output += 13;
        } else if (arr[i] === 'E') {
            output += 14;
        } else if (arr[i] === 'F') {
            output += 15;
            // spit out the numbers
        } else {
            // append to output
            output += arr[i] * Math.pow(16, i);
        }
    }

    return output;
};

//debug
console.log(hex2Decimal('0x6C'));

function decimalToHexa(num) {
    var hexa = '';
    while (num > 0) {
        num = num / 16;
        var remainder = (num - Math.floor(num)) * 16;
        switch (remainder) {
            case 10:
                hexa = 'a' + hexa;
                break;
            case 11:
                hexa = 'b' + hexa;
                break;
            case 12:
                hexa = 'c' + hexa;
                break;
            case 13:
                hexa = 'd' + hexa;
                break;
            case 14:
                hexa = 'e' + hexa;
                break;
            case 15:
                hexa = 'f' + hexa;
                break;
            default:
                hexa = remainder.toString() + hexa;
        }
        num = Math.floor(num);
    }

    return hexa;
}
