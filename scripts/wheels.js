import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
            setWheels(parseInt(changeEvent.target.value))
        }
    }
)

export const wheelDropDown = () => {
    let html = ``
    html += `<select id="wheel">`
    html += `<option value="0">Select your Wheels...</option>`
    
   
    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.style}</option>`
    }

    html += `</select>`
    return html
}