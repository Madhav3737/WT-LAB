document.addEventListener('DOMContentLoaded', function () {
    const flag = document.getElementById('flag')
    const hoistButton = document.getElementById('hoistButton')
    const waveButton = document.getElementById('waveButton')
    const fadeButton = document.getElementById('fadeButton')
    const colorPicker = document.getElementById('colorPicker')
    const secondaryColorPicker = document.getElementById('secondaryColorPicker')
    const playButton = document.getElementById('playButton')
    const anthem = document.getElementById('indiaAnthem')

    let isHoisted = false
    let isWaving = false
    let isFaded = false
    let isPlaying = false

    hoistButton.addEventListener('click', () => {
        flag.style.transform = isHoisted ? 'translateY(0)' : 'translateY(-150px)'
        isHoisted = !isHoisted
    })

    waveButton.addEventListener('click', () => {
        flag.classList.toggle('waving')
    })

    fadeButton.addEventListener('click', () => {
        flag.style.opacity = isFaded ? '1' : '0.3'
        isFaded = !isFaded
    })

    colorPicker.addEventListener('input', () => {
        flag.style.background = linear-gradient(to bottom, ${colorPicker.value} 33.33%, #FFFFFF 33.33%, #FFFFFF 66.66%, ${secondaryColorPicker.value} 66.66%)
    })

    secondaryColorPicker.addEventListener('input', () => {
        flag.style.background = linear-gradient(to bottom, ${colorPicker.value} 33.33%, #FFFFFF 33.33%, #FFFFFF 66.66%, ${secondaryColorPicker.value} 66.66%)
    })

    playButton.addEventListener('click', () => {
        if (isPlaying) {
            anthem.pause()
            anthem.currentTime = 0
            isPlaying = false
            playButton.textContent = 'Play Anthem'
        } else {
            anthem.play()
            isPlaying = true
            playButton.textContent = 'Pause Anthem'
        }
    })
})