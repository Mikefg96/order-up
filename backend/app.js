import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8000
const app = express()

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on localhost port ${PORT}`))