import { addCustomOrder } from "./database.js"
import { interiorDropDown } from "./interiors.js"
import { Orders } from "./orders.js"
import { paintDropDown } from "./paints.js"
import { technologyDropDown } from "./technologies.js"
import { wheelDropDown } from "./wheels.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const generator = () => {
    return `
    <h1>Cars 'R Us Personal Car Builder</h1>
    
    <article class="choices">
        <section class="paintColors">
            <h2>Paint Colors</h2>
            ${paintDropDown()}
        </section>
        <section class="interiors">
            <h2>Interiors</h2>
            ${interiorDropDown()}
        </section>
        <section class="technologies">
            <h2>Technologies</h2>
            ${technologyDropDown()}
        </section>
        <section class="wheels">
            <h2>Wheels</h2>
            ${wheelDropDown()}
        </section>
    </article>
    
    <article>
    <button id="orderButton">Place Car Order</button>
    </article>

    <article class="customOrders">
        <h2>Custom Car Orders</h2>
            <div class=orderNum>
            ${Orders()}
            </div>
    </article>
    `
}

