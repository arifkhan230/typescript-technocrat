{

    // union types

    // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper' ;
    // type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper' ;

    // type Developer = FrontendDeveloper | FullstackDeveloper

    // const newDeveloper: FrontendDeveloper = 'fakibazDeveloper';

    // type User = {
    //     name: string;
    //     email?:string;
    //     gender:"male"|"female";
    //     bloodGroup: "O+"|"B+"|"Ab+";
    // }

    // const user1 :User = {
    //     name: "Arif",
    //     gender:"male",
    //     bloodGroup:"B+"
    // }


    // Intersection types

    type FrontendDeveloper = {
        skills: string[];
        designation1: "frontendDeveloper";
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: "backendDeveloper";
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper 

    const fullstackDeveloper : FullstackDeveloper  = {
        skills: ["HTML","CSS","REACT","EXPRESS"],
        designation1: "frontendDeveloper",
        designation2:"backendDeveloper"

    }
}