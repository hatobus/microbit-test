let item = 0
basic.forever(() => {
    item = pins.analogReadPin(AnalogPin.P0)
    item = pins.map(item, 0, 1023, 0, 180)
    basic.showNumber(item)
    led.stopAnimation()
    pins.servoWritePin(AnalogPin.P1, item)
})
item = 0
