import io from "socket.io-client";

export function activateMessage(){
    const socket = io.connect('https://voicy-speaker.herokuapp.com')
    const mainText = document.getElementById('mode-status-text')

    socket.on("audioMessage", function (audioChunks){
        if (mainText.innerText === "Stream"){
            const audioBlob = new Blob(audioChunks)
            const audioUrl = URL.createObjectURL(audioBlob)
            const audio = new Audio(audioUrl)
            audio.play()
        }
    })
}