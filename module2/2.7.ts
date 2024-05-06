{
    // 

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | 'car' | 'ship'  //manually

    type Owner2 = keyof Vehicle

    const person1: Owner2 = 'bike';


    const user = {
        name: 'Arif',
        age: 24,
        address: 'ctg'
    }

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const result1 = getPropertyValue(user, 'age')

    // user['name']


    // 
}