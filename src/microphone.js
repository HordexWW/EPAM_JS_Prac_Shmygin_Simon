import io from 'socket.io-client'

let mediaRec = ""

export function handleMicrophoneClick() {
    let elems = document.getElementsByClassName('recording')
    const recordBtn = document.querySelector('.recordButton')
    const loadingDots = document.querySelector(".loading")

    if (elems.length > 0){
        closeRecorder();
        recordBtn.classList.toggle('recording')
        loadingDots.classList.toggle("inactive")
    }
    else{
        recordMessage()
        recordBtn.classList.toggle('recording')
        loadingDots.classList.toggle("inactive")
    }
}

function recordMessage() {
    console.log("recording...")
    const socket = io.connect('https://voicy-speaker.herokuapp.com')

    socket.on('connect', function(){

    })

    navigator.mediaDevices.getUserMedia({audio: true})
        .then(stream => {

            const mediaRecorder = new MediaRecorder(stream)
            mediaRec = mediaRecorder
            mediaRecorder.start()

            const audioChunks = []
            mediaRecorder.addEventListener("dataavailable", event => {
                audioChunks.push(event.data)
            });

            mediaRecorder.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks)
                const audioUrl = URL.createObjectURL(audioBlob)
                socket.emit('audioMessage', audioChunks)
            });

        });
}

function closeRecorder(){
    console.log("recording stopped")
    mediaRec.stop()
}