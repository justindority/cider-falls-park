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

            let matchingLocationsString = ''
            // let characterCount = 0
            for (const destinationActivity of destinationActivites) {
                if (destinationActivity.activityId === parseInt(activityId)){
                    for(const destination of destinations){
                        if(destinationActivity.destinationId === destination.id){
                            matchingLocationsString += `${destination.name}, `
                            // characterCount += destination.name.length
                        }
                        // characterCount -= destination.name.length
                    }
                }
            }
            let correctAct = ''
            for(const activity of activities){
                if(activity.id === parseInt(activityId)){
                    correctAct = activity.name
                }
            }
            matchingLocationsString = matchingLocationsString.slice(0,-2)
            // matchingLocationsString = matchingLocationsString.slice(0,characterCount) + 'and ' + matchingLocationsString.slice(characterCount)
            if(correctAct === 'Zip Lines'){
                window.alert(`${correctAct} are available at ${matchingLocationsString}.`)

            } else {
                window.alert(`${correctAct} is available at ${matchingLocationsString}.`)
            }
        
    }
}
)