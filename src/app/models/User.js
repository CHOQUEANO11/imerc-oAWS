import { Model, DataTypes } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'users',
      }
      // {
      //   sequelize,
      //   freezeTableName: true,
      //   tableName: 'professor',
      // }
    );
  }

  static associate(models) {
    this.belongsTo(models.Aluno, {
      foreignKey: 'id',
      targetKey: 'id',
      // as: 'users',
    });
    this.belongsTo(models.Professor, {
      foreignKey: 'id',
      targetKey: 'id',
      // as: 'users',
    });
  }
}
module.exports = User;
