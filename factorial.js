///print the facrtorial given number(n)

function factorial(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1
    }
    return n * factorial(n - 1)
}
console.log(factorial(5));

// output-120(!5=120)
.....................................................................................................

