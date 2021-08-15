module.exports = {
    dbTest: "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASS+"@e-commerce.aufqj.mongodb.net/"+process.env.DB_NAME_TEST+"?retryWrites=true&w=majority",
    dbProduction: "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASS+"@e-commerce.aufqj.mongodb.net/"+process.env.DB_NAME_PROD+"?retryWrites=true&w=majority"
};