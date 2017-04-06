class vehicle {
    engine: string
    doors: number
}
class bike extends vehicle {
    gears: number
    model: string
}
class cruise extends bike {
    capcacity: number
    numberOfRooms: number
}

var fz = new bike();
fz.doors = 0;
fz.engine = "400cc";
fz.gears = 5;
fz.model = "Yamaha";