
$(document).ready(() => {
    
    /**
     * Changes which computer that is displayed
     */
    $('#pc-select').change(() => {
        if ($('#pc-select').val() < 0 || $('#pc-select').val() > this.computers.length){
            return;
        }
        generateComputer(this.computers[$('#pc-select').val()]);
    })

    /**
     * Transfers money from the work salary account
     * to the bank account.
     */
    $('#transfer-btn').click(() => {
        shake($('#work .container'));
        const amount = this.work.transfer();
        this.account.deposit(amount);
        generateWork(this.work);
        generateAccount(this.account);
    })

    /**
     * Shakes the container and adds salary tot he total salary
     * on the work account
     */
    $('#work-btn').click(() => {
        shake($('#work .container'));
        this.work.work();
        generateWork(this.work);
    })

    /**
     * Displays a modal with a form for requesting a lone
     * And registers loan request event!
     */
    $('#get-loan-btn').click(() => {
        generateLoanModal();
        addLoanRequestEvent();
    });

    handleBuyEvent();
});

/**
 * Re-registers a event for handling loan requests.
 * If the loan amount is less then the balance times two we can make a loan.
 * Otherwise we will display an error.
 */
function addLoanRequestEvent() {
    $('#request-loan-btn').off();
    $('#request-loan-btn').click(() => {
        shake($('#bank .container'));
        if(this.account.balance*2 >= parseInt($('#loan-amount').val()) && !this.account.loan) {
            this.account.makeLoan(parseInt($('#loan-amount').val()));
            $('#loan-amount').val('');
            generateAccount(this.account);
            $('#error-modal').modal('hide');
        } else {
            let text = `${$('#loan-amount').val()} is more that double your balance! You can loan less, or you have already made a loan.`;
            let title = 'Bad Request!';
            generateErrorModal(title, text);
            
        }
    });
}

/**
 * Handles the buy event.
 */
function buy() {
    this.account.withraw(parseInt($('#price').text()));
    this.account.useLoan();
    shake($('#store'));
    generateAccount(this.account);
    let text = `Your balance have been updated after your pruchase! You will receive the computer shortly!`;
    let title = 'Woohoo!';
    generateErrorModal(text, title);
}