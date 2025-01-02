function changeButtonColor(event) {
    event.target.style.backgroundColor = "purple"; 
}

window.onload = function() {
    alert("Thank you for coming to Beauty Bliss Salon");

    const buttons = document.querySelectorAll('.bu'); 
    buttons.forEach(button => {
        button.addEventListener('click', changeButtonColor); 
    });
};
