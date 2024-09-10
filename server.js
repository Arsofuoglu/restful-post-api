const path = require('path')
const express = require('express')
const app = express()
const finalPosts = require('./tasks/task6_posts');
const finalOrders = require('./tasks/task5_orders');
const finalPostsWithHtml = finalPosts.replace(/\n/g, '<br>');
const bubbleCities=require('./tasks/task4_bubble')
const selectionCities=require('./tasks/task3_selection')
const popListWithSort=require('./tasks/task2_sort')
const departmentLists=require('./tasks/task1_reduce')


app.set('view engine', 'ejs')

app.listen(3000, (req, res) => {
    console.log(`server is running on 3000`)
})

app.get("/tasks/6", (req, res) => {
    let result = finalPostsWithHtml;
    res.send(result);
})

app.get("/tasks/5", (req, res) => {
    let result = finalOrders;
    res.send(result);
})

app.get("/tasks/4", (req, res) => {
    let result = bubbleCities;
    res.send(result);
})

app.get("/tasks/3", (req, res) => {
    let result = selectionCities;
    res.send(result);
})

app.get("/tasks/2", (req, res) => {
    let result = popListWithSort;
    res.send(result);
})

app.get("/tasks/1", (req, res) => {
    let result = departmentLists;
    res.send(result);
})




