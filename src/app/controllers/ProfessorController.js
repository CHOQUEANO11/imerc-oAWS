/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import Professor from '../models/Professor';

class ProfessorController {
  async index(req, res) {
    const prof = await Professor.findAll();
    console.log(prof);

    return res.json(prof);
  }

  async store(req, res) {
    const { nome, email, cpf, especialidade, ativo, id_usuario } = req.body;

    const prof = await Professor.create({
      nome,
      email,
      cpf,
      especialidade,
      ativo,
      id_usuario,
    });

    return res.json(prof);
  }

  async show(req, res) {
    const response = await Professor.findOne({
      where: { id: req.params.id },
    });

    return res.json(response);
  }

  async update(req, res) {
    const { nome, email, cpf, especialidade, ativo, id_usuario } = req.body;
    const { id } = req.params;

    const teather = await Professor.findOne({
      where: { id },
    });

    const response = await teather.update({
      nome,
      email,
      cpf,
      especialidade,
      ativo,
      id_usuario,
    });

    return res.json(response);
  }

  async delete(req, res) {
    const { id } = req.params;

    const deletedTeather = await Professor.destroy({ where: { id } });

    return res.json(deletedTeather);
  }
}

export default new ProfessorController();
