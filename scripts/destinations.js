//import getDestinations
//declare destionations as a variable equal to the getDestinations function return value
//declare function destinationsHTML, no params
    //create html variable, opening html tags
    //iterate through destinations
        // add destinations html to html string, including image
        //if destination.features is truthy
            //add destination features to string
    //add closing tags to html string
    //return html string

import { getDestinations, getGuests } from "./database.js";

const destinations = getDestinations()
export const destinationsHTML = () => {
    let html = `<section class="destinations">`
    for(const destination of destinations){
        html += `<div class="destination">
        <div class="detail" id="title--${destination.id}">${destination.name}</div>
        <div class="detail"><img src=${destination.image}></div>`
        if(destination.features){
            html += `<div class=detail>Features: ${destination.features}</div>`
        }
        html += `</div>`
    }
    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("title")) {
            const [,destinationId] = itemClicked.id.split("--")

            let guests = getGuests()
            let count = 0
            for (const guest of guests) {
                if (guest.location === parseInt(destinationId)) {
                    count++
                }
            }
            if(count === 1){
                window.alert(`There is 1 guest in this area.`)
            } else {
                window.alert(`There are ${count} guests in this area.`)
            }
        }
    }
)