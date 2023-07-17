//sum of prime number
var x=prompt();
var y=prompt();
var count;
var sum=0;
for(var i=x;i<=y;i++)
{
    var count=0;
   for(var j=2;j<=y/2;j++)
   {
        if(i%j==0)
        {
            count++;
            break;
        }
   }
   if(count==0)
{
    sum+=i;

}

}
console.log(sum);
// 
// var names="Abc Bcd Cde Def Efg";

// var arr=[];
// arr=names.split(" ").reverse();
// console.log(arr);

// count the names 
var x=0;
const countarr=arr.reduce((x,arr)=>{return ++x},0);
console.log(countarr);


// count te
text = "Vikram Vikram Vibhor Vignesh Pratik Shubham Vishnu";
const tempArr = text.split(" ");
var z = tempArr.map((s) => [...s].reverse().join(""));
console.log(z);

// text1 = 93;
// const tempArr1 = [text1];
// var z =[...text1].reverse().join("");
// console.log(z);


