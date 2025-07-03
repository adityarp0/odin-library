const addbutton=document.querySelector("#add");
const cancelbutton=document.querySelector(".cancel");
const formdetails=document.querySelector(".form-details");

addbutton.addEventListener("click",()=>{formdetails.style.display="block";});
cancelbutton.addEventListener("click",()=>{formdetails.style.display="none";});

formdetails.addEventListener("submit",(event)=>{event.preventDefault();});

const title=document.querySelector("#bookname").value;
const author=document.querySelector("#authorname").value;
const pages=document.querySelector("#pages").value;
const status=document.querySelector('input[name="read-status"]:checked').value;

const box2grid=document.querySelector(".box2grid");
const card=document.createElement("div");
card.classList.add("card");

card.innerHTML=
`
    <div class="title">${title}</div>
    <div class=author">${author}
`