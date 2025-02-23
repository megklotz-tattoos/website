
let currentIndex = 0;

function changeSlide(direction) {
	const images = document.querySelectorAll(".image-container img");
	images[currentIndex].classList.remove("active");

	currentIndex = (currentIndex + direction + images.length) % images.length;

	images[currentIndex].classList.add("active");
}
