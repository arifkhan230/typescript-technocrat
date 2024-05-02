// Learning function 

// Normal function
// Arrow function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(2, 2);

const addNumber = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method

const poorUser = {
    name: "Arif",
    balance: 0,
    addBalance(balance: number): string {
        return `My new balance is : ${this.balance + balance} `
    }
}

const arr: number[] = [1, 10, 20];

const newArray: number[] = arr?.map((item: number): number => item * item)