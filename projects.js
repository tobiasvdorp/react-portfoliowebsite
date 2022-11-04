window.addEventListener('load', event => {
    const projects = document.querySelectorAll("#project-platen > .project");

    for (const project of projects) {
        const preview = project.querySelector(".a");
        const content = project.querySelector(".b");
        const closeButton = project.querySelector(".close-button");
        closeButton.addEventListener('click', () => content.classList.remove("active"));
        preview.addEventListener('click', () => content.classList.toggle("active"));
    }
});
