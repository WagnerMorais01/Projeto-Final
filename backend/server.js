// importa o json-server e o bcrypt da pasta node_modules
const server = require('json-server')
const bcrypt = require('bcrypt')
const knex = require('knex')

// cria o servidor que vai rodar na porta 5174 e lidar com os requests
const app = server.create()
// cria um router para lidar com as requisições padrão do json-server
const router = server.router('db.json')
// cria um middleware que trata necessidades comuns de uma API
const middlewares = server.defaults()

// adiciona o middleware e o parser de json ao servidor
app.use(middlewares)
app.use(server.bodyParser)

const queryBuilder = knex({
  client: 'mysql2',
  connection: {
    host: 'devi.tools',
    port: 3360,
    database: 'database',
    user: 'root',
    password: 'root',
  }
})

// cria um endpoint para o login
app.post('/api/v1/login', async (request, response) => {
  // pega os dados do request
  const { username, password } = request.body
  // busca o usuário no banco
  const user = await queryBuilder
    .select('id', 'username', 'password')
    .from('users')
    .where('username', username)
    .first()

    // verifica se o usuário existe e se a senha está correta
  if (user && bcrypt.compareSync(password, user.password)) {
    const { id, username } = user
    response
      .status(200)
      .json({ status: 'success', data: { id, username } })
    return
  }
  // se não, retorna um erro
  response
    .status(401)
    .json({ status: 'error', message: 'Invalid credentials' })
})

// cria um endpoint para listar os usuários usando o json-server



// cria um endpoint para gerar o hash da senha
app.get('/api/v1/hash', (request, response) => {
  const { password } = request.query
  response
    .status(200)
    .json({ status: 'success', data: bcrypt.hashSync(password, 10) })
})

// cria um endpoint para criar um usuario
app.post('/api/v1/users', (request, response) => {
  const {username, password}=request.body;
  const hashedPassword = bcrypt.hashSync(password,10);

  //Construindo  meu novo usuario
  const newUser = {
    username,
    password:hashedPassword,
  }

  router.db.get('users').push(newUser).write();
  response.status(201).json({status:'success',data:newUser})

})
// registra o middleware das rotas padrão do json-server
app.use(router)

// inicia o servidor na porta 5174
app.listen(5174, () => console.log('O servidor está rodando na porta http://localhost:5174'))
