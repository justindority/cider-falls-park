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

import { getDestinations } from "./database.js";

const destinations = getDestinations()
export const destinationsHTML = () => {
    let html = `<section class="destinations">`
    for(const destination of destinations){
        html += `<div class="destination">
        <div class="detail">${destination.name}</div>
        <div class="detail"><img src=${destination.image}></div>`
        if(destination.features){
            html += `<div class=detail>Features: ${destination.features}</div>`
        }
        html += `</div>`
    }
    return html
}