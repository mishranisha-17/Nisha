//prime number javascript
//  const isprime = num =>{
//     for(let i = 2, s= math.sqrt(num); i<=s;i++){
//          if(num % i===0)return false;
//     }
//      return num> 1;
//  }
var range =100;
for(var i=2; i<range; i++){
    var flag = 0;
    for(let j =2; j<i; j++){
        if(i%j == 0){
            flag =1;
            break;
        }
    }
    if(flag==0)console.log(i,"is prime number")
}
