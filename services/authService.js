const apiClientBase = require('../config/apiClientBase');

const login = async (username, password) => {
    try {
        const apiClient = apiClientBase.getClient();
        await apiClient.post('/auth/login', { username, password });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    login
};
