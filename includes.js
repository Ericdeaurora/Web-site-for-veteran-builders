document.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});
// Accordion Functionality
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            // Toggle 'active' class on the header
            header.classList.toggle('active');

            // Toggle visibility of the content
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Collapse content
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // Expand content
            }
        });
    });
});
