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
}

const me = new Person('Anthony',26, 'brown eyes', 'black'); 

console.log(me); 

me.introduction()

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

}

const dog = new Pet('Wilfred','Greyhound','Big','Grey','bark bark'); 

console.log(dog); 

dog.growl()