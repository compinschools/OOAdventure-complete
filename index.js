class Character
{
    constructor(name,description){
        this._name = name
        this._description = description
        this._conversation = ""
    }

    get name()
    {
        return this._name;
    }

    set name(value){
        this._name = value
    }

    get description()
    {
        return this._description;
    }
    set description(value){
        this._description = value;
    }

    get conversation(){
        return this._conversation;
    }

    set conversation(value){
        this._conversation = value;
    }

    talk(){
        return this._name + " says " + this._conversation;
    }

}

class Enemy extends Character {
    constructor(name,weakness){
        super(name,"Enemy")
        this._weakness = weakness; 
    }

    fight(item){
        if(item == this._weakness){
            return true;
            
        } else {
            return false;
        }
    }

    attack(){
        alert(this._name + " attacks you!")
    }

}

class Item {
    constructor(name,description){
        this._name = name;
        this._description = description;

    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }

    get description(){
        return this._description;
    }

    set description(value){
        this._description = value;
    }

}

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

   /*  set north(value){
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
    } */

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

    move(direction){
        if(direction in this._linkedRooms ){
            return this._linkedRooms[direction];
        } else {
            alert("You can't go that way")
            return this;
        }
    }
}


const Kitchen = new Room("Kitchen", "This is a kitchen")
const DiningRoom = new Room("Dining Room", "This is the dining room")
Kitchen.linkRoom("north",DiningRoom)
DiningRoom.linkRoom("south",Kitchen)


let currentRoom = Kitchen

window.onload = () => {
document.getElementById('game').innerHTML = currentRoom.describe()

document.addEventListener("keydown",function(event){
    if(event.key === "Enter") {
        command = document.getElementById("command").value;
        //direction commands
        const directions = ["north","south","east","west"]
        if(directions.includes (command)){
            currentRoom = currentRoom.move(command);
            document.getElementById('game').innerHTML = currentRoom.describe()
        //add else ifs to add further commands later
        } else {
            alert("invalid command")
        }

    }

})

}

