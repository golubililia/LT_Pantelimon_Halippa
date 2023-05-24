AOS.init({
    duration: 800,
    once: true
});

new SimpleLightbox({ elements: ".galerie-container a" });

new SimpleLightbox({ elements: ".orar-imagini a" });

emailjs.init("XzlBN5KfqxrfGrj42");

function mobileMenu() {
    var x = document.getElementById("navbar");

    if (x.className === "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}

function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send('service_z26l24k', 'template_jmej2eq', date)
    .then(function(response) {
        alert("Mesajul a fost transmis");
    }, function(error) {
        alert("Eroare");
    });
}
