export default class Email {
    constructor(readonly address: string) {
        this.validate();
    }

    private validate(): void {
        if (!this.address) {
            throw new Error("Empty email.");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.address)) {
            throw new Error("Invalid email.");
        }
    }

    isEqual(other: any): boolean {
        if (other instanceof Email) {
            return this.address === other.address;
        }
        return false;
    }
}