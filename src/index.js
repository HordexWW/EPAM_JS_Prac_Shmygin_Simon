import "./styles/regular.scss"
import "./styles/loadingdots.scss"

import {getVoices} from "./allVoices";
import {handleMicrophoneClick} from "./microphone";
import {activateMessage} from "./stream";

const allVoicesButton = document.querySelector("#allVoicesButton")
const microphoneButton = document.querySelector("#microphoneButton")
const streamButton = document.querySelector("#streamButton")
const modeText = document.querySelector(".mode-status-text")
const voicesList = document.querySelector(".voicesList")
const loadingDots = document.querySelector(".loading")

const recordButton = document.querySelector(".recordButton")

const activeButtonClassName = "nav__link nav__link--active"
const inactiveButtonClassName = "nav__link"



allVoicesButton.onclick = function(){
    allVoicesButton.className = activeButtonClassName
    microphoneButton.className = inactiveButtonClassName
    streamButton.className = inactiveButtonClassName
    modeText.textContent = "All voices"
    recordButton.style.display = "none"
    if(!loadingDots.classList.contains("inactive")) {
        loadingDots.classList.add("inactive")
    }

    voicesList.innerHTML = ""
    voicesList.style.display = "block"

    getVoices()
}

microphoneButton.onclick = function(){
    allVoicesButton.className = inactiveButtonClassName
    microphoneButton.className = activeButtonClassName
    streamButton.className = inactiveButtonClassName
    modeText.textContent = "Microphone"
    recordButton.style.display = "block"
    voicesList.style.display = "none"
    if(recordButton.classList.contains("recording")) {
        loadingDots.classList.toggle("inactive")
    }
}
recordButton.onclick = function (){
    handleMicrophoneClick()
}

streamButton.onclick = function(){
    allVoicesButton.className = inactiveButtonClassName
    microphoneButton.className = inactiveButtonClassName
    streamButton.className = activeButtonClassName
    modeText.textContent = "Stream"
    recordButton.style.display = "none"
    voicesList.style.display = "none"
    if(!loadingDots.classList.contains("inactive")) {
        loadingDots.classList.add("inactive")
    }

    activateMessage()
}

