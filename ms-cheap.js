let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let t= parseInt(readLine());
while(t>0){
    let n= parseInt(readLine());
    let arr= readLine().split(" ").map(Number);
    let tar=[...arr];
    tar.sort((a,b)=> a-b);
    let even =new Set();
    for(let i=0;i<n;i+=2){
        even.add(tar[i])

    }
    let cost=0;
    let old_ev =new Set();
    for(let i=0; i<n;i+=2){
        old_ev.add(arr[i])
    }
    for(let val of old_ev){
        if(! even.has(val)){
            cost++;
        }
    }
    console.log(cost);
    t--;
}