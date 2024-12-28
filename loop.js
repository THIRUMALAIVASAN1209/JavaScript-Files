let a=10;
for (let i;i<=a;i++){
  console.log(a[i]);
}

for (console.log('a') ;a<=3; console.log('b')){
  console.log("c");
  a++;
}

for (let a=1;a<100;a++)
console.log("hi"); //inside the loop   --> 99 times hi.
console.log(a);   //outside the loop   --> error for using let. It runs if using var.