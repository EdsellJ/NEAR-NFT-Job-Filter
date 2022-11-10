const db = require('../models');
const User = db.users;

exports.findAll = (req, res) => {
	res.send({ message: 'Success' });
};
