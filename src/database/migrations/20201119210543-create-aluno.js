module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('aluno', {
      id: {
        type: Sequelize.INTEGER,
        allonNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allonNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      telefone: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      sexo: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      gravidez: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      id_proposito: {
        type: Sequelize.INTEGER,
        allonNull: false,
        references: { model: 'proposito', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      doenca_cronica: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      medicamento_continuo: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      doenca_hereditaria: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      pressao_alta: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      peso: {
        type: Sequelize.INTEGER,
        allonNull: false,
      },
      altura: {
        type: Sequelize.INTEGER,
        allonNull: false,
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allonNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allonNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allonNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allonNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('aluno');
  },
};
