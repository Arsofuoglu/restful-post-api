const express = require('express')
const router = express.Router()

const { getFinalExport,updateLikeComments,newPost, posts, user,} = require('../tasks/task6_posts');
const orders = require('../tasks/task5_orders');
const bubbleCities = require('../tasks/task4_bubble')
const selectionCities = require('../tasks/task3_selection')
const popListWithSort = require('../tasks/task2_sort')
const departmentLists = require('../tasks/task1_reduce')

router.use(express.json()); // JSON verilerini parse etmek için gerekli(jsonu programın anlayacağı hale getir)


router.post("/post", (req, res, next) => {
    let newUserId = user.length
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
    updateLikeComments()
    res.json(user)
    next()
})

router.get("/:id", (req, res) => {
    switch (Number(req.params.id)) {
        case 8:
            return res.send(posts);
        case 7:
            return res.send(user);
        case 6:
            return res.send(getFinalExport());
        case 5:
            return res.send(orders);
        case 4:
            return res.send(bubbleCities);
        case 3:
            return res.send(selectionCities);
        case 2:
            return res.send(popListWithSort);
        case 1:
            return res.send(departmentLists);
        default:
            return res.send("Invalid Id");


    }
}
)


module.exports = router;
