/*
// #1 Function for number swaping:
import inquirer from "inquirer";
function swap_number( a:number, b:number) {
    console.log("first number before swapping= ", a);
    console.log ("second number before swapping = ", b);
    a = a+b;
    b = a-b;
    a= a-b;
    console.log("first number after swapping = ", a);
    console.log ("second number after swapping = ", b);
}
swap_number(10,20);

 // #2 Function for Percentage:
  function marksPercentage(obtainedMarks:number,totalMarks:number):number {
    if(totalMarks<=0){
        return 0.0;
    }
  return (obtainedMarks / totalMarks)*100;
  }
  let Percentage:number = marksPercentage (1022,1100);
  console.log ("Percentage =",Percentage ,"%");

// #3 Function for Even or Odd:
 function findNumber(num:number) :string{
    if (num%=0){
    return "Number is Even";
    }
    return "Number is Odd"
 }
 let outPut:string = findNumber (5);
 console.log (outPut);
 
// #4 Function for Number Type:
 function numberType(num:number):string{
    if (num>0){
        return "Positive Number";
    }
    else if (num<0){
        return "Negative Number";
    }
    return "Whole Number";
 }
 let type : string = numberType (-3);
 console.log(type);

// #5 Function of Divisible or Not:
function numberModulus (num:number):string{
    if (num%2==0){
        return "Divided by 2";
    }
    else if (num%3==0){
        return "Divided by 3";
    }
    else if (num%2==0 && num%3==0){
        return "Divided by both";
    }
    return "Not Divisible";
}
let number : string = numberModulus(21);
console.log(number);

// #6 Nationality Check:
function nationalityCheck (age:number):string{
    if(age>=18){
        return "You are Eligble to Vote";
    }
    return "Please obtain a valid ID to Vote";
}
let answer : string = nationalityCheck (15);
console.log (answer);

// #7 Function for Age level:
function ageLevel (age:number):string{
    if (age>0 && age<=12){
        return "Child";
    }else if (age>13 && age<=19){
        return "Teenager";
    }else if (age>20 && age<=59){
        return "Adult";
    }return "Senior citizen";
}
let outPut:string = ageLevel (19);
console.log (outPut);

// #8 Function for Days of Month:
function noOfdays (month : number):string {
    if (month == 2){
        return "This month has 28 days";
    }else if (month==4 || month==6 || month==9 || month==10){
        return "This month has 30 days";
    } return "This month has 31 days";
}
let days:string = noOfdays (8);
console.log(days);

// #9 function for Leap Year :
function leapYear (year:number):string{
    if (year%4==0){
        return "Leap Year";
    }
    return "Non-Leap Year";
}
let thisYear :string = leapYear(2024);
console.log(thisYear);

// #10 Funtion of Find Age:
function myAge (bYear:number,Cyear:number):number{
    if(age<=0){
        return 0.0;
    }
    return (Cyear-bYear);
}
let age:number = myAge(2004,2024);
console.log(age);

// #11 function for Area of Rectangle:
function  rectangleArea (length:number,width:number):number{
    if(length<=0){
        return 0.0;
    }
    return (length*width);
}
let area:number = rectangleArea(2,4);
console.log("Area of Rectangle is ",area);

// #11 Function fo Area of Circle:
function circleArea (radius:number):number{
    if(radius<=0){
        return 0.0;
    }
    return (3.14*radius*radius);
}
let area:number = circleArea(3);
console.log("Area of Circle is ",area);

// #12 Function for Area of Cube:
function cubeArea (area:number):number{
    if(area<=0){
        return 0.0;
    }
    return (area*area*6);
}
let solution:number = cubeArea(3);
console.log("Area of Cube is ",solution);

// #13 Function for conversion of Farenhite to Celcius:
function tempConvo (temp:number) {
   let Ctemp = (temp-32)*5/9;
   let Ftemp = (Ctemp*9/5)+32;
   console.log("Celcius = ",Ctemp);
   console.log("Fahrenhiet = ",Ftemp);
}

tempConvo(40);

// #14 Conversion of Minutes and Seconds:
 function timeConvo (sec:number){
    let m = sec/60;
    let s = sec%60;
    console.log("Minutes ",m);
    console.log("Seconds ",s);
 }
 timeConvo(100);

// #15 Function for Percentage:
function Mpercentage (obtMarks:number,totlMarks:number):number{
    if(totlMarks<=0){
        return 0.0;
    }
    return (obtMarks/totlMarks)*100;
}
let percentage:number = Mpercentage (850,1100);
console.log(percentage,"%");

// #16 Functions for Increment and Decrement:
function increOp (a:number){
    let b = ++a*2;
 console.log("a:",a);
 console.log("b:",b);
}
increOp (5);
 //##
 function increOperator (x:number){
    let y = x-+2;
    console.log("X:",x);
    console.log("Y:",y);
 }
 increOperator (5);

 //##
 function incrementOp (y:number){
    let z = ++y + y++ + ++y;
  console.log("y:",y);
  console.log("z:",z);
 }
 incrementOp (3);

 //##
 function increDecre (j:number){
    let k = ++j*j++*-j;
    console.log("J:",j);
    console.log("K:",k);
 }
 increDecre (2);

 //##
 function decreOp (m:number,n:number){
      let solution = ++m + n- - m++ + -n;
      console.log("Solution is",solution);
 }
 decreOp (3,5);

 //##
 function decreOperator (a:number,b:number){
    let c = a++ + ++a - -a + b;
   console.log("A:",a,"B:",b,"C:",c);
 }
 decreOperator (2,4);

 //##
 function decrementOp (a:number,b:number,c:number,d:number){
    let answer = ++a * (b-+c)/ -d;
   console.log("Answer is",answer);
 }
 decrementOp (5,3,2,7);
*/
//##
function decrementOperator(j, k, v) {
    let output = j++ * (-k + j) / (v - -k);
    console.log("Answer is ", output);
}
decrementOperator(2, 3, 4);
export {};
