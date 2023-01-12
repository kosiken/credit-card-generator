/// <reference types="chai" />
const {expect, assert, should} = require('chai');

let {numberIsValidUsingQuestionAlgorithm,  generateCreditCardNumberUsingQuestionAlgorithm} = require('./index') 

describe('Credit card tests', () => {
    it('should generate a credit card number', () => {
        const result = generateCreditCardNumberUsingQuestionAlgorithm();
        should().exist(result);
        expect(result).to.haveOwnProperty('length');
        expect(result.length).to.be.eq(10)
    })
    it('should validates a valid credit card number', () => {
        const result = numberIsValidUsingQuestionAlgorithm('2124001272');
        expect(result).to.be.equal(true)
    });
    it('should not validate an invalid credit card number', () => {
        const result = numberIsValidUsingQuestionAlgorithm('2124001273');
        expect(result).to.be.equal(false)
    });
    it('should not validate an invalid credit card number with letter', () => {
        const result = numberIsValidUsingQuestionAlgorithm('212400k272');
        expect(result).to.be.equal(false)
    });
    it('should not validate an invalid credit card number with incorrect', () => {
        const result = numberIsValidUsingQuestionAlgorithm('212400272');
        expect(result).to.be.equal(false)
    });
    it('should generate valid credit card number', () => {
        const result = numberIsValidUsingQuestionAlgorithm(generateCreditCardNumberUsingQuestionAlgorithm());
        expect(result).to.be.equal(true);
    })

} )