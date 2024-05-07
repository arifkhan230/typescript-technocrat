{
    // oop- inheritance

    class Person {
        name: string;
        age: number;
        address: string

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }


    class Student extends Person {

        constructor(name: string, age: number, address: string) {
            super(name,age,address)
        }

        
    }

    const Student1 = new Student('Mr. Student', 20, 'Uganda');
    Student1.getSleep(8);


    class Teacher extends Person {
        designation: string

        constructor(name: string, age: number, address: string, designation: string) {
            super(name,age,address)
            this.designation = designation
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass} classes`);
        }
    }

    const Teacher1 = new Teacher('Mr. Teacher', 30, 'Senegal', 'Head Master');

    Teacher1.takeClass(8)


    // 
}