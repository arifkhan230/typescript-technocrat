{

    // constraints

    const addCourseToStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
        const course = 'Next Level Web Development'
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id: 222,
        name: 'Mr.X',
        email: 'x@gmail.com',
        devType: 'NLWD'
    });

    const student2 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        hasWatch: string;
    }>({
        id: 333,
        name: 'Mr.Y',
        email: 'x@gmail.com',
        hasWatch: 'Apple Watch'
    });

    const student3 = addCourseToStudent({ id: 444, name: 'Mr.Z', email: 'Z@gmail.com', emni: 'emni' })



    // 
}