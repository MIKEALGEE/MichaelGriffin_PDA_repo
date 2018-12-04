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

  it('it should add two numbers', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    var actual = calculator.runningTotal;
    var expected = 5;
    assert.equal(expected, actual)
  })

  it('should be able to subtract numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    var actual = calculator.runningTotal;
    var expected = 3;
    assert.equal(expected, actual)
  })

  it('should be able to multiply numbers', function(){
    calculator.previousTotal = 5;
    calculator.multiply(3);
    var actual = calculator.runningTotal;
    var expected = 15;
    assert.equal(expected, actual)
  })

  it('should be able to divide numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    var actual = calculator.runningTotal;
    var expected = 3;
    assert.equal(expected, actual)
  })

  //////////////////////////////////////////////////////////////////////////////
  it('should concentenate multiple button clicks', function(){
     var expected = 32324;
     calculator.numberClick(3)
     calculator.numberClick(2);
     calculator.numberClick(3);
     calculator.numberClick(2);
     calculator.numberClick(4);
     var actual = calculator.runningTotal;
     assert.deepStrictEqual(expected, actual);
   });

   it('should multiply two numbers then subtract a third number', function(){
     var expected = 18;
     calculator.numberClick(5);
     calculator.operatorClick('*');
     calculator.numberClick(4);
     calculator.operatorClick('-');
     calculator.numberClick(2);
     calculator.operatorClick('=');
     var actual = calculator.runningTotal;
     assert.equal(expected, actual);
   });



 });
