var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it adds 1 to 4 and gets 5', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5)
  })

  it('it subtracts 4 from 7 and gets 3', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  it('it multiplies 3 by 5 and gets 15', function() {
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })

  it('it divides 21 by 7 and gets 3', function() {
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  })

  it('The output is as expected for negative decimals', function(){
    calculator.previousTotal = -10.25
    calculator.add(-10.25)
    assert.equal(calculator.runningTotal,-20.5)
  })

  it('The output is as expected for positive decimals', function(){
    calculator.previousTotal = 10.25
    calculator.add(10.25)
    assert.equal(calculator.runningTotal,20.5)
  })

  it('The output is as expected for very large negative numbers with decimals', function(){
    calculator.previousTotal = -100000.25
    calculator.add(-100000.25)
    assert.equal(calculator.runningTotal,-200000.5)
  })

  it('The output is as expected for very large positive numbers with decimals', function(){
    calculator.previousTotal = 100000.25
    calculator.add(100000.25)
    assert.equal(calculator.runningTotal,200000.5)
  })

  //integration tests here

  it('concatenate multiple number button clicks', function() {
    calculator.numberClick(5)
    calculator.numberClick(5)
    assert.equal(calculator.runningTotal, 55)
  })

  it('can clear the running total without affecting the calculation with number and operator clicks', function(){
    calculator.numberClick(5)
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(10)
    calculator.clearClick()
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 60)
  })

  //chain multiple operations together

  it('can chain multiple operations together with number and operator clicks', function(){
    calculator.numberClick(1)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.operatorClick("*")
    calculator.numberClick(3)
    calculator.operatorClick("=")
    assert.equal(calculator.runningTotal, 15)
  })

  it('it adds 1 to 4 and gets 5 with number and operator clicks', function(){
    calculator.numberClick(1)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 5)
  })

  it('it subtracts 4 from 7 and gets 3 with number and operator clicks', function(){
    calculator.numberClick(7)
    calculator.operatorClick("-")
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 3)
  })

  it('it multiplies 3 by 5 and gets 15 with number and operator clicks', function() {
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 15)
  })

  it('it divides 21 by 7 and gets 3 with number and operator clicks', function() {
    calculator.numberClick(21)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 3)
  })

});
