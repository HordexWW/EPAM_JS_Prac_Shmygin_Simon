export async function getVoices() {
    const response = await fetch('https://voicy-speaker.herokuapp.com/voices')
    const data = await response.json()

    let i = data.length < 5? 0 : data.length - 5

    for (i; i < data.length; i++) {

        const audio = document.createElement('audio')
        audio.controls = true
        const audioBlob = new Blob([new Uint8Array(data[i].audioBlob[0].data).buffer])
        const audioUrl = URL.createObjectURL(audioBlob)
        audio.src = audioUrl

        //attaching audio file to list object
        const li = document.createElement('li')
        const p = document.createElement("p")

        p.classList.add("audio-data")
        li.classList.add('voice_message')
        p.textContent = data[i].timeStamp.substr(0, 24)

        li.appendChild(p)
        li.appendChild(audio)

        const element = document.querySelector('.voicesList');
        element.appendChild(li)
    }
}