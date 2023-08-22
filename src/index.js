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



app.get('/', (req, res) => res.status(200).send('Listando usuários'));

app.get('/usuario/:id', (req, res) => {
    const id = req.params.id;
    res.send('Usuário:' + id);
    
});

app.post('/usuario', (req, res) => {
    const infos = req.body;
    
    res.json(infos);
});

app.put('/usuario/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json({ id, ...data });
});

app.delete('/usuario/:id', (req, res) => {
    const id = req.params.id;
    res.send('Excluindo usuário' + id);
});


