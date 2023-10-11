// let age = 30;
// console.log(typeof age);
// console.log(age);
// let userName = "Nithul";
// console.log(typeof userName);
// let res = 1000n;
// console.log(typeof res);
// let user = {
//     name: "entri",
//     course: "MERN",
//     duration: 6
// }
// console.log(typeof user);
// console.log(user.name);
// let numb = 1 / 0;
// console.log(typeof num);
// let isActive = false;
// console.log(typeof isActive);
// let stock = null;
// console.log(stock);
// let x;
// console.log(typeof x);

let id = Symbol("id");
let id2 = Symbol("id");
// console.log(id == id2);

let user = {
    name:"entri",
    course:"mern",
    id:1000
}
user[id] = 10;

console.log(user.id);