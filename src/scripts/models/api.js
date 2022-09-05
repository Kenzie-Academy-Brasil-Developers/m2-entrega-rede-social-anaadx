export class Api {
    static baseUrl = "https://m2-rede-social.herokuapp.com/api/"
    static token = localStorage.getItem("S6-19: token")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `token ${this.token}`
    }


    static async cadastrarCliente(data) {
        const array = await fetch(`${this.baseUrl}users/`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        return array
    }
    
    static async login(body) {

        const userLogin = await fetch(`${this.baseUrl}users/login/`, {

                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            .then(res => res.json())
            .then(res => {
                localStorage.setItem("S6-19: userId", res.user_uuid)
                localStorage.setItem("S6-19: token", res.token || '')
                window.location.assign("src/pages/homePage.html")
                return res
            })

            .catch(err => console.log(err))
        return userLogin
    }

    static async getUser() {
        const user = await fetch (`${this.baseUrl}users/${localStorage.getItem("S6-19: userId")}/`, {
            method : "GET",
            headers: this.headers,
        })    
        .then (res => res.json())
        .catch (err => console.log(err))

        return user
    }

    static async createPost (body) {
        const newPosts = await fetch (`${this.baseUrl}posts/`, {
            method : "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })    
        
        .then (res => res.json())
        .then (res => {
            console.log(res)
            window.location.assign("../pages/homePage.html")
        })
        .catch (err => console.log(err))

        return newPosts
    }

    static async getPosts(page) {
        const posts = await fetch (`${this.baseUrl}posts/?page=${page}`, {
            method : "GET",
            headers: this.headers,     
        })    
        
        .then (res => res.json())
        .catch (err => console.log(err))

        return posts
    }
}