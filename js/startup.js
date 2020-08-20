let account, work, computers;
$(document).ready(() => {
    /**
     * Fetches the bank information and generates the view
     */
    getAccount().then((data) => {
        this.account = new Account(data.owner, data.bank, data.balance);
        generateAccount(this.account);
    });

    /**
     * Fetches the work information and generates the view
     */
    getWork().then((data) => {
        this.work = new Work(data.employee, data.dailySalary, data.totalSalary);
        generateWork(this.work);
    });

    /**
     * Fetches computers and generates the first one
     * and adds all computers to the select list
     */
    getComputers().then((data) => {
        this.computers = data.computers;
        generateComputer(this.computers[0]);
        generateSelectList(this.computers);
    });

    /**
     * Setup scrollspy and scroll animation
     */
    $("body").scrollspy({ target: "#nav", offset: 20 });
    $("#nav a").on("click", function (event) {
        if (this.hash !== undefined) {
            this.hash = this.hash === "" ? "#top" : this.hash;
            event.preventDefault();
            let hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });
});
