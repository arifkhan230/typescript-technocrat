// Reference type --> Object

const user:{
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
    readonly company:string;  //type --> literal type
} = {
    firstName: "Jhankar",
    lastName: "Mahbub",
    isMarried: true,
    company: "Programming Hero"
}

