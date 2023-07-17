// // Provide persistence solution code here

// const submitBookData=(event)=>{
//     event.preventDefault();
//     // receive book data

//     let bookform = document.getElementById('bookDataForm');
//     let bookdata = Object.fromEntries(new FormData(bookform));
//     console.log(bookdata);
//     // convert bookdata.price as number

//     let xhr = new XMLHttpRequest();
//     xhr.open("POST","http://localhost:3000/books");
//     // some info in header about json type
//     xhr.setRequestHeader("Content-Type","application/json; charset=UTF-8");
//     xhr.send(JSON.stringify(bookdata)); // data to be sent along with request


// // 0 -> 1   / 1->2  /   2->3   /  3->4
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState==4 && xhr.status==201){
//             alert('data inserted successfully');
//         }
//     }
// }


