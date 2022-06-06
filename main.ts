basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    basic.showNumber(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
})
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
})
