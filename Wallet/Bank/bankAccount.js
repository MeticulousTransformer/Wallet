class Bank {
  constructor(owner, key) {
    this.owner = owner;
    this.key = key;
    this.balance = 0;
    this.logs = {};
  }
  withdraw(amount) {
    if (amount >= this.balance) {
      this.balance -= amount; //Subtract from balance if there is enough
    } else {
      throw new Error("Not enough funds on balance.");
    }
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      throw new Error("Cannot deposit 0 or lesser than 0.");
    }
  }
}
