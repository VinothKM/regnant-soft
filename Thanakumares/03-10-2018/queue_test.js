var sorting=require("./queue");
var arr=[];
arr.push({name:'abc',priority:5,time:10.30});
arr.push({name:'bcd',priority:10,time:9});
arr.push({name:'bcd',priority:1,time:9.30});
arr.push({name:'bcd',priority:1,time:10.30});
console.log(arr);
var newArr=sorting(arr);
console.log(newArr);
console.log(newArr.pop());