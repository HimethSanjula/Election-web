const Election = require("../models/electionModel");

const getElections = async (req, res) => {
  await Election.find()
    .then((election) => {
      res.status(200).json(election);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const getElectionsByParameters = async (req, res) => {
  await Election.find(req.body)
    .then((election) => {
      res.status(200).json(election);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const getElection = async (req, res) => {
  await Election.findById(req.params.id)
    .then((election) => {
      res.status(200).json(election);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const createElection = (req, res) => {
  const election = new Election({
    election_name: req.body.election_name,
    location: req.body.location,
    date: req.body.date,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    description: req.body.description,
    image_name: req.body.image_name,
    candidate_votable: req.body.candidate_votable
  });
  election
    .save()
    .then((savedDoc) => {
      res.status(200).json({ massege: "added successful", success: true, id:savedDoc.id});
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const updateElection = async (req, res) => {
  await Election.findById(req.params.id)
    .then((election) => {
      election.election_name = req.body.election_name;
      election.location = req.body.location;
      election.date = req.body.date;
      election.start_time = req.body.start_time;
      election.end_time = req.body.end_time;
      election.description = req.body.description;
      election.image_name = req.body.image_name;
      election.candidate_votable = req.body.candidate_votable;
      election
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

const startElection = async (req, res) => {
  await Election.findById(req.params.id)
    .then((election) => {
      election.is_started = true;
      election
        .save()
        .then(
          res.status(200).json({ massege: "election started successful", success: true })
        )
        .catch((err) => {
          res.json(err).status(400);
        });
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const stopElection = async (req, res) => {
  await Election.findById(req.params.id)
    .then((election) => {
      election.is_started = false;
      election.is_ended = true;
      election
        .save()
        .then(
          res.status(200).json({ massege: "election stopped successful", success: true })
        )
        .catch((err) => {
          res.json(err).status(400);
        });
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const deleteElection = async (req, res) => {
  await Election.findById(req.params.id)
    .then((election) => {
      election.status = !election.status;
      election
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
exports.createElection = createElection;
exports.getElection = getElection;
exports.getElectionsByParameters = getElectionsByParameters;
exports.getElections = getElections;
exports.updateElection = updateElection;
exports.deleteElection = deleteElection;
exports.startElection = startElection;
exports.stopElection = stopElection;
