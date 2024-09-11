const express = require('express')
const router = express.Router()

const finalPosts = require('../tasks/task6_posts');
const finalOrders = require('../tasks/task5_orders');
const finalPostsWithHtml = finalPosts.replace(/\n/g, '<br>');
const bubbleCities = require('../tasks/task4_bubble')
const selectionCities = require('../tasks/task3_selection')
const popListWithSort = require('../tasks/task2_sort')
const departmentLists = require('../tasks/task1_reduce')


//bu getleri bir router altında birleştir!!!!
router.get("/:id", (req, res) => {
    if(Number(req.params.id)===1){
        res.send(departmentLists);
    }
    if(Number(req.params.id)===2){
        res.send(popListWithSort);
    }
    if(Number(req.params.id)===3){
        res.send(selectionCities);
    }
    if(Number(req.params.id)===4){
        res.send(bubbleCities);
    }
    if(Number(req.params.id)===5){
        res.send(finalOrders);
    }
    if(Number(req.params.id)===6){
        res.send(finalPostsWithHtml);
    }
    else{       
        res.send("Invalid Id");
    }
})

module.exports = router