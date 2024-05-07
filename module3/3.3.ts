{
    // oop-- type Guard

    // type of --> type guard

    type Alphanumeric = string | number;

    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    }

    const result1 = add(2, "3");
    console.log(result1);


    // in guard

    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string;
        role: "admin"
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        } else {
            console.log(`My name is ${user.name} `);
        }
    }

    const normalUser: NormalUser = {
        name: "Mr. Normal user"
    }

    const adminUser: AdminUser = {
        name: "Mr. Admin user",
        role: "admin"
    }

    getUser(normalUser);
    getUser(adminUser);



    // 
}