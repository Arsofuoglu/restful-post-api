const express = require('express')
const router = express.Router()

const {findMostLikeUser,findMostCommentUser,newPost, posts, user, finalExport } = require('../tasks/task6_posts');
const orders = require('../tasks/task5_orders');
const bubbleCities = require('../tasks/task4_bubble')
const selectionCities = require('../tasks/task3_selection')
const popListWithSort = require('../tasks/task2_sort')
const departmentLists = require('../tasks/task1_reduce')

router.use(express.json()); // JSON verilerini parse etmek için gerekli(jsonu programın anlayacağı hale getir)

let newUserId = user.length
router.post("/post", (req, res, next) => {

    for (let i = 0; i < req.body.user.length; i++) {
        let newUser = req.body.user[i]
        let newKey = `user${newUserId}`;
        let newObject = { [newKey]: newUser };
        user.push(newObject);
        newUserId++
    }
    for (let i = 0; i < req.body.user.length; i++) {
        let newPosts = newPost(); 
        posts.push(newPosts);
    }
    res.json(user)
    next()
})

router.get("/:id", (req, res) => {
    switch (Number(req.params.id)){
    case 1:
        return res.send(departmentLists);
    case 2:
        return res.send(popListWithSort);  
    case 3:
        return res.send(selectionCities);  
    case 4:
        return res.send(bubbleCities);
    case 5:
        return res.send(orders);
    case 6:
        return res.json(finalExport);
    case 7:
        return res.send(user);
    case 8:
        return res.send(posts);
    default:
        return res.send("Invalid Id");
    }
    }
)


module.exports = router;
