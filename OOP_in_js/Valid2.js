class Valid2 extends Valid {
    constructor(email, password, emailError, passwordError) {
        super(email, password)
        this.emailError = "";
        this.passwordError = "";
    }

    validate() {
        super.validate();
        if (!this.isValid) {
            this.passwordError = "min 6 length";
            return false;
        }
        if (this.email = "") {
            this.isValid = false
            this.emailError = "email empty"
            return false;
        }
        return true;
    }
}