{

    // nullable types / unknown types

    const searchName = (value: string | null) => {
        if (value) {
            console.log("Searching");
        } else {
            console.log("There is nothing to search");
        }
    }

    searchName(null);

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            // console.log(`The speed is ${convertedSpeed} ms`);
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(' ');
            // console.log(result,unit);
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms`);
        }
        else {
            console.log('wrong input');
        }
    }

    getSpeedInMeterPerSecond(null);

    const trowError = (msg: string): never => {
        throw new Error(msg)
    }

    trowError("mushkil se error hogaya")

}