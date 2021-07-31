import { Model, DataTypes } from 'sequelize';

class Agenda extends Model {
  static init(sequelize) {
    super.init(
      {
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'agenda',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Turma, {
      foreignKey: 'id_turma',
    });
    // this.belongsTo(models.Agenda, {
    //   foreignKey: 'id_agenda',
    //   targetKey: 'id',
    //   as: 'agenda',
    // });
  }
}
module.exports = Agenda;
