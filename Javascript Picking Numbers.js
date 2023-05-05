function pickingNumbers(a) {
    // Write your code here
    
let highNumbers = [];
let longest_subarray = [];


for (let i = 0; i < a.length ; i ++){
    for (let j = 0 ; j < a.length ; j++){
 
        if (a[i] - a[j] === 0  || a[i] - a[j] === 1) {
            longest_subarray.push(a[j]);
        }
    }
    highNumbers.push(longest_subarray.length)
    longest_subarray = [];
}
 
return Math.max(...highNumbers)
    
}
