const PORT = 5000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
