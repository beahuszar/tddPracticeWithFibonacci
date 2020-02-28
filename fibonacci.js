function getFibonacciByIndex(index) {
    if (typeof index === 'undefined') {
        throw new Error('Input is not defined');
    } else if (index === null) {
        throw new Error('Input should not be null');
    }
    return 0;
}

if (typeof module !== 'undefined' && module.exports != null) {
  exports.getFibonacciByIndex = getFibonacciByIndex;
}
