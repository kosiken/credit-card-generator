function generateRandomSequence(length = 10) {
    let seq = '';
    for (let i = 0; i < length; i++) {
        seq+=   (Math.floor(Math.random() *  9)).toString()
    }
    
    return seq;
}

function generateCreditCardNumberUsingQuestionAlgorithm() {
    // start with 9 digits
    let sequence = generateRandomSequence(9).split('');
    let len = sequence.length;
    let sum = 0;
    // flag if we should double the value
    let shouldDouble = false;
    // start from left this time and double every second number 
    for(let i = 0; i < len; i++) {
        
        let num = parseInt(sequence[i]) *(shouldDouble ? 2 : 1);
        // number is > 9 reduce it
        if(num > 9) {
            num = (num.toString().split('').reduce((a, b) => a + parseInt(b), 0))
        }
        sum += num;
        // alternate doubling numbers
        shouldDouble = !shouldDouble;

    }
    // if sum is already a multiple of ten just add zero
    if(sum % 10 === 0) {
        return sequence.join('') + '0';
    }
    // next multiple of ten after the sum
    const nextTen = (parseInt(sum.toString().charAt(0)) + 1) * 10;

    // number needed is a number whose double added to the sum would result
    // in a multiple of 10
    const numberNeeded = (nextTen - sum) / 2;

    
    if(Math.ceil(numberNeeded) >  Math.floor(numberNeeded)) {
        // we dont want fractions like 2.5, because this would corrupt the result. So we go again
        return generateCreditCardNumberUsingQuestionAlgorithm(); 
    }
    // We have found our number
    return sequence.join('') + Math.floor(numberNeeded);
}

function generateCreditCardNumberLuhnAlgo() {
    let sequence = generateRandomSequence().split('');
    let initialSequence = sequence.join('');
    let len = sequence.length;

    for(let i = len - 1; i > -1; i = i - 2) {
        let num = parseInt(sequence[i]) * 2;
        if(num > 9) {
            num = (num.toString().split('').reduce((a, b) => a + parseInt(b), 0))
        }
        sequence[i] = num.toString();

    }
    const sum = sequence.reduce((a, b) => a + parseInt(b), 0)
    
    return initialSequence +=  (10 - (sum % 10).toString());
}

function numberIsValidUsingQuestionAlgorithm(seq = '') {
    if(seq.length < 10) {
        return false;
    }
   
    let needed = seq;
    let sum = 0;
    let shouldDouble = true;
    for(let i = needed.length - 1; i > -1; i--) {
        let num = (parseInt(needed.charAt(i), 10) * (shouldDouble ? 2 : 1));
        if(isNaN(num)) {
            return false;
        }
        if(num > 9) {
            num = (num.toString().split('').reduce((a, b) => a + parseInt(b), 0))
        }
        sum+=num;
        shouldDouble = !shouldDouble;

    }
    return (sum % 10) == 0;
}

function numberIsValidUsingLuhnAlgo(seq = '') {
    if(seq.length < 10) {
        return false;
    }
    let check = parseInt(seq.charAt(seq.length - 1));
    let needed = seq.slice(0, seq.length - 1);
    let sum = 0;
    let shouldDouble = true;
    for(let i = needed.length - 1; i > -1; i--) {
        let num = (parseInt(needed.charAt(i)) * (shouldDouble ? 2 : 1));
        if(isNaN(num)) {
            return false;
        }
        if(num > 9) {
            num = (num.toString().split('').reduce((a, b) => a + parseInt(b), 0))
        }
        sum+=num;
        shouldDouble = !shouldDouble;

    }
    return ((sum + check) % 10) == 0;
}

module.exports = {generateCreditCardNumberUsingQuestionAlgorithm, numberIsValidUsingQuestionAlgorithm, numberIsValidUsingLuhnAlgo, generateCreditCardNumberLuhnAlgo};