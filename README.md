# Credit card number generator

You can run

```js

let {generateCreditCardNumberUsingQuestionAlgorithm, numberIsValidUsingQuestionAlgorithm, numberIsValidUsingLuhnAlgo, generateCreditCardNumberLuhnAlg} = require('./index') 

let n = generateCreditCardNumberUsingQuestionAlgorithm() // question algo
console.log(n)
console.log(numberIsValidUsingQuestionAlgorithm(n)) // question algo
console.log(numberIsValidUsingLuhnAlgo(generateCreditCardNumberLuhnAlgo())) // luhn algo

```

# Author

Allison Kosisochukwu