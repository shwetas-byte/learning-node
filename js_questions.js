// q1 Write a js program to find the largest and smallest in an array
// let nums=[12,5,25,8,30,15]
// let largest=nums[0]
// let smallest=nums[0]

// for(let i =0;i<=5;i++){
//     if (largest<nums[i]){
//         largest=nums[i]
//     }
//     if (smallest >nums[i]){
//         smallest=nums[i]
//     }
// }
// console.log(largest)
// console.log(smallest);


// q2 Write a js program to remove duplicates from an array
let nums=[1,2,2,3,4,4,5,5]
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]==nums[j]){
            nums.pop(nums[j])

        }
    }
}
console.log(nums);


// q3 Write a function that accepts a string and return the number of vowels in it
// let a= prompt("Enter a value")
// count=0
// for (let i=0;i<a.length;i++){
// let ch=a[i]
// if (ch=='A' || ch=='a' || ch=='E' || ch=='e'|| ch=='I' || ch=='i' || ch=='O' || ch=='o' || ch=='U' || ch=='u'){
//     count+=1
// }}
// console.log(count)

// q4 Write a js program to create an array containing only the even numbers then calculate their sum


// let num=[10,15,20,25,30,35,40]
// let ar=[]
// let sum=0
// for (let i=0;i<num.length;i++){
//     if(num[i]%2==0){
//         ar.push(num[i])
//         sum+=num[i]
//     }
// }
// console.log(ar);
// console.log(sum);

