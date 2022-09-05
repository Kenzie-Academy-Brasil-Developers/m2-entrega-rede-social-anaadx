import {
    Api
} from "./models/api.js";
// import {
//     RenderPosts
// } from "./models/render.js";

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

        btnPost.addEventListener("click",  () => {

            const newPost = {
                title: postTitle.value,
                description: text.value
            }

              Api.createPost(newPost)
        })
    }

    // static async renderHome () {
    //     const token = localStorage.getItem("S6-19: token")
    //     const postsList = document.querySelector(".containerPosts__ul")
    //     let cont = 1
    //     const posts = await Api.getPosts(`${cont}`)

    //     postsList.innerHTML = ''

    //     if(!token) {
    //         window.location.assign("../../index.html")
    //     }

    //     RenderPosts.renderPostsList(posts)
    // }

    static logout (){
        const btnLogout = document.querySelector(".btnLogout")
        console.log(btnLogout)
        btnLogout.addEventListener("click", (event) =>{
            event.preventDefault()
            localStorage.clear()
            window.location.assign("../../index.html")
        })
    }
}

await RenderhomePage.userInfo()
RenderhomePage.createNewPost()
// await RenderhomePage.renderHome()
RenderhomePage.logout()
