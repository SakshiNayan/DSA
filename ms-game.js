let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let t= parseInt(readLine());
let mod= 1000000007, n=0;
while(n<t){
    let n= parseInt(readLine());
    let arr= readLine().split(" ").map(Number);
    arr.sort((a,b)=> a-b);
    //console.log(arr)
    let res=0;
    let  pro= n-1;
    for(let i=0; i<arr.length;i++){
        res= res + arr[i] * pro;
        pro= pro-2;
    }
    console.log((res % mod * arr[0]) % mod);
    n++;
}