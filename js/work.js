
/**
 * Work account
 */
class Work {
    constructor(employee, salary, totalSalary) {
        this._employee = employee;
        this._salary = salary;
        this._totalSalary = totalSalary;
    }

    /**
     * Increases total salary with salary
     */
    work() {
        this._totalSalary += this._salary;
    }

    /**
     * Removes total salary and returns the amount
     */
    transfer() {
        const transfer = this._totalSalary;
        this._totalSalary = 0;
        return transfer;
    }

    get employee() { return this._employee; }

    get totalSalary() { return this._totalSalary; }
}