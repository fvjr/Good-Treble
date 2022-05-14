const router = require('express').Router();
const { User } = require('../../server/models');

//get all users
//http://localhost:3001/api/users/
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//find single user
//http://localhost:3001/api/users/
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create a new user
//http://localhost:3001/api/users/
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.user_email = userData.email;

      //set-up for emailer function to confirm account creation, sent to creating user's emai
      const nodemailer = require('nodemailer');
      let mailOptions = {
        from: 'goodtreble316@gmail.com',
        to: userData.email,
        subject: "You've successfully signed up for Good Treble!",
        text: `Hey ${userData.name}, thanks for signing up for Good Treble! We hope you enjoy using our website. If you run into any issues using the site, please send us an email at goodtreble316@gmail.com! `,
      };

      // async..await is not allowed in global scope, must use a wrapper
      async function mailer() {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
          },
        });
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (err, data) {
          if (err) {
            console.log('Error ' + err);
          } else {
            console.log('Account creation email successfully sent.');
          }
        });
      }
      //
      // req.session.name = userData.name;
      mailer();
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//logs in user with existing credentials
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again.' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      // mailer();
      res.json({ user: userData, message: 'You have succesfully logged in.' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//log user out
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
