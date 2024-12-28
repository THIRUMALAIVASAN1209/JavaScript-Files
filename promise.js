// function attendance(){
//   setTimeout(()=>{
//     console.log("Attendance");
//     callback();
//   },1000)

//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("Attendance");
//       callback();
//     },1000)
//   })
// }

// function lunch(){
//   setTimeout(() => {
//     console.log("Lunch")
//     callback();
//   }, 1000);
// }

// return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("Lunch");
//     callback();
//   },1000)
// })

// function goingtohome(){
//   setTimeout(() => {
//     console.log("Going to home")
//     callback();
//   }, 1000);
// }

// return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("Lunch");
//     callback();
//   },1000)
// })

// attendance(()=>{
//   lunch(()=>{
//     goingtohome(()=>{
//       console.log("Day completed");
//     })
//   })
// })


function attendance(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let attendanceAP=false;
      if(attendanceAP){
        resolve("Attendanc present")
      }
      else{
        reject("Attendance absent")
      }
    },1000)
  })
}

