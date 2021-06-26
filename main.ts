function spin_right () {
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_SpinRight, spin, spin)
    basic.pause(spin_time)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    basic.pause(pause_time)
}
input.onButtonPressed(Button.A, function () {
	
})
function turn_left () {
	
}
function spin_around () {
	
}
function drive_forward (distance_centimeters: number) {
    while (Tinybit.Ultrasonic_Car() > 25) {
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, forward_left_speed, forward_right_speed)
    }
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    basic.pause(pause_time)
}
input.onButtonPressed(Button.AB, function () {
    spin_left()
    spin_right()
    drive_forward(15)
})
input.onButtonPressed(Button.B, function () {
    spin_left()
})
function spin_left () {
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_SpinLeft, spin, spin)
    basic.pause(spin_time + 10)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    basic.pause(pause_time)
}
radio.onReceivedStringDeprecated(function (receivedString) {
    item = receivedString
    if (item.compare("stick_up") == 0) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
    } else if (item.compare("stick_down") == 0) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Back)
    } else if (item.compare("stick_left") == 0) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
    } else if (item.compare("stick_right") == 0) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Right)
    } else if (item.compare("stick_press") == 0) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else if (item.compare("button_red") == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
        spin_left()
    } else if (item.compare("button_green") == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
    } else if (item.compare("button_blue") == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
    } else if (item.compare("button_yellow") == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
        spin_right()
    } else if (item.compare("stick_middle") == 0) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else {
    	
    }
})
function turn_right () {
	
}
let item = ""
let pause_time = 0
let forward_right_speed = 0
let forward_left_speed = 0
let spin = 0
let spin_time = 0
let radio_group = 1
basic.showNumber(radio_group)
radio.setGroup(radio_group)
radio.setTransmitPower(7)
spin_time = 138
spin = 115
forward_left_speed = 84
forward_right_speed = 95
pause_time = 150
Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
