export default Bank;
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based
const day = currentDate.getDate();
const hours = currentDate.getHours();

class Bank {
  constructor(owner, key, password) {
    this.owner = owner;
    this.key = key;
    this.password = password;
    this.balance = 0;
    this.logs = [];
    this.bankStatement = 0;
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount; //Subtract from balance if there is enough
      this.logs.unshift(
        `Outcome: -${amount} at ${year}/${month}/${day} at ${hours}o'clock`
      );
      this.bankStatement -= amount;
    } else {
      throw new Error("Not enough funds on balance.");
    }
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.logs.unshift(
        `Income: +${amount} at ${year}/${month}/${day} at ${hours}o'clock` //Tracking logs
      );
      this.bankStatement += amount; //Whole movement of money.
    } else {
      throw new Error("Cannot deposit 0 or lesser than 0.");
    }
  }
}
