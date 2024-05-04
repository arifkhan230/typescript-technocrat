{
    // 

    // generic type

    type GenericArray<T> = Array<T>

    // const rollNumbers: number[] = [3, 6, 8];
    const rollNumbers: GenericArray<number> = [3, 6, 8];

    // const mentors: string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
    const mentors: GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];

    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: "Arif",
            age: 25
        },
        {
            name: "Bayazid",
            age: 27
        }
    ];

    // generic tuple

    type GenericTuple<X, Y> = [X, Y];

    const manush: GenericTuple<string, string> = ['Mr. X', 'Mr. Y'];

    const userWithId: GenericTuple<number, { name: string, email: string }> = [123, { name: 'Arif', email: 'arif@gmail.com' }]

    // 
}