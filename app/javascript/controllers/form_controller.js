import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "form", "formHelper","text"]

    connect() {
        console.log(this.formTarget)
        console.log(this.formHelperTarget)
    }

    openHelperForm() {
        this.formHelperTarget.classList.toggle('display-none')
        if (this.formHelperTarget.classList.contains('display-none')) {
            this.textTarget.innerText = "Formulaire 'Participer' ↓";
        } else {
            this.textTarget.innerText = "Formulaire 'Participer' ↑";
        }
    }
}
