function isPalindrome(n) {
    let original = n;
    let rev = 0;

    while (n > 0) {
        let rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10);
    }

    return original === rev;
}

console.log(isPalindrome(12321)); // true
console.log(isPalindrome(12345)); // false


function checkpalindrome(m){
    let Ori = m;
    let Reve = 0;
    while(m>0){
        let reme =m%10;
        reve =10*Reve + reme;
        m=Math.floor(m/10);

    }
  return ori===Reve;
}
console.log(checkpalindrome(12121));