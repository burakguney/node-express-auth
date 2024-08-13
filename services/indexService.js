const apiClientBase = require('../config/apiClientBase');

const home = async () => {
    try {
        const apiClient = apiClientBase.getClient();
        const response = await apiClient.get('/hello');
        return response.data;
    } catch (error) {
        throw error;
    }
};

const admin = async () => {
    try {
        const apiClient = apiClientBase.getClient();
        const response = await apiClient.get('/admin');
        return response.data;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    home,
    admin
};
