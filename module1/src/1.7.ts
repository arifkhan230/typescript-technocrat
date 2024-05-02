{
    // spread operator
    // rest operator
    // destructuring


    // spread operator

    const bros1:string[] = ["Shakil, Shahid, Epon"];
    const bros2:string[] = ["Emon","Samad", "juwel"];

    bros1.push(...bros2);

    const mentors1 = {
        typeScript:"Mezba Vai",
        redux:"Mir Vai",
        dbms:"Mizan Vai",
    }

    const mentors2={
        prisma:"Firoz Vai",
        next:"Tanmoy",
        cloud:"Nahid"
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }

    const greetFriends = (...friends : string[])=>{
        friends.forEach(friend =>console.log(`Hi ${friend}`))
    }

    greetFriends("Shakil", "Shahid", "Epon","Emon","Samad", "juwel")
}