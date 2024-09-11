const express = require('express')
const app = express()

const actorRouter = require('./routes/actors')
app.use('/actors',actorRouter)

const tasksRouter = require('./routes/tasks')
app.use('/tasks',tasksRouter)

app.use(express.json()); // JSON verilerini parse etmek için gerekli(jsonu programın anlayacağı hale getir)

app.listen(3000, (req, res) => {
    console.log(`server is running on 3000`)
})


