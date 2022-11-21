const db = require("../models");
const sizes = require("../database/companySize.json");

module.exports = async () => {
	const CompanySize = db.companySizes;

	for (let size of sizes) {
		const companySize = new CompanySize({
			size: size,
		});
		await companySize.save();
	}

	console.log("Company Size Seeds Generated Successfully!");
};
