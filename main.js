function changeButtonColor(event) {
    event.target.style.backgroundColor = "purple"; 
}

window.onload = function() {
    // Show alert when the website is opened
    alert("Thank you for coming to Beauty Bliss Salon");

    // Add event listeners to all "Book Now" buttons
    const buttons = document.querySelectorAll('.bu'); 
    buttons.forEach(button => {
        button.addEventListener('click', changeButtonColor); 
    });
};
