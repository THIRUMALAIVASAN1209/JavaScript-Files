var a = "abc" 
function first(callback){
  setTimeout(()=>{
    console.log(`File ${a} is processing`);
    callback();
  },1000)
}
function second(callback){
  setTimeout(() => {
    console.log(`File ${a} is got downloaded`)
    callback();
  }, 2000);
}


first(()=>{
  second(()=>{
    console.log(`${a} download Completed`)
  })
})