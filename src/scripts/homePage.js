import {
    Api
} from "./models/api.js";


export class RenderhomePage {

    static async acessControl(){
        const token = localStorage.getItem("S6-19: token")

            if(!token) {
                window.location.assign("../../index.html")
    }
}

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

              const novaPostagem = await Api.createPost(newPost)
              console.log(novaPostagem)
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


  
    static async like(){
        
            document.addEventListener("click", async (event) => {
                event.preventDefault()
                const target = event.target
                
                if (target.classList == "buttonLikeImg"){
                    const IdPost = {
                        "post_uuid": target.id 
                    }
                     await Api.likePost(IdPost)
                    
                }
            })
           
    }

    static async follow(){
        
            document.addEventListener("click", async (event) => {
                event.preventDefault()
                const target = event.target
                
                
                if (target.classList == "buttonSeguir"){
                    const IdUser = {
                        "following_users_uuid": target.id 
                    }
                     await Api.followUser(IdUser)
                    
                }
            }) 
           
    }

        
    }


await RenderhomePage.acessControl()
await RenderhomePage.userInfo()
RenderhomePage.createNewPost()
RenderhomePage.logout()
await RenderhomePage.like()
await RenderhomePage.follow()



