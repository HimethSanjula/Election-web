const partyVote = require("../models/partyVoteModel");
const candidateVote = require("../models/candidateVoteModel");

const partyVoteadd = async (req, res) => {
  const vote = new partyVote({
    electionId: req.body.elecId,
    partyId: req.body.partyId,
    userId: req.body.userId,
  });
  vote
    .save()
    .then((savedDoc) => {
      res.status(200).json({
        massege: "vote added successful",
        success: true,
        id: savedDoc.id,
      });
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const candidateVoteAdd = async (req, res) => {
  const vote = new candidateVote({
    electionId: req.body.elecId,
    partyId: req.body.partyId,
    candidateId: req.body.candidateId,
    userId: req.body.userId,
  });
  vote
    .save()
    .then((savedDoc) => {
      res.status(200).json({
        massege: "vote added successful",
        success: true,
        id: savedDoc.id,
      });
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const candidateVoteResults = async (req, res) => {
  await candidateVote
    .find(req.body)
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const candidateVoteResultsByCount = async (req, res) => {
  await candidateVote
    .aggregate([
      {
        $match: {
          electionId: req.body.electionId,
          partyId: req.body.partyId,
        },
      },
      {
        $group: {
          _id: {
            candidateId: "$candidateId",
          },
          count: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
    ])
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const partyVoteResults = async (req, res) => {
  await partyVote
    .find(req.body)
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

const partyVoteResultsByCount = async (req, res) => {
  await partyVote
    .aggregate([
      {
        $match: {
          electionId: req.body.electionId,
        },
      },
      {
        $group: {
          _id: {
            partyId: "$partyId",
          },
          count: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
    ])
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
};

exports.partyVoteadd = partyVoteadd;
exports.candidateVoteAdd = candidateVoteAdd;
exports.candidateVoteResults = candidateVoteResults;
exports.partyVoteResults = partyVoteResults;
exports.partyVoteResultsByCount = partyVoteResultsByCount;
exports.candidateVoteResultsByCount = candidateVoteResultsByCount;
