"use strict";
/* eslint-disable*/



let data;
fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list").then(function (response) {
    response.json().then(function (data) {
        console.log(data);
        if (data.length > 0) {
            let temp = "";
            data.forEach(book => {
                temp += "<tr>";
                temp += "<td>" + book.bookId + "</td>";
                temp += "<td>" + book.isbn + "</td>";
                temp += "<td>" + book.title + "</td>";
                temp += "<td>" + book.overdueFee + "</td>";
                temp += "<td>" + book.publisher + "</td>";
                temp += "<td>" + book.datePublished + "</td>";
                temp += "<td>" + `<button  type="button" class="btn btn-outline-success"><a href="editBook.html?bookId=${book.bookId}">Edit</a></button>` + "</td>";
                temp += "<td>" + `<button onclick ="Deleted(${book.bookId})" type="button" class="btn btn-outline-success">Delete</button>` + "</td></tr>";
            })

            document.getElementById("data").innerHTML = temp;
        }


    });
});

function Deleted(bookId) {
    let r = confirm("Are you sure,you want delete this book");
    if (r == true) {
        let url = `https://elibraryrestapi.herokuapp.com/elibrary/api/book/delete/${bookId}`;
    fetch(url, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
    })
    alert("Book successFully Deleted")
    } else {
        alert("You pressed Cancel!")
    }
}


