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
});
