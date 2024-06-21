document.addEventListener('DOMContentLoaded',function() 
{
    if(document.getElementById('loginForm')) 
    {
        document.getElementById('loginForm').addEventListener('submit',function(event) 
        {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if(username == 'gargi' && password == 'gargi255') 
            {
                alert('Login Successful!');
                window.location.href = 'dashboard.html';
            } 
            else {
                alert('Invalid Login-credentials!');
            }
        });
    }

    if(document.getElementById('registerForm')) 
    {
        document.getElementById('registerForm').addEventListener('submit',function(event) 
        {
            event.preventDefault();
            alert('Registration Successful!');
            window.location.href='login.html';
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const books = [
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            image: "pride-prejudice.png"
        },
        {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            image: "lord-rings.png"
        },
        {
            title: "Wings of Fire",
            author: "APJ Abdul Kalam",
            image: "wings-fire.png"
        },
        {
            title: "Don Quixote",
            author: "Miguel de Cervantes",
            image: "don-quixote.png"
        },
        {
            title: "Harry Potter and the Philosopher's Stone",
            author: "J.K. Rowling",
            image: "harry-potter.png"
        },
        {
            title: "Diary of a Wimpy Kid",
            author: "Jeff Kinney",
            image: "wimpy-kid.png"
        }
    ];

    const bookList = document.getElementById("book-list");

    books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.className = "book-item";

        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
        `;

        bookList.appendChild(bookItem);
    });
});