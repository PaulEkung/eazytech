 AOS.init({
        easing: 'ease-in-out-sine',
        delay: 250,
        once:false,
        mirror:true
      });



    document.addEventListener('DOMContentLoaded', function() {
    const chatIcon = document.getElementById('chat-icon');
    const chatBox = document.getElementById('chat-box');
    const closeChat = document.getElementById('close-chat');

    // Toggle Chat Visibility
    chatIcon.onclick = function() {
        chatBox.classList.toggle('d-none');
        if (!chatBox.classList.contains('d-none')) {
            showSection('main-menu'); // Reset to main menu every time it opens
        }
    };

    closeChat.onclick = function() {
        chatBox.classList.add('d-none');
    };
});


// Global Function to Switch Sections
function showSection(sectionId) {
    const sections = ['main-menu', 'website-info', 'payment-info', 'contact-options', 'text-chat'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (id === sectionId) {
            el.classList.remove('d-none');
        } else {
            el.classList.add('d-none');
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
        const banner = document.getElementById('cookie-banner');
        const acceptBtn = document.getElementById('accept-cookies');
        const declineBtn = document.getElementById('decline-cookies');

        // Check if user has already made a choice
        if (!localStorage.getItem('cookieConsent')) {
            banner.classList.remove('d-none'); // Show the banner
        }

        // When "Accept" is clicked
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            banner.classList.add('d-none'); // Hide the banner
        });

        // When "Decline" is clicked
        declineBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'declined');
            banner.classList.add('d-none'); // Hide the banner
        });
    });

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + "=")) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}