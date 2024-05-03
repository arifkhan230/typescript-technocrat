{
    // Type alias

    // Using type alias in object

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student = {
        name: "Arif",
        age: 24,
        gender: "male",
        contactNo: "0170000000",
        address: "Moulvibazar"
    }


    const student2: Student = {
        name: "Bayazid",
        age: 27,
        gender: "male",
        address: "Moulvibazar"
    }


    const student3: Student = {
        name: "Juwel",
        age: 25,
        gender: "male",
        address: "Moulvibazar"
    }

    // using type alias in variable

    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = "Arif";
    const isAdmin: IsAdmin = true;

    // using type alias in function

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;

}