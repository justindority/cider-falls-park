import { activitiesHTML } from "./activities.js";
import { destinationsHTML } from "./destinations.js";
import { guestsHTML } from "./guests.js";

const destinationsTest = destinationsHTML()
const guestsList = guestsHTML()
const activities = activitiesHTML()

const locationsContainer = document.querySelector(".test")
locationsContainer.innerHTML = destinationsTest

const guestsContainer = document.querySelector(".guests")
guestsContainer.innerHTML = guestsList

const activitiesContainer = document.querySelector(".activities-list")
activitiesContainer.innerHTML = activities