// The Instrument class contains all of the data that will be passed down to the child classes
class Instrument {
    constructor(loudness, family, verb) {
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;
    }
    // This function basically lists out all of the variables
    play(){
        console.log("Loudness: " + this.loudness + " Family: " + this.family + " Play verb: " + this.verb);
    }
}

// The only variable that is different for each of these child classes is family
class Woodwind extends Instrument {
    constructor(loudness, verb){
        super(loudness, "woodwind", verb);
    }
}

class Percussion extends Instrument {
    constructor(loudness, verb){
        super(loudness, "percussion", verb);
    }
}

class String extends Instrument {
    constructor(loudness, verb){
        super(loudness, "string", verb);
    }
}

// Stores all of the instruments
var instruments = [];
instruments[0] = new Woodwind(100, "blow");
instruments[1] = new Percussion(300, "hit");
instruments[2] = new String(200, "pluck");

// Loops through the array of instruments and runs the play functions in each
for(var i = 0; i < instruments.length; i++){
    instruments[i].play();
}