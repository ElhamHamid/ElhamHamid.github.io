"use strict";
/* eslint-disable */

// Exam 2 Question number 1

function foo(bar,abc,xyz){
    if(bar<100){
        return abc(bar);
    }else{
        return xyz(bar);
    }
}


function apple(bar){
    return bar*2;
}
function banana(bar){
    return bar*3;
}


console.log(foo(100,apple,banana));
console.log(foo(90,apple,banana));

// // Exam 2 Question number 8

let john={name:"John",surname:"Smith",age:10};
let pete={name:"Pete",surname:"Hunt",age:20};
let people=[john,pete];

function maymapper(person){
    let obj={};
    obj.fullname=person.name+" "+person.surname;
    obj.age=person.age;

    return obj;
}



console.log(people.map(maymapper));

// Exam 2 Question number 11

let numArray=[5,11,1,33];

function myFind(array){
    return array.find(myfinder);
}

function myfinder(item){
    if(item>2){
        return true;
    }else{
        return false;
    }
}

console.log(myFind(numArray,element=>element>10));

// Exam 2 Question number 18

function tenClock(from,to){
    let current=from;

   let timerId = setInterval(go,1000);

    function go(){
        console.log(new Date());
        if(current==to){
            clearInterval(timerId);
        }
        current++;
    }
}


tenClock(1,10);



