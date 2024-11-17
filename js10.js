// let arr12 =[1,2,3];
// let arr13 =[2,3,4];
// let interaction =arr12.filter((value)=>arr13.includes(value));
// console.log(interaction);




// let arr14 =[1,2,3];
// let arr15 =[3,4,5];
// let newarr =[...new Set([...arr14, ...arr15]) ];
// console.log(newarr);



// function subarray(arr,size){
//     let chunks = [];
//     for(let i =0; i<arr.length;i+= size){
//         chunks.push(arr.slice(i,i+size));
//     }
//     return chunks;
// }
//  let res = subarray([1,2,3,4,5,6,7,8,9,10],2);
//  console.log(res);
 
 


 

// let arr =[1,2,5,7,3,4,10,8]
// let sumedval =arr.sort((a,b)=>a-b).filter((value)=>value>4).map((val)=>val*3);
// console.log(sumedval);







// let sortingArr = [45,23,32,12,76,3,54]
//  console.log(sortingArr.sort((a,b)=>b-a))



 let findArr = [12,34,32,53,43,2,99];
// console.log(findArr.findIndex((val)=>val === 120));




// let aa= findArr.concat([22,222,33,333]);
//  console.log(aa);



// let ddd= findArr.join("+");
// console.log(ddd);


// console.log(findArr.every((val)=>val<100))



// let arr12=[1,2,3,4,5];
// let arr13=[2,3,4];
// let intersaction = arr12.filter((value)=> arr13.includes(value));
//  console.log(intersaction);






const languages =[ "java","c" ,"rust"];
const index =languages.indexOf("c");
console.log(index);




const fruits=["apple" ,"kiwi" ,"banana","grapes"]
const fruits2 = fruits.includes("kiwi")
console.log(fruits2);




let arr14 = [1,2,3];
let arr15 = [3,4,5];
// [1,2,3,5,4]
let newUniqueEleArr = [ ...new Set([...arr14, ...arr15])];
 console.log(newUniqueEleArr[1]);





 let arr1 = [1,2,3,4,5];
 let arr2 =[4,5,6,7,8,9];
 let newarr =[...new Set([...arr1,...arr2])]
 console.log(newarr);
 





 function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }

        }
        console.log("first itration", i, arr);

    }
    return arr
}
console.log(bubbleSort([8, 7, 6, 5, 4, 3, 2, 1]))







function bubleSort(arr){
    for(let i = 0; i<arr.length;i++){
        for (let j =0;j<arr.length;j++){
            if (arr[j]> arr[j+1]){
                [arr[j],arr[j+1]] =[arr[j+1],arr[j]]

            }
        }
        console.log("first itteration",i, arr);
        
    }
    return arr
}
console.log(bubleSort([9,8,7,6,5,4,3,2,1]));






function duplicates(){
    let set = new Set();
    let duplicateset = new Set()
}
for (let i of arr){
    if(set.has(i)){
        duplicateset.add(i)
    }
    else{
        set.add(i)
    }
    return duplicateset;
}
console.log(duplicates);















