const express = require("express");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const router = express.Router();

const jwt = require('jsonwebtoken')
router.post("/register", async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.body.email });
    if (user) {
      res.json({ error: "cette addresse email est deja utilisé" });
    } else {
      let newUser = new userModel(req.body);
      //------------------
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          cd
          console.log(err);
        }
        bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
          if (err) {
            console.log(err);
          }
          newUser.password = hashedPassword;
          newUser.save();
          res.json({ msg: "compte cree avec succes ! " });
        });
      });
    }
  } catch (err) {
    res.json(err);
  }
});

router.post('/login', async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  //cas 1 email n'existe    pas 
  if (!user) {
    res.json({ error: "cette addresse email n'existe pas ! " });
  } else {
    bcrypt.compare(req.body.password, user.password, (err, isKifkif) => {
      if (isKifkif) {
        const payload = {
          "_id": user._id,
          "email": user.email,
        }

        let token = jwt.sign(payload, "secret", { expiresIn: 3600 })

        res.json({ msg: "connecté avec succes ! ", token: token, user: user })
      } else {
        // cas 2 mot de passe incorrecte 
        res.json({ error: "veuillez verifier votre mot de passe " })
      }
    })
  }


})


module.exports = router;
// ahmed123 == $2b$10$247CVyz6QZnBpY7Oo65OdukiMO.ce8GPIbg4Yas4dpCec.bXBJIH6
