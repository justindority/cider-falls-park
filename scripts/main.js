import { destinationsHTML } from "./destinations.js";
import { guestsHTML } from "./guests.js";

const destinationsTest = destinationsHTML()
const guestsList = guestsHTML()

const locationsContainer = document.querySelector(".test")
locationsContainer.innerHTML = destinationsTest

const guestsContainer = document.querySelector(".guests")
guestsContainer.innerHTML = guestsList