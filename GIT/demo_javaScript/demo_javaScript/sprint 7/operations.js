
console.log('hi');

  let xhr = new XMLHttpRequest(); // creates object for XMLHttpRequest
    xhr.open("GET","http://localhost:3000/books", true); // setting properties to created HTTP request
    xhr.send();
    console.log('readystate : ' + xhr.readyState); 

    xhr.onprogress = function(event) { 
        // event.loaded - how many bytes downloaded       
        console.log(`Progress : ${event.loaded} bytes, ${xhr.readyState}`);
    };

    xhr.onload=function(){    // completed    
        console.log(`Loaded:${xhr.status}, ${xhr.statusText}, ${xhr.response}, ${xhr.readyState}`);
        //console.log(xhr.responseType); 
        document.getElementById('data').innerHTML=xhr.response;              
    };

    xhr.onerror = function() { // only triggers if the request couldn't be made at all
        console.log(`Network Error`);        
    };  