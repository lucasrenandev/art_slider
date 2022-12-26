// Elementos
const previousButton = document.querySelector(".previous-button")
const nextButton = document.querySelector(".next-button")
const buttonsRadio = document.querySelectorAll(".buttons-radio button")
const images = document.querySelectorAll(".slide-image")

// Slide atual
let currentSlide = 0

// Total de slide
let totalSlide = 5

// Próximo slide
function nextSlide() {
    document.getElementById("slide" + (currentSlide + 1)).classList.remove("active")
    currentSlide = (totalSlide + currentSlide + 1) % totalSlide
    document.getElementById("slide" + (currentSlide + 1)).classList.add("active")
    slideIndicator(currentSlide + 1)
}

// Slide anterior
function previousSlide() {
    document.getElementById("slide" + (currentSlide + 1)).classList.remove("active")
    currentSlide = (totalSlide + currentSlide - 1) % totalSlide
    document.getElementById("slide" + (currentSlide + 1)).classList.add("active")
    slideIndicator(currentSlide + 1)
}   

// Indicador de slide
function slideIndicator(index) {
    buttonsRadio.forEach(button => {
        button.style.backgroundColor = "transparent"
    })
    document.querySelector(".buttons-radio button:nth-child(" + index + ")").style.backgroundColor = "blue"
}

// Índice de slide
function slideIndex(index) {
    images.forEach(image => {
        image.classList.remove("active")
    })
    document.getElementById("slide" + index).classList.add("active")
    currentSlide = index - 1
    slideIndicator(index)
}

// Buttons -> indicadores de slide
buttonsRadio.forEach(button => {
    button.addEventListener("click", function(event) {
        const target = event.target.className

        if(target === "button1") {
            slideIndex(1)
        }
        else if(target === "button2"){
            slideIndex(2)
        }
        else if(target === "button3") {
            slideIndex(3)
        }
        else if(target === "button4") {
            slideIndex(4)
        }
        else {
            slideIndex(5)
        }
    })
})

// Adicionar evento aos elementos
nextButton.addEventListener("click", nextSlide)
previousButton.addEventListener("click", previousSlide)