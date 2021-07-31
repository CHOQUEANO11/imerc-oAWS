/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import Proposito from '../models/Proposito';

class PropositoController {
  async index(req, res) {
    const props = await Proposito.findAll();

    return res.json(props);
  }

  async store(req, res) {
    const { denominacao } = req.body;

    const prop = await Proposito.create({ denominacao });

    return res.json(prop);
  }

  async show(req, res) {
    const response = await Proposito.findOne({
      where: { id: req.params.id },
    });

    return res.json(response);
  }

  async update(req, res) {
    const { denominacao } = req.body;
    const { id } = req.params;

    const teather = await Proposito.findOne({
      where: { id },
    });

    const response = await teather.update({
      denominacao,
    });

    return res.json(response);
  }

  async delete(req, res) {
    const { id } = req.params;

    const deleted = await Proposito.destroy({ where: { id } });

    return res.json(deleted);
  }
}

export default new PropositoController();
