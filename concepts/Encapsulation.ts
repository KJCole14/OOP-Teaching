// the purpose of encapsulation is to keep the 
// related data, and the methods manipulationg it
// together in one block of code
class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        this.balance -= amount;
    }

    getBalance(): number {
        return this.balance;
    }
}
