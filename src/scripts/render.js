import {
    Api
} from "./models/api.js";
export class RenderPosts {
    
    static renderPostsList(array)  {
        const ul = document.querySelector(".containerPosts__ul")

        array.results.forEach((post) => {
            const card = RenderPosts.renderCard(post)
            
            ul.appendChild(card)
          })
    }

    static renderCard(post) {

        const li = document.createElement("li")

        const tagDivImgEscrito = document.createElement("div")
        tagDivImgEscrito.classList.add("containerPosts__ul__imgEscrito")
        const tagFigure = document.createElement("figure")
        const tagImg = document.createElement("img")
        const tagDivNomeProfissao = document.createElement("div")
        const tagH2Nome = document.createElement("h2")
        tagH2Nome.classList.add("title2")
        const tagPProfissao = document.createElement("p")
        tagPProfissao.classList.add("text2")

        const tagDivPostContent = document.createElement("div")
        tagDivPostContent.classList.add("postContent")
        const tagH3Titulo = document.createElement("h3")
        tagH3Titulo.classList.add("title1")
        const tagPConteudo = document.createElement("p")
        tagPConteudo.classList.add("text1")

        const tagDivButtonsPost = document.createElement("div")
        tagDivButtonsPost.classList.add("buttonsPost")
        const tagButtonPost = document.createElement("button")
        tagButtonPost.classList.add("buttonAbrirPost")

        const tagDivContainerLike = document.createElement("div")
        tagDivContainerLike.classList.add("containerLike")
        const tagButtonLike1 = document.createElement("button")
        tagButtonLike1.classList.add("buttonLike")
        const tagImgLike1 = document.createElement("img")
        tagImgLike1.classList.add("buttonLikeImg")
        const tagButtonLike2 = document.createElement("button")
        tagButtonLike2.classList.add("buttonLike")
        const tagImgLike2 = document.createElement("img")
        tagImgLike2.classList.add("hidden")
        tagImgLike2.classList.add("buttonLikeImg")
        const tagPNumeroCurtidas = document.createElement("p")

        li.key = post.author.uuid
        li.id = post.uuid
        tagImg.src = post.author.image
        tagImg.alt = "Foto de Perfil do dono do post"
        tagH2Nome.innerText = post.author.username
        tagH3Titulo.innerText = post.title
        tagPConteudo.innerText = post.description

        tagButtonPost.innerText = "Abrir post"
        tagImgLike1.src = "../assets/heartBlack.png"
        tagButtonLike1.setAttribute("id",post.uuid)
        tagImgLike1.alt = "Coração preto"

        tagImgLike2.src = "../assets/heartRed.png"
        tagButtonLike2.setAttribute("id",post.uuid)
        tagImgLike2.alt = "Coração vermelho"

        tagPNumeroCurtidas.innerText = post.likes.length

        tagFigure.appendChild(tagImg)
        tagDivNomeProfissao.append(tagH2Nome, tagPProfissao)
        tagDivImgEscrito.append(tagFigure, tagDivNomeProfissao)
        tagDivPostContent.append(tagH3Titulo, tagPConteudo)
        tagButtonLike1.appendChild(tagImgLike1)
        tagButtonLike1.appendChild(tagImgLike2)
        tagDivContainerLike.append(tagButtonLike1, tagButtonLike2, tagPNumeroCurtidas)
        tagDivButtonsPost.append(tagButtonPost, tagDivContainerLike)

        li.append(tagDivImgEscrito, tagDivPostContent, tagDivButtonsPost)

        console.log(li)
        return li
       
    }

    static async renderHome () {
        // const token = localStorage.getItem("S6-19: token")
        const postsList = document.querySelector(".containerPosts__ul")
        let cont = 1
        const posts = await Api.getPosts(`${cont}`)

        postsList.innerHTML = ''

        // if(!token) {
        //     window.location.assign("../../index.html")
        // }

        RenderPosts.renderPostsList(posts)
    }
}

RenderPosts.renderHome()
