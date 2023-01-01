import { getInterior, setInterior } from "./database.js";

const interiors = getInterior()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInterior(parseInt(changeEvent.target.value))
        }
    }
)

export const interiorDropDown = () => {
    let html = ``
    html += `<select id="interior">`
    html += `<option value="0">Select your interior...</option>`
    
   
    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.type}</option>`
    }

    html += `</select>`
    return html
}