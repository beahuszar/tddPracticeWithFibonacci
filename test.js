var should = require('chai').should();
var expect = require('chai').expect;
var assert = require('chai').assert;
var fibonacci = require('./fibonacci.js').getFibonacciByIndex;

describe('tests', () => {
  it('should exist', () => {
    expect(fibonacci).to.exist;
  });

  it('should be a function', () => {
    fibonacci.should.be.a('function');
  });

  it('should return a number', () => {
    fibonacci(1).should.be.a('number');
  });

  it('should have input', () => {
    expect(() => fibonacci()).to.throw(Error, 'Input is not defined');
    expect(() => fibonacci(null)).to.throw(Error, 'Input should not be null');
  });

  it('should accept a positive number', () => {
    expect(() => fibonacci(-5)).to.throw(
      Error,
      'Input can be a positive whole number'
    );
  });
  
  it('The first element should equal to 1', () => {
    assert.equal(fibonacci(1), 1);
  });
});
