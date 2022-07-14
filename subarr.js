// let arr=[-2,0,-1]
// let sum=1;
// let max =Number.MIN_VALUE;
// for(let i=0;i<arr.length;i++){
//     //if(sum<0) sum=0;
//     sum=parseInt( sum+arr[i]);         //sum= -2 0 1
//     if(max<sum) max=sum;      //max= 
// }
// console.log(max);


// var maxSubArray = function(nums) {

// 	let max = nums[0], curr = nums[0];

// 	for(let i = 1 ; i < nums.length ; i++){
// 		curr = Math.max(nums[i], curr + nums[i]) 
// 		max = Math.max(max, curr)
// 	}
// 	return max;
// }

let nums=[-2,0,-3]
    max= Number.MIN_VALUE;
    pro=1;
    //let max= nums[0], curr=nums[0];
    for(let i=0; i<nums.length;i++){
        if(nums[i]==0){
            pro=1;
            max=Math.max(max,0);
        }else{
            pro *=nums[i];
            max=Math.max(max,pro)
        }
    }
    //max= Math.max(max,curr)
    console.log(max);
