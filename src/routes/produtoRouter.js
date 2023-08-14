import express from 'express'

const router = express.Router()

api.get('/produto', (req, res) => {
    res.json({message: "Get produto"})
})

api.post('/produto', (req, res) => {
    res.json({message: "metodo post"})
})

api.put('/produto', (req, res) => {
    res.json({message: "metodo put"})
})

api.delete('/produto', (req, res) => {
    res.json({message: "metodo delete"})
})

export default router