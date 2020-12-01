import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const PORT = process.env.PORT || 8000
const app = express()

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on localhost port ${PORT}`))