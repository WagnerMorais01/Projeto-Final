// importa o json-server e o bcrypt da pasta node_modules
import * as jsonServer from 'json-server'
import * as bodyParser from 'body-parser'
import * as bcrypt from 'bcrypt'
import { JsonServerRouter } from 'json-server'

// declara a estrutura do banco que está sendo usado pelo json-server
interface CustomDB {
  users: { id: number; username: string; password: string }[];
}

// cria o servidor que vai rodar na porta 5174 e lidar com os requests
const app = jsonServer.create()
// cria um router para lidar com as requisições padrão do json-server
const router = jsonServer.router('db.json') as JsonServerRouter<CustomDB>
// cria um middleware que trata necessidades comuns de uma API
const middlewares = jsonServer.defaults()

// adiciona o middleware e o parser de json ao servidor
app.use(middlewares)
app.use(bodyParser.json())

// cria um endpoint para o login
app.post('/api/v1/login', (request, response) => {
  // pega os dados do request
  const { username, password } = request.body
  // busca os usuários no banco
  const users = router.db.get('users').value()
  // busca o usuário com o username igual ao do request
  const user = users.find((row) => row.username === username)
  // verifica se o usuário existe e se a senha está correta
  if (user && bcrypt.compareSync(password, user.password)) {
    response
      .status(200)
      .json({ status: 'success', data: user })
    return
  }
  // se não, retorna um erro
  response
    .status(401)
    .json({ status: 'error', message: 'Invalid credentials' })
})

// cria um endpoint para listar os usuários
app.get('/api/v1/users', (request, response) => {
  const users = router.db.get('users').value()
  response
    .status(200)
    .json({ status: 'success', data: users })
})

// registra o middleware das rotas padrão do json-server
app.use(router)

// inicia o servidor na porta 5174
app.listen(5174, () => console.log('O servidor está rodando na porta http://localhost:5174'))
