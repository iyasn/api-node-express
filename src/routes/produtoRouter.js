import express from 'express'
import getProduto from '../controllers/produto/getProduto'

const router = express.Router()

router.get('/', getProduto)

router.post('/', (req, res) => {
    res.json({message: "metodo post"})
})

router.put('/', (req, res) => {
    res.json({message: "metodo put"})
})

router.delete('/', (req, res) => {
    res.json({message: "metodo delete"})
})

export default router