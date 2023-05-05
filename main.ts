basic.forever(function () {
    if (input.lightLevel() > 20) {
        basic.showIcon(IconNames.Angry)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    } else {
        basic.clearScreen()
    }
})
