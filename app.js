// Bring in Express code
const express = require('express')

// Bring in body parser so that we can parse the POST request body
const bodyParser = require('body-parser')

const app = express()
const port = 3000

// The following 2 lines are called middleware and they modify the request before it gets to our routes. Body parser is required so that we can properly access the values in the request body (req.body)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})