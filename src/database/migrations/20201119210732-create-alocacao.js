module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alocacao', {
      id: {
        type: Sequelize.INTEGER,
        allonNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_aluno: {
        type: Sequelize.INTEGER,
        allonNull: false,
        references: { model: 'aluno', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_agenda: {
        type: Sequelize.INTEGER,
        allonNull: false,
        references: { model: 'agenda', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_turma: {
        type: Sequelize.INTEGER,
        allonNull: false,
        references: { model: 'turma', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      status: {
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
    await queryInterface.dropTable('alocacao');
  },
};
