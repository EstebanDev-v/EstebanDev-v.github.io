const floatingButton = document.querySelector(".floating-scroll");
const sectionIds = ["inicio", "sobre-mi", "camino", "proyectos", "contacto"];

if (floatingButton) {
    floatingButton.addEventListener("click", () => {
        const currentPosition = window.scrollY;
        const nextSectionId = sectionIds.find((id) => {
            const section = document.getElementById(id);
            if (!section) return false;
            return section.offsetTop > currentPosition + 20;
        });

        if (nextSectionId) {
            const section = document.getElementById(nextSectionId);
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}