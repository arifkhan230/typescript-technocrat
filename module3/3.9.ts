{
    // abstraction : 1.interface 2. abstract

    // idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // const vehicle1 :Vehicle1 = {
    //     name:'Toyota',
    //     model:2000,
    // }

    // real implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`I am starting the car engine`);
        }
        stopEngine(): void {
            console.log(`I am stopping the car engine`);
        }
        move(): void {
            console.log(`I am moving the car Car`);
        }
        test() {
            console.log(`I am just testing the car`);
        }
    }


    // const toyotaCar = new Car1();
    // toyotaCar.startEngine();
    // toyotaCar.stopEngine();
    // toyotaCar.move();
    // toyotaCar.test();



    // abstract class 

    // idea
    abstract class Car2 {
        abstract startEngine(): void ;
        abstract stopEngine(): void; 
        abstract move(): void ;
    }

    class toyotaCar extends Car2 {
        startEngine(): void {
            console.log(`I am starting the car engine`);
        }
        stopEngine(): void {
            console.log(`I am stopping the car engine`);
        }
        move(): void {
            console.log(`I am moving the car Car`);
        }

    }

    const hondaCar = new toyotaCar();
    hondaCar.startEngine();








    // 
}