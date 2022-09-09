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
                // window.location.assign("src/pages/homePage.html")
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

    static async getUsers() {
        const indexRandom = Math.floor(Math.random() * 20);
        const users = await fetch (`${this.baseUrl}users/?limit=3&offset=${indexRandom}`, {
            method : "GET",
            headers: this.headers,     
        })    
        
        .then (res => res.json())
        .catch (err => console.log(err))
        return users
    }

    static async getUsersAll() {
        const users = await fetch (`${this.baseUrl}users/?limit=1000&offset=${1}`, {
            method : "GET",
            headers: this.headers,     
        })    
        
        .then (res => res.json())
        .then (res => console.log(res))
        .catch (err => console.log(err))
        
        console.log(users)
        return users
    }

    static async followUser(data) {
        const array = await fetch(`${this.baseUrl}users/follow/`, {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        return array
    }

    static async likePost(data) {
        const array = await fetch(`${this.baseUrl}likes/`, {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        return array
    }

    static async disLike(postId){
        const users = await fetch (`${this.baseUrl}likes/${postId}`, {
            method : "DELETE",
            headers: this.headers,     
        })    
        
        .then (res => res.json())
        .then (res => console.log(res))
        .catch (err => console.log(err))
        
        console.log(users)
        return users
    }

    static async unFollow(userId){
        const users = await fetch (`${this.baseUrl}users/unfollow/${userId}/`, {
            method : "DELETE",
            headers: this.headers,     
        })    
        
        .then (res => res.json())
        .then (res => console.log(res))
        .catch (err => console.log(err))
        
        console.log(users)
        return users
    }
}


