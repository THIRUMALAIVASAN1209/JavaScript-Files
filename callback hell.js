function attendance(callback){
  setTimeout(()=>{
    console.log("Attendance");
    callback();
  },1000)
}
function lunch(callback){
  setTimeout(() => {
    console.log("Lunch")
    callback();
  }, 1000);
}
function goingtohome(callback){
  setTimeout(() => {
    console.log("Going to home")
    callback();
  }, 1000);
}

attendance(()=>{
  lunch(()=>{
    goingtohome(()=>{
      console.log("Day completed");
    })
  })
})