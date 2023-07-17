function buttonClick()
{
    let body=document.getElementsByTagName("body")[0];
    let newDiv=document.createElement("div");
    let text=document.createTextNode("I am new div tag");
    // <div></div>
    //I am new div tag
    newDiv.append(text);
    // <div>I am new div tag</div>

    newDiv.style.color="red";

    body.appendChild(newDiv);
}

function removeButton()
{
    let div=document.getElementsByTagName("div")[1];
    div.removeChild(div.firstElementChild);
    div.removeChild(div.lastElementChild);

    // let div_1_child=div.firstElementChild;
    // let div_1_child_child=div_1_child.firstElementChild;
    // div_1_child_child.style.color="pink";


}
function siblingButton()
{
    let div=document.getElementsByTagName("div")[0];
    let div_child3=div.children[2];
    let pSibling=div_child3.previousElementSibling;
    pSibling.style.color="brown";

    let nSibling=div_child3.nextElementSibling;
    nSibling.style.color="orange";

}

function insert()
{
    let div=document.getElementsByTagName("div")[0];
    let text =document.createTextNode("I am new child");
    let div_child3=div.children[2];

    div.insertBefore(text,div_child3);


}


function replaceChildButton()
{

    // let div=document.getElementsByTagName("div")[2];
    // let div_child=div.children[0];
    
    // let img=document.createElement("img");
    // let src=document.createAttribute("src");
    // src.value="flower.jfif";

    // img.setAttributeNode(src);

    // div.replaceChild(img,div_child);

    // <img src="flower1.jfif"></img>


    let div=document.getElementsByTagName("div")[0];
    let text =document.createTextNode("I am new child");
    let div_child3=div.children[2];

    div.replaceChild(text,div_child3);



}

function print()
{
    // let div=document.getElementsByTagName("div")[4];
    // let img=div.firstElementChild;
    // console.log(img.src);


    // let div=document.getElementsByTagName("div");
    // console.log(div.length);

    // let p=document.querySelector("p");
    // console.log(p.innerText);

    // let a=document.querySelector("a");
    // console.log(a.href);

    let p=document.querySelector("p");
   //p.innerText="<button>click me</button>";
    p.innerHTML="<button>click me</button>";

}