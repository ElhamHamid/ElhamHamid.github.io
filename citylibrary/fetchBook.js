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
                temp += "<td>" + book.datePublished + "</td></tr>";

            })

            document.getElementById("data").innerHTML = temp;
        }


    });
});