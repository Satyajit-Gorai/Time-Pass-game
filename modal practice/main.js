const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const openModalBtn = document.querySelectorAll(".show-modal");

console.log(openModalBtn);

const openModal = function() { 
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for(let i=0; i<openModalBtn.length; i++) {
    openModalBtn[i].addEventListener("click", openModal);
}

closeModalBtn.addEventListener("click", closeModal);

// Keyboard event handler which will work for the entire document
document.addEventListener("keydown", function(e) {
    console.log(e);
        if(e.key === "Escape" && !modal.classList.contains("hidden"))
        {
            closeModal();
        }
});

