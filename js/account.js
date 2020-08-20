class Account {
    constructor(owner, bank, balance) {
        this._owner = owner;
        this._bank = bank;
        this._balance = balance;
        this._loan = false;
    }

    /**
     * Adds money to the account
     * @param amount 
     */
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        }
    }

    /**
     * Withdraws money from the account
     * @param  amount 
     */
    withraw(amount) {
        if (amount > 0) {
            this._balance -= amount;
        }
    }

    /**
     * Makes a loan if the owner doesn't have a loan
     * @param  amount 
     */
    makeLoan(amount) {
        if (this._loan === false) {
            this._loan = true;
            this._balance += amount;
        }
    }

    /**
     * Uses the loan
     */
    useLoan() {
        this._loan = false;
    }

    get owner() { return this._owner; }

    get bank() { return this._bank; }

    get balance() { return this._balance; }

    get loan() { return this._loan }
}