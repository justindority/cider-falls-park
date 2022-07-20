import { getActivities, getDestinationActivities, getDestinations } from "./database.js"

const activities = getActivities()
const destinations = getDestinations()
const destinationActivites = getDestinationActivities()

export const activitiesHTML = () => {
    let html = ''
    for(const activity of activities){
        html += `<span id="activityhtml--${activity.id}">${activity.name}, </span>`
    }
    html = html.slice(0,-9)
    html += `</span>`
    return html
}




document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("activityhtml")) {
            const [,activityId] = itemClicked.id.split("--")

            let matchingLocationsString = '' //will contain the output string
            let characterCount = 0 //tracks characters to perform a slice, to add an and if there is more than 1 destination
            let destinationCount = 0 //tracks destinations to run logic on wording depending on amount
            for (const destinationActivity of destinationActivites) { //iterate through destinationActivities
                if (destinationActivity.activityId === parseInt(activityId)){ //if destinationActivity.activityId matches the activityId from the html element
                    for(const destination of destinations){ //iterate through destinations
                        if(destinationActivity.destinationId === destination.id){ //if destinationActivity destination ID matches the destination ID
                            matchingLocationsString += `${destination.name}, ` //add the destination name to the html string
                            characterCount = destination.name.length //set characterCount equal to the length of the destination (only want the final, so ok to overwrite)
                            destinationCount++ //bump up destinationCount, tracking the number of destinations
                        }
                    }
                }
            }
            characterCount = matchingLocationsString.length - characterCount - 2 //subtract 2, trial and error thing

            let correctAct = '' //empty string for the activity
            for(const activity of activities){ //iterate through activities
                if(activity.id === parseInt(activityId)){ //if activity id matches the activity Id from the html element
                    correctAct = activity.name //set correctAct to the activity name
                }
            }
            matchingLocationsString = matchingLocationsString.slice(0,-2) //removes the final space and comma from the string
            if(destinationCount > 1){ //if there is more than 1 destination
                matchingLocationsString = matchingLocationsString.slice(0,characterCount) + 'and ' + matchingLocationsString.slice(characterCount) //include an 'and' at the right spot
            }

            if(destinationCount === 2){ //if there are 2 destinations
                matchingLocationsString = matchingLocationsString.replace(',','') //remove the comma
            }
            
            if(correctAct === 'Zip Lines'){ //if the activity is zip lines, use correct wording (are instead of is) in the alert
                window.alert(`${correctAct} are available at ${matchingLocationsString}.`)

            } else { //otherwise, use is in the alert
                window.alert(`${correctAct} is available at ${matchingLocationsString}.`)
            }
        
    }
}
)