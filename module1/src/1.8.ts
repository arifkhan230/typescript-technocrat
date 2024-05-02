{
    // Destructuring

    // object destructuring

    const user = {
        id: 123,
        name: {
            firstName: "Mezbaul",
            middleName: "Abedin",
            lastName: "Persian",
        },
        contactNo: "01700000000",
        address: "Uganda"

    };

    const { contactNo, name: { middleName } } = user;

    const myFriends = ['Shahid', 'Samad', 'Shakil', 'Emon' , 'Epon', 'Juwel'];

    const [,, bestFriend,...rest] = myFriends ;
}