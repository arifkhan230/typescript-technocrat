{
    // oop -- class

    class Animal {


        constructor(public name: string, public species: string, public sound: string) { }

        makeSound() {
            console.log(`${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("German Shepard Kutta", "dog", "Ghew Ghew");
    const cat = new Animal("Persian Bilai", "cat", "Meaw meaw");

    dog.makeSound();
    cat.makeSound();





    // 
}