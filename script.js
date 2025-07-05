document.addEventListener("DOMContentLoaded", () => {
 
const addbutton=document.querySelector("#add");
const cancelbutton=document.querySelector(".cancel");
const formdetails=document.querySelector(".form-details");
const form=document.querySelector("#signup-form");

// Apply background and button listeners to pre-existing cards
document.querySelectorAll(".card").forEach(card => {
  const status = card.dataset.status;

  // color based on status in html
  if (status === "read") {
    card.style.background = "linear-gradient(to right, green 10px, rgb(221, 215, 215) 20px)";
  } else if (status === "progress") {
    card.style.background = "linear-gradient(to right, orange 10px, rgb(221, 215, 215) 20px)";
  } else {
    card.style.background = "linear-gradient(to right, rgb(255, 50, 50) 10px, rgb(221, 215, 215) 20px)";
  }

  // color based on status on button
  card.querySelector(".delete").addEventListener("click", () => card.remove());

  card.querySelector(".progress").addEventListener("click", () => {
    card.style.background = "linear-gradient(to right, orange 10px, rgb(221, 215, 215) 20px)";
    card.dataset.status = "progress";
  });

  card.querySelector(".read").addEventListener("click", () => {
    card.style.background = "linear-gradient(to right, green 10px, rgb(221, 215, 215) 20px)";
    card.dataset.status = "read";
  });
});



addbutton.addEventListener("click",()=>{formdetails.style.display="block";});
cancelbutton.addEventListener("click",()=>{formdetails.style.display="none";});

//JS for buttons

const deletebutton=document.querySelectorAll(".delete");
const progressbutton=document.querySelectorAll(".progress");
const readbutton=document.querySelectorAll(".read");

deletebutton.forEach(button=>{button.addEventListener("click",()=>{const card=button.closest(".card");
card.remove();});});

progressbutton.forEach(button=>{button.addEventListener("click",()=>{const card=button.closest(".card");
    card.style.background="linear-gradient(to right,orange 10px,rgb(221, 215, 215) 20px)";
    card.dataset.status="progress";
});});

readbutton.forEach(button=>{button.addEventListener("click",()=>{const card=button.closest(".card");
    card.style.background="linear-gradient(to right,green 10px,rgb(221, 215, 215) 20px)";
    card.dataset.status="read";
});});





form.addEventListener("submit",(event)=>{event.preventDefault();

const title=document.querySelector("#bookname").value;
const author=document.querySelector("#authorname").value;
const pages=document.querySelector("#pages").value;
const status=document.querySelector('input[name="read-status"]:checked').value;

const box2grid=document.querySelector(".box2grid");
const card=document.createElement("div");
card.classList.add("card");
card.setAttribute("data-status", status);

card.innerHTML=
`
    <div class="title"><strong>${title}</strong></div>
    <div class="author"><em>by ${author}</em></div>
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
card.querySelector(".progress").addEventListener("click",()=>{card.style.background="linear-gradient(to right,orange 10px,rgb(221, 215, 215) 20px)";
  card.dataset.status="progress";
});
card.querySelector(".read").addEventListener("click",()=>{card.style.background="linear-gradient(to right, green 10px,rgb(221, 215, 215) 20px)";
  card.dataset.status="read";
});

if(status=="read")
{
   card.style.background="linear-gradient(to right, green 10px ,rgb(221, 215, 215) 20px)";
}
else
{
   card.style.background="linear-gradient(to right,rgb(255, 50, 50) 10px,rgb(221, 215, 215) 20px)";
}

box2grid.appendChild(card);
form.reset();
formdetails.style.display="none";


});

const librarycardbutton=document.querySelector("#library");
const readbuttoncardbutton=document.querySelector("#read");
const unreadcardbutton=document.querySelector("#unread");

readbuttoncardbutton.addEventListener("click",()=>{const allcards=document.querySelectorAll(".card");
  allcards.forEach((card)=>{if (card.dataset.status==="read")
  {card.classList.remove("hidden");}
  else {card.classList.add("hidden");}
  });});

unreadcardbutton.addEventListener("click",()=>{const allcards=document.querySelectorAll(".card");
  allcards.forEach((card)=>{if (card.dataset.status==="unread")
  {card.classList.remove("hidden");}
  else {card.classList.add("hidden");}
  });
});

librarycardbutton.addEventListener("click",()=>{const allcards=document.querySelectorAll(".card");
  allcards.forEach((card)=>{card.classList.remove("hidden");});
});



});//ending to first line




