// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// Close mobile menu after clicking a link

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// =========================
// WIZTEC WHATSAPP BOOKING
// =========================

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Replace this with the Wiztec WhatsApp number
    // Country code first, without + or spaces.
    const whatsappNumber = "23280957763";

    // Get form information
    const name = bookingForm.querySelector('input[type="text"]').value;
    const phone = bookingForm.querySelector('input[type="tel"]').value;
    const eventType = bookingForm.querySelector('select').value;
    const date = bookingForm.querySelector('input[type="date"]').value;
    const message = bookingForm.querySelector('textarea').value;

    // Create WhatsApp message
    const whatsappMessage = `
🎧 *WIZTEC SOUNDS SYSTEM*
📅 *NEW BOOKING REQUEST*

👤 *Name:* ${name}
📞 *Phone:* ${phone}
🎉 *Event:* ${eventType}
📆 *Date:* ${date}

📝 *Event Details:*
${message}

Please contact me regarding this booking.

— Sent from Wiztec Sounds System Website
`;

    // Create WhatsApp URL
    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

});
