module.exports = (app) => {
    const express = require('express');
    const router = express.Router();

    const userContoller = require('./controller/user.controller');

    // Criar usuário
    router.post('/', userContoller.create);

    // Retornar Todos os usuários
    router.get('/', userContoller.findAll);

    // Retornar usuário com id
    router.get('/:id', userContoller.findOne);

    // Atualiza usuário
    router.put('/:id', userContoller.update);

    // Deleta usuário
    router.delete('/:id', userContoller.delete);

    app.use('/api/usuarios', router)
}