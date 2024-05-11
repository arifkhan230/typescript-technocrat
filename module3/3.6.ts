{
    // getter and setter

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance
        }

        // setter
        set deposit (amount:number){
            this._balance = this.balance + amount
        }

        // addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        // getter
        get balance() {
            return this._balance;
        }

        // getBalance() {
        //     return this._balance;
        // }
    }



    const poorManAccount = new BankAccount(111, 'Mr. Gorib', 20);

    // poorManAccount.balance = 0
    // poorManAccount.addDeposit(500);  //function call korte hocces
    // const myBalance = poorManAccount.getBalance(); //function call korte hocce

    poorManAccount.deposit = 200;

    const myBalance = poorManAccount.balance;   //property er moto kore
    console.log(myBalance);


    // 
}