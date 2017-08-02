let i = 0
let cnt = 0
let item = 0
let list: number[] = []
basic.forever(() => {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
})
radio.onDataPacketReceived(({ receivedNumber }) => {
    item = receivedNumber
    // make 2 bit number
    while (item >= 1) {
        list[i] = item % 2
        item = item / 2
        i += 1
    }
    list.reverse()
    while (true) {
        for (let k = 0; k <= 1; k++) {
            for (let l = 0; l <= 4; l++) {
                if (list[cnt] == 1) {
                    led.plot(l, k)
                }
                cnt = cnt + 1
            }
        }
        cnt = 0
    }
})
list = []
cnt = 0
list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
radio.sendNumber(100)
