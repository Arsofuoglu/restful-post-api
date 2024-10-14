const express = require('express')
const router = express.Router()

const data = require('../actorsData')

router.use(express.json());
//req.params url den belirlediğimiz değeri alıyor
//req.query ? nden sonra key:value şeklindeki değeri alıyor
//req.body post ve put metodlarıyla gönderilen isteğin body sini alıyoruz

router.get("/", (req, res) => {
    res.status(200).json(data)
})

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    console.log(id)
    let actorById = null
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            actorById = data[i]
            break;
        }
    }
    if (actorById !== null) {
        res.json(aktor)
    }
    else {
        res.status(404).send("Aktör bulunamadı")
    }
})

let nextId = 4;
router.post("/", (req, res) => {
    let newPerson = req.body;
    newPerson.id = nextId;
    nextId++;
    data.push(newPerson);
    res.status(201).json(newPerson);
});

module.exports = router