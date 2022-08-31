class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint)
            .then(response => response.json());
    }

    getAuthorized(endpoint, token) {
        return fetch(this.baseURL + endpoint, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            redirect: 'follow'
        }).then(response => response.json());
    }

    put(endpoint, body) {
        return this._send("put", endpoint, body);
    }

    putAuthorized(endpoint, body, token) {
        return this._send("put", endpoint, body, {Authorization: `Bearer ${token}`});
    }

    post(endpoint, body) {
        return this._send("post", endpoint, body);
    }

    postAuthorized(endpoint, body, token) {
        return this._send("post", endpoint, body, {Authorization: `Bearer ${token}`});
    }

    delete(endpoint, body) {
        return this._send("delete", endpoint, body);
    }

    deleteAuthorized(endpoint, body, token) {
        return this._send("delete", endpoint, body, {Authorization: `Bearer ${token}`});
    }

    _send(method, endpoint, body = null, headers = null) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            body: JSON.stringify(body),
            redirect: 'follow'
        }).then(response => {
            if (!response.ok) {
                throw new Error(response.status.toString());
            }

            return response.json();
        })
    }
}

export default FetchWrapper;