module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "secret",
    api: process.env.NODE_ENV === "production" ? "https://e-commerc3.herokuapp.com/" : "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://e-commerc3.herokuapp.com/" : "http://localhost:8000"
};