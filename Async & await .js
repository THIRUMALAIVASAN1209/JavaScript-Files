function attendance(){
  setTimeout(()=>{
    console.log("Attendance");
    callback();
  },1000)

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Attendance");
      callback();
    },1000)
  })
}

function lunch(){
  setTimeout(() => {
    console.log("Lunch")
    callback();
  }, 1000);
} 
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Lunch");
      callback();
    },1000)
  })

function goingtohome(){
  setTimeout(() => {
    console.log("Going to home")
    callback();
  }, 1000);
}

return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Lunch");
    callback();
  },1000)
})

async function finalDay(){
  try{
    let att = await attendance();
    console.log(att);
    const lun = await lunch();
    console.log(lun);
    const home = await goingtohome();
    console.log(home);

}catch(error){
  console.error(error);
}
}

finalDay()