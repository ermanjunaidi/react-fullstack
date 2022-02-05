const express = require("express")
const router = express.Router()
const USer = require("../models/user")
const bcrypt = require("bcryptjs")

// @route GET /api/auth/test
// @desc Untuk mengetes route berjalan apa tidak
// @access Public
router.get("/test", (req, res) => {
    res.send("auth route bekerja")
})

// @route POST /api/auth/register
// @desc  Create new user
// @access Public
router.post("/register", async (req, res) => {
    try {

        // hash password
        const hashedPassword = await bcrypt.hash(req.body.password, 12)
        const newUSer = new USer({
            email: req.body.email,
            password: hashedPassword,
            name: req.body.name
        })

        // simpan di database
        const savedUSer = await newUSer.save()
        // mengembalikan user baru
        return res.json(savedUSer)
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message)
    }

})

module.exports = router
