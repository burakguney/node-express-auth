var express = require('express');
var authService = require('../services/authService');
var router = express.Router();

router.get("/login", async (req, res, next) => {
    res.render("login", { message: "" })
});

router.post("/login", async (req, res, next) => {
    try {
        const { username, password } = req.body
        await authService.login(username, password);
        req.session.username = username;
        req.session.password = password;
        res.redirect("/")
    } catch (error) {
        res.render("login", { message: "Yanlış kullanıcı adı veya parola." })
    }
});

router.get("/logout", async (req, res, next) => {
    req.session.destroy()
    res.redirect("/login")
});

module.exports = router;
