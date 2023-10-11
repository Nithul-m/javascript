
// let user = {
//     name:"Entri",
//     pass:1234,
//     batches:[1,2,3],
//     getStudentDetails:function(){},
//     courseDetails:{
//         name:"MERN",
//         duration: "6 months"
//     }
   
// }

// console.log(user);

// user.isAdmin =  true;
// console.log(delete user.pass);
// console.log(user);

// user.name = "MERN";
// console.log(user);

// console.log(delete user.isAdmin);
// console.log(user);


let employee = {
    name: "Nithul",
    id: 11223,
    salary: 54000,
    designation: "Full stack developer",
    address: "Kochi"

}
// if ("experience" in employee){
//     employee.experience = employee.experience + 1;
// }
// else{
//     employee.experience = 1;
// }
// console.log(employee);

console.log(employee?.address? employee.address:" ");