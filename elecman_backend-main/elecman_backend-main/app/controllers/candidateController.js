const Candidate = require("../models/candidateModel");

const getCandidates = async (req, res) => {
  await Candidate.find()
    .then((candidate) => {
      res.status(200).json(candidate);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const getCandidatesByParameters = async (req, res) => {
    await Candidate.find(req.body)
      .then((candidate) => {
        res.status(200).json(candidate);
      })
      .catch((err) => {
        res.json(err).status(400);
      });
  };

const getCandidate = async (req, res) => {
  await Candidate.findById(req.params.id)
    .then((candidate) => {
      res.status(200).json(candidate);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const createCandidate = (req, res) => {
  const candidate = new Candidate({
    candidate_name: req.body.candidate_name,
    candidate_description: req.body.candidate_description,
    candidate_image: req.body.candidate_image,
    candidate_number: req.body.candidate_number,
    party_id: req.body.party_id,
  });
  candidate
    .save()
    .then((savedDoc) => {
      res.status(200).json({ massege: "added successful", success: true, id:savedDoc.id});
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const updatecandidate = async (req, res) => {
  await Candidate.findById(req.params.id)
    .then((candidate) => {
      candidate.candidate_name = req.body.candidate_name;
      candidate.candidate_description = req.body.candidate_description;
      candidate.candidate_image = req.body.candidate_image;
      candidate.candidate_number = req.body.candidate_number;
      candidate.party_id = req.body.party_id;
      candidate
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

const deleteCandidate = async (req, res) => {
  await Candidate.findById(req.params.id)
    .then((candidate) => {
      candidate.status = !candidate.status;
      candidate
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

exports.getCandidates = getCandidates;
exports.getCandidate = getCandidate;
exports.getCandidatesByParameters = getCandidatesByParameters;
exports.createCandidate = createCandidate;
exports.updatecandidate = updatecandidate;
exports.deleteCandidate = deleteCandidate;
