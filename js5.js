// function checkPrime(num) {
//     if (num <= 1) {
//         console.log("Not prime");
//         return;
//     }

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             console.log("Not prime");
//             return;   
//         }
//     }

//     console.log("Prime");
// }
// checkPrime(29); 
// checkPrime(12); 





// square
//  let  pattern =" ";
//  for(let i =1; i<=4;i++){
//     for(let j=1; j<=4;j++){
//         pattern+=`${j}` ;
//     }
//     pattern +='\n'
//  }
//  console.log(pattern);
 

// triangle
// let pattern ='';
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         pattern += `${i}`
//     }    
//     pattern +='\n'
// }
// console.log(pattern);




// reverse triangle
// let pattern='';
// for(let i=5;i>=1;i--){
//     for(let j=1;j<=i;j++){
//          pattern +=`${i} `
//     }
//     pattern +='\n'
// }
// console.log(pattern);



// pyramid
// function pyramid (){
//     let n=5;
//     let pattern ='';
//     for(let i =1;i<=n;i++){
//         for(j=1;j<=n-i;j++){
//             pattern+=" "
//         }
//         for(let k =0; k<2*i-1;k++){
//             pattern+='* ';
//         }
//         pattern += "\n"
//     }
//     console.log(pattern);
    
// }
// pyramid(5)

// reverse pyramid


// diamond
function pramid() {
    let n=5;
    let pattern='';
    for (let i = 1; i <=n; i++) {
        for (let j = 1; j<=n-i;j++){
            pattern+=" "
 
        }
        for(let k=0;k<2*i-1;k++){
            pattern+=`${k+1} ` ;
        }
        pattern+="\n"
 
    }
    for(let i=n-1;i>=1;i--){
         for (let j = 1; j<=n-i;j++){
            pattern+=" "
    }
    for(let k=0;k<2*i-1;k++){
        pattern+=`${k+1} history` ;
    }
    pattern+="\n"

    console.log(pattern);
    
}
}
pramid(5)