const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser');

const app = express();

const connectDB = require("./app/config/db.config");

const adminRoute = require("./app/routes/adminRouter");
const userRoute = require("./app/routes/userRouter");
const electionRoute = require("./app/routes/electionRoute");
const partyRoute = require("./app/routes/partyRoute");
const candidateRoute = require("./app/routes/candidateRoute");
const electionParticipantRoute = require("./app/routes/electionParticipantRoute");
const voteRouter = require("./app/routes/voteRouter");
var corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
};

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to election management." });
});

connectDB();

app.use("/api", adminRoute);
app.use("/api", userRoute);
app.use("/api", electionRoute);
app.use("/api", partyRoute);
app.use("/api", candidateRoute);
app.use("/api", electionParticipantRoute);
app.use("/api", voteRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
