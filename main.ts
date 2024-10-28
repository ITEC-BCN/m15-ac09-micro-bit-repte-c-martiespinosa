radio.onReceivedNumber(function (receivedNumber) {
    others_num = receivedNumber
    basic.showNumber(others_num)
    if (my_num > others_num) {
        basic.showIcon(IconNames.Happy)
    } else if (my_num < others_num) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    my_num = randint(1, 6)
    radio.sendNumber(my_num)
    basic.showNumber(my_num)
    if (my_num > others_num) {
        basic.showIcon(IconNames.Happy)
    } else if (my_num < others_num) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
let others_num = 0
let my_num = 0
my_num = 0
others_num = 0
basic.forever(function () {
	
})
