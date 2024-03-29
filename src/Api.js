const responseHandler = res => {
    return res.ok ? res.json() : res.statusText;
}

class Api {
    constructor({path, token}) {
        this.path = path;
        this.token = token;
    }
    getProductList() {
        return fetch(`${this.path}/products`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    getSingleProduct(id) {
        return fetch(`${this.path}/products/${id}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    setProductLike(id, isLike) {
        return fetch(`${this.path}/products/likes/${id}`, {
            method: isLike ? "delete" : "put",
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    signup(body) {
        return fetch(`${this.path}/signup`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }
    login(body) {
        return fetch(`${this.path}/signin`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }
}

const config = {
    path: "https://api.react-learning.ru",
    token: ""
}

const api = new Api(config);

export default api;