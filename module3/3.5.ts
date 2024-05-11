{
    // access modifier

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance
        }

        addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        getBalance() {
            return this._balance;
        }
    }

    // if we use protected keyword in _balance instead of private it will bw accessible in child class
    class StudentAccount extends BankAccount {
        test() {
            this._balance
        }
    }


    const poorManAccount = new BankAccount(111, 'Mr. Gorib', 20);

    // poorManAccount.balance = 0
    poorManAccount.addDeposit(500);
    const myBalance = poorManAccount.getBalance();
    console.log(myBalance);


    // 
}