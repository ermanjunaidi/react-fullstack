require("dotenv").config();
const express = require("express");

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.send("erman junaidi")
});

app.post("/name", (req, res) => {
    // if (req.body.name) {
    //     return res.json({ name: req.body.name })
    // } else {
    //     return res.status(400).json({ error: " tidak ada nama provider" })
    // }
    req.body.name ? res.json({ name: req.body.name }) : res.status(400).json({ error: "tidak ada nama provider" })
})

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
})