// Write a message to the console.
function printDivisors(n){
    for(i=1;i<=n;i++){
        if(n % i == 0){
            console.log('%d', i)
        }
    }
}

function printDivisors_2(n){
    for(i=1;i<=Math.sqrt(n);i++){
        if(n % i == 0){
            if(n/i == i){
                console.log('%d', i)
            }else{
                console.log('%d %d', i, n/i)
            }
            
        }
    }
}
//====================================================
let t0= performance.now()
console.log('-----printDivisors-----')
printDivisors(100)
let t1= performance.now()
console.log('Time taken to execute printDivisors function:'+ (t1-t0).toFixed(3) +' milliseconds');
//====================================================
let t2= performance.now()
console.log('-----printDivisors_2-----')
printDivisors_2(100)
let t3= performance.now()
console.log('Time taken to execute printDivisors_2 function:'+ (t3-t2).toFixed(3) +' milliseconds');
console.log('-------------------------')
//====================================================