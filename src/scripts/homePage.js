import {
    Api
} from "./models/api.js";


export class RenderhomePage {

    static async userInfo() {
        const userImg = document.getElementById("userImg")
        const userName = document.getElementById("userName")
        const userWork = document.getElementById("userWork")
        const userFollowers = document.getElementById("userFollowers")
        const user = await Api.getUser()

        userImg.src = user.image
        userName.innerText = user.username
        userWork.innerText = user.work_at
        userFollowers.innerText = `${user.followers_amount} seguidores`
    }

    static createNewPost() {
        const postTitle = document.querySelector(".tituloPost")
        const text = document.querySelector(".textoPost")
        const btnPost = document.querySelector(".buttonPostar")

        btnPost.addEventListener("click", async () => {

            const newPost = {
                title: postTitle.value,
                description: text.value
            }

              await Api.createPost(newPost)
        })
    }

    static logout (){
        const btnLogout = document.querySelector(".btnLogout")
        btnLogout.addEventListener("click", (event) =>{
            event.preventDefault()
            localStorage.clear()
            window.location.assign("../../index.html")
        })
    }
}

await RenderhomePage.userInfo()
RenderhomePage.createNewPost()
RenderhomePage.logout()
