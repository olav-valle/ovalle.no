// object literal
var literalPerson = {
    firstName: "Ola",
    lastName: "Normann"
}

console.log(literalPerson.firstName, literalPerson.lastName);

// Constructor function
function FuncPerson(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

var fPers = new FuncPerson("John", "Doe");
console.log(fPers.firstName, fPers.lastName)


// Object.create
const ProtoPerson = {
}

var protoP = Object.create(ProtoPerson);
protoP.fName = "Kari";
protoP.lName = "Normann";
console.log(protoP.fName, protoP.lName)



// Class
class GameObject {
    constructor(name, life, xPos, yPos) {
        this.name = name;
        this.life = life;
        this.xPos = xPos;
        this.yPos = yPos;
    }

    decreaseLife(delta) {
        // HP should not go negative.
        if (delta > this.life) {
            this.life = 0;
        } else {
            this.life -= delta;
        }
    }

    isAlive() {
        return this.life > 0
    }

    moveAbsolutePos(xPos, yPos) {
        this.xPos = xPos;
        this.yPos = yPos;
    }

    move(xDelta, yDelta) {
        this.xPos += xDelta;
        this.yPos += yDelta;
    }
}

var player = new GameObject("Hiro", 100, 10, 15);
console.log("Character name: %s. HP: %i. Position (x,y): %i,%i.", player.name, player.life, player.xPos, player.yPos);

var enemy = new GameObject("Varg", 150, 12, 15);
console.log("Character name: %s. HP: %i. Position (x,y): %i,%i.", enemy.name, enemy.life, enemy.xPos, enemy.yPos);
