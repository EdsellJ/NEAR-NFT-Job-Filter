const db = require('../models');
const Company = db.companies;

exports.register = async (req, res) => {};

exports.getCompanyTypes = async (req, res) => {
	res.status(200).json([
		{ type: 'IT Service', _id: 0 },
		{ type: 'Web Development', _id: 1 },
	]);
};

exports.getCompanySizes = async (req, res) => {
	res.status(200).json([
		{ size: '1 - 10', _id: 0 },
		{ size: '11 - 50', _id: 1 },
		{ size: '51 - 200', _id: 2 },
		{ size: '200 +', _id: 3 },
	]);
};
