// let array =[];
// array.push(10);
// array.push(15);
// array.push(100);
// array.push(10000);
// // array.pop();
// array.unshift("Rohan");
// console.log(array);



// let arr =[10,3,2,5,4,7,11]
// function bubblesort(arr){
//     for(let i=0; i<arr.length;i++){
//         for( let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 arr[j], arr[j+1]= [arr[j+1]], arr[j];
//             }
//         }
//     }
//     return arr
// }
// let arr =[10,3,2,5,4,7,11]
// console.log(bubblesort(arr));


//  function bubbleSort(arr) {
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr

// }
// let arr=[9,8,7,6,5,4,3,2,1]
// console.log(bubbleSort(arr));.


// let arr = [8, 7, 6, 5, 4, 3, 2, 1]

// function selectionsort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let min_idx = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min_idx]) {
//                  min_idx = j;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[min_idx];
//         arr[min_idx] = temp;
//     }
//     return arr;
// }
// console.log(selectionsort(arr));


// let arr = [8, 7, 6, 5, 14, 3, 2, 1,8,1,7]
// function duplicate(arr){
//     let set = new Set();
//     let duplicate =[];
//     for( let i of arr){
//          if (set.has(i)){
//             duplicate.push(i);
//          }
//          else{
//             set.add(i);
//          }
//     }
//     return duplicate;
// }
// console.log(duplicate(arr));


let arr=[8,7,6,1,8,1,7]
function findklargest(arr,k){
    arr.sort((a,b)=>a-b)
    return arr[(arr.length-1)-k]
}
console.log(findklargest(arr,1));
