import { getPaintColor, setPaint } from "./database.js"

const paintColors = getPaintColor()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "colors") {
            setPaint(parseInt(changeEvent.target.value))
        }
    }
)

export const paintDropDown = () => {
    let html = ``
    html += `<select id="colors">`
    html += `<option value="0">Select your color...</option>`
    
   
    for (const paint of paintColors) {
        html += `<option value="${paint.id}">${paint.color}</option>`
    }

    html += `</select>`
    return html
}
