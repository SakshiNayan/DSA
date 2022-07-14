let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n=parseInt(readLine());
let m= parseInt(readLine());
let a=readLine().split(" ");
let b=readLine().split(" ");
//let max=-1*Number.MAX_VALUE;
for(let index=0;  index < n; index++){
    a[index]=parseInt(a[index])
}
for(let index=0; index<m; index++){
    b[index]= parseInt(b[index]);
}
let max1=0;
let max2=0;
for(let i=0; i<n; i++){
    if(a[i]<0){
        a[i]= -a[i];
    }
    if(max1<a[i]){
        max1= a[i];
    }
}
for(let i=0; i<m; i++){
    if(b[i]<0){
        b[i]= -b[i];
    }
    if(max2<b[i]){
        max2= b[i];
    }
}
console.log(max1*max2);//TC=O(n^2)