import express from 'express'
import bodyParse from 'body-parser'
import userRouter from './routes/userRouter.js'
import produtoRouter from './routes/produtoRouter.js'
import {PORT} from './config.js'


const api = express()


//converte toda requisição com body json para objeto no req.body
api.use(bodyParser.json())


//cria uma rota get na raiz
api.get('/', (req, res) => {
    res.json({message: "Bem-vindo a nossa API"})
})

api.use('/user', userRouter)
api.use('/produto', produtoRouter)

//faz o servidor rodar
api.listen(3000, () => {
    console.log('Servidor rodando na porta 3000. http://localhost:3000')
})