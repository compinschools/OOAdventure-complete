class Room {

    get name() {
        return this._name
    }
    get description() {
        return this._description
    }

    set name(value) {
        if (value === "") {
            console.log("Error, name too short")
            return;
        }
        this._name = value;
    }

    describe() {
        return this.name + "-----------" + this.description
    }

    set north(value){
        this._north = value;
    }

    get north(){
        return this._north;
    }

    set south(value){
        this._south = value;
    }

    get south(){
        return this._south;
    }

    constructor(name, description) {

        this._name = name
        this._description = description
        this._linkedRooms = {}
    }

    get linkedRooms()
    {
        return this._linkedRooms
    }

    linkRoom(direction,room)
    {
        this._linkedRooms[direction] = room
    }
}


const Kitchen = new Room("Kitchen", "This is a kitchen")
const DiningRoom = new Room("Dining Room", "This is the dining room")
Kitchen.linkRoom("north",DiningRoom)
DiningRoom.linkRoom("south",Kitchen)

document.getElementById('game').innerHTML = Kitchen.linkedRooms["north"].describe()

