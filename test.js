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
    console.log(fibonacci());
    fibonacci().to.throw('Input is not defined');
    fibonacci(null).to.throw('Input should not be null');
  });
});
