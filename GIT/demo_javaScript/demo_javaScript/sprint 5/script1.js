const updateBook=()=>{

    // create object with modified data 
    let temp={
        'id':'B020',
        'bookname': 'Beans scope',
        'booksubject':'Spring',
        'bookauthor':'Mc Gr',
        'bookprice':120
    };

    let xhr = new XMLHttpRequest();
    xhr.open("PUT","http://localhost:3000/books/B020");
    xhr.setRequestHeader("Content-Type","application/json; charset=UTF-8");
    xhr.send(JSON.stringify(temp)); // data to be sent along with request

    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            alert('updated successfully');
        }
    }


}



const deleteBook=()=>{
    // get entered book id
    //  create XHR object, Delete, URL with id
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE","http://localhost:3000/books/B011");
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            alert('delete successfully');
        }
    }
}


const submitBookData=(event)=>{
    event.preventDefault();
    // receive book data

    let bookform = document.getElementById('bookDataForm');
    let bookdata = Object.fromEntries(new FormData(bookform));
    console.log(bookdata);
    // convert bookdata.price as number

    let xhr = new XMLHttpRequest();
    xhr.open("POST","http://localhost:3000/books");
    // some info in header about json type
    xhr.setRequestHeader("Content-Type","application/json; charset=UTF-8");
    xhr.send(JSON.stringify(bookdata)); // data to be sent along with request


// 0 -> 1   / 1->2  /   2->3   /  3->4
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==201){
            alert('data inserted successfully');
        }
    }
}





function getdata() {
    // create XHR object, set properties, send the request
    console.log('method called')
    let xhr = new XMLHttpRequest();
    xhr.open("GET","http://localhost:3000/books");
    xhr.send(); // no data sent along with request

    // xhr comes with pre-defined metods

    xhr.onprogress = function(event){
        console.log(xhr.readyState);
    }

    xhr.onload=function(){ // completed successfully
        console.log(xhr.readyState);
        console.log("data retreived");
        console.log(xhr.response);            
        document.getElementById('bookdata').innerText=xhr.response;      
    }

    xhr.onerror=function(){
        // tiggers only if the request could not process
        console.log('Network Error');        
    }

}
