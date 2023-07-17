const books = [   
        { "id": "B001", "name": "Spirit of C", "subject": "C Language", "author": "M Cooper", "price": 230  },
        { "id": "B002", "name": "Servlets and JSP", "subject": "JSP", "author": "MC-G-Hil", "price": 435 },
        { "id": "B003", "name": "Threads in Java", "subject": "Java", "author": "BG Swamy", "price": 341  },
        { "id": "B004", "name": "Forms in HTML", "subject": "HTML", "author": "Raghava", "price": 654  }
    ];

publishbooks(); 

let bookobj = { 'id': 'B005',  'name': 'Protocols', 'subject': 'Networking', 'author': 'MJ', 'price': 123 };
addbook(bookobj);  

let bookobj1 = { 'id': 'B006', 'name': 'Protocols', 'subject': 'Networking', 'author': 'MJ', 'price': 123 };
addbook1(bookobj1); // 8000

function publishbooks(){
   
    setInterval(
        function(){
            console.log('publishing...')
            document.getElementById("bookul").innerHTML="";
            let content='';
            books.forEach( b=>
                {
                    content=content+`<li>${b.id} ${b.name} ${b.subject} ${b.author}  ${b.price}</li>`;
                });
            document.getElementById("bookul").innerHTML=content;           
        }, 1000);     
}

function addbook(book){
    // logic to push book object to books array
    // setTimeout(  logic to push obj  , delay time  );
    setTimeout(  function(){ 
        books.push(book);
        console.log('book data pushed :' + book.id + ", " + book.name + ", " + book.subject);               
    }, 2000 );   
}

function addbook1(book){
    setTimeout(function() { 
        books.push(book);
        console.log('book data pushed :' + book.id + ", " + book.name + ", " + book.subject); 
    }, 8000);
}
























/*
let bookobj = { 
    'id': 'B005',
    'name': 'Protocols',
    'subject': 'Networking',
    'author': 'MJ',
    'price': 123
};

let bookobj1 = { 
    'id': 'B006',
    'name': 'Protocols',
    'subject': 'Networking',
    'author': 'MJ',
    'price': 123
};
*/

// addbook1(bookobj1);
// publishbooks();



/*
function() { 
        books.push(book);
        console.log('book data pushed :' + book.id + ", " + book.name + ", " + book.subject);        
    }

    */