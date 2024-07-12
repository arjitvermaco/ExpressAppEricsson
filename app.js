import express from 'express'
import router from './routes/tasks.js'
const app = express()


app.use('/tasks',router)

const start = async () => {
    try {
        app.listen(5000, () => {
            console.log('Server is running on port 5000')
        })
    } catch (err) {
        console.log(err)
    }
}

start()
