const fs = require('fs');
const os = require('os');

addZero = (num) => {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

module.exports = (req, res, next) => {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const {method, url} = req;
    const userAgent = req.get("user-agent");

    let data = `${addZero(hour)}:${addZero(minutes)}:${addZero(seconds)} ${method}: ${url} user-agent: ${userAgent}`;
    console.log(data);

    fs.appendFile("server.log", data + os.EOL, (err) => {
        if (err) throw err;
    });
    next();
};