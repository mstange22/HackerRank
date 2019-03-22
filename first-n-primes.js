const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const nthPrime = (n) => {
  const primes = [];
  for (let i = 2; primes.length < n; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
};

console.log(nthPrime(20));
