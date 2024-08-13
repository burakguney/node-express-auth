const apiClientBase = require('../config/apiClientBase');

const authMiddleware = (req, res, next) => {
    const { username, password } = req.session;

    if (req.path.startsWith('/admin') && (!username || !password)) {
        return res.redirect('/login');
    }

    apiClientBase.setCredentials(username, password);

    next();
};

module.exports = authMiddleware;