const express = require('express')
const { urlencoded } = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan("dev"))
app.use(express.json())
app.use(urlencoded({ extended: false }));
app.use(require('./Routes/index.js'))

app.listen(4000, () => {
    console.log("run on port 4000");
})
