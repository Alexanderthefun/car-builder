import { getTechnology, setTechnology } from "./database.js";

const technologies = getTechnology()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technology") {
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)

export const technologyDropDown = () => {
    let html = ``
    html += `<select id="technology">`
    html += `<option value="0">Select your technology...</option>`
    
   
    for (const technology of technologies) {
        html += `<option value="${technology.id}">${technology.capability}</option>`
    }

    html += `</select>`
    return html
}