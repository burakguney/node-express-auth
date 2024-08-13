const axios = require('axios');

class ApiClientBase {
    constructor() {
        this.token = null;
    }

    setCredentials(username, password) {
        if (username && password) {
            this.token = Buffer.from(`${username}:${password}`).toString('base64');
        } else {
            this.token = null;
        }
    }

    getClient() {
        return axios.create({
            baseURL: 'http://localhost:8080/api',
            headers: this.token ? { 'Authorization': `Basic ${this.token}` } : {}
        });
    }
}

module.exports = new ApiClientBase();
