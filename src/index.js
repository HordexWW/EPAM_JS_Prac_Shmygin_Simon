import "./styles/regular.scss"

const allVoicesButton = document.querySelector("#allVoicesButton")
const microphoneButton = document.querySelector("#microphoneButton")
const streamButton = document.querySelector("#streamButton")
const modeText = document.getElementById("mode-status-text")

const activeButtonClassName = "nav__link nav__link--active"
const inactiveButtonClassName = "nav__link"
const modeString = "Mode: "

allVoicesButton.onclick = function(){
    allVoicesButton.className = activeButtonClassName
    microphoneButton.className = inactiveButtonClassName
    streamButton.className = inactiveButtonClassName

    modeText.textContent = modeString + "All voices"
}

microphoneButton.onclick = function(){
    allVoicesButton.className = inactiveButtonClassName
    microphoneButton.className = activeButtonClassName
    streamButton.className = inactiveButtonClassName

    modeText.textContent = modeString + "Microphone"
}

streamButton.onclick = function(){
    allVoicesButton.className = inactiveButtonClassName
    microphoneButton.className = inactiveButtonClassName
    streamButton.className = activeButtonClassName

    modeText.textContent = modeString + "Stream"
}


