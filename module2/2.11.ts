{
    // utility type
    // Pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string
    }

    type NameAge = Pick<Person, "name" | "age">

    // Omit 
    type ContractInfo = Omit<Person, "name" | "age">

    // Required 
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // Readonly
    type PersonReadonly = Readonly<Person>

    const person1: PersonReadonly = {
        name: "Mr. XY",
        age: 24,
        contactNo: "017"

    }
    // person1.name="Mr. Yz"

    // Record 

    // type MyObj = {
    //     a: string,
    //     b: string,
    // }

    type MyObj = Record<string,string>

    const emptyObj : Record<string,unknown> ={}

    const obj1: MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc'
    }

    //
}