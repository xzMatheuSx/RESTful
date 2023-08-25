const express = require('express');
const cors = require('cors');

const listenPort = 3001;
const app = express()
app.use(cors({
    origin:'*'
}),express.json());

app.listen(listenPort, () => {
    console.log('API rodando na porta 3001 on http://localhost:'+ listenPort);
});



app.get('/', (req, res) => {
    try {
      res.status(200).send('Listando usuários');
    } catch (err) {
      res.status(404).json({ error: 'Erro ao listar usuários.' });
    }
  });
  
  app.get('/usuario/:id', (req, res) => {
    try {
      const id = req.params.id;
      res.send('Usuário: ' + id);
    } catch (err) {
      res.status(404).json({ error: 'Erro ao buscar usuário.' });
    }
  });
  
  app.post('/usuario', (req, res) => {
    try {
      const infoUsuario = req.body;
      res.json(infoUsuario);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar usuário.' });
    }
  });
  
  app.put('/usuario/:id', (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      res.json({ id, ...data });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar usuário.' });
    }
  });
  
  app.delete('/usuario/:id', (req, res) => {
    try {
      const id = req.params.id;
      res.send('Excluindo usuário ' + id);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao excluir usuário.' });
    }
  });
  

