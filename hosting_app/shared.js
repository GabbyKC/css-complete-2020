let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let selectPlanButtons = document.querySelectorAll(".plan button")
let noButton = document.querySelector(".modal button")

for (let i = 0; i <  selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function () {
        modal.style.display = "block";
        backdrop.style.display = "block"
    })
}

backdrop.addEventListener("click", closeModal)

noButton.addEventListener("click", closeModal)

function closeModal () {
    backdrop.style.display = "none";
    modal.style.display = "none"
}
