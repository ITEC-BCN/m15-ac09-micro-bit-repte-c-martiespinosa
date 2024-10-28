radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (my_num > receivedNumber) {
        basic.showIcon(IconNames.Happy)
    } else if (my_num < receivedNumber) {
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
    if (my_num > receivedNumber) {
        basic.showIcon(IconNames.Happy)
    } else if (my_num < receivedNumber) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
let my_num = 0
my_num = 0
basic.forever(function () {
	
})
