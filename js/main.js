$(document).ready(() => {
    /**
     * Changes which computer that is displayed
     */
    $("#pc-select").change(() => {
        if (validOption())
            generateComputer(this.computers[$("#pc-select").val()]);
    });

    /**
     * Transfers money from the work salary account
     * to the bank account.
     */
    $("#transfer-btn").click(() => {
        shake($("#work .container"));
        this.account.deposit(this.work.transfer());
        generateWork(this.work);
        generateAccount(this.account);
    });

    /**
     * Shakes the container and adds salary tot he total salary
     * on the work account
     */
    $("#work-btn").click(() => {
        shake($("#work .container"));
        this.work.work();
        generateWork(this.work);
    });

    /**
     * Displays a modal with a form for requesting a lone
     * And registers loan request event!
     */
    $("#get-loan-btn").click(() => {
        generateLoanModal();
    });

    /**
     * Registers a event for handling loan requests.
     * If the loan amount is less then the balance times two we can make a loan.
     * Otherwise we will display an error.
     */
    $("#error-modal").on("click", "#request-loan-btn", () => {
        if (validLoanRequest()) {
            shake($("#bank .container"));
            this.account.makeLoan(parseInt($("#loan-amount").val()));
            $("#loan-amount").val("");
            generateAccount(this.account);
            $("#error-modal").modal("hide");
        } else {
            let text = `
            ${$("#loan-amount").val()} is more that double your balance! 
            You can loan less, or you have already made a loan.`;
            let title = "Bad Request!";
            generateErrorModal(title, text);
        }
    });

    /**
     * Registers the buy event
     * Which either let's the user know they don't have enough balance on their
     * bank account, or updates the balance after the purchase.
     */
    $("#store").on("click", "#buy-btn", () => {
        let text, title;
        if (balanceMoreThanPrice()) {
            this.account.withraw(parseInt($("#price").text()));
            this.account.useLoan();
            shake($("#store"));
            generateAccount(this.account);
            text = `
            Your balance have been updated after your pruchase! 
            You will receive the computer shortly!`;
            title = "Woohoo!";
        } else {
            text = `
            You don't have enough money on your account! 
            Work or take a loan!`;
            title = `Bad request!`;
        }
        generateModal(title,text);
    });
});

/**
 * Helper function for checking if the selected value is within
 * the computer array range.
 */
function validOption() {
    return (
        $("#pc-select").val() >= 0 &&
        !($("#pc-select").val() > this.computers.length)
    );
}

/**
 * Helper function that checks if the price is less than equals the bank balance
 */
function balanceMoreThanPrice() {
    return this.account.balance >= parseInt($("#price").text());
}

/**
 * Helper fucntion that checks that the loan amount is
 * less than than equals the doubled balance of the account.
 * Also checks that the loan amount is mor than 0.
 * Also checks if the account doesn't have an unused loan.
 */
function validLoanRequest() {
    return (
        this.account.balance * 2 >= parseInt($("#loan-amount").val()) &&
        parseInt($("#loan-amount").val()) > 0 &&
        !this.account.loan
    );
}
