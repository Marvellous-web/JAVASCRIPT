var check=1;
var n=9;
nextplayer(check);
function nextplayer(check){
if(check==1)
{
    document.getElementById("next-player").innerText="Turn Played By: Player 1" ;
}
else if(check==0)
{
    document.getElementById("next-player").innerText="Turn Played By: Player 2";
}
}
function input(event){
    event.preventDefault();
    console.log("hi"+event.target.id);
    let play=event.target.id;
    const btn=document.querySelectorAll("button");
// console.log(btn);
    switch(play){
        case "box-1":
            if(check==1){
                
                btn[2].textContent="X";
                console.log(btn[2]);
                btn[2].disabled="true";
                check=0;
                nextplayer(check);
                moves();
            }
           else if(check==0){
                nextplayer(check);
                btn[2].textContent="0";
                console.log(btn[2]);
                btn[2].disabled="true";
                check=1;
                moves();
            }
            break;
            case "box-2":
            if(check==1){
                nextplayer(check);
                btn[3].textContent="X";
                console.log(btn[3]);
                btn[3].disabled="true";
                check=0;
                moves();
            }
           else if(check==0){
                 nextplayer(check);
                btn[3].textContent="0";
                console.log(btn[3]);
                btn[3].disabled="true";
                check=1;
                moves();
            }
            break;
     case "box-3":
                if(check==1){
                    nextplayer(check);
                    btn[4].textContent="X";
                    console.log(btn[4]);
                    btn[4].disabled="true";
                    check=0;
                    moves();
                }
               else if(check==0){
                    nextplayer(check);
                    btn[4].textContent="0";
                    console.log(btn[4]);
                    btn[4].disabled="true";
                    check=1;
                    moves();
                }
                break;
        case "box-4":
                if(check==1){
                    nextplayer(check);
                    btn[5].textContent="X";
                    console.log(btn[5]);
                    btn[5].disabled="true";
                    check=0;
                    moves();
                }
               else if(check==0){
                     nextplayer(check);
                    btn[5].textContent="0";
                    console.log(btn[5]);
                    btn[5].disabled="true";
                    check=1;
                    moves();
                }
                break;
        case "box-5":
                    if(check==1){
                        nextplayer(check);
                        btn[6].textContent="X";
                        console.log(btn[6]);
                        btn[6].disabled="true";
                        check=0;
                        moves();
                    }
                   else if(check==0){
                         nextplayer(check);
                         btn[6].textContent="0";
                        console.log(btn[6]);
                        btn[6].disabled="true";
                        check=1;
                        moves();
                    }
                    break;
         case "box-6":
                    if(check==1){
                        nextplayer(check);
                        btn[7].textContent="X";
                        console.log(btn[7]);
                        btn[7].disabled="true";
                        check=0;
                        moves();
                    }
                   else if(check==0){
                        nextplayer(check);
                        btn[7].textContent="0";
                        console.log(btn[7]);
                        btn[7].disabled="true";
                        check=1;
                        moves();
                    }
                    break;
             case "box-7":
                        if(check==1){
                            nextplayer(check);
                            btn[8].textContent="X";
                            console.log(btn[8]);
                            btn[8].disabled="true";
                            check=0;
                            moves();
                        }
                       else if(check==0){
                            nextplayer(check);
                            btn[8].textContent="0";
                            console.log(btn[8]);
                            btn[8].disabled="true";
                            check=1;
                            moves();
                        }
                        break;
             case "box-8":
                        if(check==1){
                            nextplayer(check);
                            btn[9].textContent="X";
                            console.log(btn[9]);
                            btn[9].disabled="true";
                            check=0;
                            moves();
                        }
                       else if(check==0){
                            nextplayer(check);
                            btn[9].textContent="0";
                            console.log(btn[9]);
                            btn[9].disabled="true";
                            check=1;
                            moves();
                        }
                        break;
             case "box-9":
                        if(check==1){
                            nextplayer(check);
                            btn[10].textContent="X";
                            console.log(btn[10]);
                            btn[10].disabled="true";
                            check=0;
                            moves();
                        }
                       else if(check==0){
                            nextplayer(check);
                            btn[10].textContent="0";
                            console.log(btn[10]);
                            btn[10].disabled="true";
                            check=1;
                            moves();
                        }
                        break;
    }
 winner();
}
// update panel values such as Turn Played By and Moves Left
 function moves(){
    const btn=document.querySelectorAll("button");
    let x=9;
    let z=btn[10].textContent.length+btn[2].textContent.length+btn[3].textContent.length+btn[4].textContent.length+
    btn[5].textContent.length+btn[6].textContent.length+btn[7].textContent.length+btn[8].textContent.length+btn[9].textContent.length;
    console.log(btn[10].textContent.length);
    console.log('value  '+z)
    let xx=x-z;
    console.log('value of xx '+xx)
        let left = document.getElementById("move-count");
        left.innerText = "moves left : " + xx;
 }
// reset panel values to default values
function set(event){
    if(event.target.id=="reset" || event.target.id=="replay"){
        const btn=document.querySelectorAll("button")
        document.getElementById("winner").innerText="" ;
        // check=1;
        btn[2].textContent="";  btn[2].disabled = false;
        btn[3].textContent="";  btn[3].disabled = false;
        btn[4].textContent="";  btn[4].disabled = false;
        btn[5].textContent="";  btn[5].disabled = false;
        btn[6].textContent="";  btn[6].disabled = false;
        btn[7].textContent="";  btn[7].disabled = false;
        btn[8].textContent="";  btn[8].disabled = false;
        btn[9].textContent="";  btn[9].disabled = false;
        btn[10].textContent=""; btn[10].disabled = false;
        let left=document.getElementById("move-count");
    left.innerText="moves left : "+9;
    }
}
// implement logic to get the winner
 function winner (){
    const btn=document.querySelectorAll("button");
    let z=btn[10].textContent.length+btn[2].textContent.length+btn[3].textContent.length+btn[4].textContent.length+
    btn[5].textContent.length+btn[6].textContent.length+btn[7].textContent.length+btn[8].textContent.length+btn[9].textContent.length;
    if((btn[2].textContent=="X" && btn[3].textContent=="X" && btn[4].textContent=="X") ||
       (btn[5].textContent=="X" && btn[6].textContent=="X" && btn[7].textContent=="X") ||
       (btn[8].textContent=="X" && btn[9].textContent=="X" && btn[10].textContent=="X")||
       (btn[2].textContent=="X" && btn[5].textContent=="X" && btn[8].textContent=="X") ||
       (btn[3].textContent=="X" && btn[6].textContent=="X" && btn[9].textContent=="X") ||
       (btn[4].textContent=="X" && btn[7].textContent=="X" && btn[10].textContent=="X")||
       (btn[2].textContent=="X" && btn[6].textContent=="X" && btn[10].textContent=="X")||
       (btn[4].textContent=="X" && btn[6].textContent=="X" && btn[8].textContent=="X") )
    {
        
        btn[2].disabled = true;  btn[3].disabled = true;  btn[4].disabled = true;
        btn[5].disabled = true;  btn[6].disabled = true;  btn[7].disabled = true;
        btn[8].disabled = true;  btn[9].disabled = true;   btn[10].disabled = true;
        document.getElementById("winner").innerText="winner Player 1"
    }
  else if((btn[2].textContent=="0" && btn[3].textContent=="0" && btn[4].textContent=="0") ||
         (btn[5].textContent=="0" && btn[6].textContent=="0" && btn[7].textContent=="0") ||
        (btn[8].textContent=="0" && btn[9].textContent=="0" && btn[10].textContent=="0")||
        (btn[2].textContent=="0" && btn[5].textContent=="0" && btn[8].textContent=="0") ||
        (btn[3].textContent=="0" && btn[6].textContent=="0" && btn[9].textContent=="0") ||
        (btn[4].textContent=="0" && btn[7].textContent=="0" && btn[10].textContent=="0")||
        (btn[2].textContent=="0" && btn[6].textContent=="0" && btn[10].textContent=="0")||
         (btn[4].textContent=="0" && btn[6].textContent=="0" && btn[8].textContent=="0"))
{
   
   btn[2].disabled = true;  btn[3].disabled = true;  btn[4].disabled = true;
   btn[5].disabled = true;  btn[6].disabled = true;  btn[7].disabled = true;
   btn[8].disabled = true;  btn[9].disabled = true;   btn[10].disabled = true;
   document.getElementById("winner").innerText="winner Player 2"
    }
    else  if(z==9)
    document.getElementById("winner").innerText="match tie"
}
