const submitMovieData = (event) =>{
    event.preventDefault();
    console.log('movie data submited');

    // get form object
    let formobject=document.getElementById('movieDataForm');
    console.log(formobject);

     // get JSON type of data from formobject
     let movieData=Object.fromEntries(new FormData(formobject));
     console.log(movieData);
     console.log(movieData.movieName);

     //calling validation method
     validatemovieData(movieData);
}

    const validatemovieData=(movieData)=>{
        let errors = {
        nameError : validatemovieName(movieData.movieName),
        typeError : validatemovieType(movieData.movieType),
        showtimeError : validatemovieShowTime(movieData.movieShowTime),
        ticketpriceError : validatemovieTicketPrice(movieData.movieTicketPrice),
        dateError : validatemovieDate(movieData.movieDate)
    }
    console.log(errors);
    displayErrors(errors);
    
}
    const displayErrors=(errors)=>{
        document.getElementById('movieNameError').innerText=errors.nameError;
        document.getElementById('movieTypeError').innerText=errors.typeError;
        document.getElementById('movieShowTimeError').innerText=errors.showtimeError;
        document.getElementById('movieTicketPriceError').innerText=errors.ticketpriceError;
        document.getElementById('movieDateError').innerText=errors.dateError;
    }

    
   const validatemovieName=(movieName)=>{
    if(movieName=="" || movieName==null){
        return "movie name should not be empty!"
    }else
        return "";
   }
   
   const validatemovieType=(movieType)=>{
    if(movieType=="" || movieType==null){
        return "movie type should not be empty!"
    }else
        return "";
   }

   const validatemovieShowTime=(movieShowTime)=>{
    if(movieShowTime=="" || movieShowTime==null){
        return "movie show time should not be empty!"
    }else
        return "";
   }

   const validatemovieTicketPrice=(movieTicketPrice)=>{
    if(movieTicketPrice=="" || movieTicketPrice==null){
        return "movie price should not be empty!"
    }else
        return "";
   }

   const validatemovieDate=(movieDate)=>{
    if(movieDate=="" || movieDate==null){
        return "movie date should not be empty"
    }else 
    return "";
   }