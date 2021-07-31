/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import Turma from '../models/Turma';
import Professor from '../models/Professor';

class TurmaController {
  async index(req, res) {
    const turmas = await Turma.findAll({
      include: [
        {
          model: Professor,
          atributes: ['nome', 'id_professor'],
        },
      ],
    });

    return res.json(turmas);
  }

  async store(req, res) {
    const { id_professor } = req.params;
    const {
      id_local,
      denominacao,
      descricao,
      vagas,
      duracao_aula,
      ativo,
      intervalo,
    } = req.body;

    const turma = await Turma.create({
      id_local,
      denominacao,
      descricao,
      id_professor,
      vagas,
      duracao_aula,
      ativo,
      intervalo,
    });

    return res.json(turma);
  }

  async show(req, res) {
    const response = await Turma.findOne({
      where: { id: req.params.id },
    });

    return res.json(response);
  }

  async update(req, res) {
    const {
      id_local,
      denominacao,
      descricao,
      id_professor,
      vagas,
      duracao_aula,
      ativo,
      intervalo,
    } = req.body;
    const { id } = req.params;

    const clas = await Turma.findOne({
      where: { id },
    });

    const response = await clas.update({
      id_local,
      denominacao,
      descricao,
      id_professor,
      vagas,
      duracao_aula,
      ativo,
      intervalo,
    });

    return res.json(response);
  }

  async delete(req, res) {
    const { id } = req.params;

    const deleted = await Turma.destroy({ where: { id } });

    return res.json(deleted);
  }
}

export default new TurmaController();
