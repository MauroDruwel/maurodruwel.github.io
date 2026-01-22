var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

function openModal(imgSrc, altText) {
    if (!modal || !modalImg || !captionText) return;
    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = altText;
}

function closeModal() {
    if (!modal) return;
    modal.style.display = "none";
}

window.initializeModals = function () {
    const images = document.querySelectorAll(".modal-img");
    images.forEach(function (img) {
        // Prevent duplicate listeners
        if (img.dataset.hasListener) return;
        img.addEventListener("click", function () {
            openModal(img.src, img.alt);
        });
        img.dataset.hasListener = "true";
    });
};

document.addEventListener('DOMContentLoaded', () => {
    window.initializeModals();
    if (span) span.onclick = closeModal;

    // Close modal when clicking on the background
    if (modal) {
        modal.onclick = function (event) {
            if (event.target === modal) {
                closeModal();
            }
        };
    }
});