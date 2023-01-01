import { generator } from "./generator.js"


const maintContainer = document.querySelector("#container")

const renderAllHTML = () => {
    maintContainer.innerHTML = generator()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})