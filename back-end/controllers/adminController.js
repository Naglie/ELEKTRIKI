import Admin from '../models/admin.js';

export const Login = async (req, res) => {
   try {
      const user = await Admin.findAll({
         where: {
            username: req.body.username,
         },
      });
      //----------------bcrypt password
      const match = await bcrypt.compare(req.body.password, user[0].password);
      if (!match) return res.status(400).json({ msg: 'Wrong Password' });
      const userId = user[0].id;
      const name = user[0].name;
      const email = user[0].email;
      //jwt.sign создание токена-исп для аутентификации/авторизации пользователей
      const accessToken = jwt.sign(
         { userId, name, email },
         process.env.ACCESS_TOKEN_SECRET,
         {
            expiresIn: '15s',
         }
      );
      const refreshToken = jwt.sign(
         { userId, name, email },
         process.env.REFRESH_TOKEN_SECRET,
         {
            expiresIn: '1d',
         }
      );
      await Admin.update(
         { refresh_token: refreshToken },
         {
            where: {
               id: userId,
            },
         }
      );
      res.cookie('refreshToken', refreshToken, {
         httpOnly: true,
         maxAge: 24 * 60 * 60 * 1000,
      });
      res.json({ accessToken });
   } catch (error) {
      res.status(404).json({ msg: 'Email not found' });
   }
};

export const Logout = async (req, res) => {
   const refreshToken = req.cookies.refreshToken;
   if (!refreshToken) return res.sendStatus(204);
   const user = await Admin.findAll({
      where: {
         refresh_token: refreshToken,
      },
   });
   if (!user[0]) return res.sendStatus(204);
   const userId = user[0].id;
   await Users.update(
      { refresh_token: null },
      {
         where: {
            id: userId,
         },
      }
   );
   res.clearCookie('refreshToken');
   return res.sendStatus(200);
};
