
// 9november

function mostfreq(str){
 let freq={};
    let maxchar = "";
    let maxcount =0;
    for(let char of str){
        freq[char] = (freq[char] || 0)+1;
        if(freq[char]> maxcount){
            maxcount =freq[char];
            maxchar = char
        }
    }
    return maxchar
}
console.log(mostfreq("hello"));




function cap(str) {
    let words = str.split(" ");
    let capArr = words.map((val) => val.charAt(0).toUpperCase() + (val.slice(1)).toLowerCase());
    return capArr.join(" ")
}
console.log(cap("hello world sdf"));


    
function cbexample(name,cb){
    return cb(name);
}
function greetname(name)[]













// 10november

function addtwonumbers(x,y){
    console.log("this is only for printiong data",x+y);
    return (x+y);
    
}
let data =addtwonumbers(12,12)
console.log(data);


// fat arrow 

let fnrohan =(a,b)=>{return(a+b)};
console.log(fnrohan(10,10));



function question(a,b,c){
    console.log((a+b)*c);
    return (a+b)
    
}
console.log(question(1,2,3));


function question2(str){
     console.log("str");
    return str.length;

}
let data = question2("Rohan")
console.log(data);


