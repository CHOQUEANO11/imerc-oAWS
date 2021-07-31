module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('turma', {
      id: {
        type: Sequelize.INTEGER,
        allonNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_local: {
        type: Sequelize.INTEGER,
        allonNull: false,
        references: { model: 'local', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      denominacao: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      id_professor: {
        type: Sequelize.INTEGER,
        allonNull: false,
        references: { model: 'professor', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      vagas: {
        type: Sequelize.INTEGER,
        allonNull: false,
      },
      duracao_aula: {
        type: Sequelize.STRING,
        allonNull: false,
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allonNull: false,
      },
      intervalo: {
        type: Sequelize.STRING,
        allonNull: false,
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
    await queryInterface.dropTable('turma');
  },
};
