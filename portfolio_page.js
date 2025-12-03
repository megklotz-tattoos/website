function openModal(imgElement) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("expandedImg");

    modal.style.display = "flex"; // Show modal
    modalImg.src = imgElement.src; // Set clicked image in modal
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

-
