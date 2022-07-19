//import getGuests, save result to new variable guests
//declare function guestsHTML, no params
    //new empty html string
    //for guest of guests
        //guest fname and lname inside a p tag, add to html string
    //return html string

import { getGuests } from "./database.js";


const guests = getGuests()

export const guestsHTML = () => {
    let htmlString ='<h3>Current Guests:</h3>'
    for(const guest of guests){
        htmlString += `<p class="guest">${guest.fName} ${guest.lName}`
    }
    return htmlString
}
    