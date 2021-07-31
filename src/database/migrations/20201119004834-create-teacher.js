module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('professor', {
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
      email: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      especialidade: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      ativo: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('professor');
  },
};
