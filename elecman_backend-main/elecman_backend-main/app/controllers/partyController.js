const Party = require("../models/partyModel");

const getParties = async (req, res) => {
  await Party.find()
    .then((parties) => {
      res.status(200).json(parties);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const getPartiesByParameters = async (req, res) => {
  await Party.find(req.body)
    .then((parties) => {
      res.status(200).json(parties);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const getParty = async (req, res) => {
  await Party.findById(req.params.id)
    .then((parties) => {
      res.status(200).json(parties);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const createParty = (req, res) => {
  const party = new Party({
    party_name: req.body.party_name,
    party_description: req.body.party_description,
    party_banner: req.body.party_banner,
    party_icon: req.body.party_icon,
    party_color: req.body.party_color,
    election_id: req.body.election_id,
  });
  party
    .save()
    .then((savedDoc) => {
      res.status(200).json({ massege: "added successful", success: true, id:savedDoc.id});
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const updateParty = async (req, res) => {
  await Party.findById(req.params.id)
    .then((party) => {
      party.party_name = req.body.party_name;
      party.party_description = req.body.party_description;
      party.party_banner = req.body.party_banner;
      party.party_icon = req.body.party_icon;
      party.party_color = req.body.party_color;
      party.election_id = req.body.election_id;
      party
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

const deleteParty = async (req, res) => {
  await Party.findById(req.params.id)
    .then((party) => {
      party.status = !party.status;
      party
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

exports.createParty = createParty;
exports.getParties = getParties;
exports.getPartiesByParameters = getPartiesByParameters;
exports.getParty = getParty;
exports.updateParty = updateParty;
exports.deleteParty = deleteParty;
