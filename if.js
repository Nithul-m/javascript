// // let day = "Tuesday";

// // if (day == "Sunday"){
// //     console.log('Office is closed');
// // }else if(day == "Saturday"){
// //     console.log("Office wil be closed on alternate Saturdays");
// // }else{
// //     console.log("Office is open");
// // }

// console.log("Please choose your option\n 1 - Rose\n 2 - Jasmine\n 3 - Lotus\n 4 - Sunflower");
// let option = 3;
// if (option == 1) {
//     console.log("You selected Rose");
// }else if(option == 2){
//     console.log("You selected Jasmine");
// }else if(option == 3){
//     console.log("You selected Lotus");
// }else if(option == 4){
//     console.log("You selected Sunflower");
// }else{
//     console.log("Invalid option");
// }



console.log("Please select your option\n 1 - Sunday\n 2 - Monday\n 3 - Tuesday\n 4 - Wednesday\n 5 - Thursday\n 6 - Friday\n 7 - Saturday\n");
let day = 5;
switch(day){
    case 1:
        console.log("It's Sunday");
        break;
    case 2:
        console.log("It's Monday");
        break;
    case 3:
        console.log("It's Tuesday");
        break;
    case 4:
        console.log("It's Wednesday");
        break;
    case 5:
        console.log("It's Thursday");
        break;
    case 6:
        console.log("It's Friday");
        break;
    case 7:
        console.log("It's Saturday");
        break;
    default:
        console.log("Invalid input");
}