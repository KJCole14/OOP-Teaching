const Account = function (owner, currency, pin ) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.transactions = [];
    this.location = navigator.language;

    console.log(`Thank you for your patronage ${owner}`)
}

const Acc1 = new Account("Kabah", "USD", 1234);
console.log(Acc1);