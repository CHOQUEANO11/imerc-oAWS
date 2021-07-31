/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import Agenda from '../models/Agenda';
import Turma from '../models/Turma';

class AgendaController {
  async index(req, res) {
    const agendas = await Agenda.findAll({
      include: [
        {
          model: Turma,
          atributes: ['denominacao', 'id_turma'],
        },
      ],
    });

    return res.json(agendas);
  }

  async store(req, res) {
    const { data_inicio, data_fim, id_turma } = req.body;

    const agenda = await Agenda.create({
      data_inicio,
      data_fim,
      id_turma,
    });

    return res.json(agenda);
  }

  async show(req, res) {
    const response = await Agenda.findOne({
      where: { id: req.params.id },
    });

    return res.json(response);
  }

  async update(req, res) {
    const { data_inicio, data_fim, id_turma } = req.body;
    const { id } = req.params;

    const agend = await Agenda.findOne({
      where: { id },
    });

    const response = await agend.update({
      data_inicio,
      data_fim,
      id_turma,
    });

    return res.json(response);
  }

  async delete(req, res) {
    const { id } = req.params;

    const deletedAgen = await Agenda.destroy({ where: { id } });

    return res.json(deletedAgen);
  }
}

export default new AgendaController();
