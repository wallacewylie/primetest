function isPrime(num) {
    if (num < 2) {
        return false;
    }
    if (num != Math.round(num)) {
        return false;
    }
    var prime = true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false;
        }
    }
    return prime;
}
