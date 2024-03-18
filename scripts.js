const techs = [
    "typescript",
    "nodejs",
    "react",
    "git",
    "docker",
    "mysql",
    "dotnet",
    "cs",
];

function createImgTechIconElement(tech) {
    const img = document.createElement("img");
    const div = document.createElement("div");

    img.src = `https://skillicons.dev/icons?i=${tech}`;

    div.classList.add("icon");
    div.appendChild(img);

    return div;
}

const iconsContainer = document.getElementById("icons");

(async () => {
    let subirPrimeiro = Math.round(Math.random()) == 1;

    techs.forEach(async (tech) => {
        const icon = createImgTechIconElement(tech);
        iconsContainer.appendChild(icon);

        if (subirPrimeiro) {
            icon.style.animation = "subir_descer 2s ease-in-out infinite";
        } else {
            icon.style.animation = "descer_subir 2s ease-in-out infinite";
        }

        subirPrimeiro = !subirPrimeiro;

        const subIcon = createImgTechIconElement();
        subIcon.querySelector("img").remove();
        subIcon.classList.appendChild("outlined");
        iconsContainer.appendChild(subIcon);
    });
})();
