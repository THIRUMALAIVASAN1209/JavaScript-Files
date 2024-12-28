let student = {
  name : ["Thiru","Vasan"],
  age : 20,
  isStudent : true,
  address : {
    state : "Tamilnadu",
    city : "Perundhurai"
  },
  hello : function(){
    console.log("Hi");
    console.log("Hello");
  }
}
student.hello();
console.log(student.name);
console.log(student.address);
console.log(student.isStudent);
console.log(student.age);