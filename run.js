const readline = require('readline');
let { numberIsValidUsingQuestionAlgorithm, generateCreditCardNumberUsingQuestionAlgorithm } = require('./index')

const int = readline.createInterface(
    process.stdin, process.stdout);


function validateNumber() {
    int.question('Enter the Credit card number \n | input: ', (d) => {
        const res = d.trim();

        console.log(numberIsValidUsingQuestionAlgorithm(res) ? '\nCredit card number is valid \n' : '\nInvalid number \n');
        runPrompts()

    })
}

function genrateNumber() {
    console.log( '\n Here is a valid number: ' +  generateCreditCardNumberUsingQuestionAlgorithm() + '\n') ;
}


function runPrompts() {
    int.question('Enter a query: 1:  validate Credit card number,  2: Credit card generate number 3: end \n | input: ', (d) => {
        const ans = d.trim();
        if(ans === '1') {
            validateNumber()
        }
        else if(ans === '2') {
            genrateNumber();
        }
        else if(ans ==='3') {
            console.log('Shutting down..')
            process.exit(0);

        }
        runPrompts();
    })
    
}
runPrompts()