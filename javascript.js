window.addEventListener('load', event => {
    const figures = [...document.querySelectorAll("#project-platen > div")];
    const popups = [...document.querySelectorAll("#project-platen figure .b")];
    figures.forEach(figure => {
        const popup = figure.querySelector(".b");
        const closeButton = figure.querySelector(".close-button");
        closeButton?.addEventListener('click', event => {
            popups.forEach(pop => pop.classList.remove("active"));
        });
        figure.addEventListener('click', event => {
                
            if (event.path[0].classList.contains("b") ||
             event.path[0].classList.contains("close-button")) return;
            popups.forEach(pop => pop.classList.remove("active"));
            popup.classList.toggle("active");
        });
    });
});
