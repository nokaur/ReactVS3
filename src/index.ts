// function greetperson(name) {
//   if (name === "Novel") {
//     greet = "Hello Novel";
//   } else {
//     greet = "Hello";
//   }
//   console.log(greet);
//   var greet;
// }
// greetperson("Novel");

//LET AND VAR
// var a = 1;
// var b = 2;
// if (a === 1) {
//   var a = 2;
//   let b = 3;
//   console.log(a);
//   console.log(b);
// }

// console.log(a);
// console.log(b);

//LOOP

// for(let i=0;i<5;i++)
// {
//   setTimeout(function(){console.log(i)},1000);
// }

//CONST

// let i=10;
// const j=20;

// const obj={
//   name:'Novel'
// };
// console.log(obj.name);
// //obj.name='Noveldeep'
// const obj={
//   name:'Noveldeep'
// };
// console.log(obj.name);

//ARROW FUNCTION

// var getRegValue = function () {
//   return 10;
// };
// console.log(getRegValue());

//const getArrowValue=()=>{return 20};
// const getArrowValue = (m) => 20 * m;
// console.log(getArrowValue(10));

//LEXICAL THIS

// var employee = {
//   id: 1,
//   name: function () {
//     setTimeout(() => {
//       console.log(this.id);
//     }, 1000);
//   }
// };
// employee.name();

//REST OPERATOR
// let displaycolor=function(message,...colors){
//   console.log(message);
//   //console.log(colors);
//   for(var i in colors)
//   {
//     console.log(colors[i]);
//   }
// }
// let message="List of colors";

// let newcolors=['indigo','Purple'];
// displaycolor(message,...newcolors);

// displaycolor(message,"Red");
// displaycolor(message,"Yellow","Blue");
// displaycolor(message,"Black","Pink");

//OBJECT LITERALS-1
// let firstname = "Noveldeep";
// let lastname = "Kaur";

// let person = {
//   firstname,
//   lastname
// };

// function createperson(firstname,lastname,age)
// {
//   let fullname=firstname+" "+lastname;
//   return {
//     firstname,
//     lastname,
//     fullname,
//     isSenior(){
//       return age>60;
//     }
//   }
// }
//  let p=createperson("Sudhir","Taneja",80);
// console.log(p.fullname);
// console.log(p.isSenior());

// console.log(person.firstname);
// console.log(person.lastname);

//OBJECT LITERALS-2
// let ln="lastname";
// let person={
//   "firstname":"Novel",
//   //"Lastname":"Deep"
//   [ln]:"Deep";
// };
// console.log(person[ "firstname"],person[ln]);

//DESTRUCTURING ARRAY

// let employee = ["Novel", "Female"];
// let [name, gender] = employee;
// console.log(name);
// console.log(gender);

//REST
// let [...Data] = employee;
// console.log(Data);

//DESTUCTURING OBJECT
// let employee = {
//   name:"Novel",
//   gender:"Female"
// };
// let {name:n, gender:g} = employee;
// console.log(n);
// console.log(g);

//STRING TEMPLATE
// let name = "Novel";
// let greet = `Welcome 'single' $(name)`;
// console.log(greet);

//FOR OF LOOP
let colors = ["Red", "Blue", "Green"];

for (let item of colors) {
  console.log(item);
}
