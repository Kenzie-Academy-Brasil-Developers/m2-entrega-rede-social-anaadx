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
        
        const tagPNumeroCurtidas = document.createElement("p")

        li.key = post.author.uuid
        li.id = post.uuid
        tagImg.src = post.author.image
        tagImg.alt = "Foto de Perfil do dono do post"
        tagH2Nome.innerText = post.author.username
        tagH3Titulo.innerText = post.title
        tagPConteudo.innerText = post.description
        tagPProfissao.innerText = post.author.work_at

        //LIKE2
        const tagbuttonLike2 = document.createElement("button")
        const tagImgLike2 = document.createElement("img")
         tagImgLike2.src = "../assets/heartRed.png"
         tagImgLike2.alt = "Coração vermelho" 
         tagImgLike2.classList.add("buttonLikeImg")
         tagbuttonLike2.classList.add("buttonLike")
         tagbuttonLike2.classList.add("buttonLike2")
        

        tagButtonPost.innerText = "Abrir post"
        tagButtonPost.setAttribute ("id", post.uuid)
        tagImgLike1.src = "../assets/heartBlack.png"
        tagButtonLike1.setAttribute("id",post.uuid)
        tagImgLike1.alt = "Coração preto"
        tagImgLike1.setAttribute ("id", post.uuid)
        

        tagPNumeroCurtidas.innerText = post.likes.length

        

        tagFigure.appendChild(tagImg)
        tagDivNomeProfissao.append(tagH2Nome, tagPProfissao)
        tagDivImgEscrito.append(tagFigure, tagDivNomeProfissao)
        tagDivPostContent.append(tagH3Titulo, tagPConteudo)
        tagButtonLike1.appendChild(tagImgLike1)
        tagbuttonLike2.appendChild(tagImgLike2)
        if(tagImgLike1.classList == "liked"){
            tagDivContainerLike.append(tagbuttonLike2, tagPNumeroCurtidas)
        }else{
            tagDivContainerLike.append(tagButtonLike1, tagPNumeroCurtidas)
        }
        tagDivButtonsPost.append(tagButtonPost, tagDivContainerLike)

        li.append(tagDivImgEscrito, tagDivPostContent, tagDivButtonsPost)

        return li
       
    }

    static async renderHome () {
       
        const postsList = document.querySelector(".containerPosts__ul")
        let cont = 1
        const posts = await Api.getPosts(`${cont}`)

        postsList.innerHTML = ''

        RenderPosts.renderPostsList(posts)
    }
}

RenderPosts.renderHome()

export class RenderPostsSugestions{

    static async renderUsersList(array)  {

        const ulSugestions = document.querySelector(".containerSugestoes__ul")
        array.results.forEach((user) => {
                    
                    const card = RenderPostsSugestions.renderCardSugestions(user)
                    ulSugestions.appendChild(card)
                  
            
            })
    }

    static renderCardSugestions(user) {

        const li = document.createElement("li")

        const tagDiv1 = document.createElement("div")
        const tagFigure = document.createElement("figure")
        const tagImg = document.createElement("img")
        const tagDiv2 = document.createElement("div")
        const tagH2Nome = document.createElement("h2")
        tagH2Nome.classList.add("title2")
        const tagPProfissao = document.createElement("p")
        tagPProfissao.classList.add("text2")

        const tagButtonSeguir = document.createElement("button")
        tagButtonSeguir.classList.add("buttonSeguir")
        const tagButtonSeguindo = document.createElement("button")
        tagButtonSeguindo.classList.add("buttonSeguindo")
        tagButtonSeguindo.classList.add("hidden")

        li.key = user.uuid
        li.id = user.uuid
        tagImg.src = user.image ? user.image : "https://cdn-icons-png.flaticon.com/512/5987/5987462.png"
        tagImg.alt = "Foto de Perfil"
        tagH2Nome.innerText = user.username
        tagPProfissao.innerText = user.work_at

        tagButtonSeguir.innerText = "Seguir"
        tagButtonSeguir.setAttribute("id",user.uuid)
        tagButtonSeguindo.innerText = "Seguir"
        tagButtonSeguindo.setAttribute("id",user.uuid)
        
        tagFigure.appendChild(tagImg)
        tagDiv2.append(tagH2Nome, tagPProfissao)
        tagDiv1.append(tagFigure, tagDiv2)
       

        li.append(tagDiv1, tagButtonSeguir, tagButtonSeguindo)

        return li
       
    }

    static async renderSugestions () {
       
        const usersList = document.querySelector(".containerSugestoes__ul")
        
        const users = await Api.getUsers()

        usersList.innerHTML = ''

        await RenderPostsSugestions.renderUsersList(users)
    }
}

await RenderPostsSugestions.renderSugestions()
// await RenderPostsSugestions.renderHome()
