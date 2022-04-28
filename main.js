let trigramBtn = document.querySelector(".trigramBtn");
let crossBtn = document.querySelector(".crossBtn");
let navBar1 = document.querySelector(".navBar1");

crossBtn.addEventListener("click", hideMenu);
trigramBtn.addEventListener("click", showMenu);

function hideMenu(){
   navBar1.style.display="none";
  trigramBtn.style.display= "block";
}

function showMenu(){
  navBar1.style.display="flex";
}
