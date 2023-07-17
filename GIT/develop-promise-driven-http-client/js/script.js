//Provide the solution code here
let currentyear = parseInt(new Date().getFullYear());
    let currentmonth = parseInt(new Date().getMonth());
    currentmonth++;
    let currentdate = parseInt(new Date().getDate());
    let year = currentyear-18;
    let month = (currentmonth<10)?'0'+currentmonth : currentmonth;
    let date = (currentdate<10)?'0'+currentdate : currentdate;
    let maxdate = year + "-" + month + "-" + date;
    let calender = document.getElementById('birthdate');
    calender.setAttribute("max",maxdate);



    var count=1;
const addAdditionalNo=(event)=>
{
event.preventDefault();//to stop the page from refresh
console.log(event.target.id);
if(count<3)
{


    let textbox=document.createElement('input');
    textbox.setAttribute('type','text');
    textbox.setAttribute('id','contact2');
    textbox.setAttribute('name','contact2');
    textbox.setAttribute('placeholder','Enter second contact');
    document.getElementById('contact2').appendChild(textbox);
    count=count+1;
}

else
{
    document.getElementById("addContactNo").setAttribute("type","disabled");
}

}

// listen to click of addContact button and add maximum of two additional inputs for inputting Contact Nos.

const submitContact = (event) => {



    event.preventDefault();
    console.log('contact data submitted');

    let formObject = document.getElementById('formContactData');
    console.log(formObject);

    let contactdata=Object.fromEntries(new FormData(formObject));
    console.log(contactdata);





    //contact object captures all the inputs provided

    //errors object captures all the validation errors

    //display validation summary with error messages

    //if no errors, push the contact to contacts array

    //contacts can be logged on to console, or can even be updated on UI


    validateContactData(contactdata);
}



const validateContactData=(contactdata)=>
{
    let errors={
        firstnameError: validateFirstName(contactdata.firstname),
        lastnameError: validateLastName(contactdata.lastname),
        emailError: validateEmail(contactdata.email),
        homeNoError: validatehomeNo(contactdata.homeNo),
        workNoError: validateworkNo(contactdata.workNo),
        // birthDateError: validateBirthDate(contactdata.birthDate),
        companyError: validateCompany(contactdata.company),
        jobTitleError: validateJobTitle(contactdata.jobTitle),
        notesError: validatenotes(contactdata.notes)
         
        
  
    } 
    console.log(errors);

    displaySummarizeError(errors,contactdata);
}
const validateFirstName=(firstname)=>
{
    let validRegEx = "^[a-zA-Z.]+$";
    
    if(firstname=="" || firstname==null)
    {
        return "Last name cannot be empty";
    }
    else if (firstname.match(validRegEx))
    {
        return "";
    }
    else
    return "firstname should allow only alphabets";
}
const validateLastName=(lastname)=>
{
    let validRegEx = "^[a-zA-Z.]+$";
    
    if(lastname=="" || lastname==null)
    {
        return "Last name cannot be empty";
    }
    else if (lastname.match(validRegEx))
    {
        return "";
    }
    else
    return "Lastname should allow only alphabets";
   
    
    
}

const validateEmail=(email)=>
{
   
        let emailError="";
        let regexp="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if(email=="" || email==null)
    {
        return "email cannot be empty";
    }
    else if(!email.match(regexp))
        {
            emailError="Invalid Email Format";
        }
        return emailError;
    
            
}

const validatehomeNo=(homeNo)=>
{


    var phoneno = /^([+1 0])[9]*/;
    if(homeNo=="" || homeNo==null)
    {
        return "Home number cannot be empty";
    }
    
   else if(homeNo.match(phoneno))
              {
           return "";
              }
            else
              {
                return ("Phone number not validated");
              }
}

const validateworkNo=(workNo)=>
{
    var phoneno = /^([+1 0])[9]*/;
    if(workNo=="" || workNo==null)
    {
        return "Work number cannot be empty";
    }
    
   else if(workNo.match(phoneno))
              {
           return "";
              }
            else
              {
                return ("Work number not validated");
              }

    

}


const validateCompany=(company)=>
{
    
    if(company=="" || company==null)
    {
        return "Company field cannot be empty";
    }
    else
    {
        return "";
    }

}

const validateJobTitle=(jobTitle)=>
{
    
    if(jobTitle=="" || jobTitle==null)
    {
        return "Company field cannot be empty";
    }
    else
    {
        return "";
    }

}

const validatenotes=(notes)=>
{
    
    if(notes=="" || notes==null)
    {
        return "notes field cannot be empty";
    }
    else if(notes.length>=200)
    {
        return "Notes field error";
    }
    else

    return "";
    

}
const displaySummarizeError = (errors,contactdata)=>

{
    let contacts = [];
    if(errors.firstnameError!="")
    {
        contacts.push(errors.firstnameError);
    }
    if(errors.lastnameError!="")
    {
        contacts.push(errors.lastnameError);
    }if(errors.emailError!="")
    {
        contacts.push(errors.emailError);
    }if(errors.homeNoError!="")
    {
        contacts.push(errors.homeNoError);
    }if(errors.workNoError!="")
    {
        contacts.push(errors.workNoError);
    }if(errors.companyError!="")
    {
        contacts.push(errors.companyError);
    }if(errors.jobTitleError!="")
    {
        contacts.push(errors.jobTitleError);
    }if(errors.notesError!="")
    {
        contacts.push(errors.notesError);
    }


    let m="";
    for(msg of contacts)
    {
        m=m+`<li>${msg}</li>`;
    }
    console.log(m);
    document.getElementById('validationSummary').innerHTML=m;

    console.log(contacts);
    if(contacts.length==0)
    {
        console.log('No errors');
        contacts.push(contactdata);
        console.log(contacts);
        document.getElementById('contact-list').innerText=contacts|JSON;
    }

    savedata(contactdata)
}



const savedata=(contactdata)=>
{
axios.post('http://localhost:3000/contacts',contactdata)
.then(response=>{
    console.log("success")
    getdata();
})

    .catch(error=>{

        console.log('post-error')


    })



}



//function to display validation summary with error messages provided

//function to display error messages alongside the input fields

//function to validate firstName

//function to validate lastName

//function to validate email

//function to validate home no

//function to validate work no

//function to validate additional contact no

//function to validate additional contact no

//function to validate notes

//disable all dates for whom age is less than 18
