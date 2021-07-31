import { Model, DataTypes } from 'sequelize';

class Local extends Model {
  static init(sequelize) {
    super.init(
      {
        denominacao: DataTypes.STRING,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'local',
      }
    );
  }
}
module.exports = Local;
