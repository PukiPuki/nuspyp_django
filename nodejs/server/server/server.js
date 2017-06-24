import express from 'express'
import a from './auth/index'

const app = express()

app.get('/api', (req, res) => {
    res.send({
      message: a
    })
})
export default app
