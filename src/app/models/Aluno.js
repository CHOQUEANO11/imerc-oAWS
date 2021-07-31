import { Model, DataTypes } from 'sequelize';

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        data_nascimento: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        sexo: DataTypes.STRING,
        gravidez: DataTypes.STRING,
        doenca_cronica: DataTypes.STRING,
        medicamento_continuo: DataTypes.STRING,
        doenca_hereditaria: DataTypes.STRING,
        pressao_alta: DataTypes.STRING,
        peso: DataTypes.STRING,
        altura: DataTypes.INTEGER,
        ativo: DataTypes.BOOLEAN,
        password: DataTypes.STRING,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'aluno',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'id_usuario',
      targetKey: 'id',
      as: 'users',
    });
    this.belongsTo(models.Proposito, {
      foreignKey: 'id_proposito',
    });
  }
}
module.exports = Aluno;
