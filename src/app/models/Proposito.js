import { Model, DataTypes } from 'sequelize';

class Proposito extends Model {
  static init(sequelize) {
    super.init(
      {
        denominacao: DataTypes.STRING,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'proposito',
      }
    );
  }
}
module.exports = Proposito;
