module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('local', {
      id: {
        type: Sequelize.INTEGER,
        allonNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      denominacao: {
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
    await queryInterface.dropTable('local');
  },
};
