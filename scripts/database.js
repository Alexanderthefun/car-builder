const database = {
    paintColors: [
        {id: 1, color: "Silver", price: 100},
        {id: 2, color: "Midnight Blue", price: 150},
        {id: 3, color: "Firebrick Red", price: 200},
        {id: 4, color: "Spring Green", price: 250}
    ],
    interiors: [
        {id: 1, type: "Beige Fabric", price: 100},
        {id: 2, type: "Charcoal Fabric", price: 150},
        {id: 3, type: "White Leather", price: 200},
        {id: 4, type: "Black Leather", price: 250}
    ],
    technologies: [
        {id: 1, capability: "Basic Package", price: 200},
        {id: 2, capability: "Navigation Package", price: 250},
        {id: 3, capability: "Visibility Package", price: 300},
        {id: 4, capability: "Ultra Package", price: 350}
    ],
    wheels: [
        {id: 1, style: "17-inch Pair Radial", price: 400},
        {id: 2, style: "17-inch Pair Radial Black", price: 450},
        {id: 3, style: "18-inch Pair Spoke Silver", price: 500},
        {id: 4, style: "18-inch Pair Spoke Black", price: 550}
    ],
    customOrders: [
        {
            id: 1,
            paintColorId: 3,
            interiorId: 3,
            technologyId: 2,
            wheelsId: 4
        }
    ],
    orderBuilder: {},
}

export const getPaintColor = () => {
    return [...database.paintColors]
}

export const getInterior = () => {
    return [...database.interiors]
}

export const getTechnology = () => {
    return [...database.technologies]
}

export const getWheels = () => {
    return [...database.wheels]
}

export const getOrders = () => {
    return [...database.customOrders]
}
// -----------------------------------------------------
//All of the functions below will take an id number and 
// use it to add the coresponding object's property to 
// the orderBuilder object. 
export const setPaint = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.customOrders.length -1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}