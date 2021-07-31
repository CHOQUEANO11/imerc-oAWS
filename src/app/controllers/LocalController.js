/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import Local from '../models/Local';

class LocalController {
  async index(req, res) {
    const locals = await Local.findAll();

    return res.json(locals);
  }

  async store(req, res) {
    const { denominacao } = req.body;

    const local = await Local.create({ denominacao });

    return res.json(local);
  }

  async show(req, res) {
    const response = await Local.findOne({
      where: { id: req.params.id },
    });

    return res.json(response);
  }

  async update(req, res) {
    const { denominacao } = req.body;
    const { id } = req.params;

    const teather = await Local.findOne({
      where: { id },
    });

    const response = await teather.update({
      denominacao,
    });

    return res.json(response);
  }

  async delete(req, res) {
    const { id } = req.params;

    const deleted = await Local.destroy({ where: { id } });

    return res.json(deleted);
  }
}

export default new LocalController();
