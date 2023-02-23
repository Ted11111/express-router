const express = require("express")
const router = express.Router()
const {check, validationResult} = require("express-validator");



// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

router.get("/", (req, res) => {
    res.json(users)
})

router.get("/user/:id", (req, res) => {
    const user = users[req.params.id - 1]
    res.json(user)
})

// Part 2
router.use(express.json())
router.post("/", [check("name").not().isEmpty().trim()], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({error: errors.array()})
    }
    else{
        const userInfo = req.body
        users.push({"name": userInfo.name, "age": userInfo.age})
        res.json(users)
    }
})
router.put("/:id", (req, res) => {
    const userInfo = req.body
    users[req.params.id - 1] = userInfo
    res.json(users)
})
router.delete("/:id", (req, res) => {
    users.splice(req.params.id - 1, 1)
    res.json(users)
})


module.exports = router
