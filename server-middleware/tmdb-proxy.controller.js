import axios from 'axios'

const express = require('express')
require('dotenv').config()

const app = express()

app.use(express.json())
app.get('*', async (req, res) => {
  try {
    const base = 'https://api.themoviedb.org/3'
    const action = req.query.action
    const query = req.query
    delete query.action
    query.api_key = process.env.APIKEY
    const url = `${base}/${action}`
    if (!action) throw new Error('Unknown action')
    const result = await axios.get(url, { params: query })
    res.status(200).json(result.data)
  } catch (error) {
    res.status(400).json({
      message: error.response
        ? error.response.data.status_message
        : error.message,
      errors: error.response ? error.response.data.errors : [],
    })
  }
})

module.exports = app
