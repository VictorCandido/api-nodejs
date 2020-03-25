module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        nomeUsuario: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });

    return Usuario;
}