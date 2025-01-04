function includeHTML() {
    const includes = document.querySelectorAll("[data-include]");
    includes.forEach(async (element) => {
        const file = element.getAttribute("data-include");
        if (file) {
            const response = await fetch(file);
            if (response.ok) {
                element.innerHTML = await response.text();
            } else {
                console.error(`Failed to load ${file}`);
            }
        }
    });
}

includeHTML();
