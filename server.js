require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")

// import routes
const authRoute = require("./routes/auth")

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.get("/api", (req, res) => {
    res.send("react full stack course")
});

// app.post("/alamat", (req, res) => {
//     req.body.name ? res.json({ name: req.body.name }) : res.status(400).json({ error: "tidak ada nama provider" })
// })

app.use("/api/auth", authRoute)

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connect to database");

        app.listen(process.env.PORT, () => {
            console.log(`server Berjalan di Port ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })