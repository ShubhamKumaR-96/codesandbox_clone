import express from "express"

import apiRoutes from './routes/index.js'
import { PORT } from "./config/serverConfig.js"
import cors from 'cors'

const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use('/api',apiRoutes)

app.get('/test',(req , res)=>{
    res.json({
        msg:"Testing ....."
    })
})

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})