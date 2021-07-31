/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import * as bcrypt from 'bcryptjs';
import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  async store(req, res) {
    const { email, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 8);

    const user = await User.create({ email, password: passwordHash });

    return res.json(user);
  }

  async show(req, res) {
    const response = await User.findOne({
      where: { id: req.params.id },
    });

    return res.json(response);
  }

  async update(req, res) {
    const { email, password } = req.body;
    const { id } = req.params;

    const user = await User.findOne({
      where: { id },
    });

    const response = await user.update({
      email,
      password,
    });

    return res.json(response);
  }

  async delete(req, res) {
    const { id } = req.params;

    const deletedUser = await User.destroy({ where: { id } });

    return res.json(deletedUser);
  }
}

// $2a$08$C5kvwWXofzSSDeay71B8NeK.4RDaOn9y5PcAJklUDfj0nXWw64zU.

export default new UserController();
