import { Model, DataTypes } from 'sequelize';

class Alocacao extends Model {
  static init(sequelize) {
    super.init(
      {
        status: DataTypes.STRING,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'alocacao',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Aluno, {
      foreignKey: 'id_aluno',
    });
    this.belongsTo(models.Agenda, {
      foreignKey: 'id_agenda',
      // targetKey: 'id',
      // as: 'agenda',
    });
    this.belongsTo(models.Turma, {
      foreignKey: 'id_turma',
      //   // targetKey: 'id',
      //   // as: 'turma',
    });
  }
}
module.exports = Alocacao;
