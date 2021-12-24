input.onButtonPressed(Button.A, function () {
    music.setVolume(100)
    basic.showString("Mam te rada Zlato!")
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.playMelody("B F D C D F B C5 ", 120)
    music.playMelody("C D G B C5 B G D ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(100)
    basic.showString("Mam te rada Daniele!")
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.playMelody("C5 G E D E G C5 B ", 120)
    music.playMelody("D C F A B A F C ", 120)
})
