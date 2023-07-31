const express = require("express")
const app = express()

app.get("/", function (req, res) {
    res.send("Hello Vicky")
});

app.get("/test", function (req, res) {
    res.send("Testing Vicky")
});

app.listen(process.env.PORT || 5000);
module.exports = app;