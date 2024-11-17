// cube


// function printcube(n){
//     while(n>0){
//         console.log(n**3);
//         n--;
        
//     }
    
// }
// printcube(10)



// counting

// function counting(n){
//     while(n>0){
//          console.log(n);
//         n--;
//     }
       
// }
// counting(10)



// 10 8 6 4 2 0

//  let a =10;
//  while(a>=0){
//     console.log(a);
//     a-=2
    
//  }


// do while loop

// i=11
// do{
//     console.log(i);
//     i--;
    
// }
// while(i<10)


//  for(let i =0; i<=10;i+=2){
//     console.log(i);
    
//  }




// pattern
    // for( i=1;i<=5;i++){
    //     for( j=1;j<=5;j++){
    //         console.log(i,j);
            
    //     }
    // }


    // square
    // for( i=1;i<=5;i++){
    //         let row= '';
    //         for( j=1;j<=5;j++){
    //             row+='*'
    //         }
    //         console.log(row);
            
    // }



    // triangle
// let num = 5;
// let pattern ='';
// if(num>1){
//  for(let i=1;i<=num; i++){
//     for( let j=1;j<=i;j++){
//         pattern+="*"
//     }
//     pattern +='\n';
//  }
//  console.log(pattern);
 

// }
// else{
//     console.log("no possible pattern found");
    
// }
   



// hollow triangle
// let num = 5;
// let pattern ='';
// if(num>1){
//  for(let i=1;i<=num; i++){
//     for( let j=1;j<=i;j++){
//         // pattern+="*"
//         if(j==1 || j==i || j==num){
//             pattern+="*"
//         }
//         else{
//             pattern+="+"
//         }
//     }
//     pattern +='\n';
//  }
//  console.log(pattern);
 

// }
// else{
//     console.log("no possible pattern found");
    
// }
   
 for(let i =5;i>=1;i--){
    for(let j=1;j<=i;j++){
           pattern+="*";
    }
    pattern +='\n';
 }
console.log(pattern);
