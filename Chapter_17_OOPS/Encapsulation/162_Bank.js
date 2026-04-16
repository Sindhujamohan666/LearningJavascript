class ICICI {
    #balance;

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed")
        }
    }
}

let pramod = new ICICI("Pramod", 1000);
console.log(pramod.getBalance());
pramod.setBalance(10000000, false);//not allowed to change balance as not a cashier
console.log(pramod.getBalance());

let pramod_father = new ICICI("Pramod", 2000);
console.log(pramod_father.getBalance());
pramod_father.setBalance(300000, true);//allowed to change balance as is a cashier
console.log(pramod_father.getBalance());