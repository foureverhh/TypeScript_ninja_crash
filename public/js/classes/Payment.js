export class Payment {
    constructor(recipient, detals, amount) {
        this.recipient = recipient;
        this.detals = detals;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.detals}`;
    }
}
