{
    // interface - generic

    interface Developer<T, Y=null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T;
        bike?: Y
    }


    type Emilab = {
        brand: string;
        model: string;
        display: string
    }

    const poorDeveloper: Developer<Emilab> = {
        name: "Arif",
        computer: {
            brand: "Asus",
            model: "xy-333",
            releaseYear: 2022
        },
        smartWatch: {
            brand: "Emilab",
            model: "kw66",
            display: 'OLED'
        }
    }


    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean,
        sleepTrack: boolean
    }

    interface YamahaBike{
        model:string;
        engineCapacity: string
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: "Bayazid",
        computer: {
            brand: "HP",
            model: "xy-33",
            releaseYear: 2024
        },
        smartWatch: {
            brand: "Apple",
            model: "Something",
            heartTrack: true,
            sleepTrack: true
        },
        bike:{
            model:"Yamaha",
            engineCapacity:"100cc"
        }
    }

    // 
}