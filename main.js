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
document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "a pink and purple beauty salon.png",
        "a woman getting her haircut in a pink and purple salon.png",
        "a woman getting facial in a pink and purple beauty salon.png",
        "a woman getting a manicure in a pink and purple salon.png",
        "woman getting her makeup done in a pink and purple salon.png"
    ];

    let currentIndex = 0;
    const imgElement = document.querySelector('.rel img');
    
    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
    }

    setInterval(changeImage, 3000);
});
