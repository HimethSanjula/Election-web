const mongoose = require("mongoose");

const connectDB = () => mongoose
  .connect("mongodb+srv://election:election1973@election.tggysff.mongodb.net/ElectionManagement?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology: true
  })
  .then(() => console.log("💻 Mondodb Connected"))
  .catch(err => console.error(err));

module.exports = connectDB;

// module.exports = {
//     url: "mongodb+srv://election:election1973@election.tggysff.mongodb.net/ElectionManagement?retryWrites=true&w=majority"
// };