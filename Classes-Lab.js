
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

//  # Number 5 

class Computer{

    constructor(company,ram,memory,yearMake,){

        this.company = company; 
        this.ram = ram; 
        this.memory = memory; 
        this.yearMake = yearMake; 
    }
    turnOn(){
        console.log(`Welcome to ${this.company} computers`)
    }
    mail(){
        console.log("You've got mail ")
    }
    storage(){
        console.log(`You've got ${this.memory} left in storage space `)
    }
}

const comp = new Computer('Apple','8gb','1TB',2017); 

console.log(comp); 

comp.storage()

//  # Number 6 

class Robot{

    constructor(shape,height,name,creator,model){

        this.shape = shape; 
        this.height = height; 
        this.name = name; 
        this.creator = creator; 
        this.model = model; 
    }

    turnOrn(){
        console.log('Beepboop bop beep boop')
    }

    command(personName){
        console.log(`How can I help you ${personName} today ?`)
    }

    introduction(){
        console.log((`My name is ${this.name} and I have been years in the making my creators name is ${this.creator}`))
    }

}; 

const robot = new Robot('Square',"6'3","009","Sir Issac Tesla",'Bastian'); 

console.log(robot); 

robot.introduction(); 

//  # Number 7 

class Dog {

    constructor(name,breed,bark,age,color,size,owner){

        this.name = name; 
        this.breed = breed; 
        this.bark = bark; 
        this.age = age; 
        this.color = color; 
        this.size = size; 
        this.owner = owner; 
    }
    petMe(){
        console.log('* dog begins to wag its tail happily*')
    }
    rollOver(){
        console.log('Dog begins to roll over')
    }
    layDown(){
        console.log('*Dog proceeds to lay down for owen')
    }
    master(){
        console.log(`My owners name is ${this.owner}`); 
    }

}; 

const dogg = new Dog('Buddy','Golden Retriever','woof woof',3,'Golden','Big','Christopher Robbins' ); 

console.log(dogg); 

dogg.master();

//  # Number 8 

class Painter {
    constructor(name,era,style,influence){

        this.name = name; 
        this.era = era; 
        this.style = style; 
        this.influence = influence; 
    }
    intro(personName){
        console.log(`Hello ${personName} I am ${this.name} and welcome to my studio`); 
    }
    comment(personName){

        console.log(`${personName} don't you just love the way these blues mesh well together ?`);
    }
    work(){
        cosnole.log(`${this.name} begin to pain endlessly until product is done`);
    }
}

const painter = new Painter('Keith Harrington','1908s',"Modern","Jean-Michel Basquiat");

console.log(painter); 

painter.intro('Anthony'); 

// # Number 9

class Car{

    constructor(model,year,serialNumber,miles){

        this.model = model; 
        this.year = year; 
        this.serialNumber = serialNumber; 
        this.miles = miles; 
    }
    modelSale(){
        console.log(`The model of my car is ${this.model}`)
    }

    salePitch(personName){

        console.log(`Good evning ${personName} this vehical has ${this.miles} on it made in the year ${this.year} and would a great fit for you `)
    }

    inspetion(){
        console.log(`This serial number on this car is ${this.serialNumber}`); 
    }

};

const carhhh = new Car('Toyota','1993','1bt1u1gdj',123324); 

console.log(carhhh); 

carhhh.salePitch('Brandon'); 

//  # Number 10 

class Laptop { 

    constructor(company,color,storage,price){
        this.company = company; 
        this.color = color;
        this.storage = storage; 
        this.price = price; 
    }
    salesPitch(personName){
        
        console.log(`Hello ${personName} it Looks as if you want this new ${this.company} laptop huh ?`);
    }
    specs(){
        console.log(`Did you know this ${this.company} has about ${this.storage} all for just the price of ${this.price}`)
    }
    talk(){
        console.log(` ${this.company} always makes the best computers out there `)

    } 
};

const laptop = new Laptop('Apple','Slate-Gray','250GB','1200');

console.log(laptop);

laptop.salesPitch('Alex'); 

// # Number 11 

class Humvee {

    constructor(year,model,electric,miles){

        this.year = year; 
        this.model = model; 
        this.electric = electric; 
        this.miles = miles; 
    }
    sound(){

        console.log(`This Humvee was made in ${this.year} vrooom vroom`);

    }

    make(){

        console.log(`This car is a ${this.model} made in the year ${this.year}`);

    }
    fuel(personName){
        console.log(`Yes ${personName} it is electric`);
    }

};

const hummer = new Humvee(2023,'Hummer','Yes',20000); 

console.log(hummer); 

hummer.fuel('Liam'); 

//  # Number 12
class SmartPhone{

    constructor(company,storage,newFeature,provider){

        this.company = company; 
        this.storage = newFeature; 
        this.provider - provider; 
        this.storage = storage; 
    }

    sellIt(){
        console.log(`${this.company} always make qualtiy phones form what I can see`)
    }

    specs(){
        console.log(`This phone has at least ${this.storage} on it so you have space`)
    }

    action(personName){
        console.log(`Hey ${personName} look at this new feature ${this.company} added to their phone`)
    }
}

const smarPhone = new SmartPhone('Microsoft','128GB','Facetime','AT&T'); 

console.log(smarPhone);

smarPhone.specs(); 

// # Number 13 
class Baby { 

    constructor(name,age,weight,cleanDiaper,mood,awake){


        this.age = age; 
        this.weight = weight; 
        this.cleanDiaper = cleanDiaper; 
        this.mood = mood; 
        this.awake = awake;
        this.name = name;
    }
    info(){
        console.log(`This baby's name is ${this.name} and it is exactly ${this.age} old`);
    }

    diaperDuty(){
        console.log(`I wonder if ${this.name} has a clean diaper. Do they ? ${this.cleanDiaper} `)
    }

    temperament(){
        console.log(` Hey I think ${this.name} looks kinda ${this.mood} today don't you ? `)
    }
}; 

const babby = new Baby('Fiona','3 months','12lbs','Yes','mellow','No',)

console.log(babby); 

babby.info(); 

// # Number 14 

class FireTruck {

    constructor(fireStation,city,numberOfMemebers){

        this.fireStation = fireStation;
        this.city = city; 
        this.numberOfMemebers = numberOfMemebers; 
    }
    info(){
        console.log(`Which fire station is this ? I think it is ${this.fireStation}`); 
    }

    local(){
        console.log(`This fire station is in ${this.city}`);
    }

    deats(personName){
        console.log(`Hey ${personName} did you know that fire station ${this.fireStation} has ${this.numberOfMemebers} members ? `)
    }
};

const fireTruck = new FireTruck(11,'New York City',22); 

console.log(fireTruck); 

fireTruck.deats('Jack'); 

//  # Number 15
class Bird {

    constructor(type,color,wingSpan){

        this.type = type; 
        this.color = color;
        this.wingSpan = wingSpan; 
    }
    info(){
        console.log(`This type of bird is a ${this.type}`);
    }
    deats(personName){

        console.log(`Hey ${personName} this is bird has a wingspan of ${this.wingSpan}`);
    }
    compliment(){
        console.log(`I truly admore the ${this.type} bird it reminds me of Atticus`)
    }

}; 

const birdy = new Bird('Finch','Blue','6 inches');

console.log(birdy); 

birdy.compliment()

