let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

let str= readLine().split(",");
console.log(CommonStr(str));

function CommonStr(str){
    let n= str.length;
    let index=[];
    for(let i=0;i<n ;i++){
        
    }
}