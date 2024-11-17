// function findmax(arr){
//     let max =-200;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//              max =arr[i];
//         }
           
        
//     }
//     return max 
// }
// let arr =[2,3,45,50,35,100,103,60]
// console.log(findmax(arr));






// function findmin(arr){
//     let min =Number.MAX_SAFE_INTEGER;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<min){
//              min =arr[i];
//         }
           
        
//     }
//     return min 
// }
// let arr =[2,3,45,50,35,100,103,60]
// console.log(findmin(arr));



// let arr =[1,2,3,4,5,6,7,8]
// function oddeven(arr){
//     let oddarr =[];
//     let evenarr =[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             evenarr.push(arr[i]);
//         }
//         else{
//             oddarr.push(arr[i]);
//         }
//     }
//     console.log(`this is odd${oddarr},this is ${evenarr}`   );
    
// }
// oddeven(arr);





// let arr =[1,2,3,4,5,6,7,8]
// function reverse(arr){
    
// let newarr = [];
// for(let i = arr.length-1;i=>0;i--){
//     newarr.push(arr[i]);
// }
//     return(newarr);
// }
// let ddvv = reverse(arr);
// console.log(ddvv);





// let arr =[4,3,2,6,7]
// function findtarget(arr,target){
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]===target){
//                 return true
//             }
           
//         }
//     }
//                 return false
            
// } 
// console.log(findtarget(arr,5));



// bubble sort 
let arr =[9,8,7,4,5,67,32,14]
function sortarray(arr){
    for(let i =0;i<arr.length;i++){
        for(let j =0;j<arr.length;j++){
            if (arr[j]> arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]= temp;
            }
        }
    }
    return arr;
}
console.log(sortarray(arr));





 