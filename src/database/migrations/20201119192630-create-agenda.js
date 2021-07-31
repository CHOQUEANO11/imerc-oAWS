module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('agenda', {
      id: {
        type: Sequelize.INTEGER,
        allonNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      data_inicio: {
        type: Sequelize.DATE,
        allonNull: false,
        unique: true,
      },
      data_fim: {
        type: Sequelize.DATE,
        allonNull: false,
      },
      id_turma: {
        type: Sequelize.INTEGER,
        allonNull: false,
        references: { model: 'turma', key: 'id' },
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
    await queryInterface.dropTable('agenda');
  },
};
