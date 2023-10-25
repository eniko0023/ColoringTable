const content = document.querySelector(".content");
for(let i = 0; i < 64; i++){
    //Template literal Alt Gr+7 - ${változó}
    content.innerHTML += `<div class="box" id="${i+1}"></div>`;
}

//NodeList-ként megkapjuk a .box-okat
const boxes = document.querySelectorAll(".box");

boxes.forEach(element => {
    element.addEventListener("click", (event) =>{
        event.target.style.backgroundColor = "red";
    })
})