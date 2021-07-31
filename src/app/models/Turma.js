import { Model, DataTypes } from 'sequelize';

class Turma extends Model {
  static init(sequelize) {
    super.init(
      {
        denominacao: DataTypes.STRING,
        descricao: DataTypes.STRING,
        vagas: DataTypes.INTEGER,
        duracao_aula: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN,
        intervalo: DataTypes.STRING,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'turma',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Local, {
      foreignKey: 'id_local',
      targetKey: 'id',
      as: 'local',
    });
    this.belongsTo(models.Professor, {
      foreignKey: 'id_professor',
    });
    // this.belongsTo(models.Alocacao, {
    //   // foreignKey: 'id_alocacao',
    //   targetKey: 'id',
    // });
  }
}
module.exports = Turma;
