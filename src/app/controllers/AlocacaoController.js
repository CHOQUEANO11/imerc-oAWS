/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import Alocacao from '../models/Alocacao';
import Aluno from '../models/Aluno';
import Agenda from '../models/Agenda';
import Turma from '../models/Turma';

class AlocacaoController {
  async index(req, res) {
    const alocs = await Alocacao.findAll({
      include: [
        {
          model: Aluno,
          atributes: ['nome', 'id_aluno'],
        },
        {
          model: Agenda,
          atributes: ['nome', 'id_agenda'],
        },
        {
          model: Turma,
          atributes: ['denominacao', 'id_turma'],
        },
      ],
    });

    return res.json(alocs);
  }

  async store(req, res) {
    const { id_aluno, id_agenda, status, id_turma } = req.body;
    // if (id_aluno) {
    //   res.status(302).json({ message: 'Student already enrolled' });
    // }

    const aloc = await Alocacao.create({
      id_aluno,
      id_agenda,
      id_turma,
      status,
    });

    return res.json(aloc);
  }

  async show(req, res) {
    const response = await Alocacao.findOne({
      where: { id: req.params.id },
    });

    return res.json(response);
  }

  async update(req, res) {
    const { id_aluno, id_agenda, id_turma, status } = req.body;
    const { id } = req.params;

    const aloc = await Alocacao.findOne({
      where: { id },
    });

    const response = await aloc.update({
      id_aluno,
      id_agenda,
      id_turma,
      status,
    });

    return res.json(response);
  }

  async delete(req, res) {
    const { id } = req.params;

    const deletedAloc = await Alocacao.destroy({ where: { id } });

    return res.json(deletedAloc);
  }
}

export default new AlocacaoController();
