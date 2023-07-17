//Provide the solution code here

//disable all dates for whom age is less than 18
// set 'max' attribute value for calendar
let currentyear = parseInt(new Date().getFullYear());
    let currentmonth = parseInt(new Date().getMonth());
    currentmonth++;
    let currentdate = parseInt(new Date().getDate());
    let year = currentyear-15;
    let month = (currentmonth<10)?'0'+currentmonth : currentmonth;
    let date = (currentdate<10)?'0'+currentdate : currentdate;
    let maxdate = year + "-" + month + "-" + date;
    let calender = document.getElementById('birthdate');
    // calender.setAttribute("max",maxdate);

//function to validate additional contact no
    var count=1;
    const addAdditionalNo=(event)=>{   
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
    }else
        {
            document.getElementById("addContactNo").setAttribute("type","disabled");
        }

}

// listen to click of addContact button and add maximum of two additional inputs for inputting Contact Nos.
 //contact object captures all the inputs provided
const submitContact = (event) => {

    event.preventDefault();
    console.log('contact data submitted');

    let formObject = document.getElementById('formContactData');
    console.log(formObject);

    let contactdata=Object.fromEntries(new FormData(formObject));
    console.log(contactdata);

        validateContactData(contactdata);

}
  //errors object captures all the validation errors

    //display validation summary with error messages

    //if no errors, push the contact to contacts array

    //contacts can be logged on to console, or can even be updated on UI

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
        document.getElementById('contacts').innerText=contacts|JSON;
    }
}


//function to validate firstName
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

//function to validate lastName
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

//function to validate email
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

//function to validate home no
const validatehomeNo=(homeNo)=>
{
    var phoneno = /^\d{10}$/;
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


//function to validate work no
const validateworkNo=(workNo)=>
{
    var phoneno = /^\d{10}$/;
    if(workNo=="" || workNo==null)
    {
        return "Work number cannot be empty";
    }
   else if(workNo.match(phoneno))
         {
           return "";
         }else
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

//function to validate notes
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
//function to display validation summary with error messages provided

//function to display error messages alongside the input fields



