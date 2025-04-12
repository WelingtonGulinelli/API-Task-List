import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth.js';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    //verifica se o email existe
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    //verifica se a senha está correta
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
