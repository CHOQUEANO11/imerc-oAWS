import { Model, DataTypes } from 'sequelize';

class Professor extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        cpf: DataTypes.STRING,
        especialidade: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'professor',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'id_usuario',
      targetKey: 'id',
      as: 'users',
    });
  }
}
module.exports = Professor;
