console.log(2>1);
console.log(2==1);
console.log(2<1);
console.log(2!=1);

console.log("2" > 1);
console.log(2 < "1");

console.log(null>0);
console.log(null>=0);
console.log(null==0);

// == and >= are deifferent these are equality check and comaparison opr. resp. , are different
//comparison opr. converts null to number or NaN and then check
//avoid these since we dont know ki kisme convert ho raha NaN ya no.

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==0);

// === strict check

console.log("2" === 2);