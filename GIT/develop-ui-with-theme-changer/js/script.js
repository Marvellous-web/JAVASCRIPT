function changeTheme(event){
    var a=event.target.id;
    let body=document.getElementsByTagName("body")[0];
    // let fontstyle1=document.getElementsByClassName("card")
    if(a=="bright"){
        body.style.backgroundColor="green";
        // fontstyle1.style.getPropertyValue('--element-width');
        document.getElementsByClassName("card")[0].style.fontStyle="Italic";
        document.getElementsByClassName("card")[1].style.fontStyle="Italic";
        document.getElementsByClassName("card")[2].style.fontStyle="Italic";
    //    body.style.fontStyle="Italic";
    }
    else if(a=="cool"){
        body.style.backgroundColor="red";
        // body.style.fontStyle="oblique";
        document.getElementsByClassName("card")[0].style.fontStyle="oblique";
        document.getElementsByClassName("card")[1].style.fontStyle="oblique";
        document.getElementsByClassName("card")[2].style.fontStyle="oblique";
    }
    else if(a=="fiery"){
        body.style.backgroundColor="purple";
        // body.style.fontStyle="normal";
        document.getElementsByClassName("card")[0].style.fontStyle="normal";
        document.getElementsByClassName("card")[1].style.fontStyle="normal";
        document.getElementsByClassName("card")[2].style.fontStyle="normal";

    }
}