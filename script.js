const addbutton=document.querySelector("#add");
const cancelbutton=document.querySelector(".cancel");
const formdetails=document.querySelector(".form-details");
const form=document.querySelector("#signup-form");

addbutton.addEventListener("click",()=>{formdetails.style.display="block";});
cancelbutton.addEventListener("click",()=>{formdetails.style.display="none";});

//JS for buttons
const deletebutton=document.querySelectorAll(".delete");
const progressbutton=document.querySelectorAll(".progress");
const readbutton=document.querySelectorAll(".read");

deletebutton.forEach(button=>{button.addEventListener("click",()=>{const card=button.closest(".card");
card.remove();});});

progressbutton.forEach(button=>{button.addEventListener("click",()=>{const card=button.closest(".card");
    card.style.border="5px solid orange";
});});

readbutton.forEach(button=>{button.addEventListener("click",()=>{const card=button.closest(".card");
    card.style.border="5px solid green";
});});



form.addEventListener("submit",(event)=>{event.preventDefault();

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
    <div class="author">by ${author}</div>
    <div class="pages">${pages}</div>
    <div class="buttons">
    <div class="delete">
      <img src="pics/trash.png" alt="delete" width="24" height="24"></div>
    <div class="progress">
      <img src="pics/progress.png" alt="progress" width="24" height="24"></div>
    <div class="read">
      <img src="pics/checkmark.png" alt="read" width="24" height="24"></div>
  </div>

`;
card.querySelector(".delete").addEventListener("click",()=>{card.remove();});
card.querySelector(".progress").addEventListener("click",()=>{card.style.border="5px solid orange";});
card.querySelector(".read").addEventListener("click",()=>{card.style.border="5px solid green";});

box2grid.appendChild(card);
form.reset();
formdetails.style.display="none";


});
