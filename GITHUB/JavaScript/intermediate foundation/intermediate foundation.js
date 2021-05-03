// 1_ sigma :
// function sigma(num){
// let sum=0;
// for(let i=0;i<=num;i++){
// sum+=i;
// }
// return sum;
// }
// console.log(sigma(5));

// 2_fibonacci

// function fibonacci(num){
//   var a = 1, b = 0, temp;

//   while (num > 0){
//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//   }

//   return b;
// }
// console.log(fibonacci(6))

// 3_factorial
// function Factorial(num){
// let mul=1;
// for(let i=1;i<=num;i++){
// mul=mul*i;
// }
// return mul;
// }
// console.log(Factorial(5));

// 4_Array second to last
// function get(arr){
// return arr[arr.length-2];

// }

// console.log( get([1,2,3,4,5,6,7,8,9,10]));

// 5-Array Nth to last
// function get(arr,num){
// let l=arr.length;
// return arr[l-num];

// }

// console.log( get([1,2,3,4,5,6,7,8,9,10],3));

// 6- Array second greatesr 
    //function get(arr){
    // var max =0;
    // var max2 = 0;
    // for ( var i = 0; i<arr.length; i++){
    // if (max<arr[i]){
    // max = arr[i];


    // }
    // else if (max2<max &&arr[i]>max2){
    // max2= arr[i];}
    // }
    // }
    // console.log(max2);

//     7-double truble 
//     function doubletrouble(arr){
//     narr=[];
//     for (var i =0; i<arr.length; i++){
//         narr.push(arr[i]);
//         narr.push(arr[i]);
//     } 
//     return narr;
// }
// console.log(doubletrouble([1,4,5,2,"test"]))