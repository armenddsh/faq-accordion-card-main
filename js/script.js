
const elements = document.getElementsByClassName("accordion-button");

for (const element of elements) {
    
    const parentElement = element.parentElement.parentElement;
    const body = parentElement.childNodes[3].childNodes[1];

    element.addEventListener("click", () => {
        if (element.localName === "button") {
            if (!element.classList.contains("collapsed")) {
                element.classList.add("accordion__collapsed");
                body.classList.add("accordion__collapsed__body");
            } else {
                element.classList.remove("accordion__collapsed");
                body.classList.remove("accordion__collapsed__body");
            }
        }
    });

}