let arr=[1,3,5,6];
let tar=5;
let count=0;
for(let i=0;i<arr.length;i++){
    if(tar === arr[i]){
        console.log(i)
    }
    else if( tar< arr[i]){
        console.log(i);
        break;
    }
    count++;
}

if(count >0){
    console.log(arr.length)
}