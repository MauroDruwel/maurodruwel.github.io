var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];

    function openModal(imgSrc, altText) {
        modal.style.display = "block";
        modalImg.src = imgSrc;
        captionText.innerHTML = altText;
    }

    function closeModal() {
        modal.style.display = "none";
    }

    var images = document.querySelectorAll(".modal-img");
    images.forEach(function (img) {
        img.addEventListener("click", function () {
            openModal(img.src, img.alt);
        });
    });

    span.onclick = closeModal;