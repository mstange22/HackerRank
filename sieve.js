const sieve = (max) => {
  const s = new Array(max + 1).fill(1);

  for (let i = 2; i <= max; i++) {
    // skip ahead to first unmarked number
    while (s[i] === 0 && i < max) {
      i += 1;
    }
    console.log('i:', i);
    // mark multiples of i as not prime
    for (let k = i + i; k <= max; k += i) {
      // k is not prime
      s[k] = 0;
    }
  }
  return s.reduce((primes, isPrime, num) => {
    if (isPrime === 1) {
      primes.push(num);
    }
    return primes;
  }, []).slice(2).toString();
};

console.log(sieve(1000));
