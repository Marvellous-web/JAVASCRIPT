// set MAX property to calendar as current data

console.log( new Date().toISOString());

let pdate = document.getElementById('bookPublishedDate');
pdate.setAttribute('max', new Date().toISOString().split('T')[0]);

let masterBookData=[];

console.log('page loaded');


const submitBookData = (event) =>{
    event.preventDefault();
    console.log('book data submited');

    // get form object
    let formobject=document.getElementById('bookDataForm');
    console.log(formobject);

    // get JSON type of data from formobject
    let bookData=Object.fromEntries(new FormData(formobject));
    console.log(bookData);
    console.log(bookData.bookId);

    // calling validate function
    validateBookData(bookData);
    
}

const validateBookData=(bookData)=>{
    // check individual fields in bookData
    // create erros JSON object
    let errors = {
        idError: validateBookId(bookData.bookId),
        nameError: validateBookName(bookData.bookName),
        subjectError: validateBookSubject(bookData.bookSubject),
        authorError: validateBookAuthor(bookData.bookAuthors),
        priceError: validateBookPrice(bookData.bookPrice),
        stockError: validateBookStock(bookData.bookStock)
    }

    console.log(errors);
    displayIndividualErrors(errors);
    displaySummaryErrors(errors,bookData);
}

const displayIndividualErrors=(errors) =>{
    // to display error messages on individual fields
    document.getElementById('bookIdError').innerText=errors.idError;
    document.getElementById('bookNameError').innerText=errors.nameError;
    document.getElementById('bookSubjectError').innerText=errors.subjectError;
    document.getElementById('bookAuthorError').innerText=errors.authorError;
    document.getElementById('bookPriceError').innerText=errors.priceError;
    document.getElementById('bookStockError').innerText=errors.stockError;

}

const displaySummaryErrors=(errors,bookData) =>{
    // to display error messages summary
    let messages=[];
    if(errors.idError!='') { messages.push(errors.idError) }
    if(errors.nameError!='') { messages.push(errors.nameError) }
    if(errors.subjectError!='') { messages.push(errors.subjectError) }
    if(errors.authorError!='') { messages.push(errors.authorError) }
    if(errors.priceError!='') { messages.push(errors.priceError) }
    if(errors.stockError!='') { messages.push(errors.stockError) }

    let m="";
    for(msg of messages){
        m = m+`<li>${msg}</li>`;
    }

    console.log(m);

    document.getElementById('errorSumary').innerHTML=m;

    console.log(messages);
    if(messages.length==0){
        console.log('no errors');
        masterBookData.push(bookData);
        console.log(masterBookData);
        document.getElementById('masterBookData').innerText=masterBookData|JSON;
    }
}

const validateBookId=(bookId)=>{
    if(bookId=="" || bookId==null){
        return "Book ID can not be left blank"
    }
    else{
        return "";
    }
}

const validateBookName=(bookName)=>{
    if(bookName=="" || bookName==null){
        return "Book Name can not be left blank"
    }
    else{
        return "";
    }
}

const validateBookSubject=(bookSubject)=>{
    if(bookSubject=="" || bookSubject==null){
        return "Book Subject can not be left blank"
    }
    else{
        return "";
    }
}

const validateBookAuthor=(bookAuthors)=>{
    if(bookAuthors=="" || bookAuthors==null){
        return "Book Author can not be left blank"
    }
    else{
        return "";
    }
}

// price must be entered, must be numeric, must be >=1
const validateBookPrice=(bookPrice)=>{
    if(bookPrice=="" || bookPrice==null){
        return "Book Price must be entered";
    }
    else if(isNaN(bookPrice)==true){ // if text entered as price
        return "Book price must be number";
    }
    else if(parseInt(bookPrice)<1){
        return "Book price must be >= 1";
    }   
    else{
        return "";
    } 
}

// stock must be entered, must be numeric, must be >=0
const validateBookStock=(bookStock)=>{
    if(bookStock=="" || bookStock==null){
        return "Book Stock must be entered";
    }
    else if(isNaN(bookStock)==true){ // if text entered as stock
        return "Book Stock must be number";
    }
    else if(parseInt(bookStock)<0){
        return "Book Stock must be >= 0";
    }   
    else{
        return "";
    } 
}



const checkAuthor2=(event)=>{
    let checkbox = event.target;
    if(checkbox.checked==true){ // checked
        // create new element
        // add element to 'author2div'
        
        //   <input type="text" id="author2" name="author2" placeholder="Enter 2nd Author name"/>
        
        let textbox = document.createElement('input');
        textbox.setAttribute('type','text');
        textbox.setAttribute('id','author2');
        textbox.setAttribute('name','author2');
        textbox.setAttribute('placeholder', 'Enter 2nd Author name');

        document.getElementById('author2div').appendChild(textbox);
    }
    else{ // unchecked
        // remove created element
        let textbox = document.getElementById('author2');
        textbox.remove();
    }
}