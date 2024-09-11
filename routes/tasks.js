const express = require('express')
const router = express.Router()

const finalPosts = require('../tasks/task6_posts');
const finalOrders = require('../tasks/task5_orders');
const finalPostsWithHtml = finalPosts.replace(/\n/g, '<br>');
const bubbleCities = require('../tasks/task4_bubble')
const selectionCities = require('../tasks/task3_selection')
const popListWithSort = require('../tasks/task2_sort')
const departmentLists = require('../tasks/task1_reduce')

router.get("/", (req, res) => {
    res.send("This is tasks tab");
})
router.get("/6", (req, res) => {
    res.send(finalPostsWithHtml);
})

router.get("/5", (req, res) => {
    res.send(finalOrders);
})

router.get("/4", (req, res) => {
    res.send(bubbleCities);
})

router.get("/3", (req, res) => {
    res.send(selectionCities);
})

router.get("/2", (req, res) => {
    res.send(popListWithSort);
})

router.get("/1", (req, res) => {
    res.send(departmentLists);
})

module.exports = router