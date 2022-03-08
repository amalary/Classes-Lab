
// # Number 1
class Person {
    constructor(name,age,eyes,hair){
        this.legs = 2;
        this.arms = 2; 
        this.eyes = eyes; 
        this.hair = hair;
        this.name = name;
        this.age = age;
    }
    greeting(personName){
        console.log('Hello ' + personName + ' how is it going ? ')
    }
    introduction(){
        console.log(`Greetings may name is ${this.name} and I'm about ${this.age} years old `)
    }
};

const me = new Person('Anthony',26, 'brown eyes', 'black'); 

console.log(me); 

me.introduction()


// # Number 2
class Pet {

    constructor(name,breed,size,color,sound){

        this.name = name;
        this.breed = breed;
        this.size = size; 
        this.color = color; 
        this.sound = sound; 
    }

    growl(){
        console.log('Wooof!!!!')
    }
    whine(){
        console.log('hhmmm hmmm hmmmh')
    }
    pee(){
        console.log("begins to pee on the rug")
    }

};

const dog = new Pet('Wilfred','Greyhound','Big','Grey','bark bark'); 

console.log(dog); 

dog.growl()

//  # Number 3 

class Boat {
    constructor(name,color,size,amountPassengers,direction){

        this.name = name; 
        this.color = color; 
        this.size = size;
        this.amountPassengers =amountPassengers; 
        this.direction = direction; 
    }
    location(){
        console.log('Somewhere in the Carribean')
    }
    dropAnchor(){
        console.log('down goes the Anchor on you guys')
    }
    Sail(){
        console.log('begin to stir the sail for somewhere else')
    }
};

const boat = new Boat('Betsy','Pearl','Medium',33.,'North West');

console.log(boat); 

boat.dropAnchor()

// # Number 4 

class Artist {

    constructor(name,style,hometown,age,inspiration){

        this.name = name;
        this.style = style;
        this.hometown = hometown; 
        this.age = age; 
        this.inspiration = inspiration;
    }
    introduction(nameOfPerson){
        console.log(`Hello ${nameOfPerson} my name is ${this.name} and I have been painting since I was a child`)
    }
    favorite(){
        console.log('My favorite artist is Jean-Michel Basquiat if I can be honest with you')
    }
    dress(){
        console.log("Well today I'm wearing Gorgio Armani ")
    }
}; 

const artist = new Artist('Jean-Jaque','Contemporary','Brooklyn, New York', 21, 'Andy Warhol'); 

console.log(artist); 

artist.introduction('Anthony'); 



