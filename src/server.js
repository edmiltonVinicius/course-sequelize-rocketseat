const express = require('express')
const app = express()
const port = process.env.PORT || 8080

require('./database/index.js')

const routes = require('./routes')

app.use(express.json())
app.use(routes)

app.listen(port, () => console.log('Server Node runniing in port ' + port))