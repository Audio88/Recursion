function power(base, exponent) {
    if (exponent == 0) return 1;
    else return base * power(base, exponent - 1);
}

power(2, 3); //___returns the integer 8.

//____ on first iteration it multiplies base(2) by our function, and returns this statement: 2 * power(base 2, exponent 2)
//____ on second iteration it multiplies base(2) by the statement that was returned in the first iteration, it returns: 2 * 2 * power(base 2, exponent 1)
//____ on third iteration it multiplies base(2) by the statement that was returned in the second iteration, it returns: 2 * 2 * 2 * power(base2, exponent 0)
//____ on fourth iteration our exponent is now 0, so our if statement is true which returns 1. It returns the final statement: 2 * 2 * 2 * 1, which is 8.