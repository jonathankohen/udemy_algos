// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
    let lower = pin.toLowerCase();
    let upper = pin.toUpperCase();

    if (pin.length === 4 || pin.length === 6) {
        for (let i = 0; i < pin.length; i++) {
            // console.log(pin[i]);
            if (
                pin[i] === '-' ||
                pin[i] === '.' ||
                lower[i] !== upper[i] ||
                lower[i].trim() === ''
            ) {
                // console.log('first');
                return false;
            }
        }
        return true;
    } else {
        // console.log('second');
        return false;
    }
}

console.log(validatePIN('1'));
console.log(validatePIN('12'));
console.log(validatePIN('123'));
console.log(validatePIN('12345'));
console.log(validatePIN('1234567'));
console.log(validatePIN('-1234'));
console.log(validatePIN('1.234'));
console.log(validatePIN('-1.234'));
console.log(validatePIN('00000000'));
console.log(validatePIN('a234'));
console.log(validatePIN('234'));

console.log('***********');

console.log(validatePIN('1234'));
console.log(validatePIN('0000'));
console.log(validatePIN('1111'));
console.log(validatePIN('123456'));
console.log(validatePIN('098765'));
console.log(validatePIN('000000'));
console.log(validatePIN('123456'));
console.log(validatePIN('090909'));
