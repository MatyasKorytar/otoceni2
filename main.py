led.plot_brightness(2, 2, 75)
led.plot(0, 0)
led.plot(1, 1)
steps = 0
x0 = 0
x1 = 0
y0 = 1
y1 = 1
end = 0
while end == 0:
    basic.clear_screen()
    led.plot_brightness(2, 2, 75)
    led.plot(x0, x1)
    led.plot(y0, y1)
    if steps <= 1:
        x0 += 2
        y0 += 1
    elif steps >= 2 and steps <= 3:
        x1 += 2
        y1 += 1
    elif steps >= 4 and steps <= 5:
        x0 += -2
        y0 += -1
    elif steps >= 6 and steps <= 7:
        x1 += -2
        y1 += -1
    steps += 1
    if steps == 8:
        steps = 0
    basic.pause(1000)

