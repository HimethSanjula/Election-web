const Admin = require("../models/adminModel");

const getAdmins = async (req, res) => {
  await Admin.find()
    .then((admins) => {
      res.status(200).json(admins);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const getAdmin = async (req, res) => {
  await Admin.findById(req.params.id)
    .then((admin) => {
      res.status(200).json(admin);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const getAdminsByParameters = async (req, res) => {
  await Admin.find(req.body)
    .then((admins) => {
      res.status(200).json(admins);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const createAdmin = (req, res) => {
  const admin = new Admin({
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
  });

  admin
    .save()
    .then((savedDoc) => {
      res.status(200).json({ massege: "added successful", success: true, id:savedDoc.id});
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const updateAdmin = async (req, res) => {
  await Admin.findById(req.params.id)
    .then((admin) => {
      admin.first_name = req.body.first_name;
      admin.middle_name = req.body.middle_name;
      admin.last_name = req.body.last_name;
      admin.email = req.body.email;
      admin.gender = req.body.gender;
      admin.home_address = req.body.home_address;
      admin.city = req.body.city;
      admin.postal_code = req.body.postal_code;
      admin.date_of_birth = req.body.date_of_birth;
      admin.phone_number = req.body.phone_number;
      admin.password = req.body.password;
      admin
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

const deleteAdmin = async (req, res) => {
  await Admin.findById(req.params.id)
    .then((deletedAdmin) => {
      deletedAdmin.status = !deletedAdmin.status;
      deletedAdmin
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

exports.getAdmins = getAdmins;
exports.getAdmin = getAdmin;
exports.getAdminsByParameters = getAdminsByParameters;
exports.createAdmin = createAdmin;
exports.updateAdmin = updateAdmin;
exports.deleteAdmin = deleteAdmin;
