import { getInterior, getOrders, getPaintColor, getTechnology, getWheels } from "./database.js";

const orders = getOrders()
const paints = getPaintColor()
const interiors = getInterior()
const technologies = getTechnology()
const wheels = getWheels()

const buildOrderListItem = (order) => {
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintColorId
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )

    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )

    const totalCost = foundPaint.price + foundInterior.price + foundTechnology.price + foundWheel.price

    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
                ${foundPaint.color} car with ${foundWheel.style} wheels, ${foundInterior.type} interior, and the ${foundTechnology.capability} package for a total cost of ${costString}
        </li>`

}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}