/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import Aluno from '../models/Aluno';
import Proposito from '../models/Proposito';
// eslint-disable-next-line import/order
import * as bcrypt from 'bcryptjs';

class AlunoController {
  async index(req, res) {
    const aluno = await Aluno.findAll({
      include: [
        {
          model: Proposito,
          atributes: ['denominacao', 'id_proposito'],
        },
      ],
    });

    return res.json(aluno);
  }

  async store(req, res) {
    const {
      nome,
      email,
      cpf,
      data_nascimento,
      telefone,
      sexo,
      gravidez,
      id_proposito,
      doenca_cronica,
      medicamento_continuo,
      doenca_hereditaria,
      pressao_alta,
      peso,
      altura,
      ativo,
      password,
      id_usuario,
    } = req.body;
    const passwordHash = await bcrypt.hash(password, 8);
    const aluno = await Aluno.create({
      nome,
      email,
      cpf,
      data_nascimento,
      telefone,
      sexo,
      gravidez,
      id_proposito,
      doenca_cronica,
      medicamento_continuo,
      doenca_hereditaria,
      pressao_alta,
      peso,
      altura,
      password: passwordHash,
      ativo,
      id_usuario,
    });

    return res.json(aluno);
  }

  async show(req, res) {
    const response = await Aluno.findOne({
      where: { id: req.params.id },
    });

    return res.json(response);
  }

  async update(req, res) {
    const {
      nome,
      email,
      cpf,
      data_nascimento,
      telefone,
      sexo,
      gravidez,
      id_proposito,
      doenca_cronica,
      medicamento_continuo,
      doenca_hereditaria,
      pressao_alta,
      peso,
      altura,
      ativo,
      password,
      id_usuario,
    } = req.body;
    const { id } = req.params;

    const studant = await Aluno.findOne({
      where: { id },
    });

    const response = await studant.update({
      nome,
      email,
      cpf,
      data_nascimento,
      telefone,
      sexo,
      gravidez,
      id_proposito,
      doenca_cronica,
      medicamento_continuo,
      doenca_hereditaria,
      pressao_alta,
      peso,
      altura,
      ativo,
      password,
      id_usuario,
    });

    return res.json(response);
  }

  async delete(req, res) {
    const { id } = req.params;

    const deleted = await Aluno.destroy({ where: { id } });

    return res.json(deleted);
  }
}

export default new AlunoController();
