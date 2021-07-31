/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unreachable */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import User from '../models/User';

require('dotenv').config();

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user !== undefined) {
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user.id }, process.env.APP_SECRET, {
          expiresIn: '12h',
        });

        const data = {
          id: user.id,
          email: user.email,
          token,
        };

        return res.json(data);
      }
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(404).json({ message: 'User not found' });
  }
}

export default new SessionController();
