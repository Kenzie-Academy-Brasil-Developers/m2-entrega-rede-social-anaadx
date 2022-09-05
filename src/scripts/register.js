import {
    Api
} from "./models/api.js";

class RegisterProfileClass {

    static async createProfile() {

        const nameInput = document.querySelector(".nameRegister")
        const emailInput = document.querySelector(".emailRegister")
        const passwordInput = document.querySelector(".passwordRegister")

        const workInput = document.querySelector(".workRegister")
        const imgInput = document.querySelector(".imgRegister")
        const buttonRegister = document.querySelector(".buttonRegister")
        const buttonLoginPage = document.querySelector(".buttonLoginPage")
        const buttonLoginPage2 = document.querySelector(".buttonLoginPage2")
        const buttonLoginPage3 = document.querySelector(".buttonLoginPage3")
        

        buttonRegister.addEventListener("click", async (event) => {

                event.preventDefault()

                const data = {
                    username: nameInput.value,
                    email: emailInput.value, // Email Valido
                    password: passwordInput.value, // String
                    work_at: workInput.value, // String
                    image: imgInput.value // URL image
                }
            
            await Api.cadastrarCliente(data)
        })

        buttonLoginPage.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.assign("../../index.html")
        })

        buttonLoginPage2.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.assign("../../index.html")
        })

        buttonLoginPage3.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.assign("../../index.html")
        })
}
}

await RegisterProfileClass.createProfile()