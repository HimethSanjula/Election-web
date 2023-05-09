const User = require("../models/userModel");

const getUsers = async (req, res) => {
  await User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const getUsersByParameter = async (req, res) => {
  await User.find(req.body)
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const getUser = async (req, res) => {
  await User.findById(req.params.id)
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const createUser = (req, res) => {
  const user = new User({
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    home_address: req.body.home_address,
    city: req.body.city,
    postal_code: req.body.postal_code,
    date_of_birth: req.body.date_of_birth,
    phone_number: req.body.phone_number,
    password: req.body.password,
    fingerprint_id: req.body.fingerprint_id,
  });
  user
    .save()
    .then((savedDoc) => {
      res.status(200).json({ massege: "added successful", success: true, id:savedDoc.id});
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const updateUser = async (req, res) => {
  await User.findById(req.params.id)
    .then((user) => {
      user.first_name = req.body.first_name;
      user.middle_name = req.body.middle_name;
      user.last_name = req.body.last_name;
      user.email = req.body.email;
      user.gender = req.body.gender;
      user.home_address = req.body.home_address;
      user.city = req.body.city;
      user.postal_code = req.body.postal_code;
      user.date_of_birth = req.body.date_of_birth;
      user.phone_number = req.body.phone_number;
      user.password = req.body.password;
      user.fingerprint_id = req.body.fingerprint_id;
      user
        .save()
        .then(
          res.status(200).json({ massege: "updated successful", success: true })
        )
        .catch((err) => {
          res.json(err).status(400);
        });
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const activateUser = async (req, res) => {
  await User.findById(req.params.id)
    .then((user) => {
      user.is_active = true;
      user
        .save()
        .then(
          res
            .status(200)
            .json({ massege: "activated successful", success: true })
        )
        .catch((err) => {
          res.json(err).status(400);
        });
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const deleteUser = async (req, res) => {
  await User.findById(req.params.id)
    .then((user) => {
      user.status = !user.status;
      user
        .save()
        .then(
          res.status(200).json({ massege: "deleted successful", success: true })
        )
        .catch((err) => {
          res.json(err).status(400);
        });
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.getUsersByParameter = getUsersByParameter;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.activateUser = activateUser;
