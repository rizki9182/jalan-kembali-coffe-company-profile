// seleksi elemen
const coffeImages = document.querySelectorAll(".coffeImages img");

// fungsi addEventListener ketika pointer masuk ke elemen
for (let i=0;i<coffeImages.length;i++){
    coffeImages[i].addEventListener('mouseenter', function() {
        this.style.transform = "scale(1.1)";
        this.style.filter = "brightness(100%)";
    });
}
// fungsi addEventListener ketika pointer keluar elemen
for (let i=0;i<coffeImages.length;i++){
    coffeImages[i].addEventListener('mouseout', function() {
        this.style.transform = "scale(1)";
        this.style.filter = "brightness(50%)";
    });
}




