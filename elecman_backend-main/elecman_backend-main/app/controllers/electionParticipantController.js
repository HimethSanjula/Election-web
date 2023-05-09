const ElectionParticipant = require("../models/electionParticipantModel");

const getElectionParticipants = async (req, res) => {
    await ElectionParticipant.find({election_id:req.params.id})
      .then((electionParticipant) => {
        res.status(200).json(electionParticipant);
      })
      .catch((err) => {
        res.json(err).status(400);
      });
  };

const createElectionParticipant = (req, res) => {
  const electionParticipant = new ElectionParticipant({
    election_id: req.body.election_id,
    participants: req.body.participants,
  });
  electionParticipant
    .save()
    .then((savedDoc) => {
      res
        .status(200)
        .json({ massege: "added successful", success: true, id: savedDoc.id });
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const updateElectionParticipants = async (req, res) => {
  await ElectionParticipant.findOne({election_id:req.params.id})
    .then((elecPart) => {
      elecPart.participants = req.body.participants;
      elecPart
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

exports.createElectionParticipant = createElectionParticipant;
exports.updateElectionParticipants = updateElectionParticipants;
exports.getElectionParticipants = getElectionParticipants;