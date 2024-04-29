class ContactForm {
    private form: HTMLFormElement;

    constructor(form: HTMLFormElement) {
        this.form = form;
        this.init();
    }

     
    private init(): void {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    private handleSubmit(event: Event): void {
        event.preventDefault();
        window.location.href = 'thankyou.html';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = new ContactForm(document.getElementById('contactForm') as HTMLFormElement);
});
