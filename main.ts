led.plotBrightness(2, 2, 75)
led.plot(0, 0)
led.plot(1, 1)
let steps = 0
let x0 = 0
let x1 = 0
let y0 = 1
let y1 = 1
let end = 0
while (end == 0) {
    basic.clearScreen()
    led.plotBrightness(2, 2, 75)
    led.plot(x0, x1)
    led.plot(y0, y1)
    if (steps <= 1) {
        x0 += 2
        y0 += 1
    } else if (steps >= 2 && steps <= 3) {
        x1 += 2
        y1 += 1
    } else if (steps >= 4 && steps <= 5) {
        x0 += -2
        y0 += -1
    } else if (steps >= 6 && steps <= 7) {
        x1 += -2
        y1 += -1
    }
    
    steps += 1
    if (steps == 8) {
        steps = 0
    }
    
    basic.pause(1000)
}
