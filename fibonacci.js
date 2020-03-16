function getFibonacciByIndex(index) {
    if (typeof index === 'undefined') {
        throw new Error('Input is not defined');
    } else if (index === null) {
        throw new Error('Input should not be null');
    }
    if (index < 0) {
        throw new Error('Input can be a positive whole numbers')
    }
    return 0;
}

if (typeof module !== 'undefined' && module.exports != null) {
  exports.getFibonacciByIndex = getFibonacciByIndex;
}
