import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa en la bd')
} catch (error) {
    console.log(`el error es : ${error}`)
}

app.get('/', (req, res) => {
    res.send('HOLA MUNDO')
})

app.listen(8001, () => {
    console.log('server UP running in http://localhost:8001')
})