window.addEventListener('load', event => {
    const figures = [...document.querySelectorAll(".skill-logos > figure, #project-platen > div")];
    const popups = [...document.querySelectorAll(".skill-logos > figure .popups, #project-platen figure .popups")];
    figures.forEach(figure => {
        const popup = figure.querySelector(".popups");
        const closeButton = figure.querySelector(".close-button");
        closeButton?.addEventListener('click', event => {
            popups.forEach(pop => pop.classList.remove("active"));
        });
        figure.addEventListener('click', event => {
            if (event.path[0].classList.contains("popups") || event.path[0].classList.contains("close-button")) return;
            popups.forEach(pop => pop.classList.remove("active"));
            popup.classList.toggle("active");
        });
    });
});
