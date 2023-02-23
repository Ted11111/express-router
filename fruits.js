const express = require("express")
const router = express.Router()

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

router.get("/", (req, res) => {
    res.json(fruits)
})

router.get("/:id", (req, res) => {
    const fruit = fruits[req.params.id - 1]
    res.json(fruit)
})

router.use(express.json())
router.post("/", (req, res) => {
    const userInfo = req.body
    fruits.push(userInfo)
    res.json(fruits)
})
router.put("/:id", (req, res) => {
    const userInfo = req.body
    fruits[req.params.id - 1] = userInfo
    res.json(fruits)
})
router.delete("/:id", (req, res) => {
    fruits.splice(req.params.id - 1, 1)
    res.json(fruits)
})


module.exports = router