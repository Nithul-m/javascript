let str = "Entri elevate Program, the best program";
console.log("The string is", str);

console.log("The length of string is", str.length);
console.log("the letter at this position is", str[4]);

let a = str.slice(0,4);
console.log("the string after slicing is", a);

let b = str.substring(4,8);
console.log("substring result is", b);

let c = str.replace("program","course");
console.log("string after replacing is", c);

let d = str.replaceAll(/program/ig,"course");
console.log("string after replacing :", d);

let e = str.toUpperCase();
console.log("string after converting to upper case is", e);

let f = str.toLowerCase();
console.log("string after converting to lower case is", f);

let str1 = "Entri";
let str2 = "Program";
let str3 = "Elevate";

let res = str1 + " " + str2;
console.log("result after joining two strings is", res);

let res1 = str1.concat(" ", str3," ", str2);
console.log("result after joining three strings is", res1);

let g = 10 + "20";
console.log("result is", g);

let h = 10 * "20";
console.log("result is", h);

let stri = "    Entri elevate program";
let i = stri.trimStart();
console.log("string after trimming is", i);
let strin = "Entri elevate program   ";
let j = strin.trimEnd();
console.log("string after trimming is", j);


let k = str.charAt(4);
console.log("the character at the given position is", k);

let l = str.charCodeAt(3);
console.log("the ASCII code of given character is", l);

let m = str.split(" ");
console.log("After splitting", m);

let n = str.indexOf("program", 13);
console.log("result of indexOf is", n);

let o = str.lastIndexOf("program");
console.log("result of lastIndexOf is", o);


let p = str.search(/program/i);
console.log("the position of the given word is", p);

let q = str.includes("program");
console.log("whether the given word is there or not", q);

let r = str.includes("prograym",22);
console.log("whether the given word is there or not", r);

let s = str.startsWith("E");
let t = str.endsWith("i");
console.log("does the string starts with the given letter?", s);
console.log("does the string ends with given letter?", t);


let prog = "MERN";
let string = `Entri's ${prog} program`;

console.log("result of using interpolation in template literal", string);