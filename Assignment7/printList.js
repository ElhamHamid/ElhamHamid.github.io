"use strict";
/* eslint-disable*/

function printList(list){
    return list.value;
    if(list.next){
        return printList(list.next);
    }
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

 console.log( printList(list.next.next.next));