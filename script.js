//complete this code
class Animal {

	
	constructor(species: string){
		this.species = species;
	}

	get species: string(){
		return this.species;
	}

	set makeSound: void(){
		console.log(`the ${this.species} makes a sound`);
	}
}

class Cat extends Animal {
	purr():void{
		console.log('purr');
	}
}


class Dog extends Animal {
	bark(): void{
		console.log('woof');
	}
}


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
