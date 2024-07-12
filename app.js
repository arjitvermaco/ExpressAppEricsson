import express from 'express'
import router from './routes/tasks.js'
import connectDB from './db/connect.js'
const app = express()

app.use(express.json())
app.use('/tasks',router)

const start = async () => {
    try {

        await connectDB()

        app.listen(5000, () => {
            console.log('Server is running on port 5000')
        })
    } catch (err) {
        console.log(err)
    }
}

start()
