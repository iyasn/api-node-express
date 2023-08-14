import express from 'express'
import userRouter from './routes/userRouter.js'
import produtoRouter from './routes/produtoRouter.js'


const api = express()

//cria uma rota getna raiz
api.get('/', (req, res) => {
    res.json({message: "Bem-vindo a nossa API"})
})

api.use('/user', userRouter)
api.use('/produto', produtoRouter)

//faz o servidor rodar
api.listen(3000, () => {
    console.log('Servidor rodando na porta 3000. http://localhost:3000')
})