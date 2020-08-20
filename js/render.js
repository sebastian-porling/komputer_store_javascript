
/**
 * Displays a computer for the user
 * @param computer 
 */
const generateComputer = (computer) => {
    const computerView = `
    <img class="pc-img align-self-center" src="${computer.image}" alt="">
    <div class="pc-info">
        <h2 id="pc-title">${computer.title}</h2>
        <p id="pc-description">${computer.description}</p>
        <ul id="pc-features">
            ${computer.features.map(feature => `<li class="feature">${feature.feature}</li>`).join("")}
        </ul>
        <div class="pc-price-buy d-flex justify-content-end">
            <h3 id="pc-price" class="align-self-center"><span id="price">${computer.price}</span> kr</h3>
            <button class="btn btn-success align-self-center" id="buy-btn">Buy Now!</button>
        </div>
    </div>`;
    $('#displayed-pc').html(computerView);
}

/**
 * Updates the select element with the computers available
 * @param computers 
 */
const generateSelectList = (computers) => {
    computers.forEach(computer => {
        $('#pc-select').append(`<option value="${computer.id}">${computer.title}</option>`)
    });
}

/**
 * Updates the work information in the DOM
 * @param work 
 */
const generateWork = (work) => {
    const workView = `
    <h2>Employee: <span id="employee">${work.employee}</span></h2>
    <h2>Salary: <span id="salary">${work.totalSalary}</span> kr</h2>`;
    $('#work-account').html(workView);
}

/**
 * Updates the bank account information in the DOM
 * @param account 
 */
const generateAccount = (account) => {
    const accountView = `
    <h2>Bank: <span id="bank">${account.bank}</span></h2>
    <h2>Owner: <span id="owner">${account.owner}</span></h2>
    <h2>Balance: <span id="balance">${account.balance}</span> kr</h2>`;
    $('#bank-account').html(accountView);
}

/**
 * Generates a modal for handling a loan request and displays it
 */
const generateLoanModal = () => {
    $('#error-modal-body').html(`
        <div class="md-form">
            <input type="number" id="loan-amount" class="form-control">
            <label for="loan-amount">Loan Amount</label>
        </div>
        <button class="btn btn-primary" id="request-loan-btn">Request a loan!</button>
        `)
    $('#error-modal-title').text('Make a loan!!');
    $('#error-modal').modal('show');
}

/**
 * Generates a modal with title and text and displays it to the page
 * @param title 
 * @param text 
 */
const generateErrorModal = (title = "Error", text = "An error has occurred!") => {
    generateModal(title, text);
}

/**
 * Generates a modal with title and text and displays it to the page
 * @param title 
 * @param text 
 */
const generateModal = (title = "", text = "") => {
    $('#error-modal-body').html(text);
    $('#error-modal-title').text(title);
    $('#error-modal').modal('show');
}

/**
 * Shakes a HTML element for half a second
 * @param  thing 
 */
const shake = (thing) => {
    $(thing).addClass("shake");
    setInterval(() => {
        $(thing).removeClass("shake");
    }, 500);
}
