class BankAccount {
    // Default properties defined in the class
    accountNumber = 0;
    ownerName = '';
    balance = 0;

    //Constructor will Initialize the properties of Accounts as new instance of class is created
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
        } else {
            console.log("Insufficient Funds");
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.getBalance()}`);
    }
}

//main function 
function main() {
// Creating Two instances of BankAccount class
const account1 = new BankAccount(1001, "John Doe", 1000);
const account2 = new BankAccount(1002, "Jane Smith", 500);

// Demonstrate functionality Account1
console.log("Initial Account Information:");
account1.displayAccountInfo();

console.log("\nDeposit and Withdrawl:");
account1.deposit(200);
account1.withdraw(300);

console.log("\nUpdated Account Information:");
account1.displayAccountInfo();



// Demonstrate functionality Account2
console.log("Initial Account Information:");
account2.displayAccountInfo();

console.log("\nDeposit and Withdrawl:");
account2.deposit(300);
account2.withdraw(1200);

console.log("\nUpdated Account Information:");
account2.displayAccountInfo();


}
setTimeout(() => {
    main();
}, 1000);