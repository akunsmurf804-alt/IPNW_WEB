const uploadFoto = document.getElementById("uploadFoto");
const gallery = document.getElementById("gallery");

uploadFoto.addEventListener("change", function () {
    const file = uploadFoto.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});


function loginAdmin() {
    const password = document.getElementById("adminPassword").value;
    const status = document.getElementById("loginStatus");

    if (password === "Kodekeras1") {
        document.getElementById("adminUpload").style.display = "block";
        status.innerText = "Login berhasil sebagai admin";
        status.style.color = "green";
    } else {
        status.innerText = "Password salah!";
        status.style.color = "red";
    }
}

setInterval(nextSlide, 3000); // ganti slide tiap 3 detik

<script>
let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide();
}
</script>
