const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const parser = new ReadlineParser({ delimiter: "\r\n" });

const config = {
    path: "COM5",
    baudRate: 9600,
    dataBits: 8,
    parity: "none",
    stopBits: 1,
    autoOpen: false,
};

const port = new SerialPort(config);

port.open((err) => {
    if (err) {
        console.log("error opening port " + err.message);
    } else {
        console.log("module connected");
    }
});

port.pipe(parser);

const enrollUser = async(req, res) => {
    const fingerid = JSON.stringify(req.body.fingerid);
    var portData = [];
    port.write("e", (err) => {
        if (err) {
            console.log("error msge : " + err.messages);
        }
    });
    parser.on("data", (data) => {
        portData.push(data.toString());
    });

    setTimeout(function() {
        port.write(fingerid, (err) => {
            if (err) {
                console.log("error msge : " + err.messages);
            }
        });
    }, 2000);
    setTimeout(function() {
        console.log(portData[4]);
        res.json(portData[4]).status(200);
    }, 10000);
};

const scanUser = async(req, res) => {
    var portData = [];
    port.write("s", (err) => {
        if (err) {
            console.log("error msge : " + err.messages);
        }
    });
    parser.on("data", (data) => {
        portData.push(data.toString());
    });

    setTimeout(function() {
        console.log(portData[3]);
        res.json(portData[3]).status(200);
    }, 5000);
};

exports.enrollUser = enrollUser;
exports.scanUser = scanUser;