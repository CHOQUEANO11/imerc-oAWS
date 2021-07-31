/* eslint-disable class-methods-use-this */
import Aluno from '../models/Aluno';

class AlunoEmailController {
  async show(req, res) {
    const response = await Aluno.findOne({
      where: { email: req.params.email },
    });
    return res.json(response);
  }
}

export default new AlunoEmailController();
