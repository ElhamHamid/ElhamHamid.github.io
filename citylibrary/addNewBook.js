"use strict";
/* eslint-disable*/




let saveBook = document.getElementById("save");

saveBook.addEventListener("click", addBookfunc);


async function addBookfunc() {
    // alert("working")

    //let bookId= document.getElementById("bookId").value;
    let Title = document.getElementById("title").value;
    let IsBn = document.getElementById("isbn").value;
    let publisher = document.getElementById("publisher").value;
    let overdueFee = Number(document.getElementById("Overdue").value);
    let dateP = document.getElementById("Pdate").value;

    let data = {
        // "bookId":bookId,
        "isbn": IsBn,
        "title": Title,
        "overdueFee": overdueFee,
        "publisher": publisher,
        "datePublished": dateP
    }
    // alert(data);

    const resp = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })

    let display = document.getElementById("inner");
    display.innerHTML="Book Successfully Added"
    let dis = document.getElementById("pbtdisplay");
    dis.style.display = "block";
    setTimeout(_ => {
        location.replace("addNewBook.html")
    }, 3000)

};




